/* Licensed under GNU GPL V3
Written by Adran and Dev\Null
Version 3.0.0
*/

/* Requirements */
const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

/* Modules Section */ 
const ap = require('./Modules/anti-piracy.js')
const credits = require('./Modules/credits.js')
const dmmc = require('./Modules/dmmc.js')
const ddsi = require('./Modules/ddsi.js')
const faq = require('./Modules/faq.js')
const help = require('./Modules/help.js')
const projects = require('./Modules/projects.js')

/* Loggin the bot in and setting its activity */
client.on('ready',() => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("?help & the Dragon's Horde", {type: "Watching"})
});

/* Set the bot to reply to DM commands */
client.on('message', message => {
     if (message.author.bot) 
        return;

    if (message.channel.type == 'dm') {
    
    if(message.content == ("?credits")){
        message.reply(credits);

    } else if(message.content == ("?dmmc")){
        message.reply(dmmc);

    } else if(message.content == ("?ddsi")){
        message.reply(ddsi);

    } else if (message.content == ("?help")){
        message.reply(help);
    
    } else if(message.content == ("?faq")){
        message.reply(faq);
    
    } else if(message.content == ("?projects")){
        message.reply(projects);  
        
    } else if 
    (message.reply("Please enter `?help` for a list of commands."));

}});

/* Set the bot to reply to normals server messages*/
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") { 
        return;
    }

//Moved AP and assosiated regex here in 3.0.1 so mods can trigger AP section
const piracy = message.content.match(new RegExp (/^(?=.*\b(sx|pirate|nsp|rcm|atmo|sxos|yuzu|xci|modchip|atmosphere|reinx|cfw|nro|hekate|emummc|nsz|tinfoil|goldleaf|homebrew|jits|jack ?in ?the ?shop|tx|team ?xecuter|hbg|hbg ?shop|freeshop|free ?shop)\b).*$/i));

//this is here so anyone can trigger the commands
 if(piracy) {
    message.react('651624619920588820')  
    message.author.send(ap);
    message.delete();
     
} else if(message.content == ("?credits")){
    message.react('651624619920588820');
    message.author.send(credit);

} else if(message.content == ("?dmmc")){
    message.react('651624619920588820');
    message.author.send(dmmc);

} else if(message.content == ("?faq")){
    message.react('651624619920588820');
    message.author.send(faq);

} else if(message.content == ("?help")){
    message.react('651624619920588820');
    message.author.send(help);

} else if(message.content == ("?projects")){
    message.react('651624619920588820');
    message.author.send(projects);

} else if (message.content === '?rave') {
        message.author.send(`<@${message.author.id}>, IT'S RAVE TIME!`, {files: ['https://media1.tenor.com/images/e19a05faf32c511572acd08a38bebdd6/tenor.gif']});
    }

//Ignores users if they have one of the following roles for the regex
if (! message.member || message.member.roles.find('name', 'Creator') || message.member.roles.find('name', 'The Fuzz') || message.member.roles.find('name', 'Certified Madlad')) {
        return;
}
    
//Sets regex constant for phrase(s) and replies.
const preorder = message.content.match(new RegExp (/^(?=.*\b(dragon ?mmc|dmmc|dsi| dragon ?dsi)\b)(?=.*\b(preorder|pre-order)\b).*$/i));
const cost = message.content.match(new RegExp(/^(?=.*\b(dragon ?mmc|dmmc|dsi| dragon ?dsi)\b)(?=.*\b(cost|price)\b).*$/i));
const commands = message.content.match(new RegExp (/^(?=.*\b(dragon ?bot|db|bot|dragonbot)\b)(?=.*\b(help|halp)\b).*$/i));
    
    if(preorder) {  
    message.react('651624619920588820')
    message.author.send(`<@${message.author.id}>, Sorry MatinatorX doesn't believe in preorders`);
}   
    if(cost) {  
    message.react('651624619920588820')
    message.author.send(`<@${message.author.id}>, Cost is yet to be announced. Keep an eye on <#489199851171610649>`);
}
    if(commands) {
    message.react('651624619920588820')  
    message.author.send(help);
}});
client.login(token);
