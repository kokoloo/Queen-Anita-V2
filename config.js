//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263717869574";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dIQzhrQUREQnZCdEl1UHIwZWdEZW1CTjRQMTllSXI5RUxGS05jam1scz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZIMGJlRUJVelBOR25VVzVVZjdvdHg1Q0JSMVo5S0tKWkNRMTlvRmNYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRDRXdXU2bjNyWlBVMU5oMFhURFovOTBmenFYWi82K3NWdkVUSGhwUG1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3YnhrQ0xwaXd5NUsrbmFCMXZEMk1lL01KSzZlRTRqWSt3d1lHcm83bEJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMbjN4NWFreXJQbzZibktCcUV4MTF1bFJKZHlIZlFqK2Z1QW5SVEFDM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhqR3k5dW4xd29SeXh2aXY4eUxIelE5aVdXb1ZWMVk0V0FQVFV6RlBPU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VSOTZMSlNKZFFlK3NxdTBoZDZCb1cyeE83cjRGVFA1K0xLdVdqQ1MzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFNYZDVtMTh4cTEybk92M05haTdjR0RZQTIxQ3lBUmdIS0V6eVVXODV3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN4amdiTURXWEMxbW44ckxzOUdlWjcxMkRqTTN5VG5JdzNiK3NzSzRQaHpha0REc3BPUkltaGl6S1ZVQk9uTnUwaXRKUmRyWm5xZFlPdy8ydWFWSmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJIUUNoL2xVTVZlZkJlTDluR1l2S0tteHFxbFI5WXNsdWlQUVdiN2Faa0ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6dS1YWFdSUVQ1LTNpcEJ5WTRSaWJ3IiwicGhvbmVJZCI6IjQ0ZWNkM2Q4LTNjYzYtNDM3MC05MzJiLTQzZTg1ZmNjMjc0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmZPWEFoOWNWK2pROStmcFRtejJIa1FtUm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUR6ZE5taDY0VGtzYVc5MFNaQ1VSeGtlQXZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBTM1QxUVFGIiwibWUiOnsiaWQiOiIyNjM3MTc4Njk1NzQ6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGlsbmVtIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdVZrdG9ERU5ieitMY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDNE9qUkdzVlpzRkJNL0xLeUcwV3Z2NmlteWg2ZVpTT3RCRjJBemdVa2lrPSIsImFjY291bnRTaWduYXR1cmUiOiJDY0w4emdreWltTEx5a3VEQlJOT212UDBDMDJSTzJqdEZiMVJiNElzQUZ3eTdXdy9tNHg5dzZITHRja0s5eTlwcW1WelZsNTlWa0VqQUpiQkVtdzFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic3hQeitEMzN2T0psYzBwU1JwQUlZa2lDbEZEdGs0dVNxQ3pxSXlVVXdid0V3L29QR3ZhSlVTU2p5dE1uMkYxcHFmVE5vRWQ2b29zK0s4c1RkbTFuaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTc4Njk1NzQ6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXVEbzBSckZXYkJRVFB5eXNodEZyNytvcHNvZW5tVWpyUVJkZ000RkpJcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzkzNjk5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSDcifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "LIL_NEM-V2",
  ownername: process.env.OWNER_NAME || "Lil hacker",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
