import styled from 'styled-components';
import getRandomHexColor from './RandomColor';

export const Stats = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  text-align: center;
  background-color: #fff;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
export const Item = styled.li`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
`;
