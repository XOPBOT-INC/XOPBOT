const Discord = require("discord.js");
module.exports = {
    name: 'ass',
    nsfw: true,
    aliases: ['bum', 'butt'],
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.channel.send('**This Is Not A NSFW Channel! 🔞**')

        var lo = new Discord.MessageEmbed()
            .setDescription(`Sending Ass...`)
            .setTimestamp()

        message.channel.send(lo).then(m => {

            superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass' }).end((err, response) => {

                var embed_nsfw = new Discord.MessageEmbed()
                    .setColor('#c30202')
                    .setDescription(`:underage: **Ass**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                    .setTimestamp()
                    .setImage(response.body.message)
                    .setFooter('Nice Juicy Ass! :)')

                m.edit(embed_nsfw);
            });
        });
    }
}