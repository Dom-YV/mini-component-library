import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper >
      <SelectWrapper value={value} onChange={onChange}>
      {children}
      </SelectWrapper>
      <FakeSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' size={24} strokeWidth={2}></Icon>
        </IconWrapper>
      </FakeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const SelectWrapper = styled.select`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  --webkit-appearance: none;
`

const FakeSelect = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  color: ${COLORS.gray700};

  ${SelectWrapper}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  margin: -8px 0px;
  padding-left: 24px;
`

export default Select;
