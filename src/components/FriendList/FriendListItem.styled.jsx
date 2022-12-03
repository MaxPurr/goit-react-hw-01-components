import styled from '@emotion/styled';

export const Status = styled.span`
  color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Item = styled.li`
  list-style-type: none;
`;
