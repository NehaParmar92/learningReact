import React, { Component } from 'react';
import loading from './Spinner-3.gif';


export class Spinner extends Component {

    render() {
        return (
            <div className='container'>
                <img src={loading} />
            </div>
        )
    }
}

export default Spinner
