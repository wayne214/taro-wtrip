import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/search/search',
      'pages/travel/travel',
      'pages/me/me'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#bfbfbf',
      selectedColor: '#1296db',
      list:[
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/home.png',
          selectedIconPath: 'assets/home_active.png'
        },
        {
          pagePath: 'pages/search/search',
          text: '搜索',
          iconPath: 'assets/search.png',
          selectedIconPath: 'assets/search_active.png'
        },
        {
          pagePath: 'pages/travel/travel',
          text: '旅拍',
          iconPath: 'assets/camera.png',
          selectedIconPath: 'assets/camera_active.png'
        },
        {
          pagePath: 'pages/me/me',
          text: '我的',
          iconPath: 'assets/me.png',
          selectedIconPath: 'assets/me_active.png'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
