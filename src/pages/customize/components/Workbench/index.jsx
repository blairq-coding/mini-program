import { Image, ScrollView, View } from '@tarojs/components'
import classnames from 'classnames'
import React, { Component } from 'react'
import { AtButton, AtCheckbox, AtIcon, AtTabBar } from 'taro-ui'
import CheckInReposity from '../../../../repository/CheckInReposity'
import './index.scss'

export default class extends Component {

    state = {
        index: 0,
        msgs: [
            "大事心不畏，小事心不慢",
            "越努力越快乐，越拼搏越有力",
            "人生必有风险；所以引人入胜亦在于此",
            "不必害怕学习，知识没有重量",
            "未来的你；一定会感谢现在努力的自己",
            "成为自己想成为的人；永远不会太迟",
            "宁可苦一阵子，不要苦一辈子",
            "只要走出第一步；下一步就变得不太难",
            "勤奋，机会，乐观是成功的三要素",
            "读过一本好书，像交了一个好友"
        ],
        images: [],
    }

    constructor(props) {
        super(props)
        this.colors = ['#fff', '#2b2b2b', '#fa5151', '#ffc300', '#07c160', '#10aeff', '#6467ef']
    }

    componentDidMount() {
        this.fetchAlbumList()
    }

    fetchAlbumList() {
        CheckInReposity.getCheckInAlbumList()
            .then(data => {
                this.setState({ images: data })
            })
    }

    handleTabBarChange = (index) => {
        this.setState({ index })
    }

    buildImageView = () => {
        return (
            <ScrollView className='Workbench-imageView' scrollY>
                <View className='Workbench-imageView-content'>
                    <View>
                        <View className='upload'>
                            <View><AtIcon value='camera' color='currentColor' />自己传</View>
                        </View>
                    </View>
                    {
                        this.state.images.map((item, index) => {
                            return (
                                <View>
                                    <Image src={item.img_url} />
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }

    buildTextView = () => {
        return (
            <View className='Workbench-textView'>
                <View className='Workbench-textView-header'>
                    <View className='item-left'>推荐</View>
                    <View className='colorPicker'>
                        {this.colors.map((item, index) => {
                            return (
                                <View className='colorPicker-item' key={index} style={{ color: item }} />
                            )
                        })}
                    </View>
                    <View className='item-right'>自己写<AtIcon value='add' size={12} color='currentColor' /></View>
                </View>
                <ScrollView className='Workbench-textView-content' scrollY>
                    <AtCheckbox options={this.state.msgs.map(item => ({ label: item, value: item }))} />
                </ScrollView>
            </View>
        )
    }

    render(props) {
        return (
            <View className={classnames('Workbench', this.props.className)}>
                {
                    this.state.index === 0
                        ? this.buildImageView()
                        : this.buildTextView()
                }
                <View className='Workbench-bottom'>
                    <AtTabBar
                        current={this.state.index}
                        className='Workbench-bottom-tabBar'
                        fontSize={11}
                        iconSize={19}
                        selectedColor='rgba(255, 191, 28)'
                        tabList={[
                            { iconType: 'image', title: '换图' },
                            { iconType: 'edit', title: '文字' },
                        ]}
                        onClick={this.handleTabBarChange}
                    />
                    <AtButton className='Workbench-bottom-commitButton' type='primary'>生成图片</AtButton>
                </View>
            </View>
        )
    }
}