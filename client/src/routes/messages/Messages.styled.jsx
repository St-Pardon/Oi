import styled from 'styled-components';

export const ChatContainer = styled.main`
display:flex;
width: 100%;`
export const ChatSection = styled.section`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  width: 100%;
  // grid-template-columns: 100%;
`;

export const HeaderSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 100px;
  width: 100%;
  align-items: center;
`;

export const ChatMessages = styled.section`
  background-color: #f4f4f4;
  overflow: scroll;
`;

export const SendSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 150px;
  column-gap: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  align-items: center;
  padding: 0 10px;
`;

export const ChatInput = styled.input`
  outline: transparent;
  border: none;
  padding-left: 5px;
  font-size: 1.1rem;
  margin: 0.5em;
  background-color: #f4f4f4;
  border-radius: 3px;
`;
