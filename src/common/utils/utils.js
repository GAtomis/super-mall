//防抖方法

export function debounce(func, wait) {
    let timer
    return function() {
        let context = this // 注意 this 指向
        let args = arguments // arguments中存着e

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}
// 节流
//节流throttle代码：
export function throttle(fn, delay) {
    let canRun = true // 通过闭包保存一个标记
    return function() {
        // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return
            // 立即设置为false
        canRun = false
            // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => {
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
            // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments)
            canRun = true
        }, delay)
    }
}
export function formatDate(date, fmt) {
    function padLeftZero(str) {
        return ('00' + str).substr(str.length)
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : padLeftZero(str)
            )
        }
    }
    return fmt
}
//虚拟数据工具类
export function getVirtualData(id) {
    let num = Number(id)

    // console.log(id, num % 2)

    if (num % 2 == 0) {
        return 1
    } else {
        return 0
    }
}
//三个参数 目标元素距离顶部的数值,可选的目标偏移量,目标本地储存的定时器变量this
export function scrollMoving(key, num = 0, tag) {
    console.log(key)

    const that = tag
    if (that.timer) clearInterval(that.timer)
    let numb = key == 0 ? 0 : num
        //视口偏移量
    const value = key + numb
    console.log(value)

    // 当前视口高度
    let Top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
        // console.log(key, document.documentElement.scrollTop);
        // 视口高度从下至上拖动
    if (Top > value) {
        that.timer = setInterval(() => {
            Top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop

            let ispeed = Math.floor(-(Top - value) / 10)

            if (document.documentElement.scrollTop == value) {
                clearInterval(that.timer)
                    // console.log(document.documentElement.scrollTop);
            } else {
                document.documentElement.scrollTop =
                    document.documentElement.scrollTop + ispeed
            }
        }, 10)
    } else if (Top < value) {
        //视口高度上至下

        that.timer = setInterval(() => {
            Top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
            let ispeed = Math.floor((value - Top) / 10)
                // console.log(ispeed);
                // if ((value - ispeed) < document.documentElement.scrollTop) {
                //     ispeed = 1
                // console.log("上至下");
                // console.log(ispeed);
            if (!ispeed) ispeed += 1

            // }

            if (document.documentElement.scrollTop == value) {
                clearInterval(that.timer)
                    // console.log(document.documentElement.scrollTop);
            } else {
                document.documentElement.scrollTop =
                    document.documentElement.scrollTop + ispeed
            }
        }, 16)
    }
}
export function backTop(tag) {
    const that = tag
    let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 10)
        document.documentElement.scrollTop = document.body.scrollTop =
            that.scrollTop + ispeed
        if (that.scrollTop === 0) {
            clearInterval(timer)
        }
    }, 16)
}