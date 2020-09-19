import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  formatCurrency,
  formatBankName,
  formatName,
  formatDate,
} from '../utils/helper';
import Clipboard from '@react-native-community/clipboard';
import {
  ContainerDetail,
  WrapperOne,
  WrapperMain,
  IdContainer,
  DetailSection,
  DetailsWrapper,
  TextStyleDetail,
  Key,
  Value,
  TutupText,
} from '../styles/styles';

export default function Detail({navigation, route}) {
  const onPressCopy = async (id) => {
    Clipboard.setString(id);
  };

  const {data} = route.params;
  return (
    <ContainerDetail>
      <IdContainer>
        <TextStyleDetail>
          ID TRANSAKSI: #{data.id}
          {'  '}
          <Icon
            name="copy"
            size={20}
            color={'orange'}
            onPress={() => onPressCopy(data.id)}
          />
        </TextStyleDetail>
      </IdContainer>
      <DetailSection>
        <TextStyleDetail>DETAIL TRANSAKSI</TextStyleDetail>
        <TutupText onPress={() => navigation.goBack()}>Tutup</TutupText>
      </DetailSection>

      <DetailsWrapper>
        <TextStyleDetail>
          {formatBankName(data.sender_bank)}{' '}
          <Icon name="arrow-right" size={13} />{' '}
          {formatBankName(data.beneficiary_bank)}
        </TextStyleDetail>
        <WrapperMain>
          <WrapperOne>
            <Key>- {data.beneficiary_name}</Key>
            <Value>{data.account_number}</Value>
          </WrapperOne>
          <WrapperOne>
            <Key>NOMINAL</Key>
            <Value>{formatCurrency(data.amount)}</Value>
          </WrapperOne>
          <WrapperOne>
            <Key>BERITA TRANSFER</Key>
            <Value>{data.remark}</Value>
          </WrapperOne>
          <WrapperOne>
            <Key>KODE UNIK</Key>
            <Value>{data.unique_code}</Value>
          </WrapperOne>
          <WrapperOne>
            <Key>WAKTU DIBUAT</Key>
            <Value>{formatDate(data.created_at)}</Value>
          </WrapperOne>
        </WrapperMain>
      </DetailsWrapper>
    </ContainerDetail>
  );
}
