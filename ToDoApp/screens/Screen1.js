import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const url = 'https://650663f03a38daf4803e724d.mockapi.io/phamducnhan/user'
const Screen1 = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(data);
    const handleLogin = () => {
        const foundUser = data.find((item) => item.userName === userName && item.password === password);
        if (foundUser) {
            console.log(foundUser)
            navigation.navigate('Screen3', { foundUser });
        } else {
            console.error('Invalid username or password');
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Image style={{ width: 300, height: 300 }} source={require('../assets/Image 95.png')} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8353E2' }}>Manage Your</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8353E2' }}>Task</Text>
            </View>
            <TextInput
                onChangeText={setUserName}
                style={{ width: '80%', height: 60, borderWidth: 1, borderRadius: 20, paddingLeft: 20, fontSize: 24 }}
                placeholder='Enter User name...' />
            <TextInput
                secureTextEntry={true}
                onChangeText={setPassword}
                style={{ width: '80%', height: 60, borderWidth: 1, borderRadius: 20, paddingLeft: 20, fontSize: 24 }}
                placeholder='Enter Password...' />
            <Pressable onPress={() => handleLogin()}
                style={{ width: 200, height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BDD6', flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Login</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
        </View>
    );
}

export default Screen1;
