import React, {useMemo} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import PaymentHistoryScreen from '../screens/PaymentHistoryScreen';
import ProductScreen from '../screens/ProductScreen';
import { useTheme } from '../theme/ThemeContext.js';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {

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
    <ProfileStack.Navigator
        screenOptions={screenOptions}>
        <ProfileStack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            />
        <ProfileStack.Screen 
            name="Edit Profile" 
            component={ProfileEditScreen} 
            />
        <ProfileStack.Screen 
            name="Payment History" 
            component={PaymentHistoryScreen} 
            />
        <ProfileStack.Screen 
            name="My Products" 
            component={ProductScreen} 
            />
        
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
