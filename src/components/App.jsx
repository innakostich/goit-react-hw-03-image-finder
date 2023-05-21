
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      images: [],
      page: 1,
      isLoading: false,
      modalImage: '',
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (imageUrl) => {
    this.setState({ modalImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ modalImage: '' });
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    if (searchQuery === '') {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=34787029-9060cf1f0b6b2569d575ff8e0&per_page=12&q=${searchQuery}&page=${page}`
      );
      const data = await response.json();
      const newImages = data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    }

    this.setState({ isLoading: false });
  };

  render() {
    const { images, isLoading, modalImage } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onItemClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Modal
          isOpen={modalImage !== ''}
          image={modalImage}
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
