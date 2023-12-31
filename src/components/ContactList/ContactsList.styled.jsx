import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 300px;
`;

