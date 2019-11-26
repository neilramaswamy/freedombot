import { Message } from 'discord.js'

/**
 * CommandRequest is the wrapper that encapsulates the data associated with
 * a given call to a command. It is created by parsing a user's raw message, and
 * it is routed to CommandHandlers, which use its data to undertake the
 * appropriate database transactions and send back a response.
 */
export class CommandRequest {
    constructor(
        private _name: string, 
        private _args: string[], 
        private _msg: Message) {}

    get name() { return this._name }
    get args() { return this._args }
    get msg() { return this._msg }
}