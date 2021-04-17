import React, { useState } from 'react';
import { Text, View, ScrollView ,TouchableOpacity,SafeAreaView,FlatList} from 'react-native';

import {useSelector,useDispatch} from 'react-redux';
import styles from '../../styles';
import Icon from '../Components/Head/Icon';
import {Images,Colors,Metrics} from '../Themes';
import HeadComponent from '../Components/Head/HeadComponent'
import { addTodo } from '../Redux/Actions';
// styles


// components

import TodoList from '../Components/Todo/TodoList'


//redux




function Todo ({navigation}){
    
    // const onPressBack=()=>{
    //     navigation.goBack();
    // }
    const onPressMove = () => {
        navigation.navigate("AddTodoScreen")
    }

        return (

            // <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            //     <Text>{`\nname: ${userName} \ndescription:${loginState.passWord} `}</Text>
            //     <TouchableOpacity onPress={onPressMove}><Text>Back</Text></TouchableOpacity>
            // </View>
            <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}> 
            </SafeAreaView>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <HeadComponent title={'Todo List'}/>
            <View style={{position:'absolute',right:20}}>
            <Icon onPressButton={onPressMove} img={Images.add}/>
            </View>

            </View>
            
                {/* <View style={{backgroundColor:Colors.white,height:70,marginHorizontal:20,borderRadius:10}}>
                <Text style={{fontSize:16,fontWeight:'bold',marginLeft:20}}>{taskName} </Text>
                <Text style={{fontSize:12,fontWeight:'bold',marginLeft:20,marginTop:10}}>{loginState.description} </Text>
                </View>    */}
            <FlatList
               data={[]}
                renderItem={({item,index})=>(
                    <TodoList />
                )
            }
            >
            </FlatList>

            </View>
            
        );
}

export default Todo;