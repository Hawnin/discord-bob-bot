require('dotenv').config();
const discord = require('discord.js')
const TOKEN = process.env.TOKEN;

const bot = new discord.Client();
let loginRes =  bot.login(TOKEN)
console.log(loginRes)
bot.on('ready', () => {
    console.log(`${bot.user.tag}`)
})