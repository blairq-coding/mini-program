import { View } from "@tarojs/components"
import React, { Component } from "react"
import CheckInCard from "./components/CheckInCard"
import CheckInSuccess from "./components/CheckInSuccess"
import Wallpapers from "./components/Wallpapers"
import './index.scss'

export default class Home extends Component {
    state = {
        showCheckInSuccess: false
    }

    // 打卡回调
    handleCheckIn = () => {
        this.setState({
            showCheckInSuccess: true
        })
    }

    render() {
        const {
            showCheckInSuccess,
        } = this.state

        return (
            <View className='Home'>
                <CheckInCard onCheckIn={this.handleCheckIn} />
                <View className="Home-title">人气打卡图</View>
                <Wallpapers />
                <CheckInSuccess
                    show={showCheckInSuccess}
                    onClose={() => {
                        this.setState({
                            showCheckInSuccess: false
                        })
                    }}
                />
            </View>
        )
    }
}