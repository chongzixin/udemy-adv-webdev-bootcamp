import React from 'react';

const Box = props => {
    const style = {
        backgroundColor: props.color,
        height: "80px",
        width: "80px",
        display: 'inline-block',
    };
    return <div style={style}></div>;
};

export default Box;