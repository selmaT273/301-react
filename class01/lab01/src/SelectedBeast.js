import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './selectedBeast.css';

class SelectedBeast extends React.Component {
    render(){
        return(
            <>
            <Modal.Dialog>
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>
                            {this.props.beastClicked.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <Image className="modal-image" src={this.props.beastClicked.image_url} />
                        <p>{this.props.beastClicked.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Modal.Dialog>
            </>
        );
    }
}

export default SelectedBeast;