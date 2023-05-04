import styled from 'styled-components';
import { devices } from '../../utils/breakpoint.utils';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0 10px 0;
  background-color: #3ababfaa;
`;

export const Copyright = styled.div`
  padding: 5px 0;

  @media ${devices.tablet} {
    text-align: center;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  backgroup-color: #07547144;
  border-color: #07547144;
`;
