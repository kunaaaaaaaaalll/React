import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                <h2>Name: Kunal {'- '+ this.props.name}</h2>
                <h3>Location: New Delhi</h3>
                <h4>Contact: 810281XXXX</h4>
            </div>
            );
    }
}

export default UserClass;