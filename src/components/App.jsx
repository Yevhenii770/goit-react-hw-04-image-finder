import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import pixabayApi from './Api/Api';
import Spinner from './Loader/Loader';
import ButtonLoadMore from './Button/Button';
import Modal from './Modal/Modal';

export default function App() {
  const [status, setStatus] = useState('idle');
  const [name, setName] = useState('');
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [error, setError] = useState(null);
  const [modalAlt, setModalAlt] = useState('');
  const [btnActivate, setBtnActivate] = useState(true);

  useEffect(() => {
    if (name !== '') {
      setStatus('pending');
      pixabayApi
        .fetchQuery(name, page)
        .then(({ hits }) => {
          const images = hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );

          if (images.length > 0) {
            setQuery([...query, ...images]);
            setStatus('resolved');
            setBtnActivate(true);

            if (images.length > 0 && images.length < 12) {
              setBtnActivate(false);
            }
          } else {
            alert(`No results found for ${name}.`);
            setStatus('idle');
          }
        })
        .catch(error => setError(error));
      if (error) {
        setStatus('rejected');
      }
    }
  }, [name, page, error]);

  const handleSubmitInput = newQuery => {
    if (newQuery === name) {
      return;
    }
    setQuery([]);
    setName(newQuery);
    setPage(1);
    setStatus('pending');
  };

  const handleClickImg = event => {
    const imgForModal = event.target.dataset.src;
    const altForModal = event.target.alt;

    setShowModal(true);
    setModalImg(imgForModal);
    setModalAlt(altForModal);
  };

  const handleClickBtn = () => {
    setPage(page + 1);
    setStatus('pending');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  switch (status) {
    case 'idle':
      return (
        <div>
          <Searchbar onSubmit={handleSubmitInput} />

          <ImageGallery query={query} />

          <ToastContainer
            position="top-right"
            autoClose={1500}
            limit={1}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      );

    case 'pending':
      return (
        <div>
          <Searchbar onSubmit={handleSubmitInput} />
          {query.length > 0 && <ImageGallery query={query} />}
          <Spinner />
        </div>
      );

    case 'resolved':
      return (
        <>
          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                style={{ borderRadius: '8px' }}
                src={modalImg}
                alt={modalAlt}
              />
            </Modal>
          )}
          <div>
            <Searchbar onSubmit={handleSubmitInput} />
            <ImageGallery onClickImg={handleClickImg} query={query} />

            {btnActivate && <ButtonLoadMore handleClickBtn={handleClickBtn} />}
          </div>
        </>
      );
    case 'rejected':
      return <h1>{error}</h1>;
  }
}
