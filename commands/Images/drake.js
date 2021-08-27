const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 10,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**You Must Do `x!drake text1 / text2` \nYou Must Add The / For It Work!**' }) //, allowedMentions: { repliedUser: true } })
        }
        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            return message.lineReplyNoMention({ content: "**Enter Some Text!**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text.length > 70) return message.reply({ content: `**You Cant Go Over 70 Characters!**`, allowedMentions: { repliedUser: true } })

        const text2 = splitArgs[1];
        if (!text2) {
            return message.lineReplyNoMention({ content: "**Enter The Second Text!**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text2.length > 70) return message.lineReplyNoMention({ content: `**You Cant Go Over 70 Characters!**` }) //, allowedMentions: { repliedUser: true }})

    const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('DRAKE')
        .setColor('#c30202')
        .setImage(`https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`)

        message.lineReplyNoMention(embed)

    // message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "xopbotdrake.png" }] });
}
}