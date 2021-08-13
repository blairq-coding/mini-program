import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import PageContainer from '../../components/PageContainer'
import Fortune from './components/Fortune'
import Home from './components/Home'
import User from './components/User'
import './index.scss'

export default class Index extends Component {

  state = {
    tabIndex: 0,
    refresh: false
  }

  constructor(props) {
    super(props)

    this.tabs = [
      Home,
      Fortune,
      User
    ]
  }

  componentDidMount() {
    // no op
  }

  onPullDownRefresh() {
    console.log('refresh')
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 2000)
  }

  onShareAppMessage(res) {
    return {
      title: '遍历山河，觉得人间值得。早安 ~',
      path: `/pages/index/index`
    }
  }

  render() {
    const {
      tabIndex
    } = this.state

    const Component = this.tabs[tabIndex]
    return (
      <PageContainer
        defaultTabIndex={tabIndex}
        className="IndexPage"
        onTabChange={(tabIndex) => {
          this.setState({ tabIndex })
        }}
      >
        <Component />
      </PageContainer>
    )
  }
}
