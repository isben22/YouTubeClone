import React from 'react';

function Searchbar (props) {

    


        return (
            <div className='search-bar ui segment'>
                <form onSubmit={props.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor='video-search'>Video Search</label>
                        <input onChange={props.handleChange} name='video-search' type='text' value={props.videoSearch}/>
                    </div>
                </form>
            </div>
        )
    
}
export default Searchbar;