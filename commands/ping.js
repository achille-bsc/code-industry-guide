const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Donne la latence du bot'),
    async execute(interaction) {
        

		const pingEmbed = new MessageEmbed()
            .setColor('#4ED5F8')
            .setTitle('Latence du bot')
            .setDescription('Voici les informations sur la latence du bot ainsi que sur son hébergement.')
            .addFields(
                { name: 'Latence BOT', value: `\`Calcul en cours...\``, inline: true },
                { name: 'Latence API', value: `\`${Math.round(client.ws.ping)}\`ms`, inline: true },
                { name: 'Total', value: `\`Calcul en cours...\``, inline: true },
                { name: 'RAM utilisable', value: `\`512\`MG`, inline: true },
                { name: 'Espace disque utilisable', value: `\`1\`GB`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Demandé par ${interaction.member.tag}`, avatarURL: `${interaction.member.displayAvatarURL()}`});
        ;
        const messagePing = await interaction.reply({ embeds: [pingEmbed], ephemeral: false, fetchReply: true });

        await wait(1)
        
        const botPing = messagePing.createdTimestamp - interaction.createdTimestamp
        const pingEmbedEdited = new MessageEmbed()
            .setColor('#4ED5F8')
            .setTitle('Latence du bot')
            .setDescription('Voici les informations sur la latence du bot ainsi que sur son hébergement.')
            .addFields(
                { name: 'Latence BOT', value: `\`${botPing}\`ms`, inline: true },
                { name: 'Latence API', value: `\`${Math.round(client.ws.ping)}\`ms`, inline: true },
                { name: 'Total', value: `\`${botPing + Math.round(client.ws.ping)}\`ms`, inline: true },
                { name: 'RAM utilisable', value: `\`512\`MG`, inline: true },
                { name: 'Espace disque utilisable', value: `\`1\`GB`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Demandé par ${interaction.member.tag}`, avatarURL: `${interaction.member.displayAvatarURL()}`});
        ;

        interaction.editReply({ embeds: [pingEmbedEdited], ephemeral: false })


	},
};


function wait(waitsecs = 5) {
    return new Promise(resolve => setTimeout(resolve, waitsecs * 1000));
}