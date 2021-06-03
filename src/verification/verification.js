const validate = {
    "int" : require("./intVerification")
}
function Verification(vals, type) {
    return validate[type](vals);
}
module.exports = Verification;