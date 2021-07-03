import React from 'react';
import { StatusBar, Text, View } from 'react-native';

export default function Home() {
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Text>Home</Text>
        </View>
    );
}