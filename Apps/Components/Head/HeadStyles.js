import {StyleSheet} from 'react-native';
import {Metrics,Images,Colors} from '../../Themes'

export default StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:Colors.safeArea
    },
    head:{
        alignItems:'center',
        height:50,
        justifyContent:'center',
        flexDirection:'row'
    },
    textHead:{
        fontSize:Metrics.h5,
        color:Colors.white,
        fontWeight:'bold'
    },
    icons:{
        width:20,
        height:20,
    },
    buttonIcons:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})
