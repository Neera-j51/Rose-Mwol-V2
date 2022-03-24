exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Sorry ${pushname}! \nToday's limit has run out \nlimit Will reset every 24:00 hours`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Hi ${pushname} You Haven't Registered Yet. Type .register First`
	}
exports.regis = () =>{
	return` You Have Already Registered 😒`
	}
exports.register = (sender, pushname, time, serialUser, totalUser) =>{
		return` *SUCCESSFUL REGISTRATION*

• Name : ${pushname}
• Number : ${sender.split("@")[0]}
• Time : ${time}
• Serial : ${serialUser}

Thanks, You're registered,

Now Type .menu to view Rose-Mwol features.
`
	}
exports.owner = (botname) =>{
	return` *🙅‍♀️ Owner's special command ${botname} *`
	}
exports.admin = (groupName) =>{
	return`*🙅‍♀️ Admin special commands ${groupName} *`
	}
exports.adminB = () =>{
	return`*⚠️ Bots are not group admins*`
	}
exports.err = () =>{
	return`⚠️ *Feature Error !*`
	}
exports.group = () =>{
	return`*🙅‍♀️ Special commands in the group* \n[It Can Be Only Used In Groups]`
	}

exports.wait = () =>{
	return`*⏳ Being processed ~*`
	}
exports.ok = () =>{
	return` *✅ Ok Done ~*`
	}
exports.welcome = (pushname) =>{
	return`
╔═════════════════════════════≽
║
╟≽      *WelcomeBrudha 🤗*
╟≽ *Check Out Bot Features*
╟≽ *Lib : Baileys ^3.5.3* 
╟≽ *Bot Creator : Sachu Settan * 
╟≽ *Total Features : 200+* 
║
╚══《 _Please Obey The Group Rules_》══≽
`
      }
exports.leave = (pushname) =>{
	return`
╔════════≽ 《 *Bye* 》════════════≽
║
╟≽ *Bye 🤲*
╟≽ *Lib : Baileys ^3.5.3* 
╟≽ *Bot Creator : Sachu Settan *  
╟≽ *Total Features : 200+* 
║
╚═══════════════════════════════≽
`
}
exports.menu = (prefix, pushname, botname) =>{
	return`╔══≽ 《 *USER INFO* 》 ══≽
║
╟≽ *Hai, ${pushname} !*
╟≽ *Creator : Sachu Settan * 
╟≽ *Lib : Baileys ^3.5.3* 
╟≽ *Prefix : 「 ${prefix} 」* 
╟≽ *Total Features : 200+* 
║
╚═══≽《*© Rose-Mwol* 》═══≽

╔═══≽《 *List Menu* 》═══≽
║
╟≽ ${prefix}menu
╟≽ ${prefix}help
╟≽ ${prefix}rose
║
╚══≽《 *© Rose-Mwol* 》══≽

╔═══≽《 *Download* 》 ═══≽
║
╟≽ ${prefix}play [Query]
╟≽ ${prefix}song [Query]
╟≽ ${prefix}pinterest [Query]
╟≽ ${prefix}ytmp3 [URL]
╟≽ ${prefix}ytmp4 [URL]
╟≽ ${prefix}tiktok [URL]
╟≽ ${prefix}tiktoknowm [URL]
╟≽ ${prefix}tiktokwm [URL]
╟≽ ${prefix}tiktokaudio [URL]
╟≽ ${prefix}soundcloud [URL]
╟≽ ${prefix}telesticker [URL]
╟≽ ${prefix}spotify [URL]
╟≽ ${prefix}spotifysearch [Query]
╟≽ ${prefix}nhentai [Code]
╟≽ ${prefix}nhentaipdf [Code]
╟≽ ${prefix}nhentaisearch [Query]
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Convert* 》 ═══≽
║
╟≽ ${prefix}stiker [video/image]
╟≽ ${prefix}semoji 😎
╟≽ ${prefix}smeme [text]
╟≽ ${prefix}memegen [text|text2]
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Voice Changer* 》 ═══≽
║
╟≽ ${prefix}fast [video/vn]
╟≽ ${prefix}tupai [video/vn]
╟≽ ${prefix}vibra [video/vn]
╟≽ ${prefix}robot [video/vn]
╟≽ ${prefix}slow [video/vn]
╟≽ ${prefix}bass [video/vn]
╟≽ ${prefix}nightcore [video/vn]
╟≽ ${prefix}smooth [video/vn]
╟≽ ${prefix}earrape [video/vn]
╟≽ ${prefix}redusebg [video/vn]
╟≽ ${prefix}integral [video/vn]
╟≽ ${prefix}echo [video/vn]
╟≽ ${prefix}vib2 [video/vn]
╟≽ ${prefix}ok©e [video/vn]
╟≽ ${prefix}supereq [video/vn]
╟≽ ${prefix}robo2 [video/vn]
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Education* 》 ═══≽
║
╟≽ ${prefix}nuliskiri [text]
╟≽ ${prefix}nuliskanan [text]
╟≽ ${prefix}foliokiri [text]
╟≽ ${prefix}foliokanan [text]
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Maker Ephoto360* 》 ═══≽
║
╟≽ ${prefix}wetglass
╟≽ ${prefix}multicolor3d
╟≽ ${prefix}watercolor
╟≽ ${prefix}luxurygold
╟≽ ${prefix}galaxywallpaper
╟≽ ${prefix}lighttext
╟≽ ${prefix}beautifulflower
╟≽ ${prefix}puppycute
╟≽ ${prefix}royaltext
╟≽ ${prefix}heartshaped
╟≽ ${prefix}birthdaycake
╟≽ ${prefix}galaxystyle
╟≽ ${prefix}hologram3d
╟≽ ${prefix}greenneon
╟≽ ${prefix}glossychrome
╟≽ ${prefix}greenbush
╟≽ ${prefix}metallogo
╟≽ ${prefix}noeltext
╟≽ ${prefix}glittergold
╟≽ ${prefix}textcake
╟≽ ${prefix}starsnight
╟≽ ${prefix}wooden3d
╟≽ ${prefix}text©name
╟≽ ${prefix}writegalacy
╟≽ ${prefix}galaxybat
╟≽ ${prefix}snow3d
╟≽ ${prefix}birthdayday
╟≽ ${prefix}goldplaybutton
╟≽ ${prefix}silverplaybutton
╟≽ ${prefix}freefire
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Maker TextPro* 》 ═══≽
╟≽ ${prefix}blackpink
╟≽ ${prefix}neon
╟≽ ${prefix}greenneon
╟≽ ${prefix}advanceglow
╟≽ ${prefix}futureneon
╟≽ ${prefix}sandwriting
╟≽ ${prefix}sandsummer
╟≽ ${prefix}sandengraved
╟≽ ${prefix}metaldark
╟≽ ${prefix}neonlight
╟≽ ${prefix}holographic
╟≽ ${prefix}text1917
╟≽ ${prefix}minion
╟≽ ${prefix}deluxesilver
╟≽ ${prefix}newyearcard
╟≽ ${prefix}bloodfrosted
╟≽ ${prefix}halloween
╟≽ ${prefix}jokerlogo
╟≽ ${prefix}fireworksparkle
╟≽ ${prefix}natureleaves
╟≽ ${prefix}bokeh
╟≽ ${prefix}toxic
╟≽ ${prefix}strawberry
╟≽ ${prefix}box3d
╟≽ ${prefix}roadwarning
╟≽ ${prefix}breakwall
╟≽ ${prefix}icecold
╟≽ ${prefix}luxury
╟≽ ${prefix}cloud
╟≽ ${prefix}summersand
╟≽ ${prefix}horrorblood
╟≽ ${prefix}thunder
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═════≽《 *Games* 》 ════≽
║
╟≽ ${prefix}tebakgambar 
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《*Anime search* 》 ═══≽
║
╟≽ ${prefix}character [anime]
╟≽ ${prefix}anime [Query]
╟≽ ${prefix}manga [Query]
╟≽ ${prefix}kusonime [Query]
╟≽ ${prefix}kusonimesearch [Query]
╟≽ ${prefix}otakudesu [Query]
╟≽ ${prefix}otakudesusearch [Query] 
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Random text* 》 ═══≽
║
╟≽ ${prefix}pantun 
╟≽ ${prefix}puisi 
╟≽ ${prefix}bucinquote 
╟≽ ${prefix}dilanquote 
╟≽ ${prefix}katasenja 
╟≽ ${prefix}motivational
╟≽ ${prefix}randomquote
╟≽ ${prefix}quotesgalau
╟≽ ${prefix}creepyfact
╟≽ ${prefix}cerpen
╟≽ ${prefix}cersex
╟≽ ${prefix}cersex2
╟≽ ${prefix}huluh [text]
╟≽ ${prefix}hilih [text]
╟≽ ${prefix}heleh [text]
╟≽ ${prefix}halah [text]
╟≽ ${prefix}reversetext [text]
╟≽ ${prefix}cercreepy
╟≽ ${prefix}faktaunik
╟≽ ${prefix}quotetrump
╟≽ ${prefix}animequote
╟≽ ${prefix}animequote2
╟≽ ${prefix}trumpthink
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═════≽《 *Info* 》 ═════≽
║
╟≽ ${prefix}owner
╟≽ ${prefix}register
║
╚═══≽《 *© Rose-Mwol* 》 ═══≽

╔═══≽《 *Owner* 》 ═══≽
║
╟≽ ${prefix}broadcast [text]
╟≽ ${prefix}leave
╟≽ ${prefix}antidelete [on/off]
╟≽ ${prefix}anticall [on/off]
╟≽ >
╟≽ $
╟≽  => 
║
╚═══≽《 *© Rose-Mwol* 》═══≽

╔═══≽《 *Group* 》 ═══≽
║
╟≽ ${prefix}sider [reply pesan bot]
╟≽ ${prefix}listonline
╟≽ ${prefix}delete [reply pesan bot]
╟≽ ${prefix}antilink 1 / 0
╟≽ ${prefix}hidetag [text]
╟≽ ${prefix}linkgrup
╟≽ ${prefix}tagall
╟≽ ${prefix}kick @tag
╟≽ ${prefix}setdesc [text] 
╟≽ ${prefix}setname [text] 
╚═══≽《 *© Rose-Mwol* 》 ═══≽
`
	}
