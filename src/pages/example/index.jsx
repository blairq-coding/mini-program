// eslint-disable-next-line no-unused-vars
import { View } from '@tarojs/components';
import React, { Component } from 'react';
import ExampleReposity from '../../repository/ExampleReposity';
import './index.scss'

export default class ExamplePage extends Component {

  state = {
    isReady: false, // 数据加载成功的状态，可以配合（1）避免页面的重复渲染
    data: {}, // 接口请求数据
  }

  /**
   * 生命周期方法，可以安全的在这里调用接口请求
   */
  componentDidMount() {
    this.fetchData()
    this.timer = setInterval(() => {
      console.log(new Date().toUTCString())
    }, 200)
  }

  /**
   * 生命周期方法，可以处理组件取消挂载后的操作，如将定时器移除
   */
  componentWillUnmount() {
    // 定时器一定记得清除，不然有可能会造成内存泄露
    clearInterval(this.timer)
  }

  fetchData = () => {
    // 通过调用 reposity 暴露的静态方法请求数据接口拉取数据
    // 强烈不建议直接调用 fetchApi
    ExampleReposity.fetchOuter()
      .then(data => {
        this.setState({
          data: data,
          isReady: true,
        })
      })
  }

  render() {
    // （1）
    if (!this.state.isReady) return null
    return (
      <View className='ExamplePage'>
        {
          Object.entries(this.state.data.headers)
            .map((item, index) => {
              return (
                <View key={index} className='ExamplePage-item'>{item[0]}{item[1]}</View>
              )
            })
        }
      </View>
    )
  }
}
