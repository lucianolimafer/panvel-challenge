import React, { useEffect, useState } from 'react';
import { stringify } from 'querystring';
import Header from '../../components/Header';
import Model from '../../assets/model.jpeg';

import * as S from './styles';
import api from '../../services/api';

interface Source {
  id: string;
  name: string;
}

interface Post {
  source: Source;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      const response = await api.get('');

      setPosts(response.data.articles);
    }

    loadPosts();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.FirstContainerSection>
        <S.ContainerPosts>
          {posts.slice(0, 2).map(post => (
            <S.PostItemContainer>
              <S.PostTitle>{post.title.toUpperCase()}</S.PostTitle>
              <p>{post.description}</p>
            </S.PostItemContainer>
          ))}
        </S.ContainerPosts>
        <img src={Model} alt="fgdf" />
      </S.FirstContainerSection>
    </S.Container>
  );
};

export default Home;
