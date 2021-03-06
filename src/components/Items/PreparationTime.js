import React, { } from 'react';
import { View, Image, Text } from 'react-native'
import { constants } from '../../config/constants';

function PreparationTime(props) {
    return (
        <View style={{ flexDirection: 'row', padding: 5 }}>
            <View style={{ flex: .1, justifyContent: 'center' }}>
                <Image style={[props.index % 2 === 0 ? constants.DarkThemeCss.icon : constants.LightThemeCss.icon,]}
                    source={props.index % 2 === 0 ? constants.FOOD_DATA_DARK_ICONS.preparing_time_icon : constants.FOOD_DATA_LIGHT_ICONS.preparing_time_icon} />
            </View>
            <View style={{ flex: .9, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={[props.index % 2 === 0 ? constants.DarkThemeCss.text : constants.LightThemeCss.text,]}>{constants.FOOD_DATA[props.index].preparing_time}</Text>
            </View>
        </View>
    )
}

export default PreparationTime