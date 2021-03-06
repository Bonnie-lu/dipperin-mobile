/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  styles,
} from './config'
import { NavigationScreenProp } from 'react-navigation'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { WithTranslation, withTranslation } from 'react-i18next'
import { I18nMeType } from 'I18n/config'
import SystemStore from 'Store/System'
import WalletStore from 'Store/wallet'
import { Toast } from 'Components/PopupWindow'
import { passwordCheck } from './utils'
import ResetWalletPop from './ResetWalletPop'
import { setStorage } from 'Db'
import { STORAGE_KEYS } from 'Global/constants'
interface Props {
  system?: SystemStore
  navigation: NavigationScreenProp<any>
  label: I18nMeType
  wallet?: WalletStore
}

@inject('system', 'wallet')
@observer
export class ChangePassword extends React.Component<Props> {
  @observable oldPassword: string = ''
  @observable newPassword: string = ''
  @observable confrimPassword: string = ''
  @observable passwordTip: string = ''
  @observable isShowResetWalletPop = false

  render() {
    const { label } = this.props
    return (
      <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={false}
        contentContainerStyle={styles.box}
      >
        <View style={styles.content}>
          <View style={[styles.inputItem, styles.inputItemBorderTopAndBottom, { marginBottom: 10 }]}>
            <Text style={styles.inputItemLabel}>{label.oldPassword}</Text>
            <TextInput
              secureTextEntry={true}
              autoCompleteType="password"
              style={styles.input}
              value={this.oldPassword}
              onChangeText={this.inputOldPassword}
            />
          </View>

          <View style={[styles.inputItem, styles.inputItemBorderTopAndBottom]}>
            <Text style={styles.inputItemLabel}>{label.newPassword}</Text>
            <TextInput
              secureTextEntry={true}
              autoCompleteType="password"
              maxLength={24}
              style={styles.input}
              value={this.newPassword}
              onChangeText={this.inputNewPassword}
            />
          </View>

          <View style={styles.inputItem}>
            <Text style={styles.inputItemLabel}>{label.confrimPassword}</Text>
            <TextInput
              secureTextEntry={true}
              autoCompleteType="password"
              maxLength={24}
              style={styles.input}
              value={this.confrimPassword}
              onChangeText={this.inputConfirmPassword}
            />
          </View>

          <View style={styles.inputItem}>
            <TextInput
              placeholder={label.passwordTipMsg}
              maxLength={24}
              autoCompleteType="off"
              style={[styles.input, {textAlign: 'left'}]}
              value={this.passwordTip}
              onChangeText={this.inputPasswordTip}
            />
          </View>

          <Text style={styles.psdHint}>{label.psdLimit}</Text>

          <View style={styles.btnBox}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnTounch}
              onPress={this.changePassword}
            >
              <Text style={styles.btnText}>{label.confrimChange}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.forgetPassword}
          onPress={this.showResetWalletPop}
        >
          <Text style={styles.forgetPasswordText}>{label.forgetPassword}</Text>
        </TouchableOpacity>

        <ResetWalletPop
          language={label}
          visible={this.isShowResetWalletPop}
          cancelText={label.cancel}
          confrimText={label.resetWallet}
          onCancel={this.hideResetWalletPop}
          onConfirm={this.resetWallet}
        />
      </KeyboardAwareScrollView>
    )
  }

  resetWallet = () => {
    this.props.system!.resetWallet()
    this.props.navigation.navigate('start')
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  changePassword = async () => {
    Toast.loading()
    const { label } = this.props
    const oldPassword = this.oldPassword.trim()
    const newPassword = this.newPassword.trim()

    // Test the new password format
    const toasInfo = passwordCheck(this.oldPassword, this.newPassword, this.confrimPassword, label)
    if (toasInfo) {
      Toast.info(toasInfo)
      return
    }

    // Check the old password
    const checkPasswordSuccess = this.props.wallet!.unlockWallet(oldPassword)
    if (!checkPasswordSuccess) {
      Toast.info(label.oldPasswordError)
      return
    }

    // Change password
    const changeErrorMsg = await this.props.wallet!.changePassword(newPassword) || ''
    if (!changeErrorMsg) {
      setStorage(STORAGE_KEYS.PASSWORD_TIP, this.passwordTip)
      this.props.navigation.navigate('settings')
      Toast.hide()
      return
    }
    Toast.info(changeErrorMsg)
  }

  @action showResetWalletPop = () => {
    this.isShowResetWalletPop = true
  }

  @action hideResetWalletPop = () => {
    this.isShowResetWalletPop = false
  }

  @action inputPasswordTip = (_value: string) => {
    this.passwordTip = _value
  }

  @action inputOldPassword = (_value: string) => {
    this.oldPassword = _value.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]+/g, '')
  }

  @action inputNewPassword = (_value: string) => {
    this.newPassword = _value.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]+/g, '')
  }

  @action inputConfirmPassword = (_value: string) => {
    this.confrimPassword = _value.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]+/g, '')
  }
}

const ChangePasswordWrap = (props: WithTranslation & { navigation: NavigationScreenProp<any> }) => {
  const { t, navigation } = props
  const labels = t('dipperin:me') as I18nMeType
  return <ChangePassword label={labels} navigation={navigation} />
}

export default withTranslation()(ChangePasswordWrap)
