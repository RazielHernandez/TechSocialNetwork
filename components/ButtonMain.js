import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ButtonMain = ({children}) =>  {
    return (
        <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20
      },
      submitButtonText: { 
        color: '#555', 
        fontWeight: 'bold' 
      }
});

export default ButtonMain;