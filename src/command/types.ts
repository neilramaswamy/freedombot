import { Message } from 'discord.js'
import { CommandHandler } from './handler';

export interface Command {
    name: string
    value: number
    handler: CommandHandler<any>
}

export class CommandRequest {
    constructor(private _command: Command, private _args: string[], private _msg: Message) {}

    get command() { return this._command }
    get args() { return this._args }
    get msg()  { return this._msg  }
}

export class ParseError {
    constructor(private _error: string, private _msg: Message) {}

    get error() { return this._error }
    get msg() { return this._msg }
}

export class ParseResult {
    constructor(private _name: string, private _args: string[], private _msg: Message) {}

    get name() { return this._name }
    get args() { return this._args }
    get msg()  { return this._msg  }
}

export class LayerError {
    constructor(private _error: string, private _cmd: CommandRequest) {}

    get error() { return this._error }
    get cmd() { return this._cmd }
}

export class DefaultDatabaseResult {
    /**
     * 
     * @param _val a value returned as a result of a database transaction. This
     * can represent somebody's new score as a result of running a command.
     */
    constructor(private _val: number, private _cmd: CommandRequest) {}

    get val() { return this._val }
    get cmd() { return this._cmd }
}