import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 4;
  margin-bottom: 20px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 15px;
  }
`;
