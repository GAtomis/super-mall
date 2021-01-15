class Aromise {
    constructor(executor) {
        //传入构造器
        this.state = 'pending' //状态值
        this.value = undefined //成功的返回值
        this.reason = undefined //失败的返回值
            // 成功
        let resolve = value => {
                if (this.state == 'pending') {
                    this.state = 'fullFilled'
                    this.value = value
                }
            }
            // 失败
        let reject = reason => {
            if (this.state == 'pending') {
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try {
            // 执行函数
            executor(resolve, reject)
        } catch (err) {
            // 失败则直接执行reject函数
            reject(err)
        }
    }
    then(onFullFilled, onRejected) {
        // 状态为fulfuilled，执行onFullFilled，传入成功的值
        if (this.state == 'fullFilled') {
            onFullFilled(this.value)
        }
        // 状态为rejected，执行onRejected，传入失败的值
        if (this.state == 'rejected') {
            onRejected(this.reason)
        }
    }
}

export default Aromise