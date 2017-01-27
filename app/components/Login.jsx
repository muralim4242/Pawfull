import React from 'react';
import * as Redux from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export var Login = React.createClass({
    onLogin() {
        hashHistory.push('/Main');
    },
    render() {
        return (
            <div>
                <div className="row login">
                    <form className="col-lg-4 col-lg-offset-4">
                        <Card>
                            <CardText>
                                <h2 className="text-center">Login</h2>
                                <div className="form-group">
                                    <TextField hintText="Enter your Passcode" floatingLabelText="Passcode" fullWidth={true}/>
                                </div>
                            </CardText>
                            <CardActions>
                                <RaisedButton label="Login" onClick={this.onLogin} secondary={true} fullWidth={true}/>
                            </CardActions>
                        </Card>
                    </form>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);
