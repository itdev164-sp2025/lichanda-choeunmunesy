import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

export const Content = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};