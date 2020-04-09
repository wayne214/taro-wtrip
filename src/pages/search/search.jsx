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
    navigationBarTitleText: '搜索'
  }

  render () {
    return (
      <View className='index'>
        <Text>搜索</Text>
        <Text>TaroDemo</Text>
      </View>
    )
  }
}