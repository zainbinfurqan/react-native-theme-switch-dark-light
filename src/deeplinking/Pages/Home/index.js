import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

function Home(props) {
    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Users')}>
                <Text>Users</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;