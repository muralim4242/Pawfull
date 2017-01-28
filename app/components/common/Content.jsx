import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Content = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <section>
                    <div className="container jumbotron white-box">

                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src={require("app/images/page-1-decription-vet.jpg")}/>
                                <h3>SEARCH VETS AND HOSPITALS</h3>
                                <p>Lorem ipsum dolor sit amet, nibh aeterno suavitate mei ut, pri iusto soleat eu. Ad solet vituperatoribus pri, et quas iudico eam. Ius tale invenire cotidieque at.
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src={require("app/images/groom.jpg")}/>
                                <h3>FIND PLACES TO TAKE YOUR PET</h3>
                                <p>Lorem ipsum dolor sit amet, nibh aeterno suavitate mei ut, pri iusto soleat eu. Ad solet vituperatoribus pri, et quas iudico eam. Ius tale invenire cotidieque at.
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src={require("app/images/content.jpg")}/>
                                <h3>PETCARE TIPS FROM EXPERTS</h3>
                                <p>Lorem ipsum dolor sit amet, nibh aeterno suavitate mei ut, pri iusto soleat eu. Ad solet vituperatoribus pri, et quas iudico eam. Ius tale invenire cotidieque at.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="jumbotron" style={{
                    marginBottom: 0
                    }}>
                    <div className="container">
                        <div className="page-header text-center">
                            <h1 className="bBottom yellow">BLOG</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="thumbnail">
                                    <img src={require("app/images/Blog-image3.jpg")} className="img-rounded" width="100%"/>
                                    <div className="caption">
                                        <img src={require("app/images/usericonpic.jpg")} className="img-rounded"/> {"  "}<strong className="green">Murali</strong>
                                        <p>
                                            How to Keep Your Pet from attacking Strangersduring Winter ?How to Keep Your Pet from
                                        </p>
                                        <hr/>
                                        <div className="container ">
                                                <a href="#" ><img src={require("app/images/bookmark-icon.jpg")} className="pull-left"/></a><span className="pull-right muter-text">20 saved</span>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9" id="blog-content">
                                <div className="row thumbnail">
                                    <div className="col-md-4 col-sm-5 col" >
                                        <img src={require("app/images/Blog-image2.jpg")} className="img-rounded img-custom-margin"/>
                                    </div>
                                    <div className="col-md-8 col-sm-7">
                                      <div className="caption blog-content-margin">
                                          <img src={require("app/images/usericonpic.jpg")} className="img-rounded"/> {"  "}<strong className="green">Murali</strong>
                                          <p>
                                              How to Keep Your Pet from attacking Strangersduring Winter ?How to Keep Your Pet from
                                          </p>
                                          <hr/>
                                          <div className="container ">
                                                  <a href="#" ><img src={require("app/images/bookmark-icon.jpg")} className="pull-left"/></a><span className="pull-right muter-text">20 saved</span>
                                          </div>


                                      </div>
                                    </div>
                                </div>
                                <div className="row thumbnail">
                                    <div className="col-md-4 col-sm-5">
                                        <img src={require("app/images/blog-img1.jpg")} className="img-rounded img-custom-margin"/>

                                    </div>
                                    <div className="col-md-8 col-sm-7">
                                      <div className="caption blog-content-margin">
                                          <img src={require("app/images/usericonpic.jpg")} className="img-rounded"/> {"  "}<strong className="green">Murali</strong>
                                          <p>
                                              How to Keep Your Pet from attacking Strangersduring Winter ?How to Keep Your Pet from
                                          </p>
                                          <hr/>
                                          <div className="container ">
                                                  <a href="#" ><img src={require("app/images/bookmark-icon.jpg")} className="pull-left"/></a><span className="pull-right muter-text">20 saved</span>
                                          </div>


                                      </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="cl-white text-center section-image" style={{
                    backgroundImage: `url(${require('app/images/Layer-15.jpg')})`
                    }}>

                    <div className="row">
                        <div className="container">

                            <h2>BRINING<span className="green">
                                    PET CARE</span>
                                TO YOUR DOORSTEP</h2>
                            <hr style={{
                                width: 50 + "%"
                            }}/>
                            <div className="continer text-center row-gap">
                                <div classs="row">

                                    <span>Your One Stop Petcare Platform</span><img src={require("app/images/Layer-10.jpg")} className="img-circle icon-left"/>

                                </div>

                                <div classs="row">

                                    <span>Browse from over 2000 Listings</span>

                                    <img src={require("app/images/Layer-11.jpg")} className="img-circle icon-left"/>
                                </div>

                                <div classs="row">

                                    <span>Trusted and Verified</span><img src={require("app/images/Layer-12.jpg")} className="img-circle icon-left"/>

                                </div>

                                <br></br>

                                <button type="button" className="btn btn-success radius-zero">Start Browsing</button>

                            </div>
                        </div>
                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${require('app/images/CliamUrPost.jpg')})`,
                    color: "Black",
                    minHeight: 20 + "em"
                    }} className="text-center section-image">
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <h3>Are you a Vet or a Business in petcare Industry</h3>
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3">
                                        <p>jLorem ipsum dolor sit amet, nibh aeterno suavitate mei ut, pri iusto soleat eu. Ad solet vituperatoribus pri, et quas iudico eam. Ius tale invenire cotidieque at. Ei vel ignota aliquip oporteat. Has qualisque aliquando ad, ut detraxit electram vim. An solum legimus appareat quo.
                                        </p>
                                    </div>
                                </div>

                                
                                <button type="button" className="btn btn-success radius-zero">Claim Your Free Listing</button>
                            </div>
                        </div>

                    </div>

                     
                </section>
                
                <section className="page-header text-center">
                    <h3>LET'S DISCUSS</h3>
                    <br></br>
                    <br></br>
                    <p>jnnvt sjdwijf weiffj cmef weufiw aweurh wennff ashuehffo fnrei jiefj jdniurn murlidjj henfneh ewnfnf..
                    </p>
                    <br></br>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-3 text-left">
                                <h4>
                                    <strong>CONTACT US</strong>
                                </h4>
                                <p>ehnfv enfrehn nfrnf nfruiefn infrn nfueifn infeinf wenffifn nffiuen jfnr jninf jfnfn wwjefniefn jnfinf jjnfirn ejnfien jnienf effiue eifuhf nfien eefnfn weefnin efnfefn weefnieuf uihg erufi eefnir ernnr iernff.
                                </p>
                                <p>
                                    <strong>Call us at</strong>
                                    <span style={{
                                        color: "green"
                                    }}>+91 9591365323</span>
                                </p>
                                <p>
                                    <strong>Visit Us</strong>{"    "}<img src={require("app/images/twitter.jpg")}/> {"    "}
                                    <img src={require("app/images/facebook.jpg")}/> {"    "}
                                    <img src={require("app/images/google plus.jpg")}/>

                                </p>

                            </div>

                            <div className="col-md-9">

                                <form >

                                    <h3 className="text-left" style={{
                                        marginTop: 0 + "px",
                                        marginBottom: 40 + "px"
                                    }}>Say hello!</h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Text input"/>
                                    </div>

                                    <div className="pull-right">
                                        <button type="button" className="btn btn-success radius-zero">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        )
    }
});

export default Redux.connect()(Content);
