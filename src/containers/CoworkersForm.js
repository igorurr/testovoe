import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as UserListActions from "../actions/UserList";

import Form from "../components/Form";

import * as Styles from "../styles/";

import ImgBack from "../img/Back.png";

class CoworkersForm extends Component {
  render() {
    const actions = bindActionCreators(UserListActions, this.props.dispatch);

    return (
      <div id="CoworkersForm" className="box">
        <Styles.header>
          <Link to="/list">
            <Styles.button>
              <Styles.Icon src={ImgBack} />
            </Styles.button>
          </Link>
        </Styles.header>
        <Form addCoworker={actions.AddCoworker} />
      </div>
    );
  }
}

export default connect()(CoworkersForm);
