import { useEffect, useState } from "react";
import axios from "../../modules/ApiAxios";
import AuthorCard from "../Authors/AuthorCard";

export default function PostsContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <main className="w-[1024px] m-auto">
            <h2>PostContainer</h2>
            <section className="flex gap-4">
              {users.map((user) => (
                <AuthorCard
                  key={user._id}
                  user={user}
                  setUsers={setUsers}
                />
              ))}
            </section>
        </main>
    );
}
