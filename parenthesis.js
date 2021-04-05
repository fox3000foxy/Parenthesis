const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('(')) {
    setTimeout(()=>{msg.delete()},2500);
  }
});

client.login('ODI4NjQ3NjQzMDEzMDU0NDY0'+'.YGsoQQ.k-t271Ud4iZVVRERypr_eLM0Lrc');