import {StyleSheet} from 'react-native';
import {Metrics,Images,Colors} from './Apps/Themes'

export default StyleSheet.create({
    safeArea:{
        backgroundColor:Colors.safeArea
    },
    container:{
        backgroundColor:Colors.background,
        flex:1
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
    buttonIcons:{
        position:'absolute',
        right:20
    },
    icons:{
        width:20,
        height:20
    }
})
