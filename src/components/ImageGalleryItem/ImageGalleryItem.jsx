import { Component } from "react"
import { ImageGalleryItemsCSS, ImageGalleryImage } from "./ImageGalleryItem.styled"
import { Modal } from "components"
import PropTypes from "prop-types"

export class ImageGalleryItem extends Component {
    state = {
        visibleModal: false,
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleClick() {
        this.setState({
            visibleModal: true,
        })
    }

    handleKeyDown = e => {
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

ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
}