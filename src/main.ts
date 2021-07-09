import * as dotenv from 'dotenv';

import { BotMain } from './bot-main';
import { Welcome } from './functions';

applicationInit();
main();

export async function main(): Promise<void> {
    const bot = new BotMain();
    await bot.initBot();
    bot.welcome();
}

export function applicationInit(): void {
    dotenv.config();
}

