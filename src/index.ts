import * as Discord from 'discord.js';
import { legend } from './commands';
import C from './config/config';
import { sendSuggestions, buildEmbed, tagU } from './discord/embeds';
import { findSimilarCommands } from './util/levenshtein';
import { parse, ParseError, prevalidate } from './util/parser';
import { createUser, deleteUser } from './db/utils'

export const client = new Discord.Client()
client.login(C.auth.discord)
client.once('ready', () => { console.log("Ready to help bring Freedom!") })

client.on('message', async (msg: Discord.Message) => {
    if (!prevalidate(msg)) return
    
    try {
        const parseResult = parse(msg)
        if (parseResult instanceof ParseError) {
            return msg.reply(parseResult.error)
        }

        const targetCommand = parseResult.name
        const handler = legend[targetCommand]
        if (!handler) {
            const similarCommands = findSimilarCommands(targetCommand, 3)
            const recommendationEmbed = sendSuggestions(similarCommands)
            
            return msg.channel.send(recommendationEmbed)
        }

        handler.evaluate(parseResult)
    } catch(e) {
        const techie = tagU(C.users.tech_director)
        // TODO: Refactor these types of long, static strings into a file.
        const embed = buildEmbed(
            "E",
            "Bot Error",
            msg.author.id,
            `unfortunately, there was an error running that bot command. If this is unexpected, please notify our tech-director, ${techie}.`
        )

        msg.channel.send(embed)
    }
})

client.on('guildMemberAdd', (member: Discord.GuildMember) => {
    // TODO: Send welcome message
    console.log("TODO: Send welcome message.")
    createUser(member.id)
})

client.on('guildMemberRemove', (member: Discord.GuildMember) => {
    // TODO: Notify the moderator chat channel.
    console.log("TODO: Send leave-server message.")
    deleteUser(member.id)
})