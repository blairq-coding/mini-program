import { Image, View } from "@tarojs/components"
import Taro from '@tarojs/taro'
import React, { Component, Fragment } from "react"
import { AtButton, AtIcon } from "taro-ui"
import AnimationCurtain from "../../../../../../components/AnimationCurtain"
import './index.scss'

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
    'https://img.laiye.com/checkinAlbum_20200713035533_Ll0XwUjvXV.jpg',
]

export default class Wallpapers extends Component {

    state = {
        hasCheckIn: true,
        showAlert: false,
    }

    handleCustomize(url) {
        Taro.navigateTo({
            url: `/pages/customize/index?url=${encodeURIComponent(url)}`,
        })
    }

    handleClick = (item, type) => {
        if (!this.state.hasCheckIn) {
            this.setState({
                showAlert: true
            })
            return
        }
        switch (type) {
            case 'img':
                this.handleCustomize(item)
            case 'select':
                break
            case 'more':
                break
        }
    }

    handleClose = () => {
        this.setState({
            showAlert: false
        })
    }

    render() {
        const row1 = assets.slice(0, 8)
        const row2 = assets.slice(8)
        return (
            <Fragment>
                <View className='Wallpapers'>
                    <View className='Wallpapers-row'>
                        {
                            row1.map(url => {
                                return (
                                    <View className='Wallpapers-row-item' onClick={this.handleClick.bind(this, url, 'img')}>
                                        <Image src={url} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View className='Wallpapers-row'>
                        <View className='Wallpapers-row-item2' onClick={this.handleClick.bind(this, null, 'select')}>
                            <View><AtIcon value='camera' />自己传图</View>
                        </View>
                        {
                            row2.map(url => {
                                return (
                                    <View className='Wallpapers-row-item' onClick={this.handleClick.bind(this, url, 'img')}>
                                        <Image src={url} />
                                    </View>
                                )
                            })
                        }
                        <View className='Wallpapers-row-item2' onClick={this.handleClick.bind(this, null, 'more')}>
                            <View>更多美图</View>
                        </View>
                    </View>
                </View>
                <AnimationCurtain show={this.state.showAlert}>
                    <View className='Alert'>
                        <AtIcon
                            className='Alert-close'
                            value='close-circle'
                            color='#fff'
                            onClick={this.handleClose}
                        />
                        <View className='Alert-content'>
                            <View>请先完成今日打卡再换底图吧~</View>
                            <AtButton onClick={this.handleClose}>去打卡</AtButton>
                        </View>
                    </View>
                </AnimationCurtain>
            </Fragment>
        )
    }
}