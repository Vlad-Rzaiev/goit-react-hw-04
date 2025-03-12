import Header from './components/Header/Header';
import { fetchPhotos } from './unsplash-api';

function App() {
  const searchByStr = async searchQuery => {
    const response = await fetchPhotos(searchQuery);
    console.log(response);
  };

  return <Header />;
}

export default App;
