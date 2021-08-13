import { Image, View } from "@tarojs/components"
import { getCurrentInstance } from '@tarojs/taro'
import React, { Component } from "react"
import Preview from "./components/Preview"
import Workbench from "./components/Workbench"
import './index.scss'

export default class extends Component {

    state = {
        checkInImage: null,
        ready: false,
        customItems: {},
    }

    componentDidMount() {
        const params = getCurrentInstance().router.params
        this.setState({
            checkInImage: decodeURIComponent(params.url),
            ready: true,
        })
    }

    onChange = (customItems) => {
        this.setState({
            customItems
        })
    }

    render() {
        if (!this.state.ready) return null
        return (
            <View className='Customize'>
                <Preview
                    className='Customize-preview'
                    checkInImage={this.state.checkInImage}
                    checkInTime={new Date('2020-10-18 08:00')}
                    days={0}
                    text={'积极的人;在每一次忧患中都看到一个机会'}
                    qrCodeImage={''}
                    {...this.state.customItems}
                />
                <Workbench
                    className='Customize-workbench'
                    onChange={this.onChange}
                />
            </View>
        )
    }
}