import { View } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'

export default class Message extends Component {
    render() {
        return (
            <View className='Message'>
                <View>暂时没有任何消息~</View>
            </View>
        )
    }
}