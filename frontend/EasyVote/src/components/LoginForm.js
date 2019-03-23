import React, { Component } from 'react';
import {FormInput,Card,FormButton,HomeHeader2,Spinner,ForwardButton} from './index';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged2,LicenseChanged,LastFourChanged,FirstNameChanged,LastNameChanged,passwordChanged,numberChanged,Signup} from '../actions';
import { AsyncStorage } from "react-native"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard
} from 'react-native';


class LoginForm extends Component {

  next(){
    if(this.props.logintrigger){
        this.props.navigation.navigate('Profile');
    }
}

      
  onFirstNameChanged(text){
    this.props.FirstNameChanged(text);
}

  onLastNameChanged(text){
    this.props.LastNameChanged(text);
  }

     onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onNumberChanged(text){
      this.props.numberChanged(text);
  }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     } 

     onPasswordChanged2(text){
      this.props.passwordChanged2(text);
   } 

   onLastFourChanged(text){
    this.props.LastFourChanged(text);
}

onLicenseChanged(text){
  this.props.LicenseChanged(text);
}

     onButtonPress(){
      this.props.navigation.navigate('Logintwo', {FirstName:this.props.FirstName,LastName:this.props.LastName,number:this.props.number,email:this.props.email});
      // const {FirstName,LastName,number,email,password,password2,Licence,fourD} = this.props; back
      //this.props.Signup({FirstName,LastName,number,email,password,password2,Licence,fourD}); back
      
     }

   /* renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  } */

  renderButton(){
    /* if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{ */
     return <FormButton /*press={this.onButtonPress.bind(this)}*/ val = {"Login"}/>;
   // }
  }

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%'}}>
    <HomeHeader2 navigate={this.props.navigation.goBack}/>
      <KeyboardAvoidingView style={{width:'90%',alignSelf:'center', marginBottom:'0%'}}  behavior = {(Platform.OS === 'ios') ? 'height' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Type Your Full Name</Text>
        </View>

        <Card>
        <FormInput val={this.props.FirstName} ct={this.onFirstNameChanged.bind(this)}  bool = {false} ph = {"First Name"}/>
        </Card>
        <Card>
        <FormInput val={this.props.LastName}  ct={this.onLastNameChanged.bind(this)}  bool = {false} ph = {"Last Name"}/>
        </Card>
        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Type Your Contact Info</Text>
        </View>
        <Card>
        <FormInput val={this.props.email} ct={this.onEmailChanged.bind(this)}  bool = {false} ph = {"Email"}/>
        </Card>
        <Card>
        <FormInput val={this.props.number}  ct={this.onNumberChanged.bind(this)}   bool = {false} ph = {"Phone number"}/>
        </Card>
        
        
        

       {/* </View> */}
       <View >
      <ForwardButton press={this.onButtonPress.bind(this)} place ={'Profile'}/>
       
       </View>
       {this.next()}
       </View>
       
       
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      </SafeAreaView>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F4F2F3',
      width: '100%',


    },
    viewStyle: {
        //height: '100%',
       marginTop: 20,
        width: '100%',
    },
   
    
  });

  const mapStateToProps = state =>{
    return{
       email: state.auth.email,
       password: state.auth.password,
       FirstName: state.auth.FirstName,
       LastName: state.auth.LastName,
       number: state.auth.Number,
       password2: state.auth.password2,
       Licence:state.auth.Licence,
       fourD:state.auth.fourD,
       logintrigger:state.auth.logintrigger,
       
       
    }
};

export default connect(mapStateToProps,{emailChanged,LicenseChanged,LastFourChanged,passwordChanged2,FirstNameChanged,LastNameChanged,passwordChanged,numberChanged,Signup})(LoginForm) ;
