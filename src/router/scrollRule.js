import router from './index.js'



var routerArr = ["/home"]

router.afterEach(() => {

    // console.log(routerArr.indexOf(router.history.current.path))

    //小于0说明在数组中找不到其索引值，即其不在此数组中。
    if (routerArr.indexOf(router.history.current.path) < 0) {
        window.scrollTo(0, 0);
    } else {
        console.log("不滚动到顶部");
    }

})