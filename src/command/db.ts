import { CommandRequest, DefaultDatabaseResult } from "./types";

export function defaultDbHandler(cmd: CommandRequest): DefaultDatabaseResult {
    // Do some database transaction here, recording the time that this is happening
    console.log('TODO: Write to the database here!')
    return new DefaultDatabaseResult(5, cmd)
}