const getMenbersVoice = require("../game/getMenbersVoice");

function play(msg) {
    const users = getMenbersVoice(msg);
    console.log(users);
}
module.exports = play;