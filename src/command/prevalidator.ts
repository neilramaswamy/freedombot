import { Message } from "discord.js";
import Config from "../config";

/**
 * Before we even parse a message, we need to ensure that it is something worth
 * parsing. We should only be parsing messages sent from the progress reporting
 * channel and that are sent from users, not bots.
 */
export function prevalidate(msg: Message): boolean {
    const correctChannel = msg.channel.id === Config.channels.progress_reporting
    const sentFromUser = !msg.author.bot

    return correctChannel && sentFromUser
}