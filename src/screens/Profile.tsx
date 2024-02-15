import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from "react-native";
import { ProfileScreenProps } from '../navigation/types';

const ProfileScreen = ({ route }: ProfileScreenProps): React.JSX.Element => {
    const Name = useMemo(() => route?.params?.name, [route])

    return (
        <View style={styles.container}>
            <Text>This is {Name}'s profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default React.memo(ProfileScreen);