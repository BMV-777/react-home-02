import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  list-style: none;
  width: 400px;
  height: 244px;
  background-color: #eff3f6;
`;

export const UlSection = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;

  margin-top: 113px;
  margin-left: 11px;

  width: 277px;
  height: 65px;
`;

export const ListItem = styled.li`
  border: 1px solid #feffff;

  :nth-child(1) {
    background-color: #56c0f2;
  }
  :nth-child(2) {
    background-color: #a53cf0;
  }
  :nth-child(3) {
    background-color: #df536d;
  }

  :nth-child(4) {
    background-color: #4ec527;
  }
  :nth-child(5) {
    background-color: #7f8fc5;
  }

  :nth-child(-n + 4) {
    border-right: 1px solid;
  }

  margin-top: 10px;
`;

export const List = styled.span`
  margin-left: 10px;

  :nth-child(n + 2) {
    margin-left: 15px;
  }
`;

export const Card = styled.h2`
  position: fixed;
  top: 43px;
  left: 50px;
  font-size: 18px;
  width: 277px;
  height: 64px;

  background-color: #ffffff;
  color: #9ca6af;

  align-items: center;
  justify-content: center;
  display: flex;

  border: 1px solid #feffff;
  box-shadow: 1px 3px 10px 11px rgba(63, 91, 122, 0.2);
`;
