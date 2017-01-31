import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

import {hashHistory} from 'react-router';

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

export var SearchTab = React.createClass({
    componentDidMount()
    {
      if(typeof(this.props.params)==="undefined")
      {
        this.props.dispatch({
                    type: "SET_FORM",
                    data: {},
                    isFormValid:false,
                    validationData: {
                        required: {
                            current: [],
                            required: [
                                "location",
                                "service",
                                "pet"
                            ]
                        },
                        pattern: {
                            current: [],
                            required: []
                        }
                    },
                    fieldErrors:{}
                });
      }

    },
    searchResult(type="adoption"){

        alert(type)
        switch (type) {
          case "services":
              hashHistory.push(`/SearchResultList/Services`);
          break;
          case "vets":
              hashHistory.push(`/SearchResultList/Vets`);
          break;
          default:
              hashHistory.push(`/SearchResultList/Adoption`);

        }
    },
    handleChange(e, name, isRequired, pattern) {
        let {dispatch} = this.props;
        dispatch({type: "HANDLE_CHANGE", property: name, value: e.target.value, isRequired: isRequired, pattern: pattern});
    },
    setFormValidation(type)
    {
        var required;
        if (type=="services") {
            required= [
                "location",
                "service",
                "pet"
            ];
        }
        if (type=="vets") {
          required= [
              "location"
          ];
        } else {
          required= [
              "location",
              "pet"
          ];
        }

        this.props.dispatch({
                    type: "SET_FORM",
                    data: {},
                    isFormValid:false,
                    validationData: {
                        required: {
                            current: [],
                            required: required
                        },
                        pattern: {
                            current: [],
                            required: []
                        }
                    },
                    fieldErrors:{}
                });
    },
    render() {
        return (
            <div className="container_fluid">
              <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="nav nav-pills nav-justified" role="tablist">
                            <li role="presentation">
                                <a href="#vets" onClick={()=>{this.setFormValidation("vets")}} aria-controls="vets" role="tab" data-toggle="tab">VETS</a>
                            </li>
                            <li role="presentation" className="active">
                                <a href="#services" onClick={()=>{this.setFormValidation("services")}} aria-controls="services" role="tab" data-toggle="tab">SERVICES</a>
                            </li>
                            <li role="presentation">
                                <a href="#adoption" onClick={()=>{this.setFormValidation("adoption")}} aria-controls="adoption" role="tab" data-toggle="tab">ADOPTION</a>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>

              <br></br>
              <div className="container no-border-radius">
                  <div className="row">
                      <div className="tab-content">
                          <div role="tabpanel" className="tab-pane" id="vets">
                              <form className="form-inline">
                                  <div className="form-group border-show">
                                      <input type="text" className="form-control" placeholder="location" value={this.props.searchForm.location}  onChange={(e) => this.handleChange(e, "location", true, "")}/>
                                      <button disabled={!this.props.isFormValid} type="button" className="btn btn-success" onClick={()=>{this.searchResult("vets")}}>Search</button>
                                  </div>
                              </form>
                          </div>
                          <div role="tabpanel" className="tab-pane active border-yellow" id="services">
                              <form className="form-inline">
                                  <div className="form-group border-show">
                                      <input type="text" className="form-control" placeholder="location" value={this.props.searchForm.location}  onChange={(e) => this.handleChange(e, "location", true, "")}/>
                                      <select className="form-control" name="services" onChange={(e) => this.handleChange(e, "service", true, "")}>
                                          <option value="Select sevices">
                                              Select service
                                          </option>
                                          <option value="hospitals">
                                              Hospital
                                          </option>
                                          <option value="boarding">
                                              Boarding
                                          </option>
                                          <option value="day care">
                                              Day Care
                                          </option>
                                          <option value="grooming">
                                              Grooming
                                          </option>
                                          <option value="labs">
                                              Labs
                                          </option>
                                          <option value="outing">
                                              Outing
                                          </option>
                                          <option value="pharmacy">
                                              Pharmacy
                                          </option>
                                      </select>
                                      <select className="form-control" name="petType" onChange={(e) => this.handleChange(e, "petType", true, "")}>
                                          <option value="Select perype">
                                              Select pettype
                                          </option>
                                          <option value="dogs">
                                              Dogs
                                          </option>
                                          <option value="cats">
                                              Cats
                                          </option>
                                      </select>
                                      <button disabled={!this.props.isFormValid} type="button" className="btn btn-success" onClick={()=>{this.searchResult("services")}}>Search</button>
                                  </div>
                              </form>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="adoption">
                              <form className="form-inline">
                                  <div className="form-group border-show">
                                      <input type="text" className="form-control" placeholder="location" value={this.props.searchForm.location}  onChange={(e) => this.handleChange(e, "location", true, "")}/>
                                        <select className="form-control" name="petType" onChange={(e) => this.handleChange(e, "petType", true, "")}>
                                            <option value="Select perype">
                                                Select pettype
                                            </option>
                                            <option value="dogs">
                                                Dogs
                                            </option>
                                            <option value="cats">
                                                Cats
                                            </option>
                                        </select>
                                      <button disabled={!this.props.isFormValid} type="button" className="btn btn-success" onClick={()=>{this.searchResult()}}>Search</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
        )
    }
});

export default Redux.connect((state)=>
{
  return {searchForm: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid};
})(SearchTab);
