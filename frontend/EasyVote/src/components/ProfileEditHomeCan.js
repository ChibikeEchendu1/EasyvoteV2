import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native'
//import Swipeout from 'react-native-swipeout';
//import {delpro} from '../actions';
//import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"
import { ForwardButton } from './ForwardButton';

class  ProfileEditHomeCan extends React.Component{


          renderImage(){
              
            return(
                <Image
                style={{height: 60, width:60, marginRight:15, borderRadius:30}}
                source={require('../.././images/profile.png')}
                resizeMode = 'contain'
                />
            );
        } 
          

  

       
         render(){
           

        return(
            // <Swipeout {...swipeSettings} >
            <TouchableOpacity onPress={() =>{this.props.press.navigate('HomeCan', {FirstName:this.props.Name});}} style={styles.listStyle} >
                {this.renderImage()}
                <View  /* style={{width:"80%"}} */>
                <Text numberOfLines={1} style={{fontWeight:'bold', fontSize:18}}>
                    {this.props.Name}
                </Text>
                 </View>
               
             </TouchableOpacity>  
           //  </Swipeout> 
        );
    };
    }
     const styles = StyleSheet.create({  
        listStyle: {
           // padding:10,
            opacity: 0.9,
            flexDirection:'row',
            //justifyContent:'space-between',
            alignItems:'center',
            width:'90%',
            alignSelf:'center',
            marginTop:8,
            marginBottom:10,
            //height:'20%',
            marginLeft:5,
            //marginBottom:10,
            borderBottomWidth:1,
            borderColor:"#D3D3D3"

        }
    
    
    }); 

   
    
    
    export default (ProfileEditHomeCan); //connect(null,{delpro})