import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import { v4 as uuidv4} from 'uuid';
import {toast, ToastContainer} from "react-toastify";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[
                {
                    id:uuidv4(),
                    name:"Dorian",
                    surname:"JAMES",
                    username:"DORIANJAMES"
                },
                {
                    id:uuidv4(),
                    name:"Mark",
                    surname:"OTTO",
                    username: "MarkOTTO"
                },
                {
                    id:uuidv4(),
                    name:"Lerry",
                    surname:"BIRD",
                    username: "LerryTheBird"
                },
                {
                    id:uuidv4(),
                    name:"Jacob",
                    surname:"THORNTON",
                    username: "JacobThornton"
                }
            ],
            toggle:false,
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);

    }

    addUser = (name,surname,username)=>{
        if ((name,surname,username)) {
            const users =[...this.state.users];
            users.push({
                id:uuidv4(),
                name:name,
                surname:surname,
                username:username,
            })
            this.setState({users})
            this.hide();
            toast(`User "${name}" added`);
        } else {
            toast("Please fill all empty areas");
        }
    };

    deleteUser = (obj) => {
        const users = this.state.users.filter(user=>{
            return user.id !== obj.id
        })
        this.setState({users});
        toast(`User "${obj.name}" deleted`);
    };

    editUser = (id,name,surname,username) => {
        if ((id,name,surname,username)){
            const users = [...this.state.users]
            let updatedUsers = users.map(user=>{
                if (user.id === id) {
                    user = {
                        id:id,
                        name:name,
                        surname:surname,
                        username:username,
                    };
                }
                return user;
            });
            this.setState({users:updatedUsers});
            toast(`User "${name}" has been updated.`);
        }
    };

    render() {
        return (
            <>
                <div className="container">
                    <NavBar/>
                    <UserList
                        hide={this.hide}
                        users={this.state.users}
                        addUser={this.addUser}
                        deleteUser={this.deleteUser}
                        editUser={this.editUser}
                        toggle={this.state.toggle}
                    />
                </div>
                <ToastContainer/>
            </>
        );
    }
}

export default HomePage;
