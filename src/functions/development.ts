import * as config from '../models/config';

import { Client, Message, TextChannel } from 'discord.js';

export class Development {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async createDevelopmentChannels(message: Message): Promise<void> {
        console.log(`WEBHOOK COMMAND`);
        if (config.developmentChannels) {
            const urls: string[] = [];
            config.developmentChannels.forEach(async (channel) => {
                this.client.guilds.cache;
                const newChannel = await message.guild?.channels.create(channel, {
                    type: `text`,
                });
                urls.push(await this.createWebook(newChannel));
                console.log(`New development channel has been created`);
            });

            urls.forEach(async (url) => {
                await message.channel.send(`Webhook url: ${url}`);
            });
        }
    }

    async createWebook(channel: TextChannel | undefined): Promise<string> {
        let url = ``;
        if (channel) {
            const webhook = await channel.createWebhook(`Hook Master`);
            url = webhook.url;
        }
        console.log(`A new webhook has been created with url: `, url);
        return url;
    }
}
