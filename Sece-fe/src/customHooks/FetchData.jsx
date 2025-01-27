import NavBar from "../navBar";
import useApi from "./useApi";

const ApiData = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const data = useApi(apiUrl)
    if(!data) return <p>loading......</p>
    return (
        <div>
            <NavBar/>
            <h1>API Data:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default ApiData
