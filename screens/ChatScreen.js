import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import ButtonMain from '../components/ButtonMain';
import { useTheme } from '../theme/ThemeContext.js';

const ChatScreen = () => {
  // Dummy data for messages
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi there!', type: 'received' },
    { id: '2', text: 'Hello! How are you?', type: 'sent' },
    { id: '3', text: 'I’m good, thanks! How about you?', type: 'received' },
    { id: '4', text: 'I’m doing well, working on a project.', type: 'sent' },
  ]);

  const { colors } = useTheme();
  const styles = getDynamicStyles(colors);

  // Input state for new messages
  const [inputText, setInputText] = useState('');

  // Function to send a new message
  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: inputText,
        type: 'sent',
      };
      setMessages([newMessage, ...messages]);
      setInputText('');
    }
  };

  // Render individual messages
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'sent' ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.type === 'sent' ? styles.sentMessageText : styles.receivedMessageText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>

        <View style={styles.profileSection}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' }}
                style={styles.profileImage}
            />
            <Text style={styles.profileName}>Sarah Chen</Text>
            <Text style={styles.profileSubtitle}>Software Engineer</Text>
        </View>
      {/* Messages List */}

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor={colors.subtitle}
          value={inputText}
          onChangeText={setInputText}
        />
        <ButtonMain onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
        </ButtonMain>
        
      </View>
    </View>
  );
};

const getDynamicStyles = (colors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.baseContainerFooter,
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  messageContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.baseContainerBody,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.subtitle,
  },
  profileSubtitle: {
    fontSize: 14,
    color: colors.subtitle,
  },
  sentMessageText: {
    color: colors.text, 
  },
  receivedMessageText: {
    color: colors.background,
  },
  messageText: {
    color: colors.background,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: colors.subtitle,
    backgroundColor: colors.baseContainerHeader,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: colors.subtitle,
    borderRadius: 20,
    backgroundColor: colors.background,
    placeholderTextColor: colors.subtitle,
    color: colors.text,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: colors.text,
    fontSize: 16,
  },
});

export default ChatScreen;