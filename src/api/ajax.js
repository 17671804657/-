/*
    ajax请求模块
*/
import axios from 'axios'

/**
 *
 * @param {*} url:请求链接
 * @param {*} data ：请求数据
 * @param {*} type ：请求类型，多是get，所以设置默认get类型
 * ajax请求函数模块：返回值promise对象，返回数据为response.data(响应体数据)
 */
export default function ajax (url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        // 执行异步ajax请求
        let promise
        if (type === 'GET') { // 请求方式为get时，正确的请求链接为 url?key=value&key=vale...  下面操作都是拼传
            let dataStr = ''
            Object.keys(data).forEach(key => {
                // dataStr += `${key}=${data[key]}&`
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // post请求
            promise = axios.post(url, data)
        }

        promise.then(response => {
            // 成功回调resolve()
            resolve(response.data)
        }).catch(error => {
            // 失败回调reject()
            reject(error)
        })
    })
}
