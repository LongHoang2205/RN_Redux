// import React, { useState } from 'react';
// import { Text, View, ScrollView ,TouchableOpacity} from 'react-native';

// // styles
// import styles from "./Styles/LoginScreenStyle"

// // components
// import { MATextInput, MAButtonIcon, MAButton } from "../../Components"


// //redux
// import {useSelector,useDispatch} from 'react-redux';
// import {login} from '../../Redux/Actions/index';



// function LoginScreen ({navigation}){
//     // const onPressMove = () => {
//     //     navigation.navigate("Todo")
//     // }
//     const onPressBack=()=>{
//         navigation.goBack();
//     }
//     const dispatch = useDispatch();

//     const loginState = useSelector(state => state.login);
//     const userName = loginState.userName;

//     const [userNameInput, setUserNameInput] = useState('');
//     const [passwordInput, setPasswordInput] = useState('');

//     const loginPress = () => {
//         // dispatch to login action type with 2 pameters
//         // username and password
//         dispatch(login({ userName: userNameInput, passWord: passwordInput }));
//     };

//     const onChangeTextUsername = text => {
//         setUserNameInput(text);
//     };

//     const onChangeTextPassword = text => {
//         setPasswordInput(text);
//     };

//         return (
//             <View style={styles.container}>
//                 <ScrollView contentContainerStyle={styles.scrollView}>
//                     <View style={styles.titleContainer}>
//                         <Text style={styles.welcomeBack}>Welcome back,</Text>
//                         <Text style={styles.appTitle}>My-App</Text>
//                     </View>
//                     <View style={styles.textInputContainer}>
//                         <MATextInput  onChangeText={text => onChangeTextUsername(text)} placeholder={"Email"} />
//                         <MATextInput onChangeText={text => onChangeTextPassword(text)} placeholder={"Password"} />
//                     </View>
//                     <View style={{}}>
//                         <MAButtonIcon />
//                     </View>
//                     <View >
//                          <Text style={styles.other}>
                    
//                          <Text>{`\nname: ${userName} \ndescription:${loginState.passWord} `}</Text>
//                 </Text>
//             </View>
//             <MAButton buttonStyle={{backgroundColor: '#F2D43D'}} onPressButton={loginPress}/>
//                     <View style={{position: 'absolute', bottom: 80,left:40}}>
//                     <TouchableOpacity>
//                         <Text style={{fontSize:12}}>Forgot password?</Text>
//                     </TouchableOpacity>
//                     </View>
//                     <View style={{position: 'absolute', bottom: 50, right: 20}}>
//                         <MAButton buttonStyle={{backgroundColor: '#F2D43D'}} onPressButton={onPressBack}  />
//                     </View>
//                     <View style={{backgroundColor:'#E9E8E9',width:'120%',height:80,position:'absolute',bottom:0, zIndex: -100}}></View>
//                 </ScrollView>
//             </View>
//         );
// }

// export default LoginScreen;


import React, { useState } from 'react';
import { Text, View, ScrollView ,TouchableOpacity,SafeAreaView} from 'react-native';

// styles
import styles from "../../../styles"

// components
import { MATextInput, MAButtonIcon, MAButton } from "../../Components"


//redux
import {useSelector,useDispatch} from 'react-redux';
import {login} from '../../Redux/Actions/index';

import HeadComponent from '../../Components/Head/HeadComponent'

import Icon from '../../Components/Head/Icon';

import {Images,Colors,Metrics} from '../../Themes';


function LoginScreen ({navigation}){
    // const onPressMove = () => {
    //     navigation.navigate("Todo")
    // }
    const onPressBack=()=>{
        navigation.goBack();
    }
        const dispatch = useDispatch();

    const loginState = useSelector(state => state.login);
    const taskName = loginState.taskName;

    const [taskNameInput, setTaskNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const loginPress = () => {
        // dispatch to login action type with 2 pameters
        // username and password
        dispatch(login({ taskName: taskNameInput, description: descriptionInput }));
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
            <HeadComponent title={'Add Todo'}/>
            <View style={{position:'absolute',right:20}}>
            <Icon img={Images.submit} onPressButton={loginPress}/>
            </View>
            </View>
                    <MATextInput title={'TaskName'} onChangeText={text => onChangeTextTaskName(text)}/>
                    <MATextInput title={'Description'} onChangeText={text => onChangeTextDescription(text)}/>
                    <Icon img={Images.submit} onPressButton={onPressBack}/>
                </ScrollView>
            </View>
        );
}

export default LoginScreen;