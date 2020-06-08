import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = new createStackNavigator();

//screen
import splashScreen from './splashScreen';
import homes from './homes';

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splashScreen" component={splashScreen} options={({navigation,routes})=>({headerShown:false})}/>
                <Stack.Screen name="homes" component={homes} options={({navigation,routes})=>({headerShown:false})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;