import { Searchbar, ImageGallery } from './index';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { PixabayAPI } from './fetchAPI/fetchAPI';
import { LoaderWrapper, LoaderCSS } from './Loader/Loader.styled';
import { ErrorMessage } from './ErrorMessage.styled';
import { LoadMore } from './Button/Button'
import { Container } from './App.styled';

const pixabayAPI = new PixabayAPI(); 

export class App extends Component{
  state = {
    keyWorld: '',
    isLoading: false,
    error: false,
    res: [],
    page: 1,
    hasMore: false,
  }

  handleSearchImg = searchWorld => {
    this.setState({keyWorld: searchWorld})
  }

  hamdleLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  componentDidUpdate = async (_, prevState) => {
    const { keyWorld, page } = this.state;
    if (prevState.keyWorld !== keyWorld || prevState.page !== page) {

      pixabayAPI.q = keyWorld;
      pixabayAPI.page = page;
      try
      { 
        if (prevState.keyWorld !== keyWorld) {
          this.setState({
            res: [],
          })
        }
        this.setState({
          error: false,
          isLoading: true,
        })
        const { data } = await pixabayAPI.fetchPhotos()
        if (data.totalHits > 0) {
          this.setState(pverState => ({
            res: [...pverState.res, ...data.hits]
          }))

          if (data.totalHits > pixabayAPI.perPage) {
            this.setState({ hasMore: true })
          }
          
          const totalPage = Math.ceil(data.totalHits / pixabayAPI.perPage);
          if (totalPage === this.state.page) {
            this.setState({
              hasMore: false,
            })
          }
        } else {
          throw new Error(`Nothing was found for your query "${keyWorld}".`)
        }
      }
      catch (error) {
        this.setState({
          error,
          res: [],
          hasMore: false,
        })
      } finally {
        this.setState({ isLoading: false })
      };
    }
  }
  
  render() {
    const { isLoading, res, error, hasMore } = this.state;
    return (
      <div>
        <Searchbar getKeyWorld={this.handleSearchImg} />
        {isLoading && <LoaderWrapper>                 
                        <LoaderCSS />
                      </LoaderWrapper>
        }
        <Container>
        {error ? <ErrorMessage>{error.message}</ErrorMessage> : <ImageGallery res={res} /> }
        {hasMore && <LoadMore handleClick={this.hamdleLoadMoreButton} />}</Container>
        <ToastContainer 
          position="top-center"
          theme="dark"
          autoClose={3000} />
      </div>
  );
  }
};