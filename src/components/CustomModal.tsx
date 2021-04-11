import React from "react";
import {View, StyleSheet, Modal, ScrollView, Text, TouchableHighlight} from "react-native";
import {COLORS} from "../styles/global";



export interface CustomModalProps {
  title: string;
  children: React.ReactNode;
  modalVisible: boolean;
  closeModal: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({title,children, modalVisible, closeModal}) =>  {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
    >
      <View style={styles.backDrop}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerText}>{title}</Text>
              <TouchableHighlight
                onPress={() => {
                  closeModal();
                }}
              >
                <Text style={styles.headerText}>X</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.body}>
              {children}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(45,45,45,0.9)'
  },
  modalView: {
    width: 370,
    padding: 15,
    marginVertical: 20,
    borderColor: COLORS.SECONDARY,
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: COLORS.WHITE
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.SECONDARY
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textTransform: 'uppercase',
  },
  body: {
    paddingHorizontal: 10
  },
});

export default CustomModal
