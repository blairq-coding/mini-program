import { View } from "@tarojs/components"
import React, { Component } from "react"
import { AtTabBar } from "taro-ui"
import "./index.scss"
import classnames from 'classnames'

export default class PageContainer extends Component {

    state = {
        index: 0
    }

    constructor(props) {
        super(props)
        const {
            defaultTabIndex
        } = props
        this.state.index = defaultTabIndex || 0
    }

    handleTabBarClick = (index) => {
        if (index === this.state.index) return
        const {
            onTabChange
        } = this.props
        this.setState({
            index
        }, () => {
            onTabChange && onTabChange(index)
        })
    }

    render() {
        const {
            index
        } = this.state

        const {
            className
        } = this.props

        return (
            <View className={classnames("PageContainer", className)}>
                <View className={classnames("PageContainer-content", `${className}-content`)}>
                    {this.props.children}
                </View>
                <AtTabBar
                    className="PageContainer-tabBar"
                    current={index}
                    tabList={[
                        { title: '早晚安', iconType: 'home' },
                        { title: '今日运势', iconType: 'analytics' },
                        { title: '我的', iconType: 'user' },
                    ]}
                    onClick={this.handleTabBarClick}
                />
            </View>
        )
    }
}