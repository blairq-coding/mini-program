import React from 'react'
import { View } from "@tarojs/components"
import './index.scss'

export default (props) => {

    const catchEvent = (event) => {
        event.stopPropagation()
    }

    return (
        <View className="CustomModal">
            <View className="CustomModal-mask" />
            <View className="CustomModal-content" onClick={catchEvent}>
                {props.children}
            </View>
        </View>
    )
}