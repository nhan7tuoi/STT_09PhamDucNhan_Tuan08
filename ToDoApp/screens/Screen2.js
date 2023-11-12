import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Screen2 = ({ route, navigation }) => {
    const { data } = route?.params;
    const [job, setJob] = useState('');
    const handleAddJob = () => {
        fetch("https://650663f03a38daf4803e724d.mockapi.io/phamducnhan/user/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                job: [
                    ...data.job,
                    {
                        id: (data.job.length + 1),
                        title: job
                    },
                ],
            }),
        }).then(response => {
            if (response.ok)
                return navigation.navigate("Screen3",{foundUser:data});
        })
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '20%', paddingTop: 20, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => {
                        navigation.goBack();
                    }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 20 }}>
                            <Image resizeMode='contain' style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://i.scdn.co/image/ab6761610000e5eba69580618d4cb782c49f6c7b' }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {data.name}</Text>
                            <Text>Have agrate day a head</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
                <View>
                    <TextInput onChangeText={setJob} style={{ width: '100%', height: 50, borderWidth: 1, marginTop: 20, paddingLeft: 20, fontSize: 24 }} placeholder='Input Job...' />
                </View>
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                <Pressable onPress={() => {
                    handleAddJob();
                }}
                    style={{ gap: 10, width: '60%', height: 50, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center', borderRadius: 20, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFF' }}>ADD</Text>
                    <Ionicons name="add-circle" size={24} color="white" />
                </Pressable>
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 300, height: 300 }} source={require('../assets/Image 95.png')} />
            </View>
        </View>
    );
}

export default Screen2;
