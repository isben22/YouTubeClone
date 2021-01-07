import React from 'react';

function Searchbar (props) {
    state = {
        term: 'Default text'
    };
    
    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={props.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor='video-search'>Video Search</label>
                        <input onChange={props.handleChange} name='video-search' type='text' value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;