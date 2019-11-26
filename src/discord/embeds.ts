import * as Discord from 'discord.js'
import { getDescriptionFromInvocation } from '../util/commandUtil'
import { dailyCommandInfo } from '../daily'
/**
 * This module provides support for generating "rich" content for Discord.
 * Generally, functions in here should take some sort of raw data and produce
 * pretty output. 
 * 
 * Functions here don't have to do general tasks; rather, they can serve to be
 * purely helpers to specific commands. Think of this file as a place to which
 * you can refactor code pertaining to producing pretty output. Make sure to
 * comment each function with the handler/command for which it is needed. 
 */

const SUCCESS_COLOR = '#2ecc71' // green
const ERROR_COLOR = '#e74c3c'  // red
const INFO_COLOR = '#3498db'  // blue

/**
 * Renders a list of valid commands as a list of fields in an embed. This
 * function is called when no matching CommandHandler can be found, which
 * happens at the top-level (i.e. index.ts).
 * @param suggestions a list of valid commands
 */
export function sendSuggestions(suggestions: string[]): Discord.RichEmbed {
    let description = suggestions.length === 0 
        ? "No matching command could be found."
        : "No matching command could be found, but here are some suggestions."
    let baseEmbed = new Discord.RichEmbed()
        .setColor(INFO_COLOR)
        .setTitle('No commands found')
        .setDescription(description)

    for (let suggestion of suggestions) {
        baseEmbed.addField(suggestion, getDescriptionFromInvocation(suggestion))
    }

    return baseEmbed
}

/**
 * This function is the essence of the list command. Right now, it just renders
 * the daily commands, but as a TODO, it should be extended to include all the
 * available bot commands.
 */
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

/**
 * Builds an embed using the specified parameters. This function is most likely
 * to be used if we need to send simple (but pretty!) responses to users about
 * the output of commands they ran.
 * @param status the success status of the message: success, error, or info.
 * @param title the title of the embed
 * @param id the id of the user to tag in the embed
 * @param description the description to follow the user tag
 */
export function buildEmbed(
    status: 'S' | 'I' | 'E',
    title: string, 
    id: string, 
    description: string): Discord.RichEmbed {
    let color = ''
    switch (status) {
        case 'S':
            color = SUCCESS_COLOR
            break
        case 'I':
            color = INFO_COLOR
            break
        case 'E':
            color = ERROR_COLOR
    }

    return new Discord.RichEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(`${tagU(id)}, ${description}`)
}

/**
 * When the output of this function is sent to Discord, it will be rendered
 * as a clickable channel. (Note: you can find a channel's id by looking at the
 * last part of the pathname when you're on that channel.)
 * @param id the channel id to tag
 */
export function tagC(id: string): string {
    return `<#${id}>`
}

/**
 * When the output of this function is sent to Discord, it will render as a 
 * clickable user. However, it will not tag the user if used in an embed. To
 * find a user's id, you can send a message where you tag them, prepend a 
 * backslash to the message, and then send the message.
 * @param id the id of the user to render
 */
export function tagU(id: string): string {
    return `<@${id}>`
}