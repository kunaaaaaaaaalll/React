import React from "react";
import { GITHUB_GETUSERS } from "../utils/common";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // creating a state variable.
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch(GITHUB_GETUSERS);
        const json = await data.json();

        // Updating the state variables.
        this.setState({ userInfo: json});
        console.log(json);
    }

    render() {
        const {login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {login}</h2>
                <img src = {avatar_url} />
                <h3>Location: New Delhi</h3>
                <h4>Contact: 810281XXXX</h4>
            </div>
            );
    }
}

export default UserClass;