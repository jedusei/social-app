import React from 'react';
import {
    FlatList, Image, ScrollView, StatusBar,
    Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

const stories = [
    {
        imageUrl: "http://placekitten.com/g/200/200"
    },
    {
        imageUrl: "http://placekitten.com/g/200/204"
    },
    {
        imageUrl: "http://placekitten.com/g/200/203"
    },
    {
        imageUrl: "http://placekitten.com/g/200/202"
    },
    {
        imageUrl: "http://placekitten.com/g/200/201"
    }
];

export default function Home({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#f5f9ff' }}>
            <View style={{ paddingTop: 40, paddingBottom: 20 }}>
                <StatusBar backgroundColor="#f5f9ff" barStyle="dark-content" />
                <View style={{ flexDirection: 'row', marginBottom: 40, paddingHorizontal: 20 }} >
                    <View style={{ flex: 1, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#86a1d2" }}>Hello,</Text>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#445975' }}>Alvarado!</Text>
                    </View>
                    <View style={{ borderRadius: 45, elevation: 4, shadowRadius: 10, shadowOffset: { height: 5 }, shadowOpacity: 0.1, backgroundColor: '#fff' }}>
                        <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate("Profile")}>
                            <Image source={{ uri: "http://placekitten.com/g/200/199" }} style={{ width: 90, height: 90, borderRadius: 45 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 20, paddingStart: 30, paddingEnd: 10, paddingVertical: 10, elevation: 4, shadowRadius: 10, shadowOffset: { height: 5 }, shadowOpacity: 0.1 }}>
                    <View style={{ width: 50, height: 50, elevation: 4, backgroundColor: '#ff8fbc', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="search" size={24} color="#fff" />
                    </View>
                    <TextInput placeholder="Search friend" placeholderTextColor="#abbddd" style={{ fontSize: 18, paddingLeft: 30, flex: 1 }} />
                </View>

                <FlatList horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 40 }}
                    data={stories}
                    keyExtractor={(x) => x.imageUrl}
                    ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    ListHeaderComponent={() =>
                        <TouchableOpacity activeOpacity={0.75}>
                            <View style={{ marginRight: 15, width: 100, height: 100, elevation: 4, shadowRadius: 10, shadowOffset: { height: 5 }, shadowOpacity: 0.1, backgroundColor: '#fff', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <AntDesign name="plus" size={30} color="#a1b6da" />
                            </View>
                        </TouchableOpacity>
                    }
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate("Conversations")}>
                            <Image source={{ uri: item.imageUrl }} style={{ borderRadius: 50, borderWidth: 2, borderColor: '#ff498b', width: 100, height: 100 }} />
                        </TouchableOpacity>
                    } />

                <View style={{ borderRadius: 20, backgroundColor: '#fff', elevation: 4, flex: 1, marginHorizontal: 20, shadowRadius: 10, shadowOffset: { height: 5 }, shadowOpacity: 0.1 }}>
                    <Image source={{ uri: "http://placekitten.com/g/500/500" }} style={{ height: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <Image source={{ uri: "http://placekitten.com/g/200/200" }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        <View style={{ alignSelf: 'center', flex: 1, marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#445975' }} >Shane Robertson</Text>
                            <Text style={{ fontSize: 15, color: "#86a1d2" }}>32m ago</Text>
                        </View>
                        <Ionicons name="ellipsis-vertical" size={24} color="#183254" style={{ alignSelf: 'center' }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}