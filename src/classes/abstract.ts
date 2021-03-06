import { CommandRequest } from './request'
import { buildEmbed } from '../discord/embeds';

/**
 * Every command for this bot has an associated handler class. Every handler
 * class needs to take in a CommandRequest, and we enforce this by making every
 * handler fulfill the evaluate method of the CommandHandler abstract class.
 */
export abstract class CommandHandler {
    abstract evaluate(req: CommandRequest): void
}

/**
 * The majority of commands award users with points and give some sort of 
 * feedback acknowledging that they (the command) has been successfully run. We
 * pass the feedback function as `responder` instead of making a new class for 
 * each command to help reduce redundancy.
 */
export abstract class AwardHandler extends CommandHandler {
    constructor(
        protected name: string, 
        protected points: number, 
        protected responder: (...val: any[]) => string) { super() } 
}

/**
 * Some commands are unique enough that we can't exactly fit them into a nicely
 * specified class. Those functions also happen to be able to be run using only
 * user input. These types of commands generally provide information, hence the
 * name InformationHandler. Classes implementing this abstract class just need
 * to implement the `evaluate` function.
 * 
 * (Note: the reason for extending CommandHandler with no body was to provide
 * better readability. We want to separate the core idea of a CommandHandler
 * from the different versions of handlers, i.e. AwardHandlers vs
 * InformationHandlers.)
 */
export abstract class InformationHandler extends CommandHandler {}


export abstract class AbstractAdminHandler extends CommandHandler {
    abstract evaluator(req: CommandRequest): void

    evaluate(req: CommandRequest) {
        const senderID = req.msg.author.id
        if (senderID) { // TODO: Ensure isAdmin.
            this.evaluator(req)
        } else {
            const embed = buildEmbed(
                "E", 
                "Permission Denied", 
                senderID, 
                `the ${req.name} command is only available for admins.`
            )

            req.msg.channel.send(embed)
        }
    }
}

/**
 * AdminViewHandler is a handler meant for admin-only commands that pertain to
 * looking up a specific user's data in the database.
 */
export abstract class AbstractAdminViewHandler extends AbstractAdminHandler {
    constructor(protected _field: string) { super() }

    get field() { return this._field }
}