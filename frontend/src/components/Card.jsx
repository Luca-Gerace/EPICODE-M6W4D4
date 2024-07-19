// import { useParams } from "react-router-dom";
import axios from "../modules/ApiAxios";
import { useState, useEffect } from "react";

export default function Card() {

    // Hooks
    // const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
    axios.get()
        .then(response => setUser(response.data))
        .catch(error => console.error("Error fetching users:", error));
    }, );

    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}
