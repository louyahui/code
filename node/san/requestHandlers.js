function start () {
    console.log("start running");
    return "hello start"
}
function upload () {
    console.log("upload running");
    return "hello upload"
}
exports.start = start;
exports.upload = upload;