import { Loader, Searchbar, ImageGallery } from './index';
import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { PixabayAPI } from './fetchAPI/fetchAPI';
import { LoaderWrapper } from './Loader/Loader.styled';

const pixabayAPI = new PixabayAPI(); 
// import { FallingLines, Rings, RotatingLines, RotatingSquare,ThreeCircles, InfinitySpin, Puff, MutatingDots } from 'react-loader-spinner'

export class App extends Component{
  state = {
    keyWorld: '',
    isLoading: false,
    error: null,
    res: [],
  }

  handleSearchImg = searchWorld => {
    this.setState({keyWorld: searchWorld})
    console.log(searchWorld)
    
  }

  componentDidUpdate = async (_, prevState) => {
    const { keyWorld } = this.state;
    if (prevState.keyWorld !== keyWorld) {
      console.log(`State is change on: ${keyWorld}`)

      pixabayAPI.q = keyWorld;
      pixabayAPI.page = 1;
      try {
        this.setState({ isLoading: true });
        setTimeout(() => {
          pixabayAPI.fetchPhotos().then(({ data }) => this.setState({ res: data.hits })).finally(( )=> this.setState({ isLoading: false }));
          
        }, 3000);
      } catch (error) {
        toast.error(error.message)
      }
    }
  }
  

  // async componentDidMount() {
        // const { kyeWorld } = this.state;
  //   pixabayAPI.q = kyeWorld;
  //   pixabayAPI.page = 1;
  //   const perPage = pixabayAPI.perPage;

  //   try {
  //     this.setState({isLoading: true});
  //     const { data } = await pixabayAPI.fetchPhotos();
  //     const totalPage = Math.ceil(data.totalHits / perPage);
  //     this.setState({isLoading: false});
  //     if (!data.hits.length) {
  //       throw new Error()

  //     } else if (totalPage === pixabayAPI.page) {
  //       Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images`)
  //       return
  //     }
  //   } catch (error) {
  //       Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again`);
  //   };
  // }

  render() {
    const { isLoading, res } = this.state;
    return (
      <div>
        <Searchbar getKeyWorld={this.handleSearchImg} />
        {isLoading && <LoaderWrapper>                 
                        <Loader />
                      </LoaderWrapper>
          }
        <ImageGallery res={res} />
        <ToastContainer 
          position="top-center"
          theme="dark"
          autoClose={3000} />
      </div>
  );
  }
};