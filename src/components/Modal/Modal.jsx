import { Component } from "react"
import { ModalOrevlay, ModalWindow } from "./Modal.styled"
import PropTypes from "prop-types"

export class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = e => {
        const { handleOnKeyDown } = this.props;
            if (e.key === "Escape") {
            handleOnKeyDown(false);
        }
    };

    render() {
        const { srcLarge, altText, escapeFromModal } = this.props;
        return (
            <ModalOrevlay id="modal" onClick={escapeFromModal}>
                <ModalWindow src={srcLarge} alt={`name: ${altText}`} />
            </ModalOrevlay>
    )
    }
}

Modal.propTypes = {
    srcLarge: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    escapeFromModal: PropTypes.func.isRequired,
    handleOnKeyDown: PropTypes.func.isRequired,
}