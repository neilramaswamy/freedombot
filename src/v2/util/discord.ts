import * as Discord from 'discord.js'
import { getDescriptionFromInvocation } from '../util/commandUtil'
import { dailyCommandInfo } from '../daily'

const SUCCESS_COLOR = '#2ecc71'
const ERROR_COLOR = '#e74c3c'
const INFO_COLOR = '#3498db'

export function sendSuggestions(suggestions: string[]): Discord.RichEmbed {
    let baseEdmbed = new Discord.RichEmbed()
        .setColor(INFO_COLOR)
        .setTitle('No commands found')
        .setDescription("No matching command could be found, but here are some suggestions.")

    for (let suggestion of suggestions) {
        baseEdmbed.addField(suggestion, getDescriptionFromInvocation(suggestion))
    }

    return baseEdmbed
}

export function listCommands(): Discord.RichEmbed {
    let baseEmbed = new Discord.RichEmbed()
        .setColor(INFO_COLOR)
        .setTitle('Available commands')
    
    const commands = Object.keys(dailyCommandInfo)
    for (let commandName of commands) {
        const command = dailyCommandInfo[commandName]
        baseEmbed.addField(command.name, command.description)
    }

    return baseEmbed
}

export function tag(id: string): string {
    return `<#${id}>`
}