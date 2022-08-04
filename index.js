import { Client, GatewayIntentBits } from 'discord.js'

const bot = new Client({ intents: Object.values(GatewayIntentBits) })

function wait(ms) {
    return new Promise(x => setTimeout(x, ms))
}

bot.once('ready', _ => {
    console.log('ayy')
})

bot.on('messageCreate', async msg => {
    if (/ayy*/gi.test(msg.content)) {
        await wait(2000)
        msg.reply('lmao')
    }
})

bot.login(process.env.DISCORD_BOT_TOKEN)
