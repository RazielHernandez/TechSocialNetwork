import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import SupportScreen from '../screens/SupportScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
        <SettingsStack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            }}/>
        <SettingsStack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            }}/>
        <SettingsStack.Screen 
            name="Edit Profile" 
            component={ProfileEditScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            }}/>
        <SettingsStack.Screen 
            name="Support" 
            component={SupportScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            }}/>
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
