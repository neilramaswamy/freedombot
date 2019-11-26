import * as Discord from "discord.js";
import commands from './command/commands';
import { parse } from "./command/parser";
import { prevalidate } from "./command/prevalidator";
import { CommandRequest, ParseError } from "./command/types";
import * as Config from './config';
import { findSimilarCommands } from "./util/levenshtein";

const client = new Discord.Client()
client.login(Config.default.auth.discord)
client.once('ready', () => { console.log("Ready to help bring Freedom!") })

client.on('message', (msg: Discord.Message) => {
    // Ensure that we only evaluate progress-reporting messages
    const shouldConsider = prevalidate(msg)
    if (!shouldConsider) return;

    const parseResult = parse(msg)
    if (parseResult instanceof ParseError) {
        return parseResult.msg.reply(parseResult.error)
    }

    const commandData = commands[parseResult.name]
    if (!commandData) {
        const similarCommands = findSimilarCommands(parseResult.name, 3)
        return parseResult.msg.reply(`no command called ${parseResult.name} could be found, but did you mean any of: ${similarCommands.toString()}`)
    }
    
    const commandRequest = new CommandRequest(commandData, parseResult.args, parseResult.msg)
    commandData.handler.evaluate(commandRequest)
})

