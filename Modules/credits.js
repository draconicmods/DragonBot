/* Licensed under GNU GPL V3
Written by Adran
Version 3.0.0
*/

/* Requirements */
const Discord = require('discord.js');

// Embed code
const embed = new Discord.RichEmbed()
  .setColor('#3A95A6')
  .setTitle('Dragonbot Credits')
  .setURL('https://draconicmods.com/')
  .setAuthor('Dragonbot', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png', 'https://github.com/draconicmods/DragonBot')
  .setDescription('A list of credits')
  .setThumbnail('https://media.discordapp.net/attachments/516367045189959681/543270641646698528/DI_BADGE1.png')
  .addField('MatinatorX', '- For creating the Draconic Mods')
  .addField('Stuck Pixel','- For helping with programming')
  .addField('Jerome','- For the helping with programming')
  .addField('Adran','- For the Dragonbot') 
  .addField('Kevhawk','- For the Ticketbot and hosting')
  .addField('Everyone Else','- For supporting Draconic Mods')
  //.addBlankField()
  .setTimestamp()
  .setFooter('https://draconicmods.com/', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png');
module.exports = (embed);
