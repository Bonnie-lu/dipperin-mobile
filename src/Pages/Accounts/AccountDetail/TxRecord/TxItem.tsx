import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { NavigationScreenProp, withNavigation } from 'react-navigation'
import moment from 'moment'
import { getIsTxFromMe, formatNumber } from 'Global/utils'
import { I18nAccountType } from 'I18n/config'

import TransactionModel from 'Models/transaction'
import Collection from 'Assets/collection.png'
import Transfer from 'Assets/transfer.png'
import { Key } from '../config'


export interface Props {
    activeAccountaddress: string
    transaction: TransactionModel
    navigation: NavigationScreenProp<any>
    labels: I18nAccountType
    keyIndex: Key
}
@observer
export class TxItem extends React.Component<Props>{
    goDetail = () => {
        const { activeAccountaddress, transaction } = this.props
        const isFromMe = getIsTxFromMe(activeAccountaddress, transaction.from)
        this.props.navigation.navigate('TransactionDetail', { transaction, isFromMe })
    }
    getShowTime = (timestamp: number) => {
        if (`${timestamp}`.length > 16) {
            return moment(timestamp / 1000000).format('YYYY/MM/DD')
        } else {
            return moment(timestamp).format('YYYY/MM/DD')
        }
    }
    getIconAndText = (isFromMe: boolean) => {
        const { keyIndex, labels } = this.props
        let text
        let icon
        switch (keyIndex) {
            case 'all':
                text = isFromMe ? labels.to : labels.from
                icon = isFromMe ? Transfer : Collection
                break
            case 'failed':
                text = isFromMe ? labels.to : labels.from
                icon = isFromMe ? Transfer : Collection
                break
            case 'sent':
                text = labels.to
                icon = Transfer
                break
            case 'received':
                text = labels.from
                icon = Collection
                break
            default:
                break;
        }
        return {
            text,
            icon,
        }

    }
    render() {
        const { activeAccountaddress, labels, transaction: { from, value, timestamp, to } } = this.props
        const showTime = timestamp ? this.getShowTime(timestamp) : ''
        const isFromMe = getIsTxFromMe(activeAccountaddress, from)
        const showValue = formatNumber(Number(value), 6)
        const textAndIcon = this.getIconAndText(isFromMe)
        return (
            <TouchableOpacity
                onPress={this.goDetail}
            >
                <View style={styles.txItem}>
                    <View style={styles.left}>
                        <Image source={textAndIcon.icon} style={styles.icon} />
                        <View>
                            <Text >{isFromMe ? labels.sent : labels.received}</Text>
                            <Text style={styles.txt} numberOfLines={1} ellipsizeMode={'tail'}>{textAndIcon.text}: {isFromMe ? to : from}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.dip}>{showValue} DIP</Text>
                        <Text style={styles.time}>{showTime}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}


export default withNavigation(TxItem)

const styles = StyleSheet.create({
    txItem: {
        flexDirection: 'row',
        borderBottomColor: '#E8EBEE',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 68,
        paddingHorizontal: 10,
    },
    left: {
        flexDirection: 'row',
    },
    icon: {
        width: 43,
        height: 43,
        marginRight: 10,
    },
    dip: {
        textAlign: 'right',
    },
    txt: {
        maxWidth: 200,
        paddingTop: 3,
        color: '#A1A1A1',
    },
    time: {
        paddingTop: 3,
        color: '#A1A1A1',
    },
})
