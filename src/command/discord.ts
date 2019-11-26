import { DefaultDatabaseResult } from "./types";

export function defaultDiscordHandler(dbResult: DefaultDatabaseResult): void {
    const newScore = dbResult.val
    console.log('TODO: Generate some fancy embed here, and assign roles!')
    dbResult.cmd.msg.reply(`good job running ${dbResult.cmd.command.name}. It earned you ${dbResult.cmd.command.value} points. Your new score is ${newScore}.`)
}