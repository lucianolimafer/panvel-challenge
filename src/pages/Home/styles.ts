import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstContainerSection = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  padding: 16rem 2rem 0;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 4px;
    width: 20rem;
  }
`;

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  padding: 0 2rem;
`;

export const PostItemContainer = styled.div`
  max-width: 100%;
  min-height: 250px;
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #eeee;
  border-radius: 4px;

  p {
    color: #757474;
    text-align: justify;
    margin-top: 12px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 18px;
  color: #ce8a86;
`;
