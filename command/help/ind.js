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
	return`hai kak *${pushname}* silahkan Ketik .daftar dulu untuk mengakses bot`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *REGISTRATION*

• Nama : *${pushname}*
• Nomor : *${sender.split("@")[0]}*
• Waktu : *${time}*
• Serial : *${serialUser}*
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`Gw bukan admin`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`lu admin?`
	}

exports.wait = () =>{
	return`.........`
	}
exports.ok = () =>{
	return` Done`
	}
exports.welcome = () =>{
	return`INTRO DULU
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
`
      }
exports.leave = () =>{
	return`
_Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname, readmore) =>{
	return`
*╭──≽*「 *Hi ${pushname}* 」
*┴*
*┠≽* *List Menu*
*┠≽*  *•*  ${prefix}menu
*┠≽*  *•*  ${prefix}help
*┠≽*  *•*  ${prefix}!
*┃* 
*┠≽* *Group*
*┠≽*  *•*  ${prefix}antilink 1 / 0
*┠≽*  *•*  ${prefix}hidetag [text]
*┠≽*  *•*  ${prefix}linkgrup
*┠≽*  *•*  ${prefix}tagall
*┠≽*  *•*  ${prefix}kick @tag
*┠≽*  *•*  ${prefix}setdesc [text] 
*┠≽*  *•*  ${prefix}setname [text] 
*┃* 
*┠≽* *Download*
*┠≽*  *•*  ${prefix}play [query]
*┠≽*  *•*  ${prefix}song [judul lagu]
*┠≽*  *•*  ${prefix}pinterest [query]
*┠≽*  *•*  ${prefix}ytmp3 [url]
*┠≽*  *•*  ${prefix}ytmp4 [url]
*┠≽*  *•*  ${prefix}tiktok [url]
*┠≽*  *•*  ${prefix}tiktoknowm [url]
*┠≽*  *•*  ${prefix}tiktokwm [url]
*┠≽*  *•*  ${prefix}tiktokaudio [url]
*┠≽*  *•*  ${prefix}soundcloud [url]
*┠≽*  *•*  ${prefix}telesticker [url]
*┠≽*  *•*  ${prefix}spotify [url]
*┠≽*  *•*  ${prefix}spotifysearch [query]
*┠≽*  *•*  ${prefix}nhentai [code]
*┠≽*  *•*  ${prefix}nhentaipdf [code]
*┠≽*  *•*  ${prefix}nhentaisearch [query]
*┃* 
*┠≽* *Islamic*
*┠≽*  *•*  ${prefix}listsurah
*┠≽*  *•*  ${prefix}alquran
*┠≽*  *•*  ${prefix}asmaulhusna
*┠≽*  *•*  ${prefix}kisahnabi
*┠≽*  *•*  ${prefix}alquranaudio
*┠≽*  *•*  ${prefix}jadwalsholat
*┃* 
*┠≽* *Convert*
*┠≽*  *•*  ${prefix}stiker [video/image]
*┠≽*  *•*  ${prefix}semoji 😎
*┠≽*  *•*  ${prefix}smeme [text]
*┠≽*  *•*  ${prefix}memegen [text|text2]
*┠≽*  *•*  ${prefix}fast [video/vn]
*┠≽*  *•*  ${prefix}tupai [video/vn]
*┠≽*  *•*  ${prefix}vibra [video/vn]
*┠≽*  *•*  ${prefix}robot [video/vn]
*┠≽*  *•*  ${prefix}slow [video/vn]
*┠≽*  *•*  ${prefix}bass [video/vn]
*┠≽*  *•*  ${prefix}nightcore [video/vn]
*┃* 
*┠≽* *Education*
*┠≽*  *•*  ${prefix}nuliskiri [text]
*┠≽*  *•*  ${prefix}nuliskanan [text]
*┠≽*  *•*  ${prefix}foliokiri [text]
*┠≽*  *•*  ${prefix}foliokanan [text]
*┃* 
*┠≽* *Maker Ephoto360*
*┠≽*  *•*  ${prefix}wetglass
*┠≽*  *•*  ${prefix}multicolor3d
*┠≽*  *•*  ${prefix}watercolor
*┠≽*  *•*  ${prefix}luxurygold
*┠≽*  *•*  ${prefix}galaxywallpaper
*┠≽*  *•*  ${prefix}lighttext
*┠≽*  *•*  ${prefix}beautifulflower
*┠≽*  *•*  ${prefix}puppycute
*┠≽*  *•*  ${prefix}royaltext
*┠≽*  *•*  ${prefix}heartshaped
*┠≽*  *•*  ${prefix}birthdaycake
*┠≽*  *•*  ${prefix}galaxystyle
*┠≽*  *•*  ${prefix}hologram3d
*┠≽*  *•*  ${prefix}greenneon
*┠≽*  *•*  ${prefix}glossychrome
*┠≽*  *•*  ${prefix}greenbush
*┠≽*  *•*  ${prefix}metallogo
*┠≽*  *•*  ${prefix}noeltext
*┠≽*  *•*  ${prefix}glittergold
*┠≽*  *•*  ${prefix}textcake
*┠≽*  *•*  ${prefix}starsnight
*┠≽*  *•*  ${prefix}wooden3d
*┠≽*  *•*  ${prefix}textbyname
*┠≽*  *•*  ${prefix}writegalacy
*┠≽*  *•*  ${prefix}galaxybat
*┠≽*  *•*  ${prefix}snow3d
*┠≽*  *•*  ${prefix}birthdayday
*┠≽*  *•*  ${prefix}goldplaybutton
*┠≽*  *•*  ${prefix}silverplaybutton
*┠≽*  *•*  ${prefix}freefire
*┃* 
*┠≽* *Maker TextPro*
*┠≽*  *•*  ${prefix}blackpink
*┠≽*  *•*  ${prefix}neon
*┠≽*  *•*  ${prefix}greenneon
*┠≽*  *•*  ${prefix}advanceglow
*┠≽*  *•*  ${prefix}futureneon
*┠≽*  *•*  ${prefix}sandwriting
*┠≽*  *•*  ${prefix}sandsummer
*┠≽*  *•*  ${prefix}sandengraved
*┠≽*  *•*  ${prefix}metaldark
*┠≽*  *•*  ${prefix}neonlight
*┠≽*  *•*  ${prefix}holographic
*┠≽*  *•*  ${prefix}text1917
*┠≽*  *•*  ${prefix}minion
*┠≽*  *•*  ${prefix}deluxesilver
*┠≽*  *•*  ${prefix}newyearcard
*┠≽*  *•*  ${prefix}bloodfrosted
*┠≽*  *•*  ${prefix}halloween
*┠≽*  *•*  ${prefix}jokerlogo
*┠≽*  *•*  ${prefix}fireworksparkle
*┠≽*  *•*  ${prefix}natureleaves
*┠≽*  *•*  ${prefix}bokeh
*┠≽*  *•*  ${prefix}toxic
*┠≽*  *•*  ${prefix}strawberry
*┠≽*  *•*  ${prefix}box3d
*┠≽*  *•*  ${prefix}roadwarning
*┠≽*  *•*  ${prefix}breakwall
*┠≽*  *•*  ${prefix}icecold
*┠≽*  *•*  ${prefix}luxury
*┠≽*  *•*  ${prefix}cloud
*┠≽*  *•*  ${prefix}summersand
*┠≽*  *•*  ${prefix}horrorblood
*┠≽*  *•*  ${prefix}thunder
*┃* 
*┠≽* *Game*
*┠≽*  *•*  ${prefix}tebakgambar 
*┃* 
*┠≽* *Info*
*┠≽*  *•*  ${prefix}owner
*┠≽*  *•*  ${prefix}daftar
*┃* 
*┠≽* *Owner*
*┠≽*  *•*  ${prefix}broadcast [text]
*┠≽*  *•*  ${prefix}leave
*┠≽*  *•*  >
*┠≽*  *•*  $
*┠≽*  *•*   => 
*┬*
*╰────────≽*
`
	}