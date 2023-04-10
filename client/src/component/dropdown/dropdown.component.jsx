import React from 'react';
import { DropDownContatiner } from './dropdown.styled';

const Dropdown = ({ children }) => {
  return (
    <DropDownContatiner outer>
      <DropDownContatiner inner>{children}</DropDownContatiner>
    </DropDownContatiner>
  );
};

export default Dropdown;
