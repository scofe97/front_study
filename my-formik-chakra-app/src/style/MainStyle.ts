import styled from '@emotion/styled';

export const GNBStyle = styled.div`
  min-height: 100vh;
`;

export const LNBStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const ContentLayout = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 1% 2%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
