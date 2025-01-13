import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthScreen from './screens/AuthScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

// Placeholder screens
const ExploreScreen = () => <Screen title="Explore" />;
const SearchScreen = () => <Screen title="Search" />;
const MessagesScreen = () => <Screen title="Messages" />;
const ProfileScreen = () => <Screen title="Profile" />;
const CreatePostScreen = () => <Screen title="Create Post" />;

// Reusable screen component
const Screen = ({ title }) => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>{title}</Text>
  </View>
);

const App = () => {
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
                <TouchableOpacity style={styles.postButton} {...props}>
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
            name="Auth"
            component={AuthScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person-outline" size={28} color={color} selectionColor={'#aaa'} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
});

export default App;