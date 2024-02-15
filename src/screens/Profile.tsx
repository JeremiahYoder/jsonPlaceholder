import React, { useCallback, useMemo } from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import { ProfileScreenProps } from '../navigation/types';
import { LOGIN } from '../constants/screens';

const ProfileScreen = ({ navigation, route }: ProfileScreenProps): React.JSX.Element => {
    const Name = useMemo(() => route?.params?.name, [route])

    const logout = useCallback(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: LOGIN }]
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text>This is {Name}'s profile</Text>
            <Button title='Logout' onPress={logout} />
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