import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '../theme/ThemeContext.js';

const ProjectScreen = ({ route, navigation }) => {
  const { project } = route.params; 
  const { creator } = route.params;

  const { colors } = useTheme();
  const styles = getDynamicStyles(colors);

  const handleOpenLink = () => {
    const projectUrl = "https://example.com"; // Replace with the actual project URL
    Linking.openURL(projectUrl);
  };

  return (
    <ScrollView style={styles.container}>

      {/* Image Gallery */}
      <ScrollView horizontal style={styles.imageGallery}>
        {[project.image, project.image, project.image].map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.galleryImage}
          />
        ))}
      </ScrollView>

      {/* Project Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectPrice}>{project.price}</Text>
          </View>
          <View style={styles.creatorInfo}>
            <Image
              source={{ uri: creator.image }}
              style={styles.creatorImage}
            />
            <Text style={styles.creatorName}>{'By ' +creator.name}</Text>
          </View>
        </View>
        <Text style={styles.projectDescription}>
          {project.description}
        </Text>

        <Text style={styles.sectionTitle}>Detailed Description</Text>
        <Text style={styles.longDescription}>
          This is a longer description of the project. You can include any
          relevant details about the project here. For instance, you can talk
          about its features, functionality, and anything else that might be of
          interest to potential users.
        </Text>

        {/* Project Website Link */}
        <TouchableOpacity onPress={handleOpenLink} style={styles.linkContainer}>
          <Text style={styles.projectLink}>Visit Project Website</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={20} color={colors.text} />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.text} />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={20} color={colors.text} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const getDynamicStyles = (colors) =>
  StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.text,
    borderBottomWidth: 1,
    borderBottomColor: colors.subtitle,
  },
  imageGallery: {
    height: 200,
    marginVertical: 10,
  },
  galleryImage: {
    width: 300,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.text,
  },
  projectPrice: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    color: colors.subtitle,
  },
  creatorInfo: {
    alignItems: "center",
  },
  creatorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 5,
  },
  creatorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },
  projectDescription: {
    fontSize: 16,
    color: colors.siubtitle,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: colors.text
  },
  longDescription: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
  },
  linkContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  projectLink: {
    fontSize: 16,
    color: colors.subtitle,
    textDecorationLine: "underline",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.subtitle,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.subtitle,
  },
});

export default ProjectScreen;
