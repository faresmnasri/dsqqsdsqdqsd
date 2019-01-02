const Discord = require('discord.js');
const cilent = new Discord.Client();

console.log("BOT ONLINE");
 
cilent.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose:  WELCOME TO FALLEGA TEAM SERVER :rose: 
                               [ https://discord.gg/Vg9EHH2 ] 
 ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);