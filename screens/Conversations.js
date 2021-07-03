import React from 'react';
import {
    Image, StyleSheet, StatusBar, Text,
    TextInput, TouchableOpacity, View, FlatList
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

const conversations = [
    {
        name: "Beverly Jones",
        message: "You know you're in love whenn",
        imageUrl: "http://placekitten.com/g/200/200"
    },
    {
        name: "Crystal Flores",
        message: "Hey you! What's up!",
        imageUrl: "http://placekitten.com/g/200/204"
    },
    {
        name: "Brittany Heart",
        message: "When I'm good, I'm very good.",
        imageUrl: "http://placekitten.com/g/200/203"
    },
    {
        name: "Deborah Flores",
        message: "Hey you! What's up!",
        imageUrl: "http://placekitten.com/g/200/202"
    },
    {
        name: "Harley Quinn",
        message: "I'm a dancer. I know you're...",
        imageUrl: "http://placekitten.com/g/200/201"
    }
];

export default function Conversations({ navigation }) {
    return (
        <View style={{ backgroundColor: '#f5f9ff', flex: 1 }}>
            <StatusBar barStyle='dark-content' backgroundColor="#f5f9ff" />
            <View style={{ padding: 30, paddingBottom: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={0.75} style={{ padding: 10, paddingLeft: 0 }} onPress={() => navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={30} color="#445975" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.75} style={{ padding: 10, paddingRight: 0 }}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#445975" style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 20, marginBottom: 30, fontSize: 32, fontWeight: 'bold', color: '#445975' }}>Conversation</Text>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, paddingStart: 30, paddingEnd: 10, paddingVertical: 10, elevation: 4 }}>
                    <View style={{ width: 50, height: 50, elevation: 4, backgroundColor: '#ff8fbc', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="search" size={24} color="#fff" />
                    </View>
                    <TextInput placeholder="Search friend" placeholderTextColor="#abbddd" style={{ fontSize: 18, paddingLeft: 30, flex: 1 }} />
                </View>
            </View>
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.name}
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.75} style={{ marginHorizontal: 30, marginVertical: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: item.imageUrl }} style={{ width: 80, height: 80, borderRadius: 40, marginEnd: 30 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#445975' }}>{item.name}</Text>
                                <Text lineBreakMode='tail' numberOfLines={1} style={{ fontSize: 18, color: "#86a1d2" }}>{item.message}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                } />

            <TouchableOpacity activeOpacity={0.75} style={{ position: 'absolute', bottom: 30, right: 30 }}>
                <View style={{ elevation: 4, backgroundColor: '#ff79aa', paddingEnd: 5, paddingBottom: 2, width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="edit" size={30} color="#fff" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    statsLabel: {
        color: "#86a1d2",
        fontSize: 20
    },
    statsValue: {
        color: "#445975",
        fontSize: 24,
        fontWeight: 'bold'
    },
    bottomImage: {
        flex: 1,
        borderRadius: 20
    }
});