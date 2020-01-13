import React from 'react'
import LOGO from 'Assets/logo.png'
import { Text, View, ScrollView, Image } from 'react-native'
import {
  styles
} from './config'
import { List } from '@ant-design/react-native'
import { NavigationScreenProp } from 'react-navigation'
import i18n from 'I18n'

const Item = List.Item

interface Props {
  navigation: NavigationScreenProp<any>
}

class AboutUs extends React.Component<Props> {
  render() {
    return (
      <View style={styles.box}>
        <ScrollView>
          <View style={styles.topWrap}>
            <View style={styles.logoWrap}><Image source={LOGO} style={styles.logo} /></View>
            <View style={styles.appMsg}>
              <Text style={styles.appName}>{i18n.t('dipperin:me.walletProduction')}</Text>
              <Text style={styles.appVersion}>v1.0.0</Text>
            </View>
          </View>

          <View style={styles.listWrap}>
            <List>
              <Item extra={<Text style={styles.updateVersion} onPress={this.handleUpdateVersion}>V1.0.0</Text>}><Text style={styles.listItem}>{i18n.t('dipperin:me.versionUpdate')}</Text></Item>
              <Item arrow="horizontal" onPress={this.gotoUserProtocol}><Text style={styles.listItem}>{i18n.t('dipperin:userProtocol')}</Text></Item>
            </List>
          </View>
        </ScrollView>
      </View>
    )
  }

  gotoUserProtocol = () => {
    this.props.navigation.navigate('userProtocol')
  }

  // TODO
  handleUpdateVersion = () => {

  }
}

export default AboutUs
