import { LoadmoreBnt } from "./Button.styled"
import PropTypes from "prop-types"

export const LoadMore = ({ handleClick }) => {
    return (
        <LoadmoreBnt type="button" onClick={handleClick}>Load more</LoadmoreBnt>
    )
}

LoadMore.propTypes = {
    handleClick: PropTypes.func.isRequired,
}