exports.getAppropriateAnswer = function (incomingIntent, callback = undefined) {
    if (callback) {
        callback(false);
    } else {
        return false;
    }
}