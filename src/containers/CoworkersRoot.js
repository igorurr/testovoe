import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Coworkers from "../components/Coworkers";

import * as Styles from "../styles/";

import ImgAddCoworker from "../img/AddCoworker.png";

class CoworkersRoot extends Component {
  StartUpdateListProcess() {
    const UpdateList = () => {
      return dispatch => {
        dispatch({ type: "REFRESH_COWORKERS" });
      };
    };

    this.UpdateListProcess = setInterval(() => {
      this.props.dispatch(UpdateList());
    }, 10000);
  }
  StopUpdateListProcess() {
    clearInterval(this.UpdateListProcess);
  }

  componentWillMount() {
    this.StartUpdateListProcess();
  }
  componentWillUnmount() {
    this.StopUpdateListProcess();
  }
  render() {
    return (
      <div id="CoworkersRoot" className="box">
        <Styles.header>
          <Styles.HeaderTitle>Сотрудники</Styles.HeaderTitle>
          <Link to="/add">
            <Styles.button>
              <Styles.Icon src={ImgAddCoworker} />
            </Styles.button>
          </Link>
        </Styles.header>
        <content>
          <Coworkers UserList={this.props.UserList.List} />
        </content>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { UserList: state.UserList };
}

export default connect(mapStateToProps)(CoworkersRoot);
