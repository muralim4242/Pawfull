import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import SearchTab from 'SearchTab';

import TextField from 'material-ui/TextField';
// import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

// const styles = {
//     headline: {
//         fontSize: 24,
//         paddingTop: 16,
//         marginBottom: 12,
//         fontWeight: 400
//     },
//     topGap: {
//         marginTop: 30
//     }
// };
//
// function handleActive(tab) {
//     alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }

export var HeaderImageWithSearchTab = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <section className="row text-center section-image" style={{
                    backgroundImage: `url(${require('app/images/page-1-header-image.jpg')})`,
                    paddingTop: 0
                }}>

                    <h1 className="header-text-gap">YOUR PET'S BEST FRIEND. AFTER YOU.</h1>
                    <SearchTab/>

                    <br></br>
                    <p className="marginCustom">Search options from over 2000 Listings for FREE!</p>

                </section>

            </div>
        )
    }
});

export default Redux.connect()(HeaderImageWithSearchTab);
