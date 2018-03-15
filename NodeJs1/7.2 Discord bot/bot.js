const Discord = require('discord.js');
const client = new Discord.Client();
const botsettings = require("./botsettings.json"); 

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log("The invite link: ", link);
  } catch (err) {
    console.log(err);
  }

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 
client.login(botsettings.token);