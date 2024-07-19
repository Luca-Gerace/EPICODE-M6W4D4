import { useEffect, useState } from "react";
import axios from "../modules/ApiAxios";
import Card from "./Card"

export default function PostContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
        }, );

    return (
        <>
            <h2>PostContainer</h2>
            {users.map((user, index) => (
              <Card
                key={index}
                user={user}
              />
            ))}
        </>
    )
}
