import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import HeaderAndNav from 'HeaderAndNav';
import Footer from 'Footer';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Snackbar from 'material-ui/Snackbar';
import {firebaseDBRef, firebaseSTRRef} from 'app/firebase/';

const style = {
    container: {
        position: 'relative'
    },
    refresh: {
        display: 'inline-block',
        position: 'relative'
    }
};

export var Main = React.createClass({
    updaloadFile(evt) {
        // console.log(evt);
        var fileObject;
        var file = evt.currentTarget.files[0];
         console.log(evt.currentTarget.files);

        fileObject = evt.target.result;
        var vetIBlobImgRef = firebaseSTRRef.child("vets/" + "murali"+'.'+file.type);
        vetIBlobImgRef.put(file).then(function(snapshot) {
            console.log(snapshot.metadata);
            console.log(snapshot.downloadURL);
            console.log(snapshot.absoluteString);
            // firebaseSTRRef.child('vets/murali').getDownloadURL().then(function(url) {
            //     // `url` is the download URL for 'images/stars.jpg'
            //
            //     // This can be downloaded directly:
            //     // var xhr = new XMLHttpRequest();
            //     // xhr.responseType = 'blob';
            //     // xhr.onload = function(event) {
            //     //     var blob = xhr.response;
            //     // };
            //     // xhr.open('GET', url);
            //     // xhr.send();
            //
            //     // Or inserted into an <img> element:
            //     console.log(url);
            //     var img = document.getElementById('myimg');
            //     img.src = url;
            // }).catch(function(error) {
            //     // Handle any errors
            // });
        });
        // console.log(fileObject);

        // console.log(fileObject);
    },
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
        var props = this.props;
        const {refreshIndicator, snackbar, isDeleteModalOpen} = this.props.app;
        const {dispatch} = this.props;
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                () => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onTouchTap = {
                () => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }
            } />
        ];
        const renderBody = function() {
            if (refreshIndicator == "loading") {
                return (
                    <div className="text-center">
                        <div style={style.container}>
                            <RefreshIndicator size={80} left={0} top={20} loadingColor="#FF9800" status={refreshIndicator} style={style.refresh}/>
                        </div>
                    </div>
                );
            }
        };
        return (
            <div>
                <div>
                    <HeaderAndNav/>
                    <div>{props.children}</div>
                    <Footer/>
                    {renderBody()}

                </div>
                <Dialog title="Delete" actions={actions} modal={false} open={isDeleteModalOpen} onRequestClose={() => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }}>
                    The actions in this window were passed in as an array of React objects.
                </Dialog>

                <Snackbar open={snackbar.open} message={snackbar.text} autoHideDuration={5000} onRequestClose={this.handleRequestClose}/>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {app: state.app};
})(Main);


// <input type="file" onChange={this.updaloadFile} name="upload file"/>
// <img src="https://firebasestorage.googleapis.com/v0/b/pawfull-144021.appspot.com/o/vets%2Fmurali.image%2Fpng?alt=media&token=b0421946-9458-4b4f-adb2-50999bd69fc5"></img>
// render() {
//   var props=this.props;
//     return (
//         <div>
//             <div>
//                 <HeaderAndNav/>
//                 <div id="page-wrapper">
//                   {props.children}
//                 </div>
//             </div>
//
//         </div>
//     )
// }
