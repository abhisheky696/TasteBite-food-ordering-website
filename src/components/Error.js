import {useRouteError} from "react-router-dom"
const Error = () => {
    let error=useRouteError();
    return (
        <div className="error">
            OOPS!! <br/>
            Something went wrong.... <br/>
            {error.error.message} <br/>
            {error.status}  {error.statusText}<br/>
        </div>
    )
}
export default Error;