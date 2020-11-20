import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

function Users(props) {
    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Users;