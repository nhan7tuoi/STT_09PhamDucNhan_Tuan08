import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Screen1 = ({ navigation }) => {
    const [name, setName] = useState('');
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Image style={{ width: 300, height: 300 }} source={require('../assets/Image 95.png')} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8353E2' }}>Manage Your</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8353E2' }}>Task</Text>
            </View>
            <TextInput
            onChangeText={setName}
             style={{ width: '80%', height: 60, borderWidth: 1, borderRadius: 20, paddingLeft: 20, fontSize: 24 }} placeholder='Enter Your Name...' />
            <Pressable onPress={() => navigation.navigate('Screen3',{name})}
                style={{ width: 200, height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BDD6', flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFF' }}>GET STARTED</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
        </View>
    );
}

export default Screen1;
