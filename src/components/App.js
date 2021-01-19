import React from 'react';
import unspalsh from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from '../components/imagelist';

class App extends React.Component {
    state = {images: []};

     onSearchSubmit = async (event) => {
        const response = await unspalsh.get('/search/photos', {
            params: { query: event },
        });
        console.log(response.data.results);
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;