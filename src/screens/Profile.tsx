import React, { useCallback, useMemo } from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import { ProfileScreenProps } from '../navigation/types';
import useAppDispatch from '../hooks/useAppDispatch';
import { logout } from '../slices/sessionSlice';
import SafeAreaView from '../components/SafeAreaView';

const ProfileScreen = ({ route }: ProfileScreenProps): React.JSX.Element => {
    const dispatch = useAppDispatch()

    const Name = useMemo(() => route?.params?.name, [route])

    const onPressLogout = useCallback(() => {
        dispatch(logout())
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>This is {Name}'s profile</Text>
                <Button title='Logout' onPress={onPressLogout} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfileScreen;