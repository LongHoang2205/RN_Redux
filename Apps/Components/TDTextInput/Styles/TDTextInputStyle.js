import {StyleSheet} from 'react-native';
import {Metrics,Images,Colors} from '../../../Themes'

export default StyleSheet.create({
    container:{
        marginHorizontal:Metrics.doubleBaseMargin,
        marginVertical:Metrics.baseMargin
    },
    title:{
        marginVertical:Metrics.doubleBaseMargin,
        fontSize:Metrics.body5,
        color:Colors.white
    },
    input:{
        borderBottomWidth:1,
        borderColor:Colors.white,
        height:50
    }
})