const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};


// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = 'Mr Hacker Lordz';
global.owner = ['2348184059232'];
global.premium = ['2348184059232'];
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = '🤖MrHackerLordz👾';
global.sessionName = 'session';
global.prefa = ['', '!', '.'];
global.sp = '✪';
global.mess = {
    success: '```✓ Success```',
    admin: '```This feature is only for group admins```',
    botAdmin: '```I am not an admin!```',
    owner: '```You are not my owner```',
    group: '```You can use this command only in groups ❌```',
    private: '```Feature is used only for private chats!```',
    bot: '```Bot number user special features```',
    wait: '*Processing Your request*',
    endLimit: '```Your daily limit has expired, the limit will be reset every 12 hours```',
};
global.link = 'https://whatsapp.com/channel/0029VaFNrVHBfxoBuY2TzH2w'
global.linkGroup = 'https://chat.whatsapp.com/E3PWxdvLc7ZCp1ExOCkEGp'
global.autoblok212 = true
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
