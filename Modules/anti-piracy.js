/* Licensed under GNU GPL V3
Written by Adran
Version 3.0.0
*/

/* Requirements */
const Discord = require('discord.js');

// Embed code
const embed = new Discord.RichEmbed()
  .setColor('#3A95A6')
  .setURL('https://draconicmods.com/')
  .setAuthor('Dragonbot', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png', 'https://github.com/draconicmods/DragonBot')
  .setThumbnail('https://media.discordapp.net/attachments/516367045189959681/543270641646698528/DI_BADGE1.png')
  .addField('DraconicMods Server Rule Violation', 'Please be aware that discussion of piracy or organizations promoting piracy\n is against the server rules and may result in a ban on repeated offences.')
  //.addBlankField()
 // .setImage('https://media.discordapp.net/attachments/516367045189959681/543270649901088778/DI_BANNER2.png')
  .setTimestamp()
  .setFooter('https://draconicmods.com/', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png');
module.exports = (embed);
