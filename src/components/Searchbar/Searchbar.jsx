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
// на початку у мене була така думка, але коли я подумав рендерити її за умовою && в галереї, то подумав, простіше буде робити так як у мене зараз, не підозрюючи що буде така проблема.. +чогось мені було не зрозуміло ч 
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
