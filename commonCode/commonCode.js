require('dotenv').config();
const discord = require('discord.js')
const TOKEN = process.env.TOKEN;

exports.login = login

async function login() {
    const bot = new discord.Client();
    let loginRes = await bot.login(TOKEN)
    return loginRes
}