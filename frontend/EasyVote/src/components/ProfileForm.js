import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {HeaderSet} from './index';
// import _ from 'lodash';
import {connect} from 'react-redux';
import {Fetchelection} from '../actions';
import { AsyncStorage } from "react-native"
import ProfileHome from './ProfileHome';
import {
  Platform,
  StyleSheet,
  ListView,
  SafeAreaView,
  Keyboard
} from 'react-native';



class ProfileForm extends Component {
  constructor(props) {
    super(props);
  this.state = {
    elections: [
        {
            Name: "Federal Election 2019"
        },
        {
            Name: "Ottawa municipal Election 2019"
        },
        {
            Name: "Senate of Canada"
        },
        {
            Name: "Manitoba municipal election"
        },
        {
            Name: "Toronto municipal election"
        },


  ],
}
  }


  componentDidMount(){
    this.props.Fetchelection();

  }


    /* onEmailChanged(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     } */

    /* onButtonPress(){
       const {email,password} = this.props;
      this.props.loginUser({email,password});
      
     }*/

   /* renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  } */

  getProfiles(){
    return  this.state.elections;
  }

    // componentDidMount(){
    //     fetch('http://127.0.0.1:8000/election/list', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => {
    //         this.setState({'elections': response.foundData});
    //     })
    //
    // }
  renderRow(item){
    return <View style={{borderBottomWidth: 1, borderBottomColor: "black",marginBottom: 30, padding: 10 }} >
        <Text >
      {item.Name}
          </Text>
    </View>
   }

  renderButton(){ 
   /*  if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{ */
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getProfiles())
     return <ListView
    // horizontal={true}
     style={{width:'90%',marginTop:'10%'}}
     dataSource={this.dataSource}
     enableEmptySections = {true}
     renderRow={this.renderRow}
     />
      ;
    //}
  }

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{width:'100%', height:'100%',backgroundColor:'white',alignItems:'center', marginTop:'5%'}}>
    <HeaderSet place2={'ProfileEdit'} press = {this.props.navigation.navigate} place ={'SettingsEdit'}/>
      {this.renderButton()}
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
       // height: '100%',
       marginTop: '50%',
        width: '100%',
    },
   
    
  });

  const mapStateToProps = state =>{
  
    // const elections = _.map(state.auth.Elections,(Val,uid) =>{
    //   return {...Val};
    // });
  
  
  //return {elections,loading:state.pro.loading1};
  };

export default connect(null,{Fetchelection})(ProfileForm);
