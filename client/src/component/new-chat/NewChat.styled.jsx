import styled, { css } from 'styled-components';

export const NewChatContainer = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  margin: 30px auto;
  height: 50px;
  width: 80%;
  display: grid;
  grid-template-columns: 30px 1fr 100px;
  align-items: center;
  border: none;
  background-color: #f3f3f3;
  border-radius: 25px;
  padding: 0 0 0 10px;
`;

export const Search = styled.input`
  background-color: unset;
  margin: 2px 0;
  border: none;
  padding: 5px 1px;
  outline: none;
`;
export const SearchBtn = styled.input`
  outline-color: transparent;
  border: none;
  background-color: blue;
  align-self: stretch;
  border-radius: 25px;
  color: white;
`;

export const Result = styled.div`
  width: 80%;
  margin: 0 auto 10px auto;
  overflow: scroll;
  ${(props) =>
    props.req &&
    css`
      min-height: 100px;
    `}
`;
