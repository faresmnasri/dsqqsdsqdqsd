const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose:  WELCOME TO FALLEGA TEAM SERVER :rose: 
                               [ https://discord.gg/Vg9EHH2 ] 
 ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
