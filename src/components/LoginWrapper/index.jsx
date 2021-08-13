import classnames from 'classnames'
import React from 'react'
import { AtButton } from 'taro-ui'
import './index.scss'

/** 
 * @param {Object} props
 * @param {(details: import('@tarojs/components/types/Button').ButtonProps.onGetUserInfoEventDetail) void} props.onSuccess
 * @param {(reason: String) void} props.onFailure
 */
export default (props) => {

    const {
        onSuccess,
        onFailure,
    } = props

    /**
     * @param {import('@tarojs/components').BaseEventOrig<import('@tarojs/components/types/Button').ButtonProps.onGetUserInfoEventDetail>} event 
     */
    const handleGetUserInfo = (event) => {
        if (event.detail.errMsg === 'getUserInfo:ok') {
            onSuccess && onSuccess(event.detail)
        } else {
            onFailure && onFailure('cancel')
        }
    }
// vuex  ==> redux
// router
    return (
        <AtButton
            className={classnames('LoginWrapper', props.className)}
            openType='getUserInfo'
            onGetUserInfo={handleGetUserInfo}
            
        >
            {props.children}
        </AtButton>
    )
}