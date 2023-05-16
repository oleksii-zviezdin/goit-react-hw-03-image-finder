import { Component } from "react"
import { ImageGalleryItemsCSS, ImageGalleryImage } from "./ImageGalleryItem.styled"
import { Modal } from "components"

export class ImageGalleryItem extends Component {
    state = {
        visibleModal: false,
    }

    handleClick() {
        this.setState({
            visibleModal: true,
        })
    }

    handleKeyDown = (e) => {
        if (e.key === "Escape") {
        this.setState({
            visibleModal: false,
        });
        }
    };
    
    handleClickOnOverlay = e => {
        if (e.target !== e.currentTarget) { 
            return
        }
        this.setState({
            visibleModal: false,
        })
    }

    render() {
        const { smallImg, largeImg } = this.props;
        const { visibleModal } = this.state;
        return (
        <ImageGalleryItemsCSS className="gallery-item">
                <ImageGalleryImage onClick={() => this.handleClick()} src={smallImg} alt={`name: ${smallImg}`} />
                {visibleModal && <Modal handleOnKeyDown={this.handleKeyDown} escapeFromModal={this.handleClickOnOverlay} srcLarge={largeImg} altText={smallImg} />}
        </ImageGalleryItemsCSS>
    )
    }
}