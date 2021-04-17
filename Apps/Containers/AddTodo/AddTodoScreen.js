


import React, { useState } from 'react';
import { Text, View, ScrollView ,TouchableOpacity,SafeAreaView} from 'react-native';

// styles
import styles from "../../../styles"

// components
import { MATextInput, MAButtonIcon, MAButton } from "../../Components"


//redux
import {useSelector,useDispatch} from 'react-redux';
import {addTodo} from '../../Redux/Actions/index';

import HeadComponent from '../../Components/Head/HeadComponent'

import Icon from '../../Components/Head/Icon';

import {Images,Colors,Metrics} from '../../Themes';


function addTodoScreen ({navigation}){
    // const onPressMove = () => {
    //     navigation.navigate("Todo")
    // }
    const onPressBack=()=>{
        navigation.goBack();
    }

    const dispatch = useDispatch();

    const addTodoState = useSelector(state => state.addTodo);
    const taskName = addTodoState.taskName;
  
    const [taskNameInput, setTaskNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const addTodoPress = () => {
        // dispatch to login action type with 2 pameters
        // username and password
        dispatch(addTodo({ taskName: taskNameInput, description: descriptionInput }));
    };

    const onChangeTextTaskName = text => {
        setTaskNameInput(text);
    };

    const onChangeTextDescription = text => {
        setDescriptionInput(text);
    };

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}> 
            </SafeAreaView>
                <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{position:'absolute',left:20}}>
            <Icon img={Images.delete} onPressButton={addTodoPress}/>
            </View>
            <HeadComponent title={'Add Todo'}/>
            <View style={{position:'absolute',right:20}}>
            <Icon img={Images.submit} onPressButton={addTodoPress}/>
            </View>
            </View>
                    <MATextInput title={'TaskName'} onChangeText={text => onChangeTextTaskName(text)}/>
                    <MATextInput title={'Description'} onChangeText={text => onChangeTextDescription(text)}/>
                    <Icon img={Images.back} onPressButton={onPressBack}/>
                </ScrollView>
            </View>
        );
}

export default addTodoScreen;