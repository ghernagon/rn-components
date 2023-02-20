import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Modals" />

      <Button title="Show modal" onPress={() => setisVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Dark Background */}
        <View style={styles.modalContainer}>
          {/* Modal Content */}
          <View style={{...styles.modal}}>
            <Text style={styles.modalTitle}>Modal</Text>
            <Text style={styles.modalBody}>Modal Body</Text>
            <Button title="Close" onPress={() => setisVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  modal: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalBody: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
