import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkEl = styled(Link)`
  padding: 8px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  &.active {
    color: white;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    font-weight: 700;
    color: white;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    font-weight: 700;
    color: white;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
`;
//background-color: rgb(87, 174, 255);
//color: rgb(65, 91, 207);
export const LinkElMenu = styled(Link)`
  padding: 8px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  &.active {
    color: #fff;
    background-color: rgb(143, 110, 106);
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    color: #000;
    font-weight: 700;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    color: #000;
    font-weight: 700;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
`;
