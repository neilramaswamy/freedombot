import { dailyCommandInfo } from '../daily'

export function getDescriptionFromInvocation(invocation: string): string {
    const keys = Object.keys(dailyCommandInfo)

    for (let key of keys) {
        const info = dailyCommandInfo[key]

        if (info.invocation === invocation) return info.description
    }

    return ''
}