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
export function getVirtualData(id) {
    let num = Number(id)
    if (num % 2 == 0) {
        return 1
    } else {
        return 0
    }
}