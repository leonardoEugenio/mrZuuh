function intVerification(vals) {
    for (let i = 0; i < vals.length; i++) {
        if (!parseInt(vals[i])) {
            return false 
        }
    }
    return true
}
module.exports = intVerification;