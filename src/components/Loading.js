import React from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import {ModalBackground, IndicatorWrapper} from '../styles/styles';

export default function Loading(props) {
  const {loading, ...attr} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <ModalBackground>
        <IndicatorWrapper>
          <ActivityIndicator color={'orange'} animating={loading} />
        </IndicatorWrapper>
      </ModalBackground>
    </Modal>
  );
}
