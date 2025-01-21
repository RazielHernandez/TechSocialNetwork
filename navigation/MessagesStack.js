import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';

const MessagesStack = createNativeStackNavigator();

const MessagesStackNavigator = () => {
  return (
    <MessagesStack.Navigator>
        <MessagesStack.Screen name="Messages" component={MessagesScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff', 
                headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <MessagesStack.Screen name="Chat" component={ChatScreen} 
            options={{
                headerStyle: { backgroundColor: '#141414' },
                headerTintColor: '#fff', 
                headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        
    </MessagesStack.Navigator>
  );
};

export default MessagesStackNavigator;
