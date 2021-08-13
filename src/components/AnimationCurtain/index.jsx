import { View } from "@tarojs/components"
import classnames from "classnames"
import React from 'react'
import './index.less'


/**
 * @param {{className: String, show: Boolean, animationEnd: Function}} props
 */
export default (props) => {
  const animationTime = props.animationTime || 1500
  props.show && setTimeout(() => {
    props.animationEnd && props.animationEnd()
  }, animationTime)
  const handleClose = (...data) => {
    props.onClick && props.onClick(...data)
  }
  const catchEvent = (event) => {
    event.stopPropagation()
  }
  return (
    <View className={classnames('AnimationCurtain', props.className, { 'show': props.show })}>
      <View className='AnimationCurtain-mask' onClick={handleClose}></View>
      <View className='AnimationCurtain-content' onClick={catchEvent}>
        {props.children}
      </View>
    </View>
  )
}