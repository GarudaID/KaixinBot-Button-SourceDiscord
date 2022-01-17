const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {

    // if Client Type {PREFIX} ur prefix , this show first
    const embed = new Discord.MessageEmbed()
    .setTitle(`🚨 ${bot} High quality music bot🚨`)
    .setDescription(` Hi master **${message.author.username}**, \n\nthank you for choosing us to be a bot on your server, I really hope you don't kick Kaixin from your server, to improve the performance of Kaixin I will always keep you up to date.\n\n*Choose an category below to see commands*\nand more features of ${bot}.`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/907202627329220618/929332690262556692/information_menu.png")
    .setFooter(`Requested by: ${message.author.tag} | 🎉High quality music bot`)

    // Label Buttons Music Commands
    const music = new Discord.MessageEmbed()
    .setTitle(":rotating_light: Kaixin information Help Menu.!")
    .setAuthor('Click here to invite me!!', 'https://cdn.discordapp.com/attachments/905820113477963917/926444120275312690/zzz.png', 'https://discord.com/oauth2/authorize?client_id=904032472755499099&permissions=327558298918&scope=bot')
    .setDescription(`all the music commands which you can use:\nresponsive on menu display \n\n༺═───🎵Commands Music🎵───═༻.\n \`leave\`, \`loop\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\`\n\n༺═─⚙️Commands Settings⚙️─═༻.\n \`ping\`, \`inv\` ,\`vote(coming soon)\``)
    .setFooter(`Requested by: ${message.author.tag} | 🎉High quality music bot`)
    .setImage("https://cdn.discordapp.com/attachments/907202627329220618/929332690828804106/music_commands.png")

    
   // Label BUttons Filter Commands
    const fill = new Discord.MessageEmbed()
     .setTitle(`❓How to use filters`)
        .setDescription(`Play music first, then turn on the filter you want to use below.!\nThis filter is still in the testing phase!\nFilter Prefix: \`${prefix}f\`\n༺═────────═༻
        \`bassboost\`,\`8D\`,\`vaporwave\`,\`nightcore\`,\`phaser\`,\`tremolo\`,\`vibrato\`,\`surrounding\`,\`pulsator\`,\`chorus\`,\`karaoke\`\n
        \`clear\`   ---  removes all filters`)
        .setColor("#006732")
        .setImage("https://cdn.discordapp.com/attachments/907202627329220618/931737969272963102/filter_commands.png")
        .setFooter(`⚜️Example: >f vaporwave`)

    // Label Buttons Information Buttons 
    const info = new Discord.MessageEmbed()
     .setTitle(`📖 ${client.user.username} Information!`)
        .setDescription(`Hi **${message.author.username}**, thank you for choosing us to be a bot on your server, I really hope you don't kick Kaixin from your server, to improve the performance of Kaixin I will always keep you up to date.

        Bot Prefix: \`${prefix}\`
        :link: Invite Link: [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
        :link: Support: [Click Here](https://zone-id.my.id)
        :link: Bot Login: [Click Here](https://bot.zone-id.my.id)`)
        .setColor("#006732")
        .setImage("https://cdn.discordapp.com/attachments/907202627329220618/929332690514239568/kaixin_information.png")
        .setFooter(`🎉Kaixin v.2 | High quality music bot`)

        const support = new Discord.MessageEmbed()
      .setURL('https://zone-id.my.id')


    let button1 = new MessageButton()
    .setLabel(`🎵Music Commands`) // Show Label Button Music Commands
    .setID(`music`)
    .setStyle("blurple"); // Color Button

    let button2 = new MessageButton()
    .setStyle('url') // URL zone-id.my.id
    .setURL('https://zone-id.my.id')
    .setLabel('⚙️Support'); // Show Label Button Support Commmands

    let button3 = new MessageButton()
    .setLabel(`📖Information`) // Show Label Information Commands
    .setID(`info`)
    .setStyle("red"); // Color Button

    let button4 = new MessageButton()
    .setLabel(`📯Filter Commands`) // Show Label Button Filter Commands
    .setID(`fill`)
    .setStyle("green"); // Color Button

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);   // Added Components for Button 1-4 , want add more please add , 5 or whtver u want



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") { // Button Music Commands

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

        if(b.id == "fill") { // Button FIlters Commands

            MESSAGE.edit(fill, row);
            await b.reply.defer()
            
        }

          if(b.id == "support") { // Button Support Commands i mean ( Website www.zone-id.my.id )

            MESSAGE.edit(support, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") { // show information bot Kaixin

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });

}};
