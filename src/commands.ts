import * as config from './models/config';

import { Client } from 'discord.js';
import { Development } from './functions/development';

export class Commands {
    listentForFunction(client: Client): void {
        client.on(`message`, async (message) => {
            console.log(`NEW COMMAND RECEIVED`);
            if (message.content === `${config.prefix}webhook`) {
                const development = new Development(client);
                await development.createDevelopmentChannels(message);
            }
        });
    }
}
