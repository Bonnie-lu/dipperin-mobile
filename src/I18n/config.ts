const enResource = {
  dipperin: {
    tabName:{
      me:'Me',
      discovery:'Discovery',
      wallet:'Wallet'
    },
    userProtocol: 'User agreement',
    start: {
      create: 'Create wallet',
      import: 'Import wallet',
      cancel: 'Cancel',
      confirm: 'Confirm',
      checkFingerprintFail: 'Fingerprint authentication failed',
      clickAndFingerprintUnlock: 'Click to unlock fingerprint',
      passwordUnlock: 'Password unlock',
      fingerprintUnlock: 'Fingerprint unlock',
      pleaseEnterFingerprint: 'Please input fingerprint for verification',
      hintFingerprintDisabled: 'Please check whether the system fingerprint verification is on',
      passwordError: 'Wrong Password!'
    },
    discovery: {
      title: 'discovery',
      tab1: 'Hot DApp',
      tab2: 'Smart Contracts',
      tab3: 'Rich List',
      contracts: {
        address: 'Address',
        name: 'Name',
        txCount: 'TxCount',
        value: 'Value',
      },
      apps: {
        accounts: 'Accounts',
        txCount: 'TxCount',
        value: 'Value',
        moreDapp: 'Stay tuned for more DApps'
      },
      fortune: {
        ranking: 'Ranking',
        holdings: 'Holdings',
        address: 'Address',
        balance: 'Balance',
      }
    },
    import: {
      title: 'Import Mnemonic',
      mnemonicPlh: 'Mnemonic Phrase',
      passwordPlh: 'Set Password',
      repeatPasswordPlh: 'Repeat Password',
      passwordTip: 'Password prompt message (optional)',
      agreeLabel: 'I have carefully read and agreed to the ',
      agree: 'user agreement',
      btnText: 'Import Wallet',
      info: {
        mnemonicNotAvailable: 'Mnemonic not available!',
        passwordNotAvailable: 'Password must be 8~24 characters in length.',
        repeatPasswordErr: 'Two passwords do not match!'
      }
    },
    create: {
      title: 'Create Wallet',
      passwordPlh: 'Set Password',
      repeatPasswordPlh: 'Repeat Password',
      passwordTip: 'Password prompt message (optional)',
      agreeLabel: 'I have carefully read and agreed to the ',
      agree: 'user agreement',
      btnText: 'Create Wallet',
      info: {
        passwordNotAvailable: 'Password must be 8~24 characters in length.',
        repeatPasswordErr: 'Two passwords do not match!'
      }
    },
    createStep1: {
      title: 'Wallet Mnemonic',
      intro: 'Mnemonic phrase are the voucher to recover your wallet assets. Obtaining Mnemonic equals owning all assets. Please do backup and preserve it properly! Please be sure not to disturb the order of the mnemonic phrase.',
      item1: '• Mnemonic consists of 12 or 24 words. Please copy and keep in a safe place.',
      item2: '• 100% in your charge, once lost, can not be found.',
      item3: '• When creating a wallet, be sure to complete a mnemonic backup.',
      btnText: 'To Backup',
    },
    createStep2: {
      title: 'Backup mnemonic',
      intro:
        'Mnemonic phrase are the voucher to recover your wallet assets. Obtaining Mnemonic equals owning all assets. Please do backup and preserve it properly! Please be sure not to disturb the order of the mnemonic phrase.',
      menmonic: 'menmonic',
      btnText: 'To Backup',
    },
    createStep3: {
      title: 'Confirm mnemonic',
      intro:
        'Please select Mnemonic Phrase in correct order.',
      menmonic: 'menmonic',
      btnText: 'Confirm',
    },
    me: {
      personalCenter: 'Personal center',
      setting: 'Setting',
      aboutUs: 'About us',
      FAQ: 'FAQ',
      language: 'Language',
      nodeChoose: 'Node selection',
      functionIntroduction: 'Function introduction',
      helpCenter: 'Help center',
      helpCenterDetails: 'Help center details',
      fingerUnlock: 'Fingerprint unlocking',
      fingerPay: 'Fingerprint payment',
      changePassword: 'Change password',
      simplifiedChinese: '简体中文',
      English: 'English',
      remoteNode: 'Remote node',
      venus: 'venus',
      mercury: 'mercury',
      oldPassword: 'The old password',
      newPassword: 'The new password',
      confrimPassword: 'Confirm password',
      pleaseEnterOldPsd: 'Please enter the old password',
      pleaseEnterNewPsd: 'Please enter a new password',
      pleaseConfirmNewPsd: 'Please confirm the new password',
      psdLimit:
        'Password length is 8-24, is composed of Numbers, letters, symbols, letters are case sensitive',
      confrimChange: 'Confirm the change',
      resetWallet: 'Reset wallet',
      forgetPassword: 'Forgot password',
      forgetPasswordPopContent: 'Forget the password can be reset by importing mnemonics, which will not affect the use of your wallet. Please keep your mnemonics properly!',
      walletProduction: 'The wallet products',
      versionUpdate: 'Version update',
      passwordEmpty: 'Please fill in the password',
      oldPasswordError: 'The old password mistake',
      diffPassword: 'Two password entries are inconsistent',
      FAQForgetPassowrdTitle: '忘记钱包密码怎么办？',
      FAQForgetPassowrdDesc1: '如果您忘记了钱包密码，您可以使用备份的 私钥 / 助记词 /Keystore 重新导入钱包，导入过程中可以重置钱包密码。',
      FAQForgetPassowrdDesc2: '操作步骤',
      FAQForgetPassowrdDesc3: '我 - 设置 - 忘记密码',
      FAQToggleNodeTitle: '如何切换公链节点？',
      FAQToggleNodeDesc1: '如果你的钱包突然无法成功转账，大多数情况是因为连接的节点出现了网络或其他问题，此时只需要换一个其它节点即可。',
      FAQToggleNodeDesc2: '操作步骤',
      FAQToggleNodeDesc3: '我 – 设置 – 节点设置 – 选择对应的节点',
      FAQMnemonicWordTitle: '为什么要备份助记词？',
      FAQMnemonicWordDesc1: '在选择钱包备份方式时，有三种可选：助记词、Keystore 或者明文私钥。',
      FAQMnemonicWordDesc2: '推荐备份助记词，这里有几点原因：',
      FAQMnemonicWordDesc3: `
      1.Keystore 虽然是加密后的私钥，但是不方便抄写，容易抄错。而且用户往往会认为 Keystore 安全而通过网络传输或者存储，这种使用方式会导致 Keystore 泄露，极大增加资产被盗的风险。\n
      2.明文私钥的安全等级和助记词相同，都是未经加密的字符串。但是明文私钥不便抄写保存，一旦抄写错误，就很难改正和找回。
      `,
      FAQMnemonicWordDesc4: '在使用助记词时务必注意以下几点：',
      FAQMnemonicWordDesc5: `
      1.助记词一旦丢失就无法找回，所以在创建钱包之后，务必立刻备份助记词，以免出现设备不可用而导致资产丢失的情况\n
      2.助记词是未经任何加密措施保护的私钥，一旦有人得到了你的助记词，就等同于掌控了你的钱包。妥善保管助记词，一是做好网络隔绝措施，二是做好防丢措施\n
      3.备份助记词时，尽量采用物理介质备份，比如手抄在一张纸上。\n
      4.确保备份的助记词准确，建议通过交叉验证来确保助记词是正确的。
      `,
      FAQWalletLossTitle: '钱包被盗怎么办？',
      FAQWalletLossDesc1: 'Dipperin 是去中心化钱包，不存储用户的钱包私钥，也不保管用户的资产。如果钱包中的资产被盗，你应该：',
      FAQWalletLossDesc2: `
      1.意识到钱包私钥已经泄露，立即更换钱包，并做好钱包备份\n
      2.将自己钱包的资产迅速转移至新钱包\n
      3.排查自己可能泄露私钥的情况
      `,
      FAQTransferAccountsFailTitle: '转账不成功怎么办?',
      FAQTransferAccountsFailDesc1: `1. 交易状态未发送：`,
      FAQTransferAccountsFailDesc2: '可能因为转账请求未被区块链接收，请您耐心等待',
      FAQTransferAccountsFailDesc3: '2. 交易状态等待确认：',
      FAQTransferAccountsFailDesc4: `可能因矿工费设置较低造成，请您耐心等待`,
      FAQTransferAccountsFailDesc5: '3. 交易状态失败：',
      FAQTransferAccountsFailDesc6: `
      1> gas不足或者是只能合约的问题，如果您无法确认具体原因，请与我们联系\n
      2> 交易重复，发起了两笔相同的转账，其中矿工费低的被取消, 请查看转账记录，根据需求决定是否发起新的转账
      `,
      FAQNotArriveAccountTitle: '转账成功但对方没收到怎么办？',
      FAQNotArriveAccountDesc1: `
      1.检查是否收款地址填写错误\n
      2.收币方网络不稳定，联系刷新对方资产页
      `,
    },
    transaction: {
      transaction: 'Transaction',
      toAddress: 'Receiver’s Address',
      enterAddressOrWord: 'Please enter address/Shortword',
      balance: 'Balance',
      sendAmount: 'Amount',
      enterAmount: 'Please enter amount',
      remark: 'Remark',
      enterRemark: 'Please enter remark',
      optional: 'Optional',
      txFee: 'Fee',
      send: 'Send',
      low: 'slow',
      middle: 'middle',
      high: 'fast',
      receive: 'Receive',
      shortWordReceive: 'Shortword Receive',
      qrCode: 'QR Code',
      shortword: 'Short Word',
      enterRegisterShortword: 'Please enter your Short Word',
      enterReceiveAmount: 'Please enter amount',
      remarkOptional: 'Remard(Optional)',
      ehterRemark: 'Please enter remark',
      sendShortword: 'Send Remark',
      enterPassword: 'Password',
      cancel: 'Cancel',
      confirm: 'Confirm',
      passwordHit: 'Password Hint',
      passwordError: 'Wrong Password!',
      sendSuccess: 'Send Success!',
      sendFailure: 'Send Failure',
    },
    account:{
      total:'Total',
      assets:'Assets',
      accountName:'account',
      all:'All',
      sent:'Transfered',
      received:'Received',
      failed:'Failed',
      value:'Value',
      timeStamp:'TimeStamps',
      nonce:'Nonce',
      extraData:'Extra Data',
      from:'From',
      to:'To',
      hash:'Hash'
    }
  },
};

export type I18StartType = typeof enResource.dipperin.start;
export type I18ImportType = typeof enResource.dipperin.import;
export type I18CreateType = typeof enResource.dipperin.create;
export type I18CreateStep1Type = typeof enResource.dipperin.createStep1;
export type I18CreateStep2Type = typeof enResource.dipperin.createStep2;
export type I18CreateStep3Type = typeof enResource.dipperin.createStep3;
export type I18nMeType = typeof enResource.dipperin.me;
export type I18nTransactionType = typeof enResource.dipperin.transaction;
export type I18nAccountType  = typeof enResource.dipperin.account;

const zhResource: typeof enResource = {
  dipperin: {
    tabName:{
      me:'我的',
      discovery:'发现',
      wallet:'钱包'
    },
    userProtocol: '用户协议',
    start: {
      create: '创建钱包',
      import: '导入钱包',
      cancel: '取消',
      confirm: '确认',
      checkFingerprintFail: '指纹认证失败',
      clickAndFingerprintUnlock: '点击进行指纹解锁',
      passwordUnlock: '密码解锁',
      fingerprintUnlock: '指纹解锁',
      pleaseEnterFingerprint: '请录入指纹验证',
      hintFingerprintDisabled: '请检查系统指纹认证是否开启',
      passwordError: '密码错误!'
    },
    discovery: {
      title: '发现',
      tab1: '热门应用',
      tab2: '合约排行',
      tab3: '富豪榜',
      contracts: {
        address: '合约地址',
        name: '合约名称',
        txCount: '余额(DIP)',
        value: '交易数',
      },
      apps: {
        accounts: '用户',
        txCount: '交易数',
        value: '交易额',
        moreDapp: '更多DApp敬请期待'
      },
      fortune: {
        ranking: '排序',
        holdings: '持有量',
        address: '账户地址',
        balance: '余额(DIP)',
      }
    },
    import: {
      title: '助记词导入',
      mnemonicPlh: '请按顺序输入助记词',
      passwordPlh: '请设置钱包密码',
      repeatPasswordPlh: '请重复密码',
      passwordTip: '密码提示信息(可不填)',
      agreeLabel: '我已仔细阅读并同意',
      agree: '《用户协议》',
      btnText: '导入钱包',
      info: {
        mnemonicNotAvailable: '助记词不可用!',
        passwordNotAvailable: '密码长度为8~24个字符!',
        repeatPasswordErr: '两次密码不一致!'
      }
    },
    create: {
      title: '创建钱包',
      passwordPlh: '请设置钱包密码',
      repeatPasswordPlh: '请重复密码',
      passwordTip: '密码提示信息(可不填)',
      agreeLabel: '我已仔细阅读并同意',
      agree: '《用户协议》',
      btnText: '创建钱包',
      info: {
        passwordNotAvailable: '密码长度为8~24个字符!',
        repeatPasswordErr: '两次密码不一致!'
      }
    },
    createStep1: {
      title: '钱包助记词',
      intro: '助记词即为私钥，它是掌管您资产的钥匙，请妥善保管。',
      item1: '• 助记词由12或24个单词组成，请抄写并保管在安全的地方。',
      item2: '• 100%由您掌管，一经丢失，无法找回。',
      item3: '• 请在创建钱包时，务必完成助记词备份。',
      btnText: '去备份',
    },
    createStep2: {
      title: '备份助记词',
      intro:
        '助记词用于恢复钱包或重置钱包密码，将它按顺序准确的抄写在纸上或保存在安全的电子设备内，并存放在只有你知道的地方。',
      menmonic: '助记词',
      btnText: '去备份',
    },
    createStep3: {
      title: '确认助记词',
      intro:
        '为了确保您已将助记词正确抄写，备份保存，请按照对应的顺序点击助记词。',
      menmonic: '助记词',
      btnText: '完成',
    },
    me: {
      personalCenter: '个人中心',
      setting: '设置',
      aboutUs: '关于我们',
      FAQ: 'FAQ',
      language: '语言',
      nodeChoose: '节点选择',
      functionIntroduction: '功能介绍',
      helpCenter: '帮助中心',
      helpCenterDetails: '帮助中心详情',
      fingerUnlock: '指纹解锁',
      fingerPay: '指纹支付',
      changePassword: '修改密码',
      simplifiedChinese: '简体中文',
      English: 'English',
      remoteNode: '远程节点',
      venus: '金星',
      mercury: '内测网',
      oldPassword: '旧密码',
      newPassword: '新密码',
      confrimPassword: '确认密码',
      pleaseEnterOldPsd: '请输入旧密码',
      pleaseEnterNewPsd: '请输入新密码',
      pleaseConfirmNewPsd: '请确认新密码',
      psdLimit: '密码长度为8-24位，由数字、字母、符号组成，字母区分大小写',
      confrimChange: '确认修改',
      resetWallet: '重置钱包',
      forgetPassword: '忘记密码',
      forgetPasswordPopContent: '忘记密码可以通过导入助记词重新设置，不会影响您的钱包使用，请妥善保管您的助记词！',
      walletProduction: '钱包产品',
      versionUpdate: '版本更新',
      passwordEmpty: '请填写密码',
      oldPasswordError: '旧密码错误',
      diffPassword: '两次输入的密码不一致',
      FAQForgetPassowrdTitle: '忘记钱包密码怎么办？',
      FAQForgetPassowrdDesc1: '如果您忘记了钱包密码，您可以使用备份的 私钥 / 助记词 /Keystore 重新导入钱包，导入过程中可以重置钱包密码。',
      FAQForgetPassowrdDesc2: '操作步骤',
      FAQForgetPassowrdDesc3: '我 - 设置 - 忘记密码',
      FAQToggleNodeTitle: '如何切换公链节点？',
      FAQToggleNodeDesc1: '如果你的钱包突然无法成功转账，大多数情况是因为连接的节点出现了网络或其他问题，此时只需要换一个其它节点即可。',
      FAQToggleNodeDesc2: '操作步骤',
      FAQToggleNodeDesc3: '我 – 设置 – 节点设置 – 选择对应的节点',
      FAQMnemonicWordTitle: '为什么要备份助记词？',
      FAQMnemonicWordDesc1: '在选择钱包备份方式时，有三种可选：助记词、Keystore 或者明文私钥。',
      FAQMnemonicWordDesc2: '推荐备份助记词，这里有几点原因：',
      FAQMnemonicWordDesc3: `
      1.Keystore 虽然是加密后的私钥，但是不方便抄写，容易抄错。而且用户往往会认为 Keystore 安全而通过网络传输或者存储，这种使用方式会导致 Keystore 泄露，极大增加资产被盗的风险。\n
      2.明文私钥的安全等级和助记词相同，都是未经加密的字符串。但是明文私钥不便抄写保存，一旦抄写错误，就很难改正和找回。
      `,
      FAQMnemonicWordDesc4: '在使用助记词时务必注意以下几点：',
      FAQMnemonicWordDesc5: `
      1.助记词一旦丢失就无法找回，所以在创建钱包之后，务必立刻备份助记词，以免出现设备不可用而导致资产丢失的情况\n
      2.助记词是未经任何加密措施保护的私钥，一旦有人得到了你的助记词，就等同于掌控了你的钱包。妥善保管助记词，一是做好网络隔绝措施，二是做好防丢措施\n
      3.备份助记词时，尽量采用物理介质备份，比如手抄在一张纸上。\n
      4.确保备份的助记词准确，建议通过交叉验证来确保助记词是正确的。
      `,
      FAQWalletLossTitle: '钱包被盗怎么办？',
      FAQWalletLossDesc1: 'Dipperin 是去中心化钱包，不存储用户的钱包私钥，也不保管用户的资产。如果钱包中的资产被盗，你应该：',
      FAQWalletLossDesc2: `
      1.意识到钱包私钥已经泄露，立即更换钱包，并做好钱包备份\n
      2.将自己钱包的资产迅速转移至新钱包\n
      3.排查自己可能泄露私钥的情况
      `,
      FAQTransferAccountsFailTitle: '转账不成功怎么办?',
      FAQTransferAccountsFailDesc1: `1. 交易状态未发送：`,
      FAQTransferAccountsFailDesc2: '可能因为转账请求未被区块链接收，请您耐心等待',
      FAQTransferAccountsFailDesc3: '2. 交易状态等待确认：',
      FAQTransferAccountsFailDesc4: `可能因矿工费设置较低造成，请您耐心等待`,
      FAQTransferAccountsFailDesc5: '3. 交易状态失败：',
      FAQTransferAccountsFailDesc6: `
      1> gas不足或者是只能合约的问题，如果您无法确认具体原因，请与我们联系\n
      2> 交易重复，发起了两笔相同的转账，其中矿工费低的被取消, 请查看转账记录，根据需求决定是否发起新的转账
      `,
      FAQNotArriveAccountTitle: '转账成功但对方没收到怎么办？',
      FAQNotArriveAccountDesc1: `
      1.检查是否收款地址填写错误\n
      2.收币方网络不稳定，联系刷新对方资产页
      `,

    },
    transaction: {
      transaction: '转账',
      toAddress: '收款方',
      enterAddressOrWord: '接受地址/口令名称',
      sendAmount: '发送金额',
      balance: '余额',
      enterAmount: '输入转账金额',
      remark: '备注',
      optional: '选填',
      enterRemark: '输入备注',
      txFee: '交易费',
      send: '发送',
      low: '慢',
      middle: '中',
      high: '快',
      receive: '收款',
      shortWordReceive: '口令收款',
      shortword: '口令名称',
      qrCode: '收款码',
      enterRegisterShortword: '请输入注册口令',
      enterReceiveAmount: '请输入收款金额',
      remarkOptional: '备注(选填)',
      ehterRemark: '输入备注',
      sendShortword: '发送口令',
      enterPassword: '输入密码',
      cancel: '取消',
      confirm: '确认',
      passwordHit: '密码提示信息',
      passwordError: '密码错误',
      sendSuccess: '发送成功',
      sendFailure: '发送失败',
    },
    account:{
      total:'总资产',
      assets:'资产',
      accountName:'账户',
      all:'全部',
      sent:'发送',
      received:'接收',
      failed:'失败',
      value:'交易额',
      timeStamp:'时间',
      nonce:'Nonce',
      extraData:'备注',
      from:'发送地址',
      to:'接收地址',
      hash:'Hash'
      
    }
  },
};

export const resource = {
  en: enResource,
  zh: zhResource,
};
