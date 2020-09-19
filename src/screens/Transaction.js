import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import {
  Container,
  TextStyle,
  TextBank,
  Card,
  CardContentOne,
  CardContentTwo,
  CardContentThree,
  StatusText,
  StatusPendingWrapper,
  StatusSuccessWrapper,
  ModalStyle,
  ContainerModal,
  ModalView,
  RbWrapper,
  WrapperRow,
  TextStyled,
  Circle,
  CheckedCircle,
  FlatListStyled,
} from '../styles/styles';
import {
  formatCurrency,
  formatBankName,
  formatName,
  formatDate,
  filterByNameAZ,
  filterByNameZA,
  filterByTglBaru,
  filterByTglLama,
  searchFilter,
} from '../utils/helper';

import Icon from 'react-native-vector-icons/Fontisto';

const options = [
  {
    key: 'default',
    name: 'URUTKAN',
  },
  {
    key: 'aToZ',
    name: 'Nama A-Z',
  },
  {
    key: 'zToA',
    name: 'Nama Z-A',
  },
  {
    key: 'tgl_baru',
    name: 'Tanggal Terbaru',
  },
  {
    key: 'tgl_lama',
    name: 'Tanggal Terlama',
  },
];

export default function Transaction({navigation}) {
  const [dataTrans, setDataTrans] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({key: 'default', name: 'URUTKAN'});
  const getApi = async () => {
    try {
      setIsLoading(true);
      await fetch('https://nextar.flip.id/frontend-test')
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setDataTrans(Object.values(data));
          setDataTemp(Object.values(data));
        });
    } catch (error) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const onPressDetail = (item) => {
    navigation.navigate('Detail', {data: item});
  };

  const onPressFilter = (visible) => {
    setModalVisible(visible);
  };

  const onPressOption = (item) => {
    if (item.key === 'aToZ') {
      setValue(item);
      setDataTrans(filterByNameAZ(dataTrans));
      setModalVisible(false);
      setDataTemp(filterByNameAZ(dataTrans));
    } else if (item.key === 'zToA') {
      setValue(item);
      setDataTrans(filterByNameZA(dataTrans));
      setModalVisible(false);
      setDataTemp(filterByNameZA(dataTrans));
    } else if (item.key === 'tgl_baru') {
      setValue(item);
      setDataTrans(filterByTglBaru(dataTrans));
      setModalVisible(false);
      setDataTemp(filterByTglBaru(dataTrans));
    } else if (item.key === 'tgl_lama') {
      setValue(item);
      setDataTrans(filterByTglLama(dataTrans));
      setModalVisible(false);
      setDataTemp(filterByTglLama(dataTrans));
    } else {
      setValue(item);
      setDataTrans(dataTrans);
      setDataTemp(dataTrans);
      setModalVisible(false);
    }
  };

  searchChangeText = (text) => {
    let newData = searchFilter(text, dataTemp);
    setDataTrans(newData);
  };

  renderList = (item) => {
    const statusTransaction = () => {
      if (item.status == 'PENDING') {
        return (
          <StatusPendingWrapper>
            <StatusText
              numberOfLines={1}
              ellipsizeMode={'head'}
              stat={item.status !== 'PENDING' ? 'white' : 'black'}>
              Pengecekan
            </StatusText>
          </StatusPendingWrapper>
        );
      } else {
        return (
          <StatusSuccessWrapper>
            <StatusText stat={item.status !== 'PENDING' ? 'white' : 'black'}>
              Berhasil
            </StatusText>
          </StatusSuccessWrapper>
        );
      }
    };

    return (
      <Card onPress={() => onPressDetail(item)}>
        <CardContentOne
          stat={
            item.status == 'PENDING' ? 'orange' : '#51b584'
          }></CardContentOne>
        <CardContentTwo>
          <TextBank>
            {formatBankName(item.sender_bank)}{' '}
            <Icon name="arrow-right" size={10} />{' '}
            {formatBankName(item.beneficiary_bank)}
          </TextBank>
          <TextStyle>{formatName(item.beneficiary_name)}</TextStyle>
          <TextStyle>
            {formatCurrency(item.amount)} <Icon name="ellipse" size={5} />{' '}
            {formatDate(item.created_at)}
          </TextStyle>
        </CardContentTwo>
        <CardContentThree>{statusTransaction()}</CardContentThree>
      </Card>
    );
  };

  const RadioButton = () => {
    return (
      options &&
      options.map((item) => {
        return (
          <RbWrapper key={item.key}>
            <WrapperRow activeOpacity={0.5} onPress={() => onPressOption(item)}>
              <Circle>{value.name == item.name && <CheckedCircle />}</Circle>
              <TextStyled>{item.name}</TextStyled>
            </WrapperRow>
          </RbWrapper>
        );
      })
    );
  };

  return (
    <Container>
      <SearchBar
        text={value.name}
        onPress={() => onPressFilter(!modalVisible)}
        onChangeText={(text) => searchChangeText(text)}
      />
      {isLoading && <Loading />}
      <FlatListStyled
        data={dataTrans}
        renderItem={({item}) => renderList(item)}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <ModalStyle
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ContainerModal>
          <ModalView>{RadioButton()}</ModalView>
        </ContainerModal>
      </ModalStyle>
    </Container>
    // );
  );
}
