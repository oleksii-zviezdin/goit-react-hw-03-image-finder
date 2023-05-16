import styled from "@emotion/styled";

export const ImageGalleryItemsCSS = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const ImageGalleryImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover ;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 6px;

    &:hover,
    &:focus {
        box-shadow: 0px 0px 8px 8px rgb(36, 10, 162);
        transform: scale(1.02);
        cursor: zoom-in;
    }
`