import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        // console.log(this.state.term)
        return (
            <div className="ui segment">Search Bar
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="fiels">
                        <label>Image Search</label>
                    <input  type="text" value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;