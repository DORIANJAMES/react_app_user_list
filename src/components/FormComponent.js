import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:null,
            name:"",
            surname:"",
            userName:"",
            toggle:this.props.toggle,
        }
    }

    onSubmit() {
        this.props.addUser(this.state.name, this.state.surname,this.state.userName)
        if (this.props.toggle===true) {
            this.props.hide();
        }
    }


    componentDidMount() {
        this.setState({
            id: this.props.user.id,
            name: this.props.user.name,
            surname: this.props.user.surname,
            userName: this.props.user.username
        });
        console.log(this.props.hide)
    }

    onEdit(){
        this.props.editUser(this.state.id,this.state.name,this.state.surname,this.state.userName);
    }


    render() {
        return (
            <>
                <Modal fade={true} isOpen={this.props.toggle}>
                    <ModalHeader>{this.props.title}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">
                                    Name
                                </Label>
                                <Input
                                    value={this.state.name}
                                    onChange={(e)=>this.setState({name:e.target.value})}
                                    id="name"
                                    name="name"
                                    placeholder="First Name"
                                    type="text"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="surname">
                                    Surname
                                </Label>
                                <Input
                                    value={this.state.surname}
                                    onChange={(e)=>this.setState({surname:e.target.value})}
                                    id="surname"
                                    name="surname"
                                    placeholder="Last Name"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userName">
                                    User Name
                                </Label>
                                <Input
                                    value={this.state.userName}
                                    onChange={(e)=>this.setState({userName:e.target.value})}
                                    id="userName"
                                    name="userName"
                                    placeholder="User Name"
                                    type="text"
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.user.id ? (
                            <Button
                                className="btn btn-warning"
                                onClick={()=>this.onEdit()}
                            >
                                Update
                            </Button>
                        ):(
                            <Button
                                className="btn btn-success"
                                onClick={()=>this.onSubmit()}
                            >
                                Add
                            </Button>
                        )}
                        {' '}
                        <Button
                            className="btn btn-danger"
                            onClick={()=>this.props.hide()}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default FormComponent;
