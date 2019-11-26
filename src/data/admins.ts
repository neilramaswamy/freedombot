/**
 * Represents the data/metadata regarding admin bot commands.
 */

export type AdminCommand = {
    name: string
    invocation: string
    description: string
}

export const adminCommandData: {[key: string]: AdminCommand} = {
    modifyScore: {
        name: "Modify score",
        invocation: "admin_modifyscore",
        description: "To change someone's score, run **!admin_modifyscore <username> <new score>**."
    },
    viewScore: {
        name: "View score",
        invocation: "admin_viewscore",
        description: "To view someone's score, run **!admin_viewscore <username>**."
    },
    viewStreak: {
        name: "View streak",
        invocation: "admin_viewstreak",
        description: "To view someone's streak, run **!admin_viewstreak <username>**."
    },
    purgeList: {
        name: "Generate purge list",
        invocation: "admin_purgelist",
        description: "To get a list of users inactive for the past *n* days, run **!admin_purgelist <days inactive>**."
    },
    purgeWarn: {
        name: "Send purge warnings",
        invocation: "admin_purgelist",
        description: "To DM a warning to users inactive for the past *n* days, run **!admin_purgewarn <days inactive>**."
    },
    purgeRemove: {
        name: "Remove inactive users",
        invocation: "admin_purgeremove",
        description: "To remove users inactive for the past *n* days, run **!admin_purgeremove <days inactive>**."
    }
}