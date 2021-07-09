import * as dotenv from 'dotenv';

import { BotMain } from './bot-main';

applicationInit();
main();

export async function main(): Promise<void> {
    const bot = new BotMain();
    await bot.initBot();
}

export function applicationInit(): void {
    dotenv.config();
}
