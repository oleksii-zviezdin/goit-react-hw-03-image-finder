import { ModalOrevlay, ModalWindow } from "./Modal.styled"

export const Modal = ({srcLarge, altText, escapeFromModal}) => {
    return (
            <ModalOrevlay onClick={escapeFromModal}>
                <ModalWindow src={srcLarge} alt={`name: ${altText}`} />
            </ModalOrevlay>
    )
}