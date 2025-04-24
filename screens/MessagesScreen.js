import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Message from '../components/Message';
import { useTheme } from '../theme/ThemeContext.js';

export default function MessagesScreen({navigation}) {

  const { colors } = useTheme();
  const styles = getDynamicStyles(colors);

  return (
    <ScrollView style={styles.container}>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{"Chats"}</Text>
        <Message 
            chatName={'Sarah Chen'} 
            shortMessage={'Chat with our support team'}
            chatImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s'}
            time={'05:46 PM'}
            chatCategory={'Elite'}
            onPress={() => navigation.navigate('Chat')} />
        <Message 
            chatName={'Alex Rivera'} 
            shortMessage={'Browse our guides and tutorials'}
            chatImage={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}
            time={'11:24 AM'}
            onPress={() => navigation.navigate('Chat')} />
        <Message 
            chatName={'Sarah Chen'} 
            shortMessage={'Find answers to common questions'}
            chatImage={'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'}
            time={'07:51 PM'}
            onPress={() => navigation.navigate('Chat')} />
      </View>

      
    </ScrollView>
  );
}

const getDynamicStyles = (colors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 5,
    color: colors.text,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color: colors.text,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  profileSubtitle: {
    fontSize: 14,
    color: colors.subtitle,
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.subtitle,
    marginBottom: 10,
  },
});
