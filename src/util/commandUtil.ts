import { dailyCommandData } from '../data/daily'

export function getDescriptionFromInvocation(invocation: string): string {
    const keys = Object.keys(dailyCommandData)

    for (let key of keys) {
        const info = dailyCommandData[key]

        if (info.invocation === invocation) return info.description
    }

    return ''
}