import React,{Component} from 'react';
import {View ,Image,TouchableOpacity} from 'react-native';

import styles from './Styles/Style'


import { Images } from "../../Themes"

export default function MAButtonIcon ({buttonStyle, onPressButton,loginPress}) {
    // onPress={onPressButton}
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPressButton} >
                    <Image source={Images.right_arrow} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        )
    
}