import React from "react";
import {View, StyleSheet, Modal, ScrollView, Text, TouchableHighlight} from "react-native";
import AddFoodItemForm from "../screens/groceries/AddFoodItemForm";
import {COLORS} from "../styles/global";



export interface CustomModalProps {
    title: string;
    modalVisible: boolean;
    setModalVisible: any;
}

const CustomModal: React.FC<CustomModalProps> = ({title, modalVisible, setModalVisible}) =>  {
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
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.headerText}>X</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.body}>
                            <AddFoodItemForm onSubmit={()=>setModalVisible(false)} />
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
        backgroundColor: 'rgba(45,45,45,0.34)'
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
