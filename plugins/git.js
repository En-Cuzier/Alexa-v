const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/yCYYyEJ.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater LXR AMAL*
*owner number wa.me/919048789011*

*bot setting video : https://youtu.be/2tek7Y5CEF4*

*githublink : https://github.com/LXR-YOUTUBER-AMAL/Amalser_v2*

*audio commads : https://github.com/LXR-YOUTUBER-AMAL/Amalser_v2/tree/master/uploads*
`}) 

}));
