import React, { Component } from 'react';
import ContainerPopup from "reactjs-popup";

export default class Popup extends React.Component {
	checkOpened() {
		return (this.props.opened !== undefined && this.props.opened) || this.state.opened;
	}
	
  constructor(props) {
    super(props);
	console.log('popup', props.opened);
    this.state = { opened: (this.props.opened !== undefined && this.props.opened) };
  }
  openModal = () => {
    this.setState({ opened: true });
  }
  closeModal = () => {
    this.setState({ opened: false });
  }
  
  componentDidUpdate(){
	
  }

  render() {
    return (
      <div>
        <ContainerPopup
          open={this.checkOpened()}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
			<p>Данныe успешно добавлены</p>
            <p>Через 1,5 секунды вы будете переброшены на прошлый роут</p>
          </div>
        </ContainerPopup>
      </div>
    );
  }
}