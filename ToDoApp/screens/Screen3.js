import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Screen3 = ({ navigation, route }) => {
    const { name ,id} = route?.params;
    const [nameUser, setNameUser] = useState(name);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://650663f03a38daf4803e724d.mockapi.io/phamducnhan/user')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, [route.params])
    const filterData = data.filter((item) => item.name === name);
    console.log(filterData);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '20%', paddingTop: 20, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={()=>{
                        navigation.goBack();
                    }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 20 }}>
                            <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://i.scdn.co/image/ab6761610000e5eba69580618d4cb782c49f6c7b' }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {nameUser}</Text>
                            <Text>Have agrate day a head</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <TextInput style={{ width: '100%', height: 50, borderWidth: 1, marginTop: 20, paddingLeft: 20, fontSize: 24 }} placeholder='Search...' />
                </View>
            </View>
            <FlatList
                data={filterData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: '100%', height: '60%', paddingHorizontal: 20, marginVertical: 20 }}>
                            {item.todo.map((todoItem) => (
                                <View key={todoItem.id} style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#9095A0', height: 60, alignItems: 'center', borderRadius: 20, marginBottom: 20 }}>
                                    <AntDesign name="checkcircle" size={24} color="green" />
                                    <View style={{ width: '80%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                            {todoItem.job}
                                        </Text>
                                    </View>
                                    <AntDesign name="edit" size={24} color="orange" />
                                </View>
                            ))}
                        </View>
                    )
                }}
            />
            <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate('Screen2',  {user:filterData[0], name:nameUser} )}
                    style={{ alignSelf: 'center' }}>
                    <Ionicons name="add-circle" size={100} color="#00BDD6" />
                </Pressable>
            </View>
        </View>
    );
}

export default Screen3;
