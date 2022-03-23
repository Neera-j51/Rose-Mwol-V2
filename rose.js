require('./settings/config.js')
const
	{
		WAConnection: _WAConnection,
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
const simple = require("./lib/simple.js");
const fs = require('fs')
const WAConnection = simple.WAConnection(_WAConnection);
const { banner, getBuffer, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const CFonts  = require('cfonts')
const { uploadImages } = require('./lib/uploadimage')

require('./command/case.js')
nocache('./command/case.js', module => console.log(`${module} is now updated!`))

const starts = async (rose = new WAConnection()) => {
    rose.logger.level = 'warn'
    rose.version = [2, 2143, 3]
    rose.browserDescription = [ 'Rose-Bot', 'Chrome', '3.0' ]
	CFonts.say('rose', {
		font: 'block',
    	color: ['#ff9c00'],
    	align: 'center',
		})
	CFonts.say(`WhatsApp Bot Created By Sachu-Settan`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
		
    rose.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan qr maks 20 detik sebelum qr expired'))
    })

    fs.existsSync('./session.json') && rose.loadAuthInfo('./session.json')
    rose.on('connecting', () => {
        start('2', 'Connecting...')
    })
    rose.on('open', () => {
        success('2', 'Connected')
    })
    await rose.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(rose.base64EncodedAuthInfo(), null, '\t'))

    rose.on('chat-update', async (message) => {
        require('./command/case.js')(rose, message)
    })

	rose.on('group-participants-update', async (anu) => {
		console.log(anu)
		try {
						const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await rose.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							rose.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const mdata = await rose.groupMetadata(anu.jid)
						num = anu.participants[0]
						let v = rose.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
						try {
							ppmem = await rose.getProfilePicture(num);
							} catch (e) {
								ppmem = 'https://telegra.ph/file/f8df36078279304745bae.png'
								}
						try {
							ppgc = await rose.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://telegra.ph/file/d4c05638fa7886a1d8060.jpg'
								}
						let ppmem2 = await getBuffer(ppmem)
						let ppmem3 = await uploadImages(ppmem2)
						let ppgc2 = await getBuffer(ppgc)
						let ppgc3 = await uploadImages(ppgc2)
						let gakloo = [{
										"buttonId": `.menu,
										"buttonText": {
											"displayText": "Welcome 👋"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(rose.user.jid)) {
							welcome = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/welcome2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), `Welcome Message By ${ownername}`,welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome 🤗"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), `Welcome Message By ${ownername}`,ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome 🤗"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(rose.user.jid)) {
							goodbye = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/goodbye2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n⌯ָ   ֙Leave from group:\n${mdata.subject}` + '\n' + lang.leave(), `Leave Message By ${ownername}`,goodbye, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye 🤲"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n⌯ָ   ֙Leave from group:\n${mdata.subject}` + '\n' + lang.leave(), `Leave Message By ${ownername}`,ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye 🤲"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
		})

antidel = global.anti_delete
rose.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0] 
rose.sendMessage(m.key.remoteJid, `*A N T I  - D E L E T E *

Name : @${m.participant.split("@")[0]}
Day :  ${week} ${calender}
Time : ${jam}
Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

rose.copyNForward(m.key.remoteJid, m.message, {quoted: falfaa})
})
antical = global.anticall     
rose.on('CB:action,,call', async json => {
if (antical === false) return
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${global.ownername}` + '\n' + `ORG:Creator ${global.botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${global.ownernumber}` + ':+' + `${global.ownernumber}` + '\n' + 'END:VCARD'
        rose.sendMessage(callerId, `*Sorry ${rose.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
        rose.sendMessage(callerId, { displayname: `${global.ownername}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creator ${setting.botname}`,body:"",previewType:"PHOTO",thumbnail: global.thumbnail ,sourceUrl:`https://wa.me/${global.ownernumber}?text=Hi Brudha`}}})
        await sleep(5000)
        await rose.blockUser(callerId, "add")
        })
}
	
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
