import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';


import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SettingsStack from './navigation/SettingsStack';
import MessagesStackNavigator from './navigation/MessagesStack';

import ButtonMain from './components/ButtonMain';
import ButtonSettings from './components/ButtonSettings';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

// Placeholder screens
const ExploreScreen = () => <Screen title="Explore" />;
const SearchScreen = () => <Screen title="Search" />;
const CreatePostScreen = () => <Screen tittle="Create" />

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
            headerShown: false,
            headerStyle: { backgroundColor: '#141414' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarShowLabel: false,
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
            component={MessagesStackNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="chatbubble-outline" size={28} color={color} selectionColor={'#aaa'}/>
              ),
            }}
          />
          
          <Tab.Screen
            name="Settings"
            component={SettingsStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name='person-outline' size={28} color={color} selectionColor={'#aaa'} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <Modalize ref={modalizeRef} snapPoint={600} modalStyle={styles.modal}>
        <View style={styles.modalContent}>
          <Ionicons name={'push-outline'} size={30} color="#aaa" style={styles.modalIcon} />
          <Text style={styles.modalTitle}>Create New Listing</Text>
          <Text style={styles.modalText}>Share your innovation with the world</Text>

          <View>
            <ButtonSettings 
              iconName={'code-sharp'} 
              title={'Software Application'}
              onPress={() => {}}
              subtitle={"List your software product or application"}
              rightIcon={"lock-closed-outline"}
            />
            <ButtonSettings 
              iconName={'hardware-chip-outline'} 
              title={'Hardware Product'}
              onPress={() => {}}
              subtitle={"List your hardware or loT device"}
              rightIcon={"lock-closed-outline"}
            />
            <ButtonSettings 
              iconName={'logo-reddit'} 
              title={'AI Solution'}
              onPress={() => {}}
              subtitle={"List your Al or machine learning solution"}
              rightIcon={"chevron-forward"}
            />
            <ButtonSettings 
              iconName={'star-outline'} 
              title={'Influencer Campaign'}
              onPress={() => {}}
              subtitle={"Create a new influencer campaign"}
              rightIcon={"lock-closed-outline"}
            />
          </View>

          <ButtonMain >Upgrade</ButtonMain>
          
          
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
  modal: { padding: 20, backgroundColor: '#141414' },
  modalContent: { alignItems: 'center', color: '#fff' },
  modalTitle: { fontSize: 18, marginVertical: 5, color: '#fff' },
  modalText: { fontSize: 14, color: '#aaa', marginBottom: 5},
  modalIcon: {
    size: 25,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default App;