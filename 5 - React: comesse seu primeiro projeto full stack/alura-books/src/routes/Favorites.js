import { useEffect, useState } from 'react';
import LastReleases from '../components/LastReleases/index.js';
import Search from '../components/Search/index.js';
import styled from 'styled-components';
import { getFavorites } from '../services/favorites.js';

const AppComponent = styled.div`
  background-image: linear-gradient(90deg,#022036 35%, #3265B9 165%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const FavoriteContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`
const FavoriteCard = styled.div`
  margin: 10px;
  width: calc(25% - 40px);
  background-color: #EAEAEA;
  text-align: center;
  padding:10px;
  border-radius:10px;
  cursor: pointer;
`

const BookImg = styled.img`
  width: 100%;
  border-radius: 50%;
`

const BookTitle = styled.p`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`

function Favorites() {

    const[favorite, setFavorites] = useState([])

    async function fetchFavorites() {
      const favoriteApi = await getFavorites()
      setFavorites(favoriteApi)
    }

    useEffect(() => {
      fetchFavorites()
    },[])
    
  return (
    <AppComponent>
      <FavoriteContainer>
        {
          favorite.map(f => (
            <FavoriteCard>
              <BookImg src={f.ImageURL}/>
              <BookTitle>{f.name}</BookTitle>
            </FavoriteCard>
          ))
        }
      </FavoriteContainer>
    </AppComponent>
  );
}

export default Favorites;