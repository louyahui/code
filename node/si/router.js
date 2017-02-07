function router (handle,pathname,res) {
    console.log("你的路由"+pathname);
    if (typeof handle[pathname]==='function') {
        return handle[pathname](res);
    }else{
        console.log("需求路由错误！");
        
        res.writeHeader(404,{"Content-Type":"text/plain"});
        res.write("404 NOT Found");
        res.end();
    }
}
exports.router = router;