import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SupportScreen from './screens/SupportScreen';
import MessagesScreen from './screens/MessagesScreen';
import AuthScreen from './screens/AuthScreen';

import InputMain from './components/InputMain';
import ButtonMain from './components/ButtonMain';

const Tab = createBottomTabNavigator();

// Placeholder screens
const ExploreScreen = () => <Screen title="Explore" />;
const SearchScreen = () => <Screen title="Search" />;
const CreatePostScreen = () => <Screen title="Create Post" />;

// Reusable screen component
const Screen = ({ title }) => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>{title}</Text>
  </View>
);

const App = () => {

  const modalizeRef = useRef(null);
  const openCreateView = () => modalizeRef.current?.open();

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#141414' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarShowLabel: true,
            headerRight: () => (
              <TouchableOpacity style={styles.bellIcon}>
                <Icon name="notifications-outline" size={24} color="#fff" />
              </TouchableOpacity>
            ),
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="compass-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="search-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="CreatePost"
            component={CreatePostScreen}
            options={{
              tabBarButton: (props) => (
                <TouchableOpacity style={styles.postButton} {...props} onPress={openCreateView}>
                  <Icon name="add-circle-outline" size={56} color="#141414" />
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="chatbubble-outline" size={28} color={color} selectionColor={'#aaa'}/>
              ),
            }}
          />
          
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name='person-outline' size={28} color={color} selectionColor={'#aaa'} />
              ),
            }}
          />

          
          
        </Tab.Navigator>
      </NavigationContainer>

      <Modalize ref={modalizeRef} snapPoint={450} modalStyle={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create</Text>
              <Text style={styles.modalText}>We'll send an email to recover your password</Text>
              <InputMain placeholder='email' />
              <ButtonMain>Send</ButtonMain>
            </View>
          </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabBar: {
    height: 90,
    backgroundColor: '#aaa',
    borderTopWidth: 0,
    elevation: 5,
  },
  postButton: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    color: '#141414',
  },
  bellIcon: {
    marginRight: 15,
  },
  modal: { padding: 20, backgroundColor: '#f9f9f9' },
  modalContent: { alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});

export default App;