import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  commonHeaderStyle: {
    backgroundColor: '#EBF0F6',
    shadowColor: 'transparent'
  },
  commonHeaderTitleStyle: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 17,
    color: '#333333',
  },
  hamburgerIconStyle: {
    marginLeft: 5,
    // paddingLeft: 0,
    // maxHeight: 20,
    // maxWidth: 20,
    tintColor:'#5A5A5B',
    // backgroundColor: 'green',
    resizeMode: 'contain',
  },
  backIconStyle: {
    // marginLeft: 15,
    // paddingHorizontal: 25,
    paddingLeft: 45,
    // marginRight: 15,
    // maxHeight: 20,
    // maxWidth: 20,
    tintColor:'#5A5A5B',
    resizeMode: 'contain',
  },
  addIconStyle: {
    marginRight: 15,
    // marginRight: 15,
    // maxHeight: 20,
    // maxWidth: 20,
    tintColor:'#5A5A5B',
    resizeMode: 'contain',
  },

  buttonHeaderStyle: {
    position:'absolute',
    right:0,
    alignSelf:'center',
    marginRight: 15,
  },

  buttonStyle:{
    paddingHorizontal:16,
    paddingTop:5,
    paddingBottom:7,
    marginBottom: 3
    // height:38,
  }
});

export default styles;
