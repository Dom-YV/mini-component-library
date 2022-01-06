/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    "--padding": "0px",
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--padding": "0px",
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--padding": "4px",
    "--height": "16px",
    "--borderRadius": "8px",
  }
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={SIZE[size]} role='progressbar' aria-valuenow={value} aria-valuemin='0' aria-valuemax='100'>
      <Trimmer>
        <ProgressIndicator percent={value} style={SIZE[size]} />
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);

  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35)
`

const Trimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const ProgressIndicator = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: ${props => props.percent}%;
`

export default ProgressBar;
