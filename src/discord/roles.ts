import { GuildMember } from "discord.js";
import C from '../config/config'

/**
 * Management of Discord roles should happen in here. When somebody levels up,
 * we should send them, as well as the moderator channel, a level-up message.
 */

export function isAdmin(user: GuildMember) {
    return user.roles.has(C.roles.admin)
}