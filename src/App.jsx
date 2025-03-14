import { useEffect, useState } from 'react';
import { fetchPhotos } from './unsplash-api';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSearch = async searchQuery => {
    setPage(1);
    setImages([]);
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchPhotos(searchQuery, page);
        setImages(prevImages => {
          return [...prevImages, ...response];
        });
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchQuery]);

  const openModal = imgItem => {
    console.log(imgItem);
    setSelectedImage(imgItem);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpenModal(false);
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleSearch} toast={toast} />
        {images.length > 0 && (
          <ImageGallery items={images} getImgUrl={openModal} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <LoadMoreBtn setPage={setPage} pageCount={page} />
        )}
        {isError && <ErrorMessage />}

        <ImageModal
          isOpen={isOpenModal}
          onClose={closeModal}
          imgItem={selectedImage}
        />

        <Toaster position="top-right" />
      </Container>
    </Section>
  );
}

export default App;
