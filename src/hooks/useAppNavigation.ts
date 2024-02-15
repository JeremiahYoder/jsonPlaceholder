import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const useAppNavigation = () => {
    return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}

export default useAppNavigation;