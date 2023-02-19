import styled from 'styled-components';
export const Table = styled.table`
  background-color: #fff;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  text-align: center;
`;
export const TableHeader = styled.th`
  background-color: #00bcd5;
  border: #000 1px solid;
  padding: 5px;
`;
export const TableItem = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;
export const Type = styled.td`
  text-transform: capitalize;
`;
