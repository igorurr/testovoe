import styled from "styled-components/";

export const header = styled.header`
  margin: 12px 0 12px 37px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: normal;
  flex-grow: 2;
  margin: 0;
`;

export const button = styled.button`
  padding: 5px;
  border: none;
  background: transparent;
  outline: 0;
`;

export const Icon = styled.img`
  max-width: 26px;
  max-height: 26px;
`;

export const Record = styled.div`
  display: flex;
  margin: 7px 17px 17px 17px;
  align-items: center;
`;

export const RecordName = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin: 7px 0 7px 11px;
`;

export const RecordAnotherInfo = styled.h4`
  font-weight: normal;
  font-size: 13px;
  margin: 5px 0 5px 17px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin: 3px 0 3px 7px;
`;

export const InputCoworkerField = styled.p`
  margin: 11px 0 11px 11px;
`;

export const InputCoworkerLabelP = styled.p`
  width: 110px;
  display: inline-block;
  margin: 0;
`;

export const PopupWindowSuccesContent = styled.div`
  margin: 17px;
`;
