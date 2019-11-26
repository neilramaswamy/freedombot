# The Freedom Bot

Wowzers! You've found the source code for The Freedom Bot. Woohoo! Good habits. The technical design descriptions do assume that you already know some of the bot lingo.

## Technical Design of Commands

From receiving a message to sending a response, the bot has four layers in its command processing structure. 

Although all commands have these four steps in common, commands can be handled at differently at different steps. For example, the `!coldshower` validator just checks date, but `!admin_purge` needs to be validated by checking permissions. Thus, because of this high-level similarity but differentiation at low levels, we represent each layer as an abstract class. Default implementors exist to fulfill the layer requirements for the majority of commands.

1. **Parsing**: a raw message is turned into structured data. This structured data includes the name of the command, its arguments, and the user object of the person sending the command.
2. **Validation**: the structured data from parsing is evaluated to see whether subsequent action should be taken. Commands that don't exist should are caught here; user's trying to run admin-only commands have their permissions checked. 
3. **Database Handler**: If validation is successful, database transactions happen (otherwise, an error is sent to the user via step 4.) That is, updating points, last-used timestamps, etc.
4. **Discord Handler**: If there was an error in any previous step, it gets sent back here. Otherwise, the Discord handler takes the updated user from step 3 and performs tasks such as updating roles, notifying moderators of user setbacks/progress, and responding to users, saying that the command was successfully run. It should take structured data from step 3 and produce the appropriate responses.

## Event Handlers

In addition to handling commands, the bot needs to respond to certain changes in the server. When users leave or join, we have to send messages. So for now, we'll probably have a single file that listens for all of these events and calls various helpers. Not too complex here.

## Deployment

Ideally, I should make deployment easy so that non-coders can change static messages and redeploy without having to ask me. But I have no idea how I'm going to deploy this bot. Hell, I haven't even written a line of code. So I should probably fill this section out later.

## Installation

Yay! Someone wants to help me maintain this. That's kinda convenient. Once I write some code I'll try to help others contribute. 

## Testing

Wow, this Readme is really disorganized. Anyway, it's one of my goals to have robust testing for this bot. Once I decide on a framework I'll probably fill this out... if I remember.

## License

Really, it'd be an honor if you thought my code were good enough to steal. So if you want to take it, go ahead and take it. And make money off of it. I don't care (actually, I kind of do: if you figure out how to money off of it, just let me know since I'll get a kick out of it.)

## Acknowledgments

- Friday night. You're a damn good pal.
