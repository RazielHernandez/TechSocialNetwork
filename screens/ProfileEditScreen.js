import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputMain from '../components/InputMain';
import ButtonMain from '../components/ButtonMain';
import BaseContainer from '../components/BaseContainer';
import { useTheme } from '../theme/ThemeContext.js';
import InputSetting from '../components/InputSetting.js';

export default function ProfileEditScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [website, setWebsite] = useState('');
  const { colors } = useTheme();
  const styles = getDynamicStyles(colors);

  const handleSave = () => {
    // Handle save logic here
    console.log('Profile saved:', {
      name,
      description,
      city,
      country,
      twitter,
      linkedIn,
      website,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=',
          }}
          style={styles.profilePicture}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      {/*<View style={styles.inputContainer}>
        <InputMain placeholder='Name' label='Name'/>
        <InputMain placeholder='Description' label='Description' numberOfLines={3}/>
        <InputMain placeholder='City' label='City'/>
        <InputMain placeholder='Country' label='Country'/>
      </View>*/}
      <BaseContainer title={"Personal Profile"}>
        <InputSetting placeholder='Name' label='Name'/>
        <InputSetting placeholder='Description' label='Description' numberOfLines={3}/>
        <InputSetting placeholder='City' label='City'/>
        <InputSetting placeholder='Country' label='Country'/>
      </BaseContainer>
      
      {/* Social Media Links */}
      {/*<View style={styles.inputContainer}>
        <Text style={styles.sectionTitle}>Social Media Links</Text>
        <InputMain placeholder='account@' label='X'/>
        <InputMain placeholder='www.LinkedIn.com/In/name' label='LinkedIn'/>
        <InputMain placeholder='www.website.com' label='Website'/>
      </View>*/}
      <BaseContainer title={"Social Media"}>
        <InputSetting placeholder='account@' label='X'/>
        <InputSetting placeholder='www.LinkedIn.com/In/name' label='LinkedIn'/>
        <InputSetting placeholder='www.website.com' label='Website'/>
      </BaseContainer>

      {/* Save Button */}
      <View style={styles.inputContainer}>
        <ButtonMain>
          <Text style={styles.sectionTitle}>Save</Text>
        </ButtonMain>
      </View>
      
    </ScrollView>
  );
}

const getDynamicStyles = (colors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
    color: colors.text,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.background,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 110,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.baseContainerFooter,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  inputContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.background,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: colors.text,
  },
  description: {
    height: 80,
    textAlignVertical: 'top',
  },
  socialMediaContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.subtitle,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: colors.background,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
