import { Message } from 'discord.js'
import { CommandRequest } from './classes';
import Config from './config'

export class ParseError {
    constructor(private _error: string, private _msg: Message) {}

    get error() { return this._error }
    get msg() { return this._msg }
}

/**
 * Before we even parse a message, we need to ensure that it is something worth
 * parsing. We should only be parsing messages sent from the progress reporting
 * channel and that are sent from users, not bots.
 */
export function prevalidate(msg: Message): boolean {
    const correctChannel = msg.channel.id === Config.channels.progress_reporting
    const sentFromUser = !msg.author.bot

    return correctChannel && sentFromUser
}

export function parse(msg: Message): CommandRequest | ParseError {
    const normalized = msg.content.trim()
    if (!normalized.startsWith('!')) {
        return new ParseError("bot commands must start with a !", msg)
    }

    const parts = normalized.split(' ')
    if (parts.length === 0) {
        return new ParseError("can't understand empty commands.", msg)
    } else {
        const name = parts[0].substr(1) // remove the leading exclamation
        const args = parts.splice(1)

        return new CommandRequest(name, args, msg)
    }
}