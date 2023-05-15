import { ImageGalleryItemsCSS, ImageGalleryImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({smallImg, largeImg}) => {
    return (
        <ImageGalleryItemsCSS className="gallery-item">
            <ImageGalleryImage src={smallImg} alt={`name: ${smallImg}`} />
        </ImageGalleryItemsCSS>
    )
}