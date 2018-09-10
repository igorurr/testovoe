import React from "react";
import ContainerPopup from "reactjs-popup";

import * as Styles from "../styles/index";

import ImgClose from "../img/Close.png";

export default class PopupWindowSucces extends React.Component {
  checkOpened() {
    return (
      (this.props.opened !== undefined && this.props.opened) ||
      this.state.opened
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.opened !== undefined && this.props.opened
    };
  }
  openModal = () => {
    this.setState({ opened: true });
  };
  closeModal = () => {
    this.setState({ opened: false });
  };

  render() {
    return (
      <div>
        <ContainerPopup
          open={this.checkOpened()}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <Styles.header>
              <Styles.HeaderTitle>Данныe успешно добавлены</Styles.HeaderTitle>
              <Styles.button onClick={this.closeModal}>
                <Styles.Icon src={ImgClose} />
              </Styles.button>
            </Styles.header>
            <Styles.PopupWindowSuccesContent>
              Через 1,5 секунды вы будете переброшены на прошлый роут
            </Styles.PopupWindowSuccesContent>
          </div>
        </ContainerPopup>
      </div>
    );
  }
}
