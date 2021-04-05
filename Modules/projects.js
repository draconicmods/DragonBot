/* Licensed under GNU GPL V3
Written by Adran
Version 3.0.0
*/
/*started decommissioning 5-april-2021*/

/* Requirements */
const Discord = require('discord.js');

// Embed code
const embed = new Discord.RichEmbed()
  .setColor('#3A95A6')
  .setTitle('Draconic Mods Projects')
  .setURL('https://draconicmods.com/')
  .setAuthor('Dragonbot', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png', 'https://github.com/draconicmods/DragonBot')
  .setDescription('A list of all the Draconic Mod projects and the command to access more information.')
  .setThumbnail('https://media.discordapp.net/attachments/516367045189959681/543270641646698528/DI_BADGE1.png')
  .addField('?dlux','**- This command links dragonlux project**')
  //.addField('?redacted','**- This command links to an upcoming project**') 
  //.addBlankField()
  .setTimestamp()
  .setFooter('https://draconicmods.com/', 'https://media.discordapp.net/attachments/488214232203264001/651205690773340199/image0.png');
module.exports = (embed);
