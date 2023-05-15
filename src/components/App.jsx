import { Searchbar, ImageGallery } from './index';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { PixabayAPI } from './fetchAPI/fetchAPI';
import { LoaderWrapper, LoaderCSS } from './Loader/Loader.styled';
import { ErrorMessage } from './ErrorMessage.styled';
import {LoadMore} from './Button/Button'

const pixabayAPI = new PixabayAPI(); 
// import { FallingLines, Rings, RotatingLines, RotatingSquare,ThreeCircles, InfinitySpin, Puff, MutatingDots } from 'react-loader-spinner'

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
    console.log(searchWorld)
  }

  componentDidUpdate = async (_, prevState) => {
    const { keyWorld, page } = this.state;
    if (prevState.keyWorld !== keyWorld) {
      console.log(`State is change on: ${keyWorld}`)

      pixabayAPI.q = keyWorld;
      pixabayAPI.page = page;
      try
      { 
        this.setState({ hasMore: false })
        this.setState({ error: false });
        this.setState({ isLoading: true });
        const { data } = await pixabayAPI.fetchPhotos()
        if (data.totalHits > 0) {
          
        console.log(pixabayAPI.perPage)
        console.log(data.totalHits)
          this.setState({ res: data.hits })
          if (data.totalHits > pixabayAPI.perPage) {
          this.setState({ hasMore: true })
        } 
        } else {
          throw new Error(`Nothing was found for your query "${keyWorld}".`)
        }
      }
      catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ isLoading: false })};
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
        {error ? <ErrorMessage>{error.message}</ErrorMessage> : <ImageGallery res={res} /> }
        {hasMore && <LoadMore/>}
        <ToastContainer 
          position="top-center"
          theme="dark"
          autoClose={3000} />
      </div>
  );
  }
};