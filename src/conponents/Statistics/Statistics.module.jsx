import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  list-style: none;
  width: 400px;
  height: 200px;
  background-color: grey;
`;

export const UlSection = styled.ul`
  position: relative;
  list-style: none;
  display: flex;

  top: 80px;
  left: 10px;

  width: 277px;
  height: 65px;
`;

export const ListItem = styled.li`
  ${'' /* outline: 1px solid red; */}
  border: 1px solid blue;
  ${
    '' /* :nth-child(-n + 5) {
    border-right: 1px solid blue;
  } */
  }
  margin-top: 10px;
`;

export const List = styled.span`
  margin-left: 10px;

  :nth-child(n + 2) {
    margin-left: 15px;
  }
`;
