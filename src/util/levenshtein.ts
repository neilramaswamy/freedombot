import { legend } from '../commands'

/**
 * Return all the commands in the global legend within `threshold` steps
 * of `query`, using the Levenshtein distance.
 * 
 * @param query the name of the command a user tried to type
 * @param threshold the maximum Levenshtein distance between query and a
 * particular command.
 */
export function findSimilarCommands(query: string, threshold: number) {
    let hits: string[] = []

    Object.keys(legend).forEach(cmd => {
        if (levenshtein(query, cmd) <= threshold) hits.push(cmd)
    })

    return hits
}

/**
 * Levenshtein implementation from RosettaCode:
 * https://rosettacode.org/wiki/Levenshtein_distance#JavaScript
 */
function levenshtein(a: string, b: string) {
    let t = [], u, i, j, m = a.length, n = b.length;
    if (!m) { return n; }
    if (!n) { return m; }
    for (j = 0; j <= n; j++) { t[j] = j; }
    for (i = 1; i <= m; i++) {
      for (u = [i], j = 1; j <= n; j++) {
        u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
      } t = u;
    } 
    
    //@ts-ignore
    return u[n];
}