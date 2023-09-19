import React from 'react'
import {Navbar, NavbarBrand} from "reactstrap";

function NavBar() {
    return (
        <>
            <Navbar>
                <div>
                    <NavbarBrand href="/">React User List </NavbarBrand>
                </div>
            </Navbar>

        </>
    )
}

export default NavBar
