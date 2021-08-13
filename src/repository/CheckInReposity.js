import MockUtil from "../utils/MockUtil";

export default class {

    /**
     * 获取打卡文案等信息
     */
    static getCheckInInfo() {

    }

    /**
     * 获取首页图片列表
     */
    static getHomeAlbumList() {

    }

    /**
     * 获取用户打卡信息
     */
    static getUserCheckInInfo() {

    }

    /**
     * 用户打卡
     */
    static doCheckIn() {

    }

    /** 获取打卡图标列表 */
    static getCheckInAlbumList() {
        return global.fetchApi('/api/weapp/photo/list/bytoken?weappToken=1234&nums=10').then((data) => {
            console.log(data)
            return data
        })
    }
}