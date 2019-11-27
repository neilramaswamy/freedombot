import { adminCommandLegend, dailyCommandLegend, infoCommandLegend } from '../commands';
import { buildEmbed, listCommands } from '../discord/embeds';
import { getCommandFromInvocation } from '../util/commandUtil';
import { AbstractAdminViewHandler, AwardHandler, InformationHandler } from './abstract';
import { CommandRequest } from './request';

export class DailyDisciplineHandler extends AwardHandler {
    evaluate(req: CommandRequest): void {
        const senderID = req.msg.author.id
        if (this.ensureEnoughTimeElapsed(senderID, this.name)) {
            const result = this.writeToDatabase(senderID, this.name)
            const embed = 
                buildEmbed("S", "Daily Discipline Recorded", senderID, this.responder(result))

            req.msg.channel.send(embed)
        } else {
            const embed = 
                buildEmbed("E", "Time-Elapsed Error", senderID, "you already ran that command for today.")
            
            req.msg.channel.send(embed)
        }
    }

    ensureEnoughTimeElapsed(id: string, field: string): boolean {
        // do a database lookup for user `id` and field `field`
        return true
    }

    writeToDatabase(id: string, field: string): number {
        // Write to the database, getting back the new score
        return 5
    }
}

export class SetDayHandler extends AwardHandler {
    evaluate(req: CommandRequest): any {
        // ENSURE THAT THERE IS AN ARG
        // call to DB, get back new points
        const targetDay = Number(req.args[0])

        if (!targetDay || isNaN(targetDay)) {
            return req.msg.reply("couldn't understand the day you're trying to set.")
        }

        if (!this.isNatural(targetDay)) {
            return req.msg.reply("you can only set your day to a positive integer.")
        } else {
            const senderID = req.msg.author.id
            if (this.isAllowed(senderID, targetDay)) {
                const result = this.writeToDatabase(senderID, targetDay)
                const responseText = this.responder(result)

                req.msg.reply(responseText)
            } else {
                req.msg.reply("you can't set your score to that day.")
            }
        }

    }

    isNatural(n: number) {
        return Number.isInteger(n) && (n >= 0)
    }

    isAllowed(id: string, targetDay: number): boolean {
        // TODO: validate that the day is > the current day on file.
        // Otherwise, throw an error.
        console.log("TODO: Ensure that the day is valid.")
        return true;
    }

    writeToDatabase(id: string, value: number): number {
        console.log("TODO: must write to the db!")
        return 5
    }
}

// ListHandler is the CommandHandler for the !list command
export class ListHandler extends InformationHandler {
    evaluate(req: CommandRequest) {
        const dailyCommandsEmbed = listCommands(
            'Daily Disciplines', Object.keys(dailyCommandLegend))
        const infoCommandsEmbed = listCommands(
            'Informational Commands', Object.keys(infoCommandLegend))

        req.msg.channel.send(dailyCommandsEmbed)
        req.msg.channel.send(infoCommandsEmbed)

        if (true) {
            const adminCommandsEmbed = listCommands('Admin Commands', Object.keys(adminCommandLegend))
            req.msg.channel.send(adminCommandsEmbed)
        }
    }
}

export class AdminViewHandler extends AbstractAdminViewHandler {
    evaluator(req: CommandRequest) {
        const targetUser = req.args[0]

        if (!targetUser) {
            const embed = buildEmbed(
                "E", 
                "User Required", 
                req.msg.author.id,
                getCommandFromInvocation(req.name).description.toLowerCase()
            )
            
            req.msg.channel.send(embed)
        } else {
            console.log(`TODO: Get ${targetUser}'s ${this._field} value instead of 5!`)
            const value = 5 // getField(targetUser, field)
            const embed = buildEmbed(
                "S",
                "Score Report",
                req.msg.author.id,
                `**${targetUser}** has a ${this._field} of ${value}.`
            )

            req.msg.channel.send(embed)
        }
    }
}