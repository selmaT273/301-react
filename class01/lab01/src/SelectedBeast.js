import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
    render(){
        return(
            <>
            <Modal.Dialog>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.beastClicked.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.props.beastClicked.image_url} style={{ width: '18rem' }} />
                        <p>{this.props.beastClicked.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </Modal.Dialog>
            </>
        );
    }
}

export default SelectedBeast;