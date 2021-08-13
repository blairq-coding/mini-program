import Taro from '@tarojs/taro'

const apiPrefix = {
    dev: 'https://wetest2.utools.club',
    pro: '',
}

export default function fetchApi(path, data, method = "GET", header) {
    let url
    if (path.startsWith('http')) {
        // 外部请求
        url = path
    } else {
        url = process.env.NODE_ENV === 'development' ? `${apiPrefix.dev}${path}` : `${apiPrefix.pro}${path}`
    }
    header = {
        'content-type': 'application/json',
        ...header
    }

    if (global.cmsToken) {
        header['X-Auth-Token'] = global.cmsToken;
    }
    return Taro.request({ url, data, header, method }).then(fetchData => {
        if (fetchData.statusCode === 200 && fetchData.data && fetchData.data.error && fetchData.data.error.error_code === 0) {
            return Promise.resolve(fetchData.data.data)
        } else {
            return Promise.reject(fetchData)
        }
    }).catch((err) => {
        Taro.showToast({
            title: err.data && err.data.message || err.message || err.msg || err.errMsg || '接口报错,请稍后再试...',
            icon: 'none',
            duration: 2000
        })
    })
}
