import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    fontSize: 14/16,
    lineThickness: 1,
    height: 24,
    iconSize: 16,
  },
  large: {
    fontSize: 18/16,
    lineThickness: 2,
    height: 36,
    iconSize: 24,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const style = SIZE[size]

  return (
    <Wrapper style={{'--font-size': style.fontSize + 'rem'}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--iconSize': style.iconSize + 'px'}}>
        <Icon id={icon} size={style.iconSize} strokeWidth={style.lineThickness}></Icon>
      </IconWrapper>
      <NativeInput style={{
        '--line-thickness': style.lineThickness + 'px',
        '--height': style.height + 'px'
      }} placeholder={placeholder} width={width}>

      </NativeInput>
    </Wrapper>
  )
};

const Wrapper = styled.label`
  position: block;
  position: relative;

  font-size: var(--font-size);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--iconSize);
  margin: auto 0;
`

const NativeInput = styled.input`
  display: inline-block;
  border: none;
  width: ${props => props.width}px;
  height: var(--height);
  border-bottom: var(--line-thickness) solid black;
  padding-left: var(--height);

  font-size: inherit;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: ${COLORS.gray700};

  outline-offset: 2px;

  &::placeholder {
    font-weight: normal;
  color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default IconInput;
