/**
 * Woohoo! You want to contribute. If you want to spin up this bot on your own
 * server, feel free to plug in values below for your own test server. If you 
 * want to develop for the Freedom Academy with me, I can add you to my
 * development Discord server. Just message me on Discord at entersudonym#0190.
 * 
 * Fields marked REQUIRED are used in the code; not having them will make the
 * bot not work as expected!
 */
export default {
    auth: {
        discord: 'your-discord-bot-token-here', // REQUIRED
        db: {
            name: 'name-of-your-mysql-db', // REQUIRED
            username: 'super-fancy-username', // REQUIRED
            password: 'super-secret-not-obvious-password' // REQUIRED
        }
    },
    channels: {
        
        progress_reporting: 'channel-id-needed-here', // REQUIRED
        new_comers: 'another-channel-id-here'
    },
    roles: {
        // For checking whether someone can run commands.
        admin: 'the-id-of-the-admin-role' // REQUIRED
    },
    users: {
        tech_director: 'the-id-of-the-leader-of-bot-dev',
        server_director: 'the-person-in-charge-of-server'
    }
}