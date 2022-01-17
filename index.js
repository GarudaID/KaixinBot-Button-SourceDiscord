const { bprefix, developerID } = require("./config.json")
const math = require("mathjs")
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const ima = require("image-cord")
const Discord = require('discord.js')
const { Client, MessageEmbed, Collection }  = require('discord.js');
const { readdirSync } = require("fs");
const { join } = require("path");
const disbut = require('discord-buttons')
const client = new Discord.Client({
  disableEveryone: false
});
disbut(client)
client.queue = new Map();
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
let cooldown = new Set();
let cdseconds = 3; 
 const DisTube = require("distube")
const queue2 = new Map();
const queue3 = new Map();
const queue = new Map();
const games = new Map()

const yts = require('yt-search');

// const ads = require("./JSON/ad.json") (make bot advertising)

// ADD YOUR TOKEN HERE
const TOKEN = "
█ █▄░█ █▀█ █░█ ▀█▀   ▀█▀ █▀█ █▄▀ █▀▀ █▄░█
█ █░▀█ █▀▀ █▄█ ░█░   ░█░ █▄█ █░█ ██▄ █░▀█"



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
process.on('UnhandledRejection', console.error);
 

client.on("message", async message => {
  let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = bprefix
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
  
  // if your bot is tagged by someone, the information section about the bot will come out,
   const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed()
        .setTitle(`📖 ${client.user.username} Information!`)
        .setDescription(`Hi **${message.author.username}**, this is our prefix to execute your orders\nand we provide website links and bot invitations for your server!

        Bot Prefix: \`${prefix}\`
        :link: Invite Link: [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
        :link: Support: [Click Here](https://zone-id.my.id)`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#006732")
        .setFooter(`🎉Kaixin v.2 | High quality music bot`)

    return message.channel.send(embed);
  }

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));
  
});


client.on("message", async message => {

const channel = db.get(`count_${message.guild.id}`);


const chan = client.channels.cache.get(channel);
 if (message.channel.id == chan) {
    if (message.author.bot) return;
    message.channel.startTyping();

     if(isNaN(message.content)) {
       message.delete();
                return message.author.send(`You should include only number!`)
            
            }
message.channel.send(`${math.evaluate(`${message.content} + 1`)}`)
 message.channel.stopTyping();

 }

        
});


// Do not change anything here
require('http').createServer((req, res) => res.end(`

██╗░░██╗░█████╗░██╗██╗░░██╗██╗███╗░░██╗░░░██╗░██╗░███████╗░█████╗░██████╗░███████╗
██║░██╔╝██╔══██╗██║╚██╗██╔╝██║████╗░██║██████████╗██╔════╝██╔══██╗╚════██╗██╔════╝
█████═╝░███████║██║░╚███╔╝░██║██╔██╗██║╚═██╔═██╔═╝██████╗░╚██████║░░███╔═╝██████╗░
██╔═██╗░██╔══██║██║░██╔██╗░██║██║╚████║██████████╗╚════██╗░╚═══██║██╔══╝░░╚════██╗
██║░╚██╗██║░░██║██║██╔╝╚██╗██║██║░╚███║╚██╔═██╔══╝██████╔╝░█████╔╝███████╗██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═╝░╚═╝░░░╚═════╝░░╚════╝░╚══════╝╚═════╝░

`)).listen(3000) //Dont remove this 

client.on("ready", () => {
   client.user.setStatus("online"); // You can change it to online, dnd, idle
  client.user.setActivity('>help');
 console.log(`Successfully logined as ${client.user.tag} `)
});
client.login(TOKEN);
