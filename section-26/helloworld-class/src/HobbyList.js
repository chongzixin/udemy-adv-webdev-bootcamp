import React, { Component } from 'react';

class HobbyList extends Component {
    render() {
        const hobbyList = ["Eating", "Drinking", "Sleeping"];
        const style = {fontSize: '1.5em'};
        return (
            <ul>
                {hobbyList.map( (h,i) => {
                    return <li key={i} style={style}>{h}</li>
                })}
            </ul>
        );
    }
}

export default HobbyList;