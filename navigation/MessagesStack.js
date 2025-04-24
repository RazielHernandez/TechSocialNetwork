import React, {useMemo} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import { useTheme } from '../theme/ThemeContext.js';

const MessagesStack = createNativeStackNavigator();

const MessagesStackNavigator = () => {

  const { colors } = useTheme();
  
  const screenOptions = useMemo(() => ({
    headerStyle: { backgroundColor: colors.background },
    headerTintColor: colors.text,
    headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 15 }}>
        <Icon name="notifications-outline" size={24} color={colors.background} />
      </TouchableOpacity>
    ),
  }), [colors]);

  return (
    <MessagesStack.Navigator screenOptions={screenOptions}>
        <MessagesStack.Screen name="Messages" component={MessagesScreen} />
        <MessagesStack.Screen name="Chat" component={ChatScreen} />
        
    </MessagesStack.Navigator>
  );
};

export default MessagesStackNavigator;
