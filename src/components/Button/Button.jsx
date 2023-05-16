import { LoadmoreBnt } from "./Button.styled"
export const LoadMore = ({ handleClick }) => {
    return (
        <LoadmoreBnt type="button" onClick={handleClick}>Load more</LoadmoreBnt>
    )
}