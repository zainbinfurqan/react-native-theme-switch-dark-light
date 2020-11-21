import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

function Users(props) {
    return (
        <View style={{ flex: 1, }}>
            {console.log(props.route.params.id)}
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <Text>User id : {props.route.params.id}</Text>
        </View>
    );
}

export default Users;