import { ImageGalleryItem } from "components"
import { ImageGalleryCSS } from "./ImageGallery.styled"
import PropTypes from "prop-types"

export const ImageGallery = ({res}) => {
    return (
        <ImageGalleryCSS className="gallery">
            {res.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem key={id} smallImg={webformatURL} largeImg={largeImageURL} />
                )
            })}
        </ImageGalleryCSS>
    )
}

ImageGallery.propTypes = {
    res: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    )
}