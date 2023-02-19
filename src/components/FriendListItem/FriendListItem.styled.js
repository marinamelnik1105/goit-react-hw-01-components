import styled from 'styled-components';
export const Item = styled.div`
  margin-bottom: 5px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 5%;
`;
export const Status = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: block;
  background-color: ${props => (props.isOnline ? '#50ff00' : '#ff0000')};
`;
export const Name = styled.p`
  display: inline-block;
`;
