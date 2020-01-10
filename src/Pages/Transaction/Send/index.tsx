import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Slider,
  EmitterSubscription,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {observer, inject} from 'mobx-react';
import {observable, action} from 'mobx';
import {withTranslation, WithTranslation} from 'react-i18next';
import {I18nTransactionType} from 'I18n/config';
import {styles} from './config';
import Toast from 'Components/Toast';
import Modal from 'Components/Modal';
import EnterPassword from './EnterPassword';
import TransactionStore from 'Store/transaction';
import WalletStore from 'Store/wallet';
import {sleep} from 'Global/utils';

interface Props {
  navigation: NavigationStackScreenProps['navigation'];
  labels: I18nTransactionType;
  transaction?: TransactionStore;
  wallet?: WalletStore;
}

@inject('transaction', 'wallet')
@observer
class Send extends React.Component<Props> {
  @observable toAddress: string = '';
  @observable accountBalance: number = 0;
  @observable sendAmount: string = '';
  @observable extraData: string = '';
  @observable txFeeLevel: number = 1;
  @observable keyboardShow: boolean = false;
  keyboardDidShowListener: EmitterSubscription;
  keyboardDidHideListener: EmitterSubscription;
  constructor(props: Props) {
    super(props);
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }

  @action
  keyboardDidShow = () => {
    this.keyboardShow = true;
  };

  @action
  keyboardDidHide = () => {
    this.keyboardShow = false;
  };

  @action handleChangeToAddress = (text: string) => {
    this.toAddress = text;
  };
  @action handleChangeSendAmount = (amountString: string) => {
    if (this.validateEnteringAmount(amountString)) {
      this.sendAmount = amountString;
    }
  };
  @action handleChangeExtraData = (text: string) => {
    if (this.validateExtraData(text)) {
      this.extraData = text;
    }
  };
  @action handleChangeTxfee = (num: number) => {
    this.txFeeLevel = num;
  };

  validateEnteringAmount(amountString: string) {
    const reg = new RegExp('^[0-9]*(.[0-9]{0,18})?$');
    return reg.test(amountString);
  }

  validateExtraData(text: string) {
    if (text.length > 200) {
      return false;
    }
    // --- add new rule here
    return true;
  }

  sendTransaction = async () => {
    try {
      const res = await this.props.transaction!.confirmTransaction(
        this.toAddress,
        this.sendAmount,
        this.extraData,
        '21000',
        '1',
      );
      if (res.success) {
        console.warn('success');
        return Promise.resolve();
      } else {
        console.warn(res.info);
        return Promise.reject();
      }
    } catch (e) {
      return Promise.reject();
    }
  };

  handleSend = () => {
    Modal.password(this.handleConfirmTransaction);
    // this.setPasswordModal(true);
    // this.sendTransaction();
  };

  handleConfirmTransaction = async (psw: string) => {
    Modal.hide();
    Toast.loading();
    await sleep(1000);
    Toast.hide();
    if (!this.props.wallet!.checkPassword(psw)) {
      Toast.hide();
      Toast.info(this.props.labels.passwordError);
      return;
    }

    try {
      await this.sendTransaction();
      Toast.hide();
      Toast.success(this.props.labels.sendSuccess);
      return;
    } catch (e) {
      Toast.hide();
      Toast.info(this.props.labels.sendFailure);
    }
  };

  render() {
    return (
      <View style={styles.mainWrapper}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.wrapper}
          style={styles.contentWrapper}
          resetScrollToCoords={{x: 0, y: 0}}>
          {this.renderAddressBox()}

          {this.renderAmountBox()}

          {this.renderExtraDataBox()}

          {this.renderTxFeeBox()}
        </KeyboardAwareScrollView>
        {!this.keyboardShow && this.renderBtnBox()}
      </View>
    );
  }

  renderAddressBox() {
    const {labels} = this.props;
    return (
      <TouchableOpacity style={styles.toAddressWrapper} activeOpacity={0.8}>
        <View style={styles.toAddressLabel}>
          <Text style={styles.toAddressText}>{labels.toAddress}</Text>
        </View>
        <TextInput
          style={styles.toAddressInput}
          value={this.toAddress}
          onChangeText={this.handleChangeToAddress}
          placeholder={labels.enterAddressOrWord}
        />
      </TouchableOpacity>
    );
  }

  renderAmountBox() {
    const {labels} = this.props;
    return (
      <TouchableOpacity style={styles.sendAmountWrapper} activeOpacity={0.8}>
        <View style={styles.sendAmountBar}>
          <Text style={styles.sendAmountLabel}>{labels.sendAmount}</Text>
          <Text
            style={
              styles.balanceText
            }>{`${labels.balance}: ${this.accountBalance} DIP`}</Text>
        </View>
        <TextInput
          style={styles.sendAmountInput}
          value={this.sendAmount}
          onChangeText={this.handleChangeSendAmount}
          placeholder={labels.enterAmount}
          keyboardType="numeric"
        />
      </TouchableOpacity>
    );
  }

  renderExtraDataBox() {
    const {labels} = this.props;
    return (
      <TouchableOpacity style={styles.extraDataWrapper} activeOpacity={0.8}>
        <View style={styles.extraDataBar}>
          <Text style={styles.extraDataLabel}>
            {labels.remark}({labels.optional})
          </Text>
        </View>
        <TextInput
          style={styles.extraDataInput}
          value={this.extraData}
          onChangeText={this.handleChangeExtraData}
          placeholder={labels.enterRemark}
        />
      </TouchableOpacity>
    );
  }

  renderTxFeeBox() {
    const {labels} = this.props;
    return (
      <TouchableOpacity style={styles.txFeeWrapper} activeOpacity={0.8}>
        <View style={styles.txFeeBar}>
          <Text style={styles.txFeeLabel}>{labels.txFee}</Text>
          <Text style={styles.txFeeText}>0.000000000000021 DIP</Text>
        </View>
        <Slider
          minimumValue={1}
          maximumValue={3}
          step={1}
          onValueChange={this.handleChangeTxfee}
        />
        <View style={styles.txFeeBottomBar}>
          <Text
            style={
              this.txFeeLevel >= 1
                ? styles.activeFeeLevel
                : styles.defalutFeeLevel
            }>
            {labels.low}
          </Text>
          <Text
            style={
              this.txFeeLevel >= 2
                ? styles.activeFeeLevel
                : styles.defalutFeeLevel
            }>
            {labels.middle}
          </Text>
          <Text
            style={
              this.txFeeLevel >= 3
                ? styles.activeFeeLevel
                : styles.defalutFeeLevel
            }>
            {labels.high}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  renderBtnBox() {
    const {labels} = this.props;
    return (
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={this.handleSend}
        activeOpacity={0.8}>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>{labels.send}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const Wrapped = (
  props: WithTranslation & {
    navigation: NavigationStackScreenProps['navigation'];
  },
) => {
  const {t, navigation} = props;
  const labels = t('dipperin:transaction') as I18nTransactionType;
  return <Send labels={labels} navigation={navigation} />;
};

export default withTranslation()(Wrapped);
