import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const BtnReserve = styled.button`
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  background-color: rgb(53, 28, 25);
  border: 0;

  &:focus {
    scale: 1.1;
    font-weight: 700;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    scale: 1.1;
    font-weight: 700;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
`;
