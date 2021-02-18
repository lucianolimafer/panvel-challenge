import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 62px;
  background: #014089;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  position: absolute;
  top: 0;

  div {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;

    img {
      height: 56px;
      width: 164px;
    }
  }
`;

export const MenuCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  padding: 0 1rem;
`;

export const MenuTitle = styled.h1`
  color: #fff;
  font-size: 14px;
  width: 10rem;
  padding: 0 1rem;
`;

export const SearchContainer = styled.div`
  width: 38rem;
  margin-right: 1rem;
  background: #fff;
  padding: 0 12px;
  border-radius: 4px;

  input {
    width: 100%;
    height: 40px;
    border: none;

    ::placeholder {
      color: #b4b3b3;
    }
  }
`;

export const LoginContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 180px;

  div {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  a {
    svg {
      :hover {
        animation: pulse 200;
      }
    }
  }
`;

export const MenuTitleAvatar = styled.h1`
  color: #fff;
  font-size: 14px;
  padding: 0 1rem;
`;
