import { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarCSS, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import PropTypes from "prop-types"

export class Searchbar extends Component {
    state = {
        searchWord: '',
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { handleSubmit } = this.props;
        const { searchWord } = this.state;
        
        if (searchWord.trim() === '') {
            toast.info('The field cannot be empty. Please enter a search query')
            return
        }

        handleSubmit(searchWord);
        this.setState({searchWord: ''})
    }

    render() {
        const { searchWord } = this.state;
        return (
            <SearchbarCSS className="searchbar">
                <SearchForm onSubmit={this.handleSubmit} className="form">
                    <SearchFormButton type="submit" className="button">
                    <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        onChange={this.handleChange}
                        name="searchWord"
                        value={searchWord}
                        className="input"
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchbarCSS>
        )
    }
}


Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}
