import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {
  TitleText,
  TextField,
  Label,
  TitleViewAllButtonHeader,
  ButtonLink,
  Button,
  BrushButtons,
  CustomAlert,
} from './common/LoginCommon';

import {connect} from 'react-redux';
import {
  mobilenumChanged,
  passwordChanged,
  emailIdChanged,
  getLoginScreenDataApi,
} from '../actions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const bottomHeight = windowHeight - 0.29 * windowHeight;

class SignIn extends Component {
  state = {
    type: '',
  };

  getHeaderTitle = () => {
    if (this.state.type == 'pass') {
      return (
        <View>
          <TitleText
            text="Just a"
            textInHighlightedColor="Just"
            highlightTextColor="#1B5ADE"
            highlightedTextWeight={700}
            basicTextColor="#333333"
            textWeight={700}
            textSize={36}
          />
          <TitleText
            text="Step away ! "
            textInHighlightedColor="Just"
            highlightTextColor="#1B5ADE"
            basicTextColor="#333333"
            textWeight={700}
            textSize={36}
          />
        </View>
      );
    } else {
      return (
        <View>
          <TitleText
            text="Login to"
            textInHighlightedColor="Login"
            highlightTextColor="#1B5ADE"
            highlightedTextWeight={700}
            basicTextColor="#333333"
            textSize={36}
            textWeight={700}
          />
          <TitleText
            text="continue booking"
            textInHighlightedColor="Login"
            highlightTextColor="#1B5ADE"
            highlightedTextWeight={700}
            basicTextColor="#333333"
            textWeight={700}
            textSize={36}
          />
        </View>
      );
    }
  };

  scrollToEmail = () => {
    this.scroller.scrollTo({x: 0, y: 2 * bottomHeight});
  };

  scrollToPassword = () => {
    this.setState({type: 'pass'});
    this.scrollerTwo.scrollTo({x: 2 * windowWidth, y: 2 * bottomHeight});
  };

  scrollToBottomLogin = () => {
    this.setState({type: ''});
    this.scrollerTwo.scrollTo({x: 0, y: 2 * bottomHeight});
  };

  scrollToTopPassword = () => {
    this.setState({type: 'pass'});
    this.scrollerThree.scrollTo({x: 2 * windowWidth, y: 0});
  };

  scrollToTopLogin = () => {
    this.scrollerThree.scrollTo({x: 0, y: 0});
    this.setState({type: ''});
  };
  scrollBackToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  phoneNumberValidation = () => {
    var number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (this.props.mobilenum == '' || !this.props.mobilenum.match(number)) {
      CustomAlert.show(
        'Please enter a valid Phone Number',
        require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
        'OK',
      );
    } else {
      this.scrollToTopPassword();
    }
  };

  passwordValidation = () => {
    if (this.props.password == '') {
      CustomAlert.show(
        'Please enter a valid Password',
        require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
        'OK',
      );
    } else {
      if (this.props.mobilenum !== '') {
        this.props.getLoginScreenDataApi(
          this.props.mobilenum,
          this.props.password,
          this.props.navigation,
        );
        this.props.mobilenumChanged('');
      } else {
        this.props.getLoginScreenDataApi(
          this.props.emailId,
          this.props.password,
          this.props.navigation,
        );
        this.props.emailIdChanged('');
      }
    }
  };

  emailIdValidation = () => {
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.props.emailId == '' || !this.props.emailId.match(validEmail)) {
      CustomAlert.show(
        'Please enter a valid Email Address',
        require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
        'OK',
      );
    } else {
      this.scrollToPassword();
    }
  };
  render() {
    const {
      screenStyle,
      imageContainer,
      headingStyle,
      bottomBorderLine,
      socialMediaIconsContainer,
      orStyle,
      inputStyle,
      buttonStyle,
      bottomTextContainer,
      signUpInsteadStyle,
    } = styles;

    return (
      <ScrollView>
        <View style={screenStyle}>
          {/*Screen Container inside this everything happens */}
          <View style={imageContainer}>
            {/*Top Fixed heading */}
            <View style={headingStyle}>{this.getHeaderTitle()}</View>

            {/* {!this.state.type && <View style={bottomBorderLine} />} */}
          </View>

          <ScrollView
            ref={scroller => {
              this.scroller = scroller;
            }}
            // decelerationRate={0.5}
            scrollEnabled={false}>
            <ScrollView
              horizontal={true}
              ref={scroller => {
                this.scrollerThree = scroller;
              }}
              scrollEnabled={false}>
              {/*Top horizontal Scroll view */}
              <View style={{height: bottomHeight, width: windowWidth}}>
                {/*First bottom  */}
                {/* <View style={socialMediaIconsContainer}>
                  <BrushButtons
                    icon={require('../assets/Icons/Other/fbIcon/fbIcon.png')}
                    title="Facebook"
                  />
                  <BrushButtons
                    icon={require('../assets/Icons/Other/googleIcon/googleIcon.png')}
                    title="Google"
                  />
                  <BrushButtons
                    icon={require('../assets/Icons/Other/emailIcon/emailIcon.png')}
                    title="Email"
                    onPress={this.scrollToEmail}
                  />
                </View> */}
                {/* <View style={orStyle}>
                  <Label
                    textWeight={500}
                    text={'OR'}
                    textColor="#333333"
                    textSize={13}
                  />
                </View> */}
                {/* <TitleViewAllButtonHeader viewBorderBottom={true} /> */}
                <View style={{height: bottomHeight, width: windowWidth}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 34,
                      marginLeft: 24,
                    }}>
                    <Label
                      text="PHONE NUMBER"
                      textColor="#606060"
                      textWeight={400}
                      textSize={13}
                    />
                  </View>
                  <TextField
                    style={inputStyle}
                    placeholder={'Phone number'}
                    placeholderTextColor="#606060"
                    hasBorder={true}
                    maxLength={10}
                    keyboardType={'phone-pad'}
                    onChangeText={value => this.props.mobilenumChanged(value)}
                    highlightColor="#EDF0F7"
                  />

                  <View style={buttonStyle}>
                    <Button
                      buttonTitle="Next"
                      mode="dark"
                      onPress={() => this.phoneNumberValidation()}
                    />
                  </View>
                </View>
              </View>

              <View style={{height: bottomHeight, width: windowWidth}}>
                {/*scroll to password screen */}
                <View
                  style={{flexDirection: 'row', marginTop: 34, marginLeft: 24}}>
                  <TouchableOpacity onPress={this.scrollToTopLogin}>
                    <Image
                      source={require('../assets/Icons/Other/arrows/back/back.png')}
                      style={{marginRight: 10}}
                    />
                  </TouchableOpacity>
                  <TitleViewAllButtonHeader
                    title={
                      <Label
                        text="OTP"
                        textColor="#606060"
                        textWeight={400}
                        textSize={13}
                      />
                    }
                    // style={{marginTop: 34}}
                  />
                </View>

                <TextField
                  style={{marginLeft: 24, width: '87%'}}
                  hasBorder={true}
                  // borderColor="#1B5ADE"
                  secureTextEntry={true}
                  onChangeText={value => this.props.passwordChanged(value)}
                  highlightColor="#EDF0F7"
                />

                <View
                  style={{
                    width: '87%',
                    marginHorizontal: 24,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <ButtonLink
                    buttonTitle={
                      <Label
                        text="Resend OTP"
                        textColor="blue"
                        textSize={12}
                        textWeight={400}
                      />
                    }
                    onPress={() => {
                      console.log('Resend OTP');
                    }}
                    style={{marginTop: 24}}
                  />
                </View>

                <View style={buttonStyle}>
                  <Button
                    buttonTitle="Log In"
                    mode="dark"
                    onPress={() => {
                      this.passwordValidation();
                      // this.props.getLoginScreenDataApi(this.props.mobilenum,this.props.password,this.props.navigation);
                    }}
                  />
                </View>

                
              </View>
            </ScrollView>
            <ScrollView
              horizontal={true}
              scrollEnabled={false}
              ref={scroller => {
                this.scrollerTwo = scroller;
              }}>
              <View style={{height: bottomHeight, width: windowWidth}}>
                {/*Second bottom screen after first scroll */}

                <TitleViewAllButtonHeader
                  title={
                    <Label
                      text="LOGIN WITH"
                      textColor="#606060"
                      textWeight={400}
                      textSize={13}
                    />
                  }
                  style={{marginTop: 34}}
                />
                <TextField
                  style={{marginLeft: 24, width: '87%'}}
                  hasBorder={true}
                  // borderColor="#1B5ADE"
                  placeholderTextColor="#606060"
                  onChangeText={value => this.props.emailIdChanged(value)}
                  highlightColor="#EDF0F7"
                />

                <View style={buttonStyle}>
                  <Button
                    buttonTitle="Next"
                    mode="dark"
                    onPress={() => {
                      this.emailIdValidation();
                    }}
                  />
                </View>

                <View style={bottomTextContainer}>
                  <Label
                    text="No Account ?"
                    textColor="#8A8A8A"
                    textSize={16}
                    textWeight={500}
                  />
                  <ButtonLink
                    buttonTitle="Sign Up Instead"
                    linkColor="#1B5ADE"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={signUpInsteadStyle}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity onPress={this.scrollBackToTop}>
                    <Image
                      source={require('../assets/Icons/Other/arrows/chevron-up/chevron-up.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.scrollBackToTop}>
                    <Label
                      text="Back"
                      textColor="#8A8A8A"
                      textSize={12}
                      textWeight={300}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{height: bottomHeight, width: windowWidth}}>
                {/*scroll to password screen */}

                <View
                  style={{flexDirection: 'row', marginTop: 34, marginLeft: 24}}>
                  <TouchableOpacity onPress={this.scrollToBottomLogin}>
                    <Image
                      source={require('../assets/Icons/Other/arrows/back/back.png')}
                      // style={{marginTop: 34}}
                      style={{marginRight: 10}}
                    />
                  </TouchableOpacity>
                  <TitleViewAllButtonHeader
                    title={
                      <Label
                        text="HAHH"
                        textColor="#606060"
                        textWeight={400}
                        textSize={13}
                      />
                    }
                    // style={{marginTop: 34}}
                  />
                </View>

                <TextField
                  style={{marginLeft: 24, width: '87%'}}
                  hasBorder={true}
                  // borderColor="#1B5ADE"
                  placeholderTextColor="#606060"
                  secureTextEntry={true}
                  onChangeText={value => this.props.passwordChanged(value)}
                  highlightColor="#EDF0F7"
                />

               

                <View style={buttonStyle}>
                  <Button
                    buttonTitle="Log In"
                    mode="dark"
                    onPress={() => {
                      this.passwordValidation();
                      // this.props.getLoginScreenDataApi(
                      //   this.props.emailId,
                      //   this.props.password,
                      //   this.props.navigation
                      // );
                    }}
                  />
                </View>

                <View style={bottomTextContainer}>
                  <Label
                    text="No Account ?"
                    textColor="#8A8A8A"
                    textSize={16}
                    textWeight={500}
                  />
                  <ButtonLink
                    buttonTitle="Sign Up Instead"
                    linkColor="#1B5ADE"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    style={signUpInsteadStyle}
                  />
                </View>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'white',
    height: windowHeight,
  },
  imageContainer: {
    paddingTop: 28,
    // paddingLeft: 24,
    // paddingRight: 60,
    paddingHorizontal: 24,
    paddingBottom: 36,
    backgroundColor: '#F6F7FB',
    justifyContent: 'center',
    height: '26%',
  },
  bottomBorderLine: {
    marginTop: 20,
    borderBottomColor: '#1B5ADE',
    borderBottomWidth: 1,
    flex: 1,
    opacity: 0.1,
    width: '97%',
  },
  socialMediaIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 38,
    marginHorizontal: 55,
  },
  orStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 31,
  },
  inputStyle: {
    marginTop: 22,
    width: '87%',
    marginHorizontal: 24,
    backgroundColor: '#F6F7FB',
    // borderColor: '#EDF0F7',
  },
  buttonStyle: {
    height: 48,
    width: '87%',
    marginHorizontal: 24,
    marginVertical: 24,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpInsteadStyle: {
    marginLeft: 5,
  },
});

const mapStateToProps = state => {
  return {
    mobilenum: state.profile.mobile_no,
    password: state.profile.password,
    emailId: state.profile.email_id,
    user_id: state.profile.user_id,
  };
};

export default connect(mapStateToProps, {
  mobilenumChanged,
  passwordChanged,
  emailIdChanged,
  getLoginScreenDataApi,
})(SignIn);
