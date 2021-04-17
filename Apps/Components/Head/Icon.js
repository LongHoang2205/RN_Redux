import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableOpacity,
} from 'react-native';
import styles from './HeadStyles';
import {Images,Metrics,Colors} from '../../Themes'

export default function Icon ({onPressButton,btn,img}){
        return(
        <TouchableOpacity style={[styles.buttonIcons,btn]} onPress={onPressButton}>
            <Image source={img} style={styles.icons}/>
        </TouchableOpacity>
        )
        
}