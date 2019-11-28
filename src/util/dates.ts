export function getHourDifference(a: Date, b: Date): number {
    return Math.abs(a.getTime() - b.getTime()) / 3600000
}