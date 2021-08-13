export default class ExampleReposity {

  /**
   * 外部请求
   * 地址需要在微信小程序后台有配置
   */
  static fetchOuter() {
    return global.fetchApi('http://www.httpbin.org/get')
      .then(data => {
        // 数据处理，如状态码的拦截
        return data
      })
  }

  /**
   * 内部请求
   */
  static fetchInner() {
    return global.fetchApi('/wx/some/inner/path')
      .then(data => {
        // 数据处理，如状态码的拦截
        return data
      })
  }
}
