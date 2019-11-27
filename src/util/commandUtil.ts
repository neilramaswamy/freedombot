import { AdminCommand, adminCommandData } from '../data/admins';
import { DailyCommand, dailyCommandData } from '../data/daily';
import { InfoCommand, infoCommandData } from '../data/info';

export function getCommandFromInvocation(invocation: string): DailyCommand | InfoCommand | AdminCommand{
    const commandData = {...dailyCommandData, ...infoCommandData, ...adminCommandData}
    const keys = Object.keys(commandData)

    for (let key of keys) {
        const info = commandData[key]

        if (info.invocation === invocation) {
            return info
        }
    }

    throw new Error(`Couldn't find a command based off of the invocation ${invocation}`)
}