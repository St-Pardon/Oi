import styled, {css} from 'styled-components';

export const ProfileContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
`;

export const Section = styled.div`
  ${(props) =>
    props.bio &&
    css`
      text-align: center;
    `}
  
    ${(props) =>
    props.about &&
    css`
      min-height: 150px;
    `}
`;

export const Close = styled.div`
  position: absolute;
  right: 10px;
`;

export const Upload = styled.input`
  visibility: hidden;
`;

export const TextArea = styled.textarea`
width: 95%;
min-height: 100px;
padding: 10px;
resize:none;
`