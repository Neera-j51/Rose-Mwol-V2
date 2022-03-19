/*
# Rose-Mwol - UserBot
# Copyright (C) 2022 rose-Mwol Created By Sachu-Settan
#
# This file is a part of < https://github.com/Sachu-Settan/Rose-Mwol-V2
*/ 
//eng
require('../settings/config.js')
const
	{
		WAConnection: 
		_WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
//module exports
const { toAudio } = require('../lib/converter')
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const zee = require('xfarr-api')

//library
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color')
const { yta, ytv} = require('../lib/y2mate')
const simple = require('../lib/simple')
const { uploadImages } = require('../lib/uploadimage')

//time
const time = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('HH:mm:ss z')

//json
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('../database/user/register.js')
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))

/*
# language
# available now [eng]
*/
const  { eng } = require(`./help`)
lang = eng 

module.exports = rose = async (rose, mek) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		m = simple.smsg(rose, mek)
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const wita = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('HH:mm:ss z')
		const wit = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('HH:mm:ss z')
		const type = Object.keys(mek.message)[0]        
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = rose.user.jid
		const botNumberss = rose.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? rose.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
		const isOwner = mek.key.fromMe ? rose.user.jid : ownerNumber.includes(sender)
		const totalchat = await rose.chats.all()
		const groupMetadata = isGroup ? await rose.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? rose.user.jid : rose.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? rose.user.name : conts.notify || conts.vname || conts.name || '-'
        
        //apaya
		const isAntiLink = isGroup ? antilink.includes(from) : false
						
        
        //fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} 🏟️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} 🏟️\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `© ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
		

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            rose.sendMessage(from, teks, text, {quoted:mek})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? rose.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : rose.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			
        function bytesToSize(bytes) {
				return new Promise((resolve, reject) => {
					const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
					if (bytes === 0) return 'n/a';
					const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
					if (i === 0) resolve(`${bytes} ${sizes[i]}`);
					resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
					});
				};
			
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return rose.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: mek})
						rose.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
						rose.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							rose.sendMessage(from, lang.limitend(pushname), text, {quoted: mek})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
					}
				}
				

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        rose.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
				const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    rose.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return rose.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return rose.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return rose.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})
            }
            if(mime.split("/")[0] === "video"){
                return rose.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})
            }
            if(mime.split("/")[0] === "audio"){
                return rose.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })
            }
        }
				
				// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						rose.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await rose.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						rose.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await rose.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						rose.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await rose.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					rose.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				// antilink
                if (manti.includes("://chat.whatsapp.com/")){
		        if (!(isGroup || isAntiLink || isGroupAdmins)) return
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        await rose.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text , {quoted: mek})
		        rose.groupRemove(from, [kic]).catch((e)=>{reply(`Bot Harus Jadi Admin`)})
		        }

			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat 😘 Jawaban kamu benar !", `• ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isrose = checkRegisteredUser(sender)
			const isPremium = premium.includes(sender) || isOwner
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
		//console termux
		if(!(isCmd)){
			console.log(('|\x1b[1;33m MSG \x1b[1;33m|'), time, chalk.yellow(budy), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		if(!(isCmd || mek.key.fromMe)){
			console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		
		if (!mek.key.fromMe && global.self === true) return
//Remember don't just leave it blank, your sc will get an error
switch (command) {
case 'menu': case 'help': case 'rose':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.menu(prefix, pushname), '© ' + ownername, thumbnail, [{buttonId: '.own', buttonText: {displayText: '💖 ᴡʜᴏ ɪꜱ ʏᴏᴜʀ ᴏᴡɴᴇʀ 💖',}, type: 1}],{quoted: fgif});
				break
case 'infobot':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			reply('Info Will be updated')
break
case 'owner': case'own':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber, "919744933034"]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = rose.contacts[i] != undefined ? rose.contacts[i].vname || rose.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await rose.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					rose.sendMessage(from, `🔸Hai, ${pushname} ! \n🔸 My Owner Number \n(Contact Him If You Have Any Doubts) \n🔸 Github: [ sachu-settan.github.io ]`, text, {quoted: hehe})
				}
			break
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await rose.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
			.input(media)
			.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply('Error')
					})
			.on('end', function () {
				console.log('Finish')
				rose.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await rose.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							rose.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else  {
								reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
							}
					
             break
					
// Download Fix by Sachu
case 'ig': case 'insta': case 'instagram': case 'igdl': 
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	if (!q) return reply('Where Is URL ?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
	let urlnya = q
	hx.igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    rose.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `*©  ${ownername} *\n*Downloaded From Instagram*`})
                } else {
                    let link = await getBuffer(i.url)
                    rose.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `*©  ${ownername} *\n*Downloaded From Instagram*`})                  
                }
            }
            }).catch((err) => reply(`*Server Error !!*`))
            
             break
		case 'tiktok':
		if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyz/downloader/tiktok?url=${query}&apikey=${zenzkey}`)
                get_result = get_result.result.nowm
                get_buffer = await getBuffer(get_result)
                rose.sendMessage(from, { video: get_buffer }, MessageType.video, {mimetype: 'video/mp4',quoted: mek})
            break
            case 'tiktokaudio':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyz/downloader/tiktok?url=${query}&apikey=${zenzkey}`)
                get_result = get_result.result.audio_original
                get_buffer = await getBuffer(get_result)
                rose.sendMessage(from, { audio: get_buffer }, {mimetype: 'audio/mpeg',filename: `Tiktok Music.mp3`, quoted: mek })
            break
case 'pinterest': 
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if(!q) return reply('Masukkan query')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , `© ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "Next"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    reply('Terjadi kesalahan')
                })
                
             break
case 'play': case 'song':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Send the Command * $ {prefix} play * _Song title_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '© ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: '▶ Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: '🎶 Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Error !!')
					}
			
             break
case 'spotifysearch':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Artists : ${x.artists}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Preview : ${x.preview_url}\n\n\n`
    }
    reply(ini_txt)}
    break
case 'nhentai':{
    if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
    ini_txt += `Title Native : ${get_result.title_native}\n`
    ini_txt += `Read Online : ${get_result.read}\n`
    get_info = get_result.info
    ini_txt += `Parodies : ${get_info.parodies}\n`
    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
    ini_txt += `Artist : ${get_info.artists}\n`
    ini_txt += `Group : ${get_info.groups}\n`
    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
    ini_txt += `Categories : ${get_info.categories}\n`
    ini_txt += `Pages : ${get_info.pages}\n`
    ini_txt += `Uploaded : ${get_info.uploaded}\n`
    reply(ini_txt)}
    break
 case 'nhentaipdf':{
 	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_buffer = await getBuffer(get_result)
    await rose.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
    }
    break
case 'nhentaisearch':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Result : \n"
    for (var x of get_result) {
        ini_txt += `Id : ${x.id}\n`
        ini_txt += `Title english : ${x.title_english}\n`
        ini_txt += `Title Japanese : ${x.title_japanese}\n`
        ini_txt += `Native : ${x.title_native}\n`
        ini_txt += `Upload : ${x.date_upload}\n`
        ini_txt += `Page : ${x.page}\n`
        ini_txt += `Favourite : ${x.favourite}\n\n`
    }
    reply(ini_txt)
    }
    break
	case 'joox':
		if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyz/downloader/joox?query=${query}&apikey=${zenzkey}`)
                get_result = get_result.result
                get_buffer = await getBuffer(get_result.mp3Link)
                rose.sendMessage(from, { audio: get_buffer }, {mimetype: 'audio/mpeg',filename: `Joox.mp3`, quoted: mek })
            break

            case 'scdl': case 'soundcloud':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyz/downloader/soundcloud?url=${query}&apikey=${zenzkey}`)
                get_result = get_result.result
                get_buffer = await getBuffer(get_result.url)
                rose.sendMessage(from, { audio: get_buffer }, {mimetype: 'audio/mpeg',filename: `SoundCloud-dl.mp3`, quoted: mek })
            break

            case 'xnxx': case 'xvideos':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyzdownloader/${command}?url=${query}&apikey=${zenzkey}`)
                get_result = get_result.result
                txt = `Title : ${get_result.title}\n`
                txt += `Duration : ${get_result.duration}\n`
                get_buffer = await getBuffer(get_result.files.low)
                rose.sendMessage(from, { video: get_buffer, caption: txt  }, MessageType.video, {mimetype: 'video/mp4', quoted: mek,caption: `*© Rose-Mwol *`})
            break

            case 'cocofun':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
                get_result = await fetchJson(`https://zenzapi.xyz/cocofun?url=${query}&apikey=${zenzkey}`)
                get_result = get_result.result
                txt = `Title : ${get_result.title}\n`
                txt += `Desc : ${get_result.desc}\n`
                txt += `Like : ${get_result.like}\n`
                txt += `Play Count : ${get_result.play_count}`
                get_buffer = await getBuffer(get_result.url)
                rose.sendMessage(from, { video: get_buffer, caption: txt  }, MessageType.video, {mimetype: 'video/mp4', quoted: mek })
            break

            case 'gore':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                get_result = await fetchJson(`https://zenzapi.xyz/gore?apikey=${zenzkey}`)
                get_result = get_result.result
                txt = `Title : ${get_result.title}\n`
                txt += `Tag : ${get_result.tag}`
                get_buffer = await getBuffer(get_result.video1)
                rose.sendMessage(from, { video: get_buffer, caption: txt  }, MessageType.video, {mimetype: 'video/mp4', quoted: mek })
            break

            case 'tikporn':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                get_result = await fetchJson(`https://zenzapi.xyz/tikporn?apikey=${zenzkey}`)
                get_result = get_result.result
                txt = `Title : ${get_result.title}\n`
                txt += `Desc : ${get_result.desc}`
                get_buffer = await getBuffer(get_result.video)
                rose.sendMessage(from, { video: get_buffer, caption: txt  }, MessageType.video, {mimetype: 'video/mp4', quoted: mek })
            break

            case 'hentaivid':
				if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                get_result = await fetchJson(`https://zenzapi.xyz/hentaivid?apikey=${zenzkey}`)
                get_result = get_result.result
                txt = `Title : ${get_result.title}\n`
                txt += `Category : ${get_result.category}`
                get_buffer = await getBuffer(get_result.video_1)
                rose.sendMessage(from, { video: get_buffer, caption: txt  }, MessageType.video, {mimetype: 'video/mp4', quoted: mek })
            break
//maker ephoto
case 'wetglass':case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d':case 'greenneon':case 'glossychrome':case 'greenbush':case 'metallogo':case 'noeltext':case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire':{
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} rose`)
    ini_txt = args.join(" ")
    var po = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
    rose.sendMessage(from, po, image, { quoted: mek, caption: "Selesai" })
    }
    break
//maker textpro
case 'blackpink':case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved':case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo':case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand':case 'horrorblood':case 'thunder':{
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} rose`)
    ini_txt = args.join(" ")
    let gambar = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
    rose.sendMessage(from, gambar, image, { quoted: mek, caption: "Success" })
    }
    break
//Random anime
case 'waifu': case 'loli':{
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix +command } rose`)
    ini_txt = args.join(" ")
    let gambar = await getBuffer(`https://api.waifu.pics/sfw/waifu`)
    rose.sendMessage(from, gambar, image, { quoted: mek, caption: "Success" })
    }
    break
//group
case 'register': case 'reg': case 'register': case 'verify': case 'verif':
			if (isrose) return  reply(lang.regis())
			try {
					ppregis = await rose.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender.split('@')[0] + '@s.whatsapp.net', pushname, time, serialUser)
			await sendButImage(from, lang.register(sender, pushname, time, serialUser, _registered), `© ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'antilink':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mengaktifkan ${command}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mematikan ${command}`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await rose.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										rose.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await rose.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			rose.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			rose.sendMessage(from, 'Bye 👋', text)
			}, 0)
			break
case 'hidetag':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			var value = q
			var group = await rose.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value ? value :' ',
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			rose.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			linkgc = await rose.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			rose.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'tagall':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += `➸ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await rose.groupUpdateSubject(from, `${q}`)
					rose.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await rose.groupUpdateDescription(from, `${q}`)
					rose.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await rose.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'bc': case 'broadcast':
			if (!isOwner) return reply(lang.owner(botname))
			if (args.length === 0) return reply(`Kirim perintah *${prefix + command}* text`)
			var bcnya = await rose.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			var  bcnya2 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			var bcnya3 = await rose.downloadMediaMessage(bcnya2)
					for (let _ of bcnya) {
						rose.sendMessage(_.jid, bcnya3, image, { caption: `*----「  BROADCAST 」----*\n\n${q}` })
						}
						reply('Sukses broadcast')
					} else {
						for (let _ of bcnya) {
							sendButLocation(_.jid, '「 PESAN SIARAN 」\n\n' + q, '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
							}
						reply('Sukses broadcast')
					}
					break      
case 'nightcore':{
	 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rose.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break    
case 'mp3': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media}  -vn -ar 44100 -ac 2 -b:a 192k  ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, { mimetype: 'audio/mpeg', filename: `${ran}.mp3`, quoted: mek})
										fs.unlinkSync(ran)
										})}
										break 
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'reverse': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'smooth': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'redusebg': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "highpass=f=400,lowpass=f=1800" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'echo': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "aecho=0.8:0.9:40|50|70:0.4|0.3|0.2" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'integral': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "aintegral[a];[a]aeval=val(ch)/30:c=same" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'robo2': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'whisper': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*cos((random(0)*2-1)*2*3.14)':imag='hypot(re,im)*sin((random(1)*2-1)*2*3.14)':win_size=128:overlap=0.8" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'supereq': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'vib2': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=4" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'okbye': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'earrape': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af volume=12 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await rose.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											rose.sendMessage(from, uhh, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await rose.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await rose.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await rose.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											rose.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await rose.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					rose.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/engie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										rose.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/engie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										rose.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/engie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										rose.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/engie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										rose.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
									case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                await reply(lang.wait())
try{
                zee.Facebook(`${q}`).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `*• Url :* ${data.url}`
                    let ppfb = await getBuffer(data.medias[1].url)
                    rose.sendMessage(from, ppfb, video, {mimetype:'video/mp4', quoted: mek, caption: txt})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
             break
   case 'soundcloud':
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link SoundCloud`)
                if (!q.includes('m.soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    rose.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mpeg' })
				})
			break
	case 'telesticker': case 'tstiker': {
		if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!q) return reply(`Contoh: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('Bukan link telegram stiker')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(lang.wait())
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			rose.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tebakgambar':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
rose.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
rose.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'semoji': case'emoji':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(lang.wait())
	emoji.get(`${qes}`).then(async emojii => {
					teks = `${emojii.images[4].url}`
					console.log(teks)
					//rose.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: mek})
		  sendStickerFromUrl(from,`${teks}`)	
		
		})
		
		break
case 'ytmp3': {
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Not Valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
case 'ytmp4': {
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Not Valid!')
			var mulaikah = args.join(' ')
			zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break    
//anime search
case 'character':
if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Sakura`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nName : ${get_result.name.full}\nNative : ${get_result.name.native}\nFavorites : ${get_result.favourites}\nMedia : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await rose.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break
case 'anime':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nId MAL : ${get_result.idMal}\nTitle : ${get_result.title.romaji}\nenglish : ${get_result.title.english}\nNative : ${get_result.title.native}\nFormat : ${get_result.format}\nEpisodes : ${get_result.episodes}\nDuration : ${get_result.duration} mins.\nStatus : ${get_result.status}\nSeason : ${get_result.season}\nSeason Year : ${get_result.seasonYear}\nSource : ${get_result.source}\nStart Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\nEnd Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\nGenre : ${get_result.genres.join(", ")}\nSynonyms : ${get_result.synonyms.join(", ")}\nScore : ${get_result.averageScore}%\nCharacters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await rose.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })}
                    break
case 'manga':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nId MAL : ${get_result.idMal}\nTitle : ${get_result.title.romaji}\nenglish : ${get_result.title.english}\nNative : ${get_result.title.native}\nFormat : ${get_result.format}\nChapters : ${get_result.chapters}\nVolume : ${get_result.volumes}\nStatus : ${get_result.status}\nSource : ${get_result.source}\nStart Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\nEnd Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\nGenre : ${get_result.genres.join(", ")}\nSynonyms : ${get_result.synonyms.join(", ")}\nScore : ${get_result.averageScore}%\nCharacters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await rose.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })}
                    break                     
case 'kusonime':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nGenre : ${get_result.genre}\nSeasons : ${get_result.seasons}\nProducers : ${get_result.producers}\nType : ${get_result.type}\nStatus : ${get_result.status}\nTotal Episode : ${get_result.total_episode}\nScore : ${get_result.score}\nDuration : ${get_result.duration}\nReleased On : ${get_result.released_on}\nDesc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await rose.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })}
                    break
case 'kusonimesearch':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nGenre : ${get_result.genre}\nSeasons : ${get_result.seasons}\nProducers : ${get_result.producers}\nType : ${get_result.type}\nStatus : ${get_result.status}\nTotal Episode : ${get_result.total_episode}\nScore : ${get_result.score}\nDuration : ${get_result.duration}\nReleased On : ${get_result.released_on}\nDesc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await rose.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    }
                    break
case 'otakudesu':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nJudul : ${get_result.judul}\nType : ${get_result.type}\nEpisode : ${get_result.episodes}\nAired : ${get_result.aired}\nProducers : ${get_result.producers}\nGenre : ${get_result.genres}\nDuration : ${get_result.duration}\nStudios : ${get_result.status}\nRating : ${get_result.rating}\nCredit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)}
                    break
case 'otakudesusearch':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nJudul : ${get_result.judul}\nType : ${get_result.type}\nEpisode : ${get_result.episodes}\nAired : ${get_result.aired}\nProducers : ${get_result.producers}\nGenre : ${get_result.genres}\nDuration : ${get_result.duration}\nStudios : ${get_result.status}\nRating : ${get_result.rating}\nCredit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)}
                    break
//random text
case 'pantun': case 'puisi': case 'bucinquote': case 'dilanquote': case 'katasenja': case 'motivational':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/${command}?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'randomquote':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/random/quote?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'quotesgalau':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/quotes/galau?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'creepyfact':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/creepyfact?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'cerpen':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cerpen?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Penulis : ' + txt.result.Penulis + '\n' + 'Sumber : ' + txt.result.sumber + '\n' + 'Cerita : ' + txt.result.cerita)
	}
	break
case 'cersex':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cersex?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita)
	}
	break
case 'cersex2':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cersex2?apikey=${zenzkey}`)
	rose.sendMessage(from, await getBuffer(txt.result.Thumb), MessageType.image,{quoted: mek, caption: 'Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita})
	}
	break
case 'huluh': case 'hilih': case 'heleh' : case 'halah': case 'reversetext':{
	if (args.length == 0) return reply(`Example: ${prefix + command} rose`)
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/${command}?query=${q}&apikey=${zenzkey}`)
	reply(txt.result)
	}
	break
case 'cercreepy':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fecthJson(`https://zenzapi.xyz/api/cercreepy?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita)
	}
	break
case 'faktaunik':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/faktaunik?apikey=${zenzkey}`)
	reply(txt.result)
	}
	break
case 'quotetrump':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/trumpquotes?apikey=${zenzkey}`)
	reply('En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
case 'animequote':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/animequotes?apikey=${zenzkey}`)
	reply('Anime : ' + txt.result.anime + '\n' + 'Karakter : ' + txt.result.character + '\n' + 'En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
case 'animequote2':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/animequotes2?apikey=${zenzkey}`)
	rose.sendMessage(from, await getBuffer(txt.result.thumb), MessageType.image, {quoted: mek, caption: 'Anime : ' + txt.result.anime + '\n' + 'Karakter : ' + txt.result.character + '\n' + 'Episode : ' + txt.result.episode + '\n' + 'Quotes : ' + txt.result.quotes})
	}
	break
case 'trumpthink':{
	if (!isrose) return sendButMessage(from, lang.noregis(pushname), `Click Button To Verify`, [{buttonId: '.register',buttonText: {displayText: `register`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/trumpthink?apikey=${zenzkey}`)
	reply('En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
case 'antidelete':{
if (!isOwner) return reply(lang.owner(botname))
if (args[0] === "on") {
if (global.anti_delete === true) return reply('Kyk nya udh on')
global.anti_delete = true
reply('✅ Anti delete berhasil di aktifkan')
} else if (args[0] === "off") {
if (global.anti_delete === false) return
global.anti_delete = false
reply('✅ Anti delete berhasil di non aktifkan')
} else if (!q) {
sendButMessage(from, `ANTI DELETE MODE`, `Choose one`, [{buttonId: '.antidelete on',buttonText: {displayText: `On`,},type: 1,},{buttonId: '.antidelete off',buttonText: {displayText: `Off`,},type: 1,},]);}}
break;
case 'd':case 'del':case 'delete':{
rose.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
}
break
case 'anticall':{
if (!isOwner) return reply(lang.owner(botname))
if (args[0] === "on") {
if (global.anticall === true) return reply('Kyk nya udh on')
global.anticall = true
reply('✅ Anti call berhasil di aktifkan')
} else if (args[0] === "off") {
if (global.anticall === false) return
global.anticall = false
reply('✅ Anti call berhasil di non aktifkan')
} else if (!q) {
sendButMessage(from, `ANTI CALL MODE`, `Choose one`, [{buttonId: '.anticall on',buttonText: {displayText: `On`,},type: 1,},{buttonId: '.anticall off',buttonText: {displayText: `Off`,},type: 1,},]);}}
break;
case "listonline": {
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(rose.chats.get(id).presences),
            rose.user.jid,
          ];
          rose.reply(
            m.chat,
            "*「 L I S T   O N L I N E  」*\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }}
        break;
case 'nami': case 'copper': case 'naruto':  case 'zoro': case 'ussop': case 'minato': case 'sasuke': case 'sakura':case 'luffy': case 'sanji':  case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':
            {
			try{	
            let txt = await fetchJson(`https://myselfff.herokuapp.com/docs/anime/${command}`)            
            rose.sendMessage(from, await getBuffer(txt.result.list), MessageType.image, {caption: '👀', quoted: mek})            
            } catch (e) {
			m.reply('Server Error')
			}}	    	    	
            break
 case 'sider':{
 try{
                shape = '✓ '
infom = await rose.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch {
	m.reply('')
	}}
					break   
case 'd':case 'del':case 'delete':{
	if (!isOwner) return reply(lang.owner(botname))
rose.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
}
break
default:
if (budy.startsWith('>')){
try {
	if (!isOwner) return reply(lang.owner(botname))
return rose.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!isOwner) return reply(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`Rose Bot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!isOwner) return reply(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, chalk.green("=>"), 'from', chalk.green(pushname), 'args :', chalk.green(args.length))
} catch(e){
reply(String(e))
}
}                                               	
              }   
	
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', chalk.green(e))
        }
	}
}
