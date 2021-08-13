import { OpenData, View } from "@tarojs/components"
import Taro from '@tarojs/taro'
import React, { Component } from "react"
import { AtIcon } from "taro-ui"
import './index.scss'

export default class User extends Component {

    constructor(props) {
        super(props)
        this.pages = [
            '/pages/message/index',
            '/pages/message/index',
            '/pages/message/index',
        ]
    }


    handleItemClick = (index) => {
        Taro.navigateTo({
            url: this.pages[index]
        })
    }

    render() {
        return (
            <View className='User'>
                <View className='User-header'>
                    <OpenData className='User-header-avatar' type='userAvatarUrl' />
                    <OpenData className='User-header-nickname' type='userNickName' />
                </View>
                <View className='User-content'>
                    <View onClick={this.handleItemClick.bind(this, 0)}>
                        <AtIcon value='message' />
                        <View>消息</View>
                        <AtIcon value='chevron-right' />
                    </View>
                    <View onClick={this.handleItemClick.bind(this, 0)}>
                        <AtIcon value='star' />
                        <View>关注</View>
                        <AtIcon value='chevron-right' />
                    </View>
                    <View onClick={this.handleItemClick.bind(this, 0)}>
                        <AtIcon value='heart' />
                        <View>获赞</View>
                        <AtIcon value='chevron-right' />
                    </View>
                </View>
            </View>
        )
    }
}