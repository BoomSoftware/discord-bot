import { Client } from 'discord.js';
import { Commands } from './commands';
import { Welcome } from './functions';
export class BotMain {
    private discordClient: Client;

    constructor() {
        console.log(`Bot initialization...`);
        this.discordClient = new Client();
    }
    async initBot(): Promise<void> {
        this.discordClient.once(`ready`, () => {
            console.log(`Bot initialization has been finised sucessfully`);
        });
        console.log(`Bot is trying to log in...`);
        await this.discordClient.login(process.env.DISCORD_TOKEN);
        console.log(`Bot has been sucessfully logged in`);
        const commands = new Commands();
        commands.listentForFunction(this.discordClient);
        console.log(`Bot is listetning for commands...`);
    }
    welcome(): void {
        const welcome = new Welcome(this.discordClient);
        welcome.welcomeNewUser();
    }
}
