import { useEffect, useState } from "react";
import axios from "../../modules/ApiAxios";
import AuthorCard from "../Authors/AuthorCard";
import CreateUserForm from "../Modals/CreateUserForm";
import { Button } from "@material-tailwind/react";

export default function PostsContainer() {

  // Hooks
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    axios.get()
    .then(response => setUsers(response.data))
    .catch(error => console.error("Error fetching users:", error));
  }, []);
  
  // Modal Handler
  const handleOpen = () => setOpen((cur) => !cur);

  return (
      <main className="w-[1024px] m-auto">
          <h2>PostContainer</h2>
          <section className="grid grid-cols-4 gap-4">
            {users.map((user) => (
              <AuthorCard
                key={user._id}
                user={user}
                setUsers={setUsers}
              />
            ))}
          </section>
          <Button onClick={handleOpen}>Add new user</Button>
          {open && <CreateUserForm user={users} setUsers={setUsers} open={open} handleOpen={handleOpen} />}
      </main>
  );
}
