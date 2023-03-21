import styled from 'styled-components';

export const ChatlistContainer = styled.aside`
  mix-width: 200px;
  max-width: 400px;
  width: 100%;
  background-color: #3ababf;
  height: 99%;
  position: relative;
  padding: 10px 0 0 0;
`;

export const User = styled.article`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 1rem;
`;

export const NewChatBtn = styled.div`
  position: absolute;
  right: 15px;
  bottom: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-radius: 30px;
  box-shadow: 2px 2px 8px 4px rgba(255, 255, 255, 0.25); 
`;
