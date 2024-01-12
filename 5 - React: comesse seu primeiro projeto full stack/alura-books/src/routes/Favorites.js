import LastReleases from '../components/LastReleases/index.js';
import Search from '../components/Search/index.js';
import styled from 'styled-components';

const AppComponent = styled.div`
  background-image: linear-gradient(90deg,#022036 35%, #3265B9 165%);
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`

function Favorites() {
  return (
    <AppComponent>
      <Search/>
    </AppComponent>
  );
}

export default Favorites;