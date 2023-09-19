import React, {Component} from 'react';
import {Table} from "reactstrap";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "./Alert";
import FormComponent from "./FormComponent";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertDescription: "Ne yazık ki liste boş",
            color: "danger",
            user:{},
        };
        this.hide = this.hide.bind(this);
    }

    hide(){
        this.setState({toggle:false})
    }

    getElementById(value){
        this.setState({
            user: value,
            toggle: true,
            title: `Updating user "${value.name}"`
        });
    }



    render() {
        return (
            <>
                <div>
                    <button
                        className="btn btn-primary" onClick={() => this.setState({
                        toggle: true,
                        user:{},
                        title: "Add User"})}
                    >Add</button>
                    {this.state.toggle ? (
                        <FormComponent
                            toggle={this.state.toggle}
                            hide={this.hide}
                            addUser={this.props.addUser}
                            user={this.state.user}
                            title={this.state.title}
                            editUser={this.props.editUser}
                        />
                    ):null}
                </div>

                {this.props.users.length > 0 ? (
                    <div>
                        <Table
                        >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.users.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <button
                                                className="btn btn-secondary btn-sm"
                                                onClick={()=>this.getElementById(user)}
                                            >
                                                <FontAwesomeIcon icon={icon({
                                                    name: 'edit',
                                                })}/>
                                            </button>
                                            &nbsp;
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => this.props.deleteUser(user)}
                                            >
                                                <FontAwesomeIcon icon={icon({
                                                    name: "trash-alt"
                                                })}/>

                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                ) : <Alert
                    alertDescription={this.state.alertDescription}
                    color={this.state.color}
                />}


            </>
        );
    }
}

export default UserList;
