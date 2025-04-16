import React, {useMemo} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProjectScreen from '../screens/ProjectScreen';
import { useTheme } from '../theme/ThemeContext.js';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {

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
    <HomeStack.Navigator screenOptions={screenOptions}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
            
        <HomeStack.Screen name="Project" component={ProjectScreen} />
        
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;