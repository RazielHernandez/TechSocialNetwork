import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext.js';

const ButtonSettings = ({
    iconName, 
    title, 
    onPress, 
    subtitle, 
    rightIcon,
    isDanger}) =>  {

    const { isDarkMode, colors, toggleTheme } = useTheme();
    const styles = getDynamicStyles(colors);
    const textColor = isDanger ? '#FF4444' : colors.text;

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Ionicons name={iconName} color="#555" style={[styles.icon,{color: textColor}]} />
                <View style={styles.container}>
                    <Text style={[styles.buttonText,{color: textColor}]}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                
            </View>
            
            {rightIcon && (
                <Ionicons name={rightIcon} size={20} color={textColor} />
            )}
        </TouchableOpacity>
    );
};

const getDynamicStyles = (colors) =>
    StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: '#444',
            borderRadius: 10,
            padding: 12,
            marginVertical: 5,
        },
        container: {
            flexDirection: 'column',
            paddingVertical: 4,
            paddingHorizontal: 10,
        },
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 0,
        },
        icon: {
            marginRight: 10,
            color: colors.text,
            fontSize: 20,
        },
        buttonText: {
            fontSize: 16,
            color: colors.text,
            paddingVertical: 2,
        },
        subtitle: {
            fontSize: 14,
            color: '#aaa',
        },
});

export default ButtonSettings;