import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

import HeaderImageWithSearchTab from 'HeaderImageWithSearchTab';
import Content from 'Content';

import TextField from 'material-ui/TextField';

export var SearchTabAndContent = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <HeaderImageWithSearchTab/>
                <Content/>
            </div>
        )
    }
});

export default Redux.connect()(SearchTabAndContent);
