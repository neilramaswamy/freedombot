/**
 * These commands are more informational in nature.
 */

/**
 * Represents the data/metadata regarding admin bot commands.
 */

export type InfoCommand = {
    name: string
    invocation: string
    description: string
}

export const infoCommandData: {[key: string]: InfoCommand} = {
    getDay: {
        name: "Get your day",
        invocation: "getday",
        description: "Retrieve the day that you're currently on."
    },
    getScore: {
        name: "Get your score",
        invocation: "getscore",
        description: "Retrieve your score and title."
    },
    // TODO: the arr
    motivation: {
        name: "Get some motivation",
        invocation: "motivation",
        description: "Fetch an inspirational Reddit post or motivational graphic."
    },
    ranks: {
        name: "Retrieve server ranks",
        invocation: "ranks",
        description: "Get a list of the ranks and their associated scores for The Freedom Academy."
    },
    leaderboard: {
        name: "Retrieve The Freedom Academy's Leaderboard",
        invocation: "leaderboard",
        description: "Retrieve the score and relative rank of all of the members of The Freedom Academy."
    },
    list: {
        name: "List the bot commands",
        invocation: "list",
        description: "List all the commands that the bot currently supports."
    }
}