import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#1C77BC',
    flex: 1,
    alignItems: 'center',
  },
  mainContent: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    width: 339,
    // height: 417,
    paddingBottom: 40,
    },
  contentTitleWrapper: {
    backgroundColor: '#F1F2F3',
    justifyContent: 'center',
    width: '100%',
    height: 39,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    textAlign: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    color: '#393B42',
    fontSize: 15,
  },
  qrcodeWrapper: {
    marginTop: 10,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f5f6',
  },
  addressWrapper: {
    marginTop: 5,
    alignItems: 'center',
    paddingBottom: 10,
  },
  addressContent: {
    borderRadius: 10,
    width: 300,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    width: 230,
    textAlign: 'center',
  },
  copy: {
    position: 'absolute',
    right: 0,
    top: 30,
    width: 20,
  },
  ShortWordWrapper: {
    marginTop: 5,
    alignItems: 'center',
    paddingBottom: 10,
  },
  ShortWordContent: {
    borderRadius: 10,
    width: 300,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyShortWord: {
    position: 'absolute',
    right: 0,
    top: 20,
    width: 20,
  },
  btnWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  btnSend: {
    height: 30,
    // borderRadius: 15,
  },
});
