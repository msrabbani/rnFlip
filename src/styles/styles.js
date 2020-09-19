import styled from 'styled-components/native';

// ======================================= Style for Transaction
export const Container = styled.View`
  flex: 1;
  background-color: #f5f9f8;
`;
export const FlatListStyled = styled.FlatList`
  margin-bottom: 5%;
`;
export const TextStyle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 2px;
`;
export const TextBank = styled.Text`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 5px;
`;
export const Card = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ffff;
  border-radius: 10px;
  width: 95%;
  align-self: center;
  margin-vertical: 5px;
`;
export const CardContentOne = styled.View`
  background-color: ${(props) => props.stat};
  width: 2%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const CardContentTwo = styled.View`
  width: 70%;
  height: 80px;
  padding: 10px;
  justify-content: space-between;
`;
export const CardContentThree = styled.View`
  width: 28%;
  justify-content: center;
  align-items: center;
`;
export const StatusText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.stat};
  font-weight: 600;
`;
export const StatusPendingWrapper = styled.View`
  border-radius: 5px;
  padding: 5px;
  border: 2px solid orange;
`;

export const StatusSuccessWrapper = styled.View`
  border-radius: 5px;
  padding: 5px;
  background-color: #51b584;
`;
export const ModalStyle = styled.Modal`
  background-color: grey;
`;
export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalView = styled.View`
  background-color: #ffff;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
`;

// RadioButton Style
export const RbWrapper = styled.View`
  margin-vertical: 10px;
`;
export const WrapperRow = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;
export const TextStyled = styled.Text`
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
`;

export const Circle = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 15px;
  border: 2px orange;
  align-items: center;
  justify-content: center;
`;
export const CheckedCircle = styled.View`
  width: 17px;
  height: 17px;
  border-radius: 15px;
  background-color: orange;
`;

// ======================================= Style for Detail
export const ContainerDetail = styled.SafeAreaView`
  margin-top: 30px;
`;
export const WrapperOne = styled.View`
  width: 41%;
  padding-vertical: 15px;
`;
export const WrapperMain = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const IdContainer = styled.View`
  background-color: white;
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1px;
`;

export const DetailSection = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 30px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3px;
`;

export const DetailsWrapper = styled.View`
  background-color: white;
  padding: 30px;
`;

export const TextStyleDetail = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const Key = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const Value = styled.Text`
  font-size: 16px;
`;

export const TutupText = styled.Text`
  color: orange;
  font-size: 20px;
  font-weight: 500;
`;

// ======================================= Style for SearchBar
export const ContainerSB = styled.View`
  align-items: center;
  justify-content: center;
`;
export const TextinputWrapperSB = styled.View`
  flex-direction: row;
  width: 95%;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 10px;
`;
export const TextinputStyleSB = styled.TextInput`
  width: 60%;
  font-size: 15px;
  margin-left: 10px;
  padding: 10px;
`;
export const UrutkanWrapperSB = styled.TouchableOpacity`
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UrutkanTextSB = styled.Text`
  width: 60%;
  margin-right: 3px;
  color: orange;
  font-weight: 600;
  text-align: center;
`;

// ======================================= Style for Loading
export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #00000040;
`;

export const IndicatorWrapper = styled.View`
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
