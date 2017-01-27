import React from 'react';
import * as Redux from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import * as actions from 'actions';

export var ContentBodyHeader = React.createClass({
    render() {
        var pathSplit = this.props.path.split('/');
        return (
            <div>
                <Card>
                    <CardHeader title={pathSplit[2]?pathSplit[2]:"Dashboard"} subtitle={" " + (pathSplit[2]?pathSplit[2]:"Statics") + " / " + ((pathSplit[3])
                        ? pathSplit[3] + " / "
                        : "") + ((pathSplit[4])
                        ? pathSplit[4] + " / "
                        : "") + ((pathSplit[5])
                        ? pathSplit[5] + " / "
                        : "") + ((pathSplit[6])
                        ? pathSplit[6] + " / "
                        : "")+((pathSplit[7])
                        ? pathSplit[7] + " / "
                        : "")+((pathSplit[8])
                        ? pathSplit[8] + " / "
                        : "")+((pathSplit[9])
                        ? pathSplit[9] + " / "
                        : "")+((pathSplit[10])
                        ? pathSplit[10] + " / "
                        : "")} actAsExpander={false} showExpandableButton={false}/>
                </Card>
            </div>
        )
    }
});

export default Redux.connect()(ContentBodyHeader);
