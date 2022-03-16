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

Thanks, I've registered,
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
╰─ ᝬ _Obey The Group Rules_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Back Again Required Donation Yes_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}rose
│
├ *Download*
│
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│ • ${prefix}spotify [url]
│ • ${prefix}spotifysearch [query]
│ • ${prefix}nhentai [code]
│ • ${prefix}nhentaipdf [code]
│ • ${prefix}nhentaisearch [query]
│
├ *Convert*
│
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│
├ *Voice Changer*
│
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│ • ${prefix}smooth [video/vn]
│ • ${prefix}earrape [video/vn]
│
├ *Education*
│
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│
├ *For wibu*
│
│ • ${prefix}nami 
│ • ${prefix}copper 
│ • ${prefix}naruto  
│ • ${prefix}zoro 
│ • ${prefix}ussop 
│ • ${prefix}minato 
│ • ${prefix}sasuke 
│ • ${prefix}sakura
│ • ${prefix}luffy 
│ • ${prefix}sanji  
│ • ${prefix}boruto 
│ • ${prefix}sarada 
│ • ${prefix}mitsuki 
│ • ${prefix}orochimaru 
│ • ${prefix}tsunade 
│ • ${prefix}kakashi 
│ • ${prefix}killua 
│ • ${prefix}gon 
│ • ${prefix}rimuru 
│ • ${prefix}sagiri 
│ • ${prefix}natsu 
│ • ${prefix}tanjirou 
│ • ${prefix}nezuko 
│ • ${prefix}senku
│
├ *Maker Ephoto360*
│
│ • ${prefix}wetglass
│ • ${prefix}multicolor3d
│ • ${prefix}watercolor
│ • ${prefix}luxurygold
│ • ${prefix}galaxywallpaper
│ • ${prefix}lighttext
│ • ${prefix}beautifulflower
│ • ${prefix}puppycute
│ • ${prefix}royaltext
│ • ${prefix}heartshaped
│ • ${prefix}birthdaycake
│ • ${prefix}galaxystyle
│ • ${prefix}hologram3d
│ • ${prefix}greenneon
│ • ${prefix}glossychrome
│ • ${prefix}greenbush
│ • ${prefix}metallogo
│ • ${prefix}noeltext
│ • ${prefix}glittergold
│ • ${prefix}textcake
│ • ${prefix}starsnight
│ • ${prefix}wooden3d
│ • ${prefix}textbyname
│ • ${prefix}writegalacy
│ • ${prefix}galaxybat
│ • ${prefix}snow3d
│ • ${prefix}birthdayday
│ • ${prefix}goldplaybutton
│ • ${prefix}silverplaybutton
│ • ${prefix}freefire
│
├ *Game*
│
│ • ${prefix}tebakgambar 
│
├ *Anime search*
│
│ • ${prefix}character [anime]
│ • ${prefix}anime [query]
│ • ${prefix}manga [query]
│ • ${prefix}kusonime [query]
│ • ${prefix}kusonimesearch [query]
│ • ${prefix}otakudesu [query]
│ • ${prefix}otakudesusearch [query] 
│
├ *Random text*
│
│ • ${prefix}pantun 
│ • ${prefix}puisi 
│ • ${prefix}bucinquote 
│ • ${prefix}dilanquote 
│ • ${prefix}katasenja 
│ • ${prefix}motivational
│ • ${prefix}randomquote
│ • ${prefix}quotesgalau
│ • ${prefix}creepyfact
│ • ${prefix}cerpen
│ • ${prefix}cersex
│ • ${prefix}cersex2
│ • ${prefix}huluh [text]
│ • ${prefix}hilih [text]
│ • ${prefix}heleh [text]
│ • ${prefix}halah [text]
│ • ${prefix}reversetext [text]
│ • ${prefix}cercreepy
│ • ${prefix}faktaunik
│ • ${prefix}quotetrump
│ • ${prefix}animequote
│ • ${prefix}animequote2
│ • ${prefix}trumpthink
│
├ *Info*
│
│ • ${prefix}owner
│ • ${prefix}register
│
├ *Owner*
│
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • ${prefix}antidelete [on/off]
│ • ${prefix}anticall [on/off]
│ • >
│ • $
│ •  => 
│
├ *Group*
│
│ • ${prefix}sider [reply pesan bot]
│ • ${prefix}listonline
│ • ${prefix}delete [reply pesan bot]
│ • ${prefix}antilink 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}