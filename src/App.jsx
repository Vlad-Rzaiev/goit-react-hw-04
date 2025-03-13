import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchPhotos } from './unsplash-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlesearch = async searchQuery => {
    try {
      setIsLoading(true);
      const response = await fetchPhotos(searchQuery);
      console.log(response);
      setImages(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handlesearch} />
        {images.length > 0 && <ImageGallery items={images} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
}

export default App;
