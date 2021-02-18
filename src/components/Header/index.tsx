import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { RiHandbagFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './styles';

import LogoImg from '../../assets/panvel-descontos.png';

const Header: React.FC = () => {
  return (
    <S.Container>
      <div>
        <img src={LogoImg} alt="Panvel" />
        <S.MenuCategories>
          <BiMenu size={24} color="#fff" />
          <S.MenuTitle>CATEGORIAS</S.MenuTitle>
        </S.MenuCategories>
        <S.SearchContainer>
          <input type="text" placeholder="O que você procura?" />
          <AiOutlineSearch size={24} color="#aaa9a9" />
        </S.SearchContainer>
        <S.LoginContainer href="klk">
          <div>
            <FaUserCircle size={24} color="#fff" />
            <S.MenuTitleAvatar>ENTRAR</S.MenuTitleAvatar>
            <a href="fg">
              <RiHandbagFill size={24} color="#00c2dc" />
            </a>
          </div>
        </S.LoginContainer>
      </div>
    </S.Container>
  );
};

export default Header;
