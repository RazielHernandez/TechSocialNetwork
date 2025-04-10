import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '../theme/ThemeContext.js';

const PaymentHistoryScreen = () => {
  const [payments, setPayments] = useState([
    {
      id: "1",
      date: "2025-01-15",
      name: "Demo presentation",
      amount: "$0.00",
      status: "Completed",
      type: "learning", 
      details: "Demo about new AI technologies in automotive industry.",
    },
    {
      id: "2",
      date: "2025-01-10",
      name: "Raspberry Pi 4 x 2",
      amount: "$129.99",
      status: "Completed",
      type: "hardware", 
      details: "Raspberry Pi 4 set, including cables and accessories.",
    },
    {
      id: "3",
      date: "2025-01-05",
      name: "Machine Learning Course",
      amount: "$9.99",
      status: "Pending",
      type: "learning",
      details: "Online course on machine learning and AI applications.",
    },
    {
      id: "4",
      date: "2025-01-03",
      name: "Smart Home Device",
      amount: "$45.50",
      status: "Completed",
      type: "IoT", 
      details: "Smart home device for home automation.",
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const {colors } = useTheme();
  const styles = getDynamicStyles(colors);

  // Get icon based on product type
  const getIconName = (type) => {
    switch (type) {
      case "learning":
        return "book-outline"; 
      case "cloud":
        return "cloud-outline"; 
      case "files":
        return "folder-outline";
      case "hardware":
        return "hardware-chip-outline";
      case "IoT":
        return "wifi";
      default:
        return "help-circle-outline";
    }
  };

  const renderPayment = ({ item }) => (
    <TouchableOpacity
      style={styles.paymentCard}
      onPress={() => setSelectedPayment(item)}
    >
      {/* Icon for Product Type */}
      <Ionicons
        name={getIconName(item.type)}
        size={24}
        color={colors.subtitle}
        style={styles.paymentIcon}
      />

      {/* Payment Info */}
      <View>
        <Text style={styles.paymentName}>{item.name}</Text>
        <Text style={styles.paymentDate}>{item.date}</Text>
      </View>
      <View style={styles.paymentInfo}>
        <Text style={styles.paymentAmount}>{item.amount}</Text>
        <Text
          style={[
            styles.paymentStatus,
            item.status === "Completed"
              ? styles.completedStatus
              : styles.pendingStatus,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={renderPayment}
      />

      {/* Modal for Payment Details */}
      {selectedPayment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedPayment}
          onRequestClose={() => setSelectedPayment(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Payment Details</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalLabel}>Date:</Text> {selectedPayment.date}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalLabel}>Product/Service:</Text>{" "}
                {selectedPayment.name}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalLabel}>Amount:</Text> {selectedPayment.amount}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalLabel}>Status:</Text> {selectedPayment.status}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalLabel}>Details:</Text>{" "}
                {selectedPayment.details}
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedPayment(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const getDynamicStyles = (colors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  paymentCard: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#666",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderColor: colors.subtitle,
    borderWidth: 0.5,
  },
  paymentIcon: {
    marginRight: 15,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  paymentDate: {
    fontSize: 14,
    color: colors.subtitle,
  },
  paymentInfo: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.subtitle,
  },
  paymentStatus: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.subtitle,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  completedStatus: {
    backgroundColor: colors.baseContainerBody,
    color: colors.text,
  },
  pendingStatus: {
    backgroundColor: colors.background,
    color: colors.text,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  modalLabel: {
    fontWeight: "bold",
    color: "#555",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#141414",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PaymentHistoryScreen;
