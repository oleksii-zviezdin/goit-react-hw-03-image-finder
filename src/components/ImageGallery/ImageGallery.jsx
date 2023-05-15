import { ImageGalleryItem } from "components"
import { ImageGalleryCSS } from "./ImageGallery.styled"

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