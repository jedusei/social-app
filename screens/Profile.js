import React from 'react';
import {
    Image, ScrollView, StyleSheet, StatusBar,
    Text, TouchableOpacity, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView style={{ backgroundColor: '#f5f9ff' }}>
            <View style={{ paddingBottom: 30 }}>
                <StatusBar barStyle='dark-content' backgroundColor="#fff" />
                <View style={{ padding: 20, backgroundColor: '#fff', elevation: 4, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity activeOpacity={0.75} style={{ padding: 10, paddingLeft: 0 }}>
                            <Ionicons name="md-arrow-back" size={30} color="#445975" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.75} style={{ padding: 10, paddingRight: 0 }}>
                            <Ionicons name="ellipsis-vertical" size={24} color="#445975" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginTop: 20, marginBottom: 30, fontSize: 32, fontWeight: 'bold', color: '#445975' }}>My Profile</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderRadius: 45, elevation: 2 }}>
                            <Image source={{ uri: "http://placekitten.com/g/200/199" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        </View>
                        <Text style={{ marginTop: 20, marginBottom: 10, fontSize: 25, fontWeight: 'bold', color: '#445975' }}>Anna Alvarado</Text>
                        <Text style={{ fontSize: 20, color: "#86a1d2", marginBottom: 5 }}>Guildhall School of Music &amp; Drama</Text>
                        <Text style={{ fontSize: 18, color: "#86a1d2", letterSpacing: 2 }}>London, UK</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, marginBottom: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.statsLabel}>Photos</Text>
                            <Text style={styles.statsValue}>456</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.statsLabel}>Followers</Text>
                            <Text style={styles.statsValue}>602</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.statsLabel}>Follows</Text>
                            <Text style={styles.statsValue}>290</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 300, margin: 30 }}>
                    <Image source={{ uri: "http://placekitten.com/g/200/300" }} style={styles.bottomImage} />
                    <View style={{ width: 10 }} />
                    <View style={{ flex: 1 }} >
                        <Image source={{ uri: "http://placekitten.com/g/150/150" }} style={styles.bottomImage} />
                        <View style={{ height: 10 }} />
                        <Image source={{ uri: "http://placekitten.com/g/151/150" }} style={styles.bottomImage} />
                    </View>
                </View>
            </View>
        </ScrollView >
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