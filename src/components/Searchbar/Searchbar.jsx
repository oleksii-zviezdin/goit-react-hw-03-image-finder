import { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarCSS, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        searchWorld: '',
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { getKeyWorld } = this.props;
        const { searchWorld } = this.state;
        
        if (searchWorld.trim() === '') {
            toast.info('The field cannot be empty. Please enter a search query')
            return
        }

        getKeyWorld(searchWorld);
        this.setState({searchWorld: ''})
    }

    render() {
        const { searchWorld } = this.state;
        return (
            <SearchbarCSS className="searchbar">
                <SearchForm onSubmit={this.handleSubmit} className="form">
                    <SearchFormButton type="submit" className="button">
                    <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        onChange={this.handleChange}
                        name="searchWorld"
                        value={searchWorld}
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