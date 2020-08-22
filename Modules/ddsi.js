/* Licensed under GNU GPL V3
Written by Adran
Version 3.0.0
*/

/* Requirements */
const Discord = require('discord.js');

// Embed code
const embed = new Discord.RichEmbed()
  .setColor('#3A95A6')
  .setTitle('Dragonbot Presents the DdsiFAQ')
  .setURL('https://draconicmods.com/')
  .setAuthor('Dragonbot', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png', 'https://github.com/draconicmods/DragonBot')
  .setDescription('To help you better understand the DragonDSI Project')
  .setThumbnail('https://media.discordapp.net/attachments/516367045189959681/543270641646698528/DI_BADGE1.png')
  .addField('What is the DragonDSI?','The DragonDSI is a planned project to add a miniHDMI port to the console.') 
  .addField('Will this require me to mod the case?','Unknown, this project is still in early stages.')
  .addField('Where can I get one?','The DragonDSI is currently under development.')
  .addField('How much will it cost?','The DragonDSI is currently under development.')
  .addField('Where can I find out more?','You can find out more in the Discord \nor on the [website](https://draconicmods.com/)')
    //.addBlankField()
  //.setImage('https://media.discordapp.net/attachments/516367045189959681/543270649901088778/DI_BANNER2.png')
  .setTimestamp()
  .setFooter('https://draconicmods.com/', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png');
module.exports = (embed);
