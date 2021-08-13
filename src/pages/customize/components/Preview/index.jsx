import { Image, OpenData, View } from '@tarojs/components'
import classnames from 'classnames'
import React from 'react'
import './index.scss'

/**
 * @param {Object} props
 * @param {String} props.checkInImage
 * @param {String} props.text
 */
export default (props) => {

    const style = { color: '#fff' }

    const t = new Date()

    const year = t.getFullYear()
    const month = t.getMonth() + 1
    const date = t.getDate()

    const texts = props.text.split(';')

    const {
        checkInImage,
    } = props

    return (
        <View className={classnames('Preview', props.className)}>
            <Image className='Preview-image' src={checkInImage} />
            <OpenData className='Preview-avatar' type='userAvatarUrl' />
            <View className='Preview-datas' style={style}>
                <View>今日早起</View>
                <View>08:00</View>
            </View>
            <View className='Preview-texts' style={style}>
                {texts.map((item, index) => {
                    return (
                        <View className='Preview-texts-item' key={index}>{item}</View>
                    )
                })}
            </View>
            <View className='Preview-date' style={style}>
                <View>{date}</View>
                <View className='yearMonth'>{year}.{month}</View>
            </View>
        </View>
    )
}