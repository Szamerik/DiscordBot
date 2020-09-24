const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs')

client.commands = new Discord.Collection


client.once('ready', () => {
   console.log('Szamibotekk is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift(). toLowerCase ();
    if(command === 'ping'){
        message.channel.send('pong!');
    }else if (command == 'ancymoniarz')
        message.channel.send('https://www.youtube.com/channel/UCyy2PwMee-Z3pAMwgF9IPQg')
     else if (command == 'szamerik')
            message.channel.send('https://www.youtube.com/channel/UCS_y4e6mu8SwCLxjRNl2NLQ?view_as=subscriber')
     else if (command == 'czesc')
                message.channel.send('hej jak tam u ciebie? :)')   
                else if (command == 'zapros')
                message.channel.send('Zapros mnie!')
                message.channel.send('https://discord.com/oauth2/authorize?client_id=757230215603814492&scope=bot&permissions=2146958847')
                 
});

client.login('NzU3MjMwMjE1NjAzODE0NDky.X2dXmA.tFQTlGv5HGZnIkzKAXHoQhbPmiE');
