import React, {Component} from 'react';
import {UncontrolledAlert} from "reactstrap";

class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{paddingTop:'10px'}}>
                <UncontrolledAlert color={this.props.color}>
                    {this.props.alertDescription}
                </UncontrolledAlert>
            </div>
        );
    }
}

export default Alert;
