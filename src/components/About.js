import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (<div>
        <h1> Hello!, Welcome in About component. </h1>
        <User name="(A Functional Component)"/>
        <UserClass name="(A Class Based Component)"/>
        </div>);
}

export default About;