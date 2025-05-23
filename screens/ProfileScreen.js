import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ButtonSettings from "../components/ButtonSettings";
import ButtonMain from "../components/ButtonMain";
import ButtonIcon from "../components/ButtonIcon";

import { useTheme } from '../theme/ThemeContext.js';

export default function ProfileScreen ({navigation}) {

  const {colors } = useTheme();
  const styles = getDynamicStyles(colors);

  return (
      <ScrollView style={styles.container}>

          <View style={styles.profileSection}>
              <Image
                  source={{ uri: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' }}
                  style={styles.profileImage}
              />
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileSubtitle}>Software Engineer</Text>
          </View>

          <View style={styles.profileSection}>
              <View style={styles.profileRow}>
                  <Ionicons name="globe-outline" size={20} color={colors.subtitle} style={{padding: 5}}/>
                  <Text style={styles.profileText}>Toronto, Canada</Text>
              </View>
              <View style={styles.profileRow}>
                  <Ionicons name="language" size={20} color={colors.subtitle} style={{padding: 5}}/>
                  <Text style={styles.profileText}>English, French</Text>
              </View>
          </View>

          <View style={styles.profileSection}>
              <View style={styles.profileRow}>
                  <View style={styles.profileColumn}>
                      <Text style={styles.profileSubtitle}>24</Text>
                      <Text style={styles.profileText}>Campaigns</Text>
                  </View>
                  <View style={styles.profileColumn}>
                      <Text style={styles.profileSubtitle}>52.0K</Text>
                      <Text style={styles.profileText}>Followers</Text>
                  </View>
                  <View style={styles.profileColumn}>
                      <Text style={styles.profileSubtitle}>125.0K</Text>
                      <Text style={styles.profileText}>Earnings</Text>
                  </View>
              </View>
          </View>

          <View style={styles.profileSection} >
              <View style={styles.profileRow}>
                  <ButtonMain onPress={() => navigation.navigate('Edit Profile')}>Edit Profile</ButtonMain>
                  <ButtonIcon iconName={'share-social'} />
              </View>
          </View>
          
          
          <View style={styles.profileSection}>
              <View style={styles.profileRow}>
                  <ButtonIcon iconName={'logo-twitter'} />
                  <ButtonIcon iconName={'logo-instagram'} />
                  <ButtonIcon iconName={'logo-tiktok'} />
                  <ButtonIcon iconName={'logo-linkedin'} />
              </View>
          </View>

          <ButtonSettings iconName={'grid-outline'} onPress={() => navigation.navigate('My Products')} title={'My Products'} />
          <ButtonSettings iconName={'card-outline'} onPress={() => navigation.navigate('Payment History')} title={'Payment'} />
          <ButtonSettings iconName={'cube-outline'} onPress={() => {}} title={'Orders'} />
          <ButtonSettings iconName={'heart-outline'} onPress={() => {}} title={'Favourites'} />

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
    alignContent: 'center',
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
    marginVertical: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profileColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
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
  profileText: {
    fontSize: 14,
    color: colors.subtitle,
  },
  profileSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.subtitle,
    padding: 5,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
