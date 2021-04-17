import React,{Component} from 'react';
import {View ,Image,TouchableOpacity} from 'react-native';

import styles from './Styles/StyleIcon'


import { Images } from "../../Themes"

export default class MAButtonIcon extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image source={Images.facebook} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginVertical:14}}>
                    <Image source={Images.google} style={styles.iconGoogle}/>
                </TouchableOpacity>
            </View>
        )
    }
}