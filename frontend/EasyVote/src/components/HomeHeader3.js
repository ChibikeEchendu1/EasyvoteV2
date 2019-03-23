import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'

const HomeHeader3 = (props) =>{
    return(
    <View style={styles.viewStyle}>


    <View /* numberOfLines={1}  */>
        <Text style={{fontSize:30,alignSelf:'center', marginLeft:20}}>{props.ti}</Text>
        </View>
       
        
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        top:5,
        alignSelf: 'center',
        alignItems:'flex-start',
       justifyContent:'space-between',
        flexDirection: 'column',
        marginBottom:10,
        width: '100%',
        height: '13%',
        //backgroundColor: '#F4F2F3',
    
    
    },

   
});

export {HomeHeader3};