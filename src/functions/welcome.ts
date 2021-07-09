import { Client } from 'discord.js';
export class Welcome {
    constructor (client:Client){}
    welcomeNewUser():void{
        console.log(`Witam`);
    }
}