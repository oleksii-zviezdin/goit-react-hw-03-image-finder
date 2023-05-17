import { ModalOrevlay, ModalWindow } from "./Modal.styled"
import PropTypes from "prop-types"

export const Modal = ({ srcLarge, altText, escapeFromModal, handleOnKeyDown }) => {
    return (
            <ModalOrevlay onKeyDown={handleOnKeyDown} onClick={escapeFromModal}>
                <ModalWindow src={srcLarge} alt={`name: ${altText}`} />
            </ModalOrevlay>
    )
}

Modal.propTypes = {
    srcLarge: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    escapeFromModal: PropTypes.func.isRequired,
    handleOnKeyDown: PropTypes.func.isRequired,
}
