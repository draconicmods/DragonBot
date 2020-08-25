/* Licensed under GNU GPL V3
Written by Adran
Version 3.0.0
*/

/* Requirements */
const Discord = require('discord.js');

// Embed code
const embed = new Discord.RichEmbed()
  .setColor('#3A95A6')
  .setTitle('Dragonbot Presents the DmmcFAQ')
  .setURL('https://draconicmods.com/')
  .setAuthor('Dragonbot', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png', 'https://github.com/draconicmods/DragonBot')
  .setDescription('To help you better understand the DragonMMC')
  .setThumbnail('https://media.discordapp.net/attachments/516367045189959681/543270641646698528/DI_BADGE1.png')
  .addField('What is the DragonEMMC?','The DragonMMC is a multi-NAND, Multi-SD, replacement onboard storage solution for your console, currently in development. The PCB will accommodate up to 3 NAND chips.') 
  .addField('What sizes does it come in?','Planned NAND sizes are 32GB for NAND1, and 64GB for NAND2 and NAND3. A MicroSD to NAND adapter will be included to simplify installation and setup.')
  .addField('Where can I get one?','The DragonEMMC is currently under development.')
  .addField('Where can I find out more?','You can find out more in the Discord \nor on the [website](https://draconicmods.com/)')
    //.addBlankField()
  .setTimestamp()
  .setFooter('https://draconicmods.com/', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png');
module.exports = (embed);
