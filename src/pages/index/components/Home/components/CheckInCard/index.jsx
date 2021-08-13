import React from 'react'
import { Image, Text, View } from "@tarojs/components"
import "./index.scss"
import { AtButton } from 'taro-ui'
import LoginWrapper from '../../../../../../components/LoginWrapper'

const assets = [
    'https://img.laiye.com/checkinAlbum_20191229110544_XOHD09Z5AN.jpg',
    'https://img.laiye.com/checkinAlbum_20200727050642_8LFfd6fyGW.jpg',
    'https://img.laiye.com/checkinAlbum_20200814024955_J5uM4dXmJk.jpg',
    'https://img.laiye.com/checkinAlbum_20200623075137_JHetWVcyx5.jpg',
    'https://img.laiye.com/checkinAlbum_20200310060513_KrOYQcMQss.jpg',
    'https://img.laiye.com/checkinAlbum_20191229103922_WmSePYYiUr.jpg',
    'https://img.laiye.com/checkinAlbum_20200317072211_KrjwRmXFC6.jpg',
    'https://img.laiye.com/checkinAlbum_20200713035533_Ll0XwUjvXV.jpg',
    'https://img.laiye.com/checkinAlbum_20200609075531_10L4bF53gy.jpg',
    'https://img.laiye.com/checkinAlbum_20200514050555_63Vz0bDkUU.jpg',
    'https://img.laiye.com/checkinAlbum_20200814024452_JNXe3gaE4u.jpg',
    'https://img.laiye.com/checkinAlbum_20200727050634_91zEj7V8rD.jpg',
    'https://img.laiye.com/checkinAlbum_20191229114753_thkykcJfVg.jpg',
    'https://img.laiye.com/checkinAlbum_20200623075206_t3zoOTXflF.jpg',
]


/** 
 * @param {Object} props
 * @param {String} props.className
 * @param {() void} props.onCheckIn 打卡回调
 */
export default (props) => {

    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    const dayMapping = ['日', '一', '二', '三', '四', '五', '六']
    const day = `星期${dayMapping[d.getDay()]}`

    return (
        <View className="CheckInCard">
            <Image
                className="CheckInCard-image"
                src={assets[0]}
            />
            <View className="CheckInCard-mask" />
            <View className="CheckInCard-date">
                <View>{day}</View>
                <View>{`${year}.${month}.${date}`}</View>
            </View>
            <View className="CheckInCard-verse">
                愿我们眼角永远带笑，岁月不染眉梢。
            </View>
            <LoginWrapper className="CheckInCard-wrapper" onSuccess={props.onCheckIn}>
                <AtButton className="CheckInCard-button" type="primary">
                    <View className="CheckInCard-button-content">
                        <Text>晚安打卡</Text>
                        <Text>（打卡时间20:00 - 3:59）</Text>
                    </View>
                </AtButton>
            </LoginWrapper>
        </View>
    )
}