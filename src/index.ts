import * as Discord from 'discord.js';
import { legend } from './commands';
import * as Config from './config/config';
import { sendSuggestions } from './discord/embeds';
import { findSimilarCommands } from './util/levenshtein';
import { parse, ParseError, prevalidate } from './util/parser';

const client = new Discord.Client()
client.login(Config.default.auth.discord)
client.once('ready', () => { console.log("Ready to help bring Freedom!") })

client.on('message', (msg: Discord.Message) => {
    if (!prevalidate(msg)) return

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
})

