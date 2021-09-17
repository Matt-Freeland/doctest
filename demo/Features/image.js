import React from 'react';

const MdImage = ({justify, source, alt}) => {
    const fbStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: justify,
    }
    return (
        <div style={fbStyle}>
          <img src={source} alt={alt} >
        </div>
    )
}

export default MdImage
