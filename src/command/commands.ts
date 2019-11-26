import { CommandHandler } from './handler'
import { DefaultDatabaseResult, Command } from './types';
import { defaultValidator, adminValidator } from './validator'
import { defaultDbHandler } from './db'
import { defaultDiscordHandler } from './discord'

// This CommandHandler should be used for handling commands that take no
// arguments, need a timestamp to be recorded, and produce a simple reply.
const DefaultCommandHandler = new CommandHandler<DefaultDatabaseResult>(
    defaultValidator, 
    defaultDbHandler, 
    defaultDiscordHandler
)

const AdminCommandHandler = new CommandHandler<DefaultDatabaseResult>(
    adminValidator,
    defaultDbHandler,
    defaultDiscordHandler
)

const commands: {[key: string]: Command} = {
    'affirmation': {
        name: 'affirmation',
        value: 0.5,
        handler: DefaultCommandHandler,
    },
    'cold_shower': {
        name: "cold_shower",
        value: 0.5,
        handler: DefaultCommandHandler
    },
    'meditation': {
        name: "meditation",
        value: 0.15,
        handler: DefaultCommandHandler
    }
}

export default commands

