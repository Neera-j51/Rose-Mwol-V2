exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Hi ${pushname} You Haven't Registered Yet. Type .register First`
	}
exports.regis = () =>{
	return` You Have Registered 😒`
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
	return` 🙅‍♀️ Owner's special command ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Admin special commands ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bots are not group admins`
	}
exports.err = () =>{
	return`⚠️ This feature is in error !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Being processed ~`
	}
exports.ok = () =>{
	return` ✅ Ok Done ~`
	}
exports.welcome = () =>{
	return`Don't forget the intro ~
⌯ָ   ֙ Name :
⌯ָ   ֙ Age :
⌯ָ   ֙ Kelamin :
⌯ָ   ֙ Askot :
╰─ ᝬ _Please The Group Rules_  >_<`
      }
exports.leave = () =>{
	return`
⌯ָ   ֙ Name :
⌯ָ   ֙ Age :
⌯ָ   ֙ Kelamin :
⌯ָ   ֙ Askot :
╰─ ᝬ _Back Again Admin Permission Required_ >_<`
}
exports.menu = (prefix, pushname, ownername, githubid, botname, privateanno) =>{
	return`╒═══≽ 《 * ${botname} * 》═══≽
│
├≽ *Creator : ${ownername} * 
├≽ *Lib : Baileys ^3.5.3* 
├≽ *Prefix : 「 ${prefix} 」* 
├≽ *Total Features : 200+* 
├≽ *Github : 「 ${githubid} 」*
│
╘═══ 《 *© ${ownername} * 》═══≽

╒══≽ 《 *USER INFO* 》 ══≽
│
├≽ *Hai, ${pushname} !*
├≽ *BOT IS ${privateanno} *
│
╘══ 《 *© ${ownername} * 》══≽

╒═══≽《 *List Menu* 》═══≽
│
├≽ ${prefix}menu
├≽ ${prefix}help
├≽ ${prefix}rose
│
╘══ 《 *© ${ownername} * 》══≽

╒═══≽《 *Download* 》 ═══≽
│
├≽ ${prefix}play [query]
├≽ ${prefix}song [judul lagu]
├≽ ${prefix}pinterest [query]
├≽ ${prefix}ytmp3 [url]
├≽ ${prefix}ytmp4 [url]
├≽ ${prefix}tiktok [url]
├≽ ${prefix}tiktoknowm [url]
├≽ ${prefix}tiktokwm [url]
├≽ ${prefix}tiktokaudio [url]
├≽ ${prefix}soundcloud [url]
├≽ ${prefix}telesticker [url]
├≽ ${prefix}spotify [url]
├≽ ${prefix}spotifysearch [query]
├≽ ${prefix}nhentai [code]
├≽ ${prefix}nhentaipdf [code]
├≽ ${prefix}nhentaisearch [query]
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Convert* 》 ═══≽
│
├≽ ${prefix}stiker [video/image]
├≽ ${prefix}semoji 😎
├≽ ${prefix}smeme [text]
├≽ ${prefix}memegen [text|text2]
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Voice Changer* 》 ═══≽
│
├≽ ${prefix}fast [video/vn]
├≽ ${prefix}tupai [video/vn]
├≽ ${prefix}vibra [video/vn]
├≽ ${prefix}robot [video/vn]
├≽ ${prefix}slow [video/vn]
├≽ ${prefix}bass [video/vn]
├≽ ${prefix}nightcore [video/vn]
├≽ ${prefix}smooth [video/vn]
├≽ ${prefix}earrape [video/vn]
├≽ ${prefix}redusebg [video/vn]
├≽ ${prefix}integral [video/vn]
├≽ ${prefix}echo [video/vn]
├≽ ${prefix}vib2 [video/vn]
├≽ ${prefix}ok©e [video/vn]
├≽ ${prefix}supereq [video/vn]
├≽ ${prefix}robo2 [video/vn]
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Education* 》 ═══≽
│
├≽ ${prefix}nuliskiri [text]
├≽ ${prefix}nuliskanan [text]
├≽ ${prefix}foliokiri [text]
├≽ ${prefix}foliokanan [text]
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Maker Ephoto360* 》 ═══≽
│
├≽ ${prefix}wetglass
├≽ ${prefix}multicolor3d
├≽ ${prefix}watercolor
├≽ ${prefix}luxurygold
├≽ ${prefix}galaxywallpaper
├≽ ${prefix}lighttext
├≽ ${prefix}beautifulflower
├≽ ${prefix}puppycute
├≽ ${prefix}royaltext
├≽ ${prefix}heartshaped
├≽ ${prefix}birthdaycake
├≽ ${prefix}galaxystyle
├≽ ${prefix}hologram3d
├≽ ${prefix}greenneon
├≽ ${prefix}glossychrome
├≽ ${prefix}greenbush
├≽ ${prefix}metallogo
├≽ ${prefix}noeltext
├≽ ${prefix}glittergold
├≽ ${prefix}textcake
├≽ ${prefix}starsnight
├≽ ${prefix}wooden3d
├≽ ${prefix}text©name
├≽ ${prefix}writegalacy
├≽ ${prefix}galaxybat
├≽ ${prefix}snow3d
├≽ ${prefix}birthdayday
├≽ ${prefix}goldplaybutton
├≽ ${prefix}silverplaybutton
├≽ ${prefix}freefire
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Maker TextPro* 》 ═══≽
├≽ ${prefix}blackpink
├≽ ${prefix}neon
├≽ ${prefix}greenneon
├≽ ${prefix}advanceglow
├≽ ${prefix}futureneon
├≽ ${prefix}sandwriting
├≽ ${prefix}sandsummer
├≽ ${prefix}sandengraved
├≽ ${prefix}metaldark
├≽ ${prefix}neonlight
├≽ ${prefix}holographic
├≽ ${prefix}text1917
├≽ ${prefix}minion
├≽ ${prefix}deluxesilver
├≽ ${prefix}newyearcard
├≽ ${prefix}bloodfrosted
├≽ ${prefix}halloween
├≽ ${prefix}jokerlogo
├≽ ${prefix}fireworksparkle
├≽ ${prefix}natureleaves
├≽ ${prefix}bokeh
├≽ ${prefix}toxic
├≽ ${prefix}strawberry
├≽ ${prefix}box3d
├≽ ${prefix}roadwarning
├≽ ${prefix}breakwall
├≽ ${prefix}icecold
├≽ ${prefix}luxury
├≽ ${prefix}cloud
├≽ ${prefix}summersand
├≽ ${prefix}horrorblood
├≽ ${prefix}thunder
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Game* 》 ═══≽
│
├≽ ${prefix}tebakgambar 
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《*Anime search* 》 ═══≽
│
├≽ ${prefix}character [anime]
├≽ ${prefix}anime [query]
├≽ ${prefix}manga [query]
├≽ ${prefix}kusonime [query]
├≽ ${prefix}kusonimesearch [query]
├≽ ${prefix}otakudesu [query]
├≽ ${prefix}otakudesusearch [query] 
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Random text* 》 ═══≽
│
├≽ ${prefix}pantun 
├≽ ${prefix}puisi 
├≽ ${prefix}bucinquote 
├≽ ${prefix}dilanquote 
├≽ ${prefix}katasenja 
├≽ ${prefix}motivational
├≽ ${prefix}randomquote
├≽ ${prefix}quotesgalau
├≽ ${prefix}creepyfact
├≽ ${prefix}cerpen
├≽ ${prefix}cersex
├≽ ${prefix}cersex2
├≽ ${prefix}huluh [text]
├≽ ${prefix}hilih [text]
├≽ ${prefix}heleh [text]
├≽ ${prefix}halah [text]
├≽ ${prefix}reversetext [text]
├≽ ${prefix}cercreepy
├≽ ${prefix}faktaunik
├≽ ${prefix}quotetrump
├≽ ${prefix}animequote
├≽ ${prefix}animequote2
├≽ ${prefix}trumpthink
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Info* 》 ═══≽
│
├≽ ${prefix}owner
├≽ ${prefix}register
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Owner* 》 ═══≽
│
├≽ ${prefix}broadcast [text]
├≽ ${prefix}leave
├≽ ${prefix}antidelete [on/off]
├≽ ${prefix}anticall [on/off]
├≽ >
├≽ $
├≽  => 
│
╘═══ 《 *© ${ownername} * 》 ═══≽

╒═══≽《 *Group* 》 ═══≽
│
├≽ ${prefix}sider [reply pesan bot]
├≽ ${prefix}listonline
├≽ ${prefix}delete [reply pesan bot]
├≽ ${prefix}antilink 1 / 0
├≽ ${prefix}hidetag [text]
├≽ ${prefix}linkgrup
├≽ ${prefix}tagall
├≽ ${prefix}kick @tag
├≽ ${prefix}setdesc [text] 
├≽ ${prefix}setname [text] 
╘═══ 《 *© ${ownername} * 》 ═══≽
`
	}
