const { MessageEmbed } = require("discord.js")
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "roleunlock",
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Unlocks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)roleunlock <#channel> <roleID>\`**`)
            return message.lineReplyNoMention(nopr)
        }
        const roletofind = args.slice(1).join(" ")
        const fetcherofrr = args[1];
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) {
            const norrspec = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`${fetcherofrr}\` Is Not A Valid Role ID!**`)
            return message.lineReplyNoMention(norrspec)
        }
        const embed = new MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle("Channel Unlocked!")
            .setDescription(`**This Channel Has Been Unlocked By ${message.author.tag} For This Role <@!${role}>**`)
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })
        await channel.send(embed)
    }
}