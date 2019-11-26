import { Message, RichEmbed } from 'discord.js'
import { listCommands } from './discord/embeds';

export class CommandRequest {
    constructor(
        private _name: string, 
        private _args: string[], 
        private _msg: Message) {}

    get name() { return this._name }
    get args() { return this._args }
    get msg() { return this._msg }
}

export abstract class CommandHandler {
    abstract evaluate(req: CommandRequest): void
}

abstract class ActionHandler extends CommandHandler {
    constructor(
        protected name: string, 
        protected points: number, 
        protected responder: (...val: any[]) => string) { super() } 
}

export class ListClass extends CommandHandler {
    evaluate(req: CommandRequest) { 
        const list = listCommands()
        req.msg.channel.send(list) 
    }
}

export class DailyCommandClass extends ActionHandler {
    evaluate(req: CommandRequest): void {
        const senderID = req.msg.author.id
        if (this.ensureEnoughTimeElapsed(senderID, this.name)) {
            const result = this.writeToDatabase(senderID, this.name)
            const responseText = `${req.msg.author}, ${this.responder(result)}`

            const embed = this.generateEmbed(responseText)
            req.msg.channel.send(embed)
        } else {
            req.msg.reply("you've already ran that command today.")
        }
    }

    generateEmbed(responseText: string): RichEmbed {
        return new RichEmbed()
            .setColor('#2ecc71')
            .setTitle('Daily Discipline Recorded')
            .setDescription(responseText)
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

export class SetDayCommandClass extends ActionHandler {
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