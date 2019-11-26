import { Message } from 'discord.js'
import { ParseError, ParseResult } from './types';

export function parse(msg: Message): ParseResult | ParseError {
    const normalized = msg.content.trim()
    if (!normalized.startsWith('!')) {
        return new ParseError("Bot commands must start with a !.", msg)
    }

    const parts = normalized.split(' ')
    if (parts.length === 0) {
        return new ParseError("Can't understand empty commands.", msg)
    } else {
        const name = parts[0].substr(1) // remove the leading exclamation
        const args = parts.splice(1)

        return new ParseResult(name, args, msg)
    }
}