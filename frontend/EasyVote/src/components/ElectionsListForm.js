import React, { Component } from 'react';
import {Text} from 'react-native';
import {HeaderSet2, HomeHeader3} from './index';
import {connect} from 'react-redux';
//import {connect} from 'react-redux';
import ProfileEditHomeicon from './ProfileEditHomeicon';
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



class ElectionsListForm extends Component {
    constructor(props) {

     // const { navigate } = props.navigation;
        super(props);
      this.state = {
        //Id:  this.props.navigation.state.params.Id,
        navigate:this.props.navigation,
        profiles: [
          {
            Name: "Presidential ",
            Party: '../.././images/logoicon.png',
            Age:24
    
          }, 
         {
          Name: "Senate ",
          Party: '../.././images/logoicon.png',
          Age:24
            
          },
          {
            Name: "Gubernatorials",
            Party: "Republican",
            Age:24
    
          }, 
         {
          Name: "House ",
          Party: "Democrats",
          Age:24
            
          },
          
      ],
    }
    this.renderRow=this.renderRow.bind(this);
      }


  componentDidMount(){
    //let valll = this.state.Id;
   // this.props.Fetchelection({valll});
}



  getProfiles(){
    return  this.state.profiles;
  }
    

  renderRow(item){
    return <ProfileEditHomeicon  press = {this.state.navigate} place ={'CandidateList'}  Name = {item.Name} /> 
      
          
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
        <HeaderSet2 place2={'ProfileEdit'} press = {this.props.navigation.navigate} place ={'SettingsEdit'}/>

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
  //  });
  
  
  //return {elections,loading:state.pro.loading1};
  };

export default  (ElectionsListForm) ; //connect(null,{Fetchelection})
