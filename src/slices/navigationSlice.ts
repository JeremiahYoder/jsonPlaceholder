// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// import { HOME } from "../constants/screens";
// import { AuthStackNavigator } from "../navigation";

// let initialState = {
//   index: 0,
//   routes: [
//     {
//       key: "home",
//       routeName: HOME
//     }
//   ]
// };

// const navigationSlice = createSlice({
//     name: 'navigation',
//     initialState,
//     reducers: {
//         navigationData: (state, action) => {
//             const nextState = Stack.Navigator.
//         },
//         default: (state = initialState) => {
//             return { ...state }
//         }
//     }
// })

// export const { } = navigationSlice.actions

// export default navigationSlice.reducer

// import ApplicationNavigator from "../navigation";
// import { WELCOME } from "../screen_names";

// let initialState = {
//   index: 0,
//   routes: [
//     {
//       key: "welcome",
//       routeName: WELCOME
//     }
//   ]
// };

// const navigationData = (state, action) => {
//   const nextState = ApplicationNavigator.router.getStateForAction(
//     action,
//     state
//   );

//   return nextState || state;
// };

// export default navigationData;










// <NavigationContainer
//     initialState={initialState}
//     onStateChange={(state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)) }
// >
//     <AppNavigation/>
// </NavigationContainer>






// import { Navigator } from './Navigator'
// import { NavigationActions } from 'react-navigation'

// const initialAction = { type: NavigationActions.Init }
// const initialState = Navigator.router.getStateForAction(initialAction)

// export default (state = initialState, action) => {
//   // Our Navigator's router is now responsible for 
//   // creating our navigation state object
//   return Navigator.router.getStateForAction(action, state)
// }