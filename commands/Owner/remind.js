const ms = require('ms')
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: "remind",
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "utility",
    description: {
        usage: "remind <time> <reminder>",
        content: "Helps remind you something",
    },
    async execute(client, message, cmd, args, Discord) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**\`(prefix)remind <time(s)(m)(h)(d)> <reminder>\`**`)

        const wrongtime = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Sorry I Only Do \`(d)(h)(m)(s)\`!**`)

        const reminderembed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Please Tell Me What You Want To Be Reminded Off!**`)

        if (!args[0]) return message.lineReplyNoMention(notime)
        if (
            !args[0].endsWith("d") &&
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.lineReplyNoMention(wrongtime)
        if (!reminder) return message.lineReplyNoMention(reminderembed)

        const remindertime = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#33F304')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Your Reminder Will Go Off In \`${time}\`!**`)

        message.lineReplyNoMention(remindertime)

        const reminderdm = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#7289DA')
            .setAuthor(`REMINDER`, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**It Has Been \`${time}\`! \n Here Is Your Reminder: \`${reminder}\`!**`)

        setTimeout(async function () {
            try {

                await user.send(reminderdm)
            } catch (err) {

            }

        }, ms(time));
    }
}