exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Sorry ${pushname} Your limit has run out, *please wait until 24:00* so you can use the bot again!`
}
exports.noregis = (pushname) =>{
	return` Hello ${pushname} You are not registered, please type .register`
	}
exports.regis = () =>{
	return`*REJECT* | You are already registered`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *REGISTRATION SUCCEED*

 • Nama : _${pushname}_
 • Nomor : _${sender.split("@")[0]}_
 • Waktu : _${time}_
 • Serial : _${serialUser}_
 • Total User : _${totalUser.length}_

Thanks, already registered, now type .menu to view
bot features
`
katalog(daftar)
	}
exports.owner = (botname) =>{
	return`*REJECT* | Only Owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`*REJECT* | This command Only Groups admin ${groupName}`
	}
exports.adminB = () =>{
	return`*REJECT* | Bot not admin!`
	}
exports.err = () =>{
	return`*REJECT* | This feature is in error!`
	}
exports.group = () =>{
	return`*REJECT* | This command Only Groups admin `
	}

exports.wait = () =>{
	return`📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆`
	}
exports.ok = () =>{
	return`here`
	}
exports.welcome = () =>{
	return`*Dont forget the intro*
    Nama :
    Umur :
    Kelamin :
    Askot :

 *Read the description of the Group Yes* >_<`
      }
exports.leave = () =>{
	return`
 _Back again should donation_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
return`Hi ${pushname}, safe ${salam}

 *Play Menu*
 _• ${prefix}menu_
 _• ${prefix}help_
 _• ${prefix}Bot_

 *Download*
 _• ${prefix}play [query]_
 _• ${prefix}song [judul lagu]_
 _• ${prefix}pinterest [query]_
 _• ${prefix}ytmp3 [url]_
 _• ${prefix}ytmp4 [url]_
 _• ${prefix}tiktok [url]_
 _• ${prefix}tiktoknowm [url]_
 _• ${prefix}tiktokwm [url]_
 _• ${prefix}tiktokaudio [url]_
 _• ${prefix}soundcloud [url]_
 _• ${prefix}telesticker [url]_
 _• ${prefix}mediafire [url]_

 *Convert*
 _• ${prefix}stiker [video/image]_
 _• ${prefix}semoji 😎_
 _• ${prefix}smeme [text]_
 _• ${prefix}memegen [text|text2]_
 _• ${prefix}fast [video/vn]_
 _• ${prefix}tupai [video/vn]_
 _• ${prefix}vibra [video/vn]_
 _• ${prefix}robot [video/vn]_
 _• ${prefix}slow [video/vn]_
 _• ${prefix}bass [video/vn]_
 _• ${prefix}nightcore [video/vn]_

 *Nulis*
 _• ${prefix}nuliskiri [text]_
 _• ${prefix}nuliskanan [text]_
 _• ${prefix}foliokiri [text]_
 _• ${prefix}foliokanan [text]_
 
 *Maker*
 _• ${prefix}metaldark_
 _• ${prefix}greenneon_
 _• ${prefix}neon_
 _• ${prefix}spalking_
 _• ${prefix}holographic_
 _• ${prefix}blackpink_ 
 _• ${prefix}glitch_ 
 _• ${prefix}carbon_
 _• ${prefix}bread_ 
 _• ${prefix}ninjalogo_
 _• ${prefix}dropwater_
 _• ${prefix}marble_
 _• ${prefix}scifi_ 
 _• ${prefix}blackmetal_      
         
 *Game*
 _• ${prefix}tebakgambar_

 *Info*
 _• ${prefix}owner_
 _• ${prefix}daftar_

 *Owner*
 _• ${prefix}broadcast [text]_
 _• ${prefix}leave_
 _• ${prefix}autoread on/off_
 _• ${prefix}fakengetik on/off_
 _• ${prefix}autorespon on/off_
 _• ${prefix}addvn replyaudio_
  • >
  • $
  •  =>

 *Group*
 _• ${prefix}antilink 1 / 0_
 _• ${prefix}hidetag [text]_
 _• ${prefix}linkgrup_
 _• ${prefix}tagall_
 _• ${prefix}kick @tag_
 _• ${prefix}setdesc [text]_ 
 _• ${prefix}setname [text]_ 

`
	}