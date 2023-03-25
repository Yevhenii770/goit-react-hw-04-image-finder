import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Section } from './ImageGallery.styled';

function ImageGallery({ query, onClickImg }) {
  return (
    <Section>
      <Ul>
        {query.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              tags={tags}
              dataSrc={largeImageURL}
              onClick={onClickImg}
            />
          );
        })}
      </Ul>
    </Section>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClickImg: PropTypes.func,
};

export default ImageGallery;
