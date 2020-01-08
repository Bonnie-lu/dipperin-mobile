import { View, Text } from "react-native"
import React from "react"
import TxRecord from "./TxRecord"
import AccountInfo from "./AccountInfo"


class AccountDetail extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FAFBFC" }}>
                <AccountInfo />
                <TxRecord />
                <View>

                </View>
            </View>
        )
    }
}

export default AccountDetail