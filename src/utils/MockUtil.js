export default class {
    static commonErrMsg =  {
        "error_code": 0,
        "error_name": "",
        "error_detail": ""
    }

    static delay2s(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    error: this.commonErrMsg,
                    data,
                })
            }, 2000)
        })
    }

    static nTimes(times = 1, data) {
        return new Array(times).fill(data)
    }
}