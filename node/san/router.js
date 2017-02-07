function router (handle,pathname) {
    console.log("你的路由"+pathname);
    if (typeof handle[pathname]==='function') {
        return handle[pathname]();
    }else{
        console.log("需求路由错误！");
        return "404 NOT FIND"
    }
}
exports.router = router;