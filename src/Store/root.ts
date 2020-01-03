import { reaction } from 'mobx'
import WalletStore from './wallet'
import Dipperin from '@dipperin/dipperin.js'
import Account from './account'
import ChainData from './chainData'
import Transaction from './transaction'
import Timer from './timer'
class Root {
  timer: Timer
  chainData: ChainData
  wallet: WalletStore
  account: Account
  transaction: Transaction
  dipperin?: Dipperin
  constructor() {
    this.timer = new Timer()
    this.chainData = new ChainData(this)
    this.wallet = new WalletStore(this)
    this.account = new Account(this)
    this.transaction = new Transaction(this)
    this.init()
  }

  async init() {
    await this.chainData.init()
    this.dipperin = new Dipperin(this.chainData.currentNetHost) 
    await this.wallet.load() 
    await this.account.load()
    await this.transaction.load()
    this.chainData.startUpdate()
    reaction(
      () => this.chainData.isConnect, // once connected, update trasction & account
      isConnect => {
        if (isConnect) {
          this.account.startUpdate()
          this.transaction.startUpdate()
        } 
      }
    )
    
  }

  updateDipperinHost() {
    this.dipperin = new Dipperin(this.chainData.currentNetHost)
  }
}

export default Root