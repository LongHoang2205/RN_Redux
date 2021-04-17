import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableOpacity,
} from 'react-native';
import styles from './HeadStyles';
import {Images,Metrics,Colors} from '../../Themes'

export default function AddComponent ({title}){
        return(
        <View style={styles.head}>
        <Text style={styles.textHead}>{title}</Text> 
        </View>
        )
        
}