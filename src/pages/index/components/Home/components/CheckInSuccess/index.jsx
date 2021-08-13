import { Image, Text, View } from '@tarojs/components'
import React from 'react'
import { AtButton, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import AnimationCurtain from '../../../../../../components/AnimationCurtain'
import './index.scss'


/** 
 * @param {Object} props
 * @param {Boolean} props.show
 * @param {() void} [props.onClose]
 */
export default (props) => {

    const checkInImage = 'https://img.laiye.com/checkin_v5_20201018_1_23784083.jpeg'

    const handleSave = () => {
        Taro.downloadFile({
            url: checkInImage, 
            success: (result) => {
                Taro.saveImageToPhotosAlbum({
                    filePath: result.tempFilePath
                }).then(value => {
                    Taro.showToast({ title: '保存成功', icon: 'none' })
                }).catch(error => {
                    if (error && error.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
                        Taro.showToast({
                            title: '请检查权限“保存至相册”',
                            icon: 'none',
                        })
                    } else {
                        Taro.showToast({
                            title: '图片保存失败',
                            icon: 'none',
                        })
                    }
                })
            },
            fail: (res) => {
                Taro.showToast({
                    title: '图片保存失败',
                    icon: 'none',
                })
            }
        })
    }

    return (
        <AnimationCurtain className='CheckInSuccess' show={props.show}>
            <View className="CheckInSuccess-image">
                <Image src={checkInImage} />
                <AtIcon
                    value='close-circle'
                    color='#fff'
                    onClick={props.onClose}
                />
            </View>
            <View className="CheckInSuccess-buttons">
                <AtButton onClick={handleSave}>
                    <AtIcon value='download' />
                    <Text>保存图片</Text>
                </AtButton>
                <AtButton 
                    type='primary'
                    openType='share'
                    onShare={console.log}
                >
                    <View className='icon-wechat' />
                    <Text>发给好友</Text>
                </AtButton>
            </View>
        </AnimationCurtain>
    )
}