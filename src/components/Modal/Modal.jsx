import { ModalOrevlay, ModalWindow } from "./Modal.styled"

export const Modal = ({srcLarge, altText, escapeFromModal, handleOnKeyDown}) => {
    return (
            <ModalOrevlay onKeyDown={handleOnKeyDown} onClick={escapeFromModal}>
                <ModalWindow src={srcLarge} alt={`name: ${altText}`} />
            </ModalOrevlay>
    )
}