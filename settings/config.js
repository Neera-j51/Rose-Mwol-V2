const fs = require('fs')
const chalk = require('chalk')

// Self or Public

global.self = false // Private Bot Or Public
global.anticall = false // Anti Call On Or Off
global.anti_delete = false // Anti Delete On Or Off

// Settings
global.ownername ="Sachu-Settan" // Owner Name
global.ownernumber = "919744933034" // Owner Number
global.botname = "Rose-Mwol-V2" // Bot Name
global.thumbnail = fs.readFileSync("./settings/rose.jpg") //bot photo
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg" //Background Pic 
global.lolkey = 'e966d3aac613b61dabd35cc6' // Register Api @lolhuman.xyz
global.zenzkey = '8423e19c13' // Register  Api @zenzapi.xyz
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})