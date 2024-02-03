import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        // <div style={{backgroundColor: "dodgerblue", textAlign: "center"}}>
        //     <h1>Oops !!</h1>
        //     <h3>{err.status} {err.statusText} !!!</h3>
        //     <strong>{err.data}</strong>
        // </div>
        <div className="error-container">
        <h1>Oops !!</h1>
        <h3>{err.status} {err.statusText} !!!</h3>
        <strong>{err.data}</strong>
    </div>
    );
}

export default Error;