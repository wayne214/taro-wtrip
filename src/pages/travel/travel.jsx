import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '旅拍'
  }

  render () {
    return (
      <View className='index'>
        <Text>旅拍</Text>
        <Text>TaroDemo</Text>
      </View>
    )
  }
}