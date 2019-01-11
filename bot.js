lient.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "sug")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        client.channels.get("ايدي شانل لي تبي يوصل اقتراح له").send(
            "\n" + "**" + " ● Suggested By : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + " ● Suggest : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription(' Suggested Sent')
             .setThumbnail(message.author.avatarURL)
             .setFooter("Fras#9999")
        message.channel.send(embed);
}
 });
 
 const {Client, RichEmbed} = require('discord.js')
const client = new Client({disableEveryone: true})
const {guild, logs_channel, time, token} = require('./config')
 
 
client.on('ready', () => {
    client.user.setActivity(`Hackers & Spam Accounts`, {type: "WATCHING"});
 
    client.guilds.get(guild).members.filter(member => member !== member.user.bot).forEach(async member => {
 
        if(checkMember(member.user)) {
            const bannedmember = {
                member_displayName: member.displayName,
                member_id: member.id,
                member_avatar: member.user.displayAvatarURL
            }
 
            try {
                var banned = await member.ban('[Auto-Ban] Banned for Security reasons')            
            } catch (error) {
                console.log(error)
            }
 
            const embed = new RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setDescription(`Banned **${bannedmember.member_displayName}**(**${bannedmember.member_id}**) because his account in less than 3 days`)
            .setThumbnail(bannedmember.member_avatar)
 
            banned.guild.channels.get(logs_channel).send(embed)
        } else return;
 
    })
})
 
 
 
 
client.on('guildMemberAdd', async (member) => {
    console.log(checkMember(member.user))
    if(!member.user.bot && checkMember(member.user)) {
        const bannedmember = {
            member_displayName: member.displayName,
            member_id: member.id,
            member_avatar: member.user.avatarURL
        }
 
        try {
            var banned = await member.ban('[Auto-Ban] Banned for Security reasons')            
        } catch (error) {
            console.log(error)
        }
 
        const embed = new RichEmbed() ///Toxic Codes
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription(`Banned **${bannedmember.member_displayName}**(**${bannedmember.member_id}**) because his account in less than 3 days`)
        .setThumbnail(bannedmember.member_avatar)
 
        banned.guild.channels.get(logs_channel).send(embed)
    } else return;
})
 
 
function checkMember(user) {
const timeofuser = new Date(user.createdAt)
console.log(timeofuser) ///By Emoko
if((timeofuser.getTime() + time) > Date.now()) return true;
else return false;
}
 
process.on('unhandledRejection', reason => {
    console.log(reason)
})
 
client.on('error', (error) => console.log(error))
 
client.login(token)

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "اسم شات لي تبيه يرحب فيه"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['w.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 540, 230);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '21px kathen';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 240, 150);
                              
                              //NAMEً
                              ctx.font = '21px kathen';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });//Toxic Codes 
