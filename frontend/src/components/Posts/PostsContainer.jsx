import { useEffect, useState } from "react";
import axios from "../../modules/ApiAxios";
import AuthorCard from "../Authors/AuthorCard";
import CreateUserForm from "../Modals/CreateUserForm";
import { Button, Option, Select } from "@material-tailwind/react";

export default function PostsContainer() {

  // Hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState("3");
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get(`?page=${currentPage}&limit=${limit}`)
    .then(response => {
      const data = response.data;
      setUsers(data.users);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setLimit(data.limit)
    })
    .catch(error => console.error("Error fetching users:", error));
  }, [currentPage, limit]);
  
  // Modal Handler
  const [open, setOpen] = useState(false);
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
          <div className="flex gap-4 ps-4">
            <Button onClick={() => (currentPage - 1)} disabled={currentPage === 1 ? true : false}>Back</Button>
            <span>{currentPage}/{totalPages}</span>
            <Button onClick={() => (currentPage + 1)} disabled={currentPage === totalPages ? true : false}>Next</Button>
            <div className="w-72">
              <Select label="items per page:" value={limit} onChange={(e) => setLimit(e.target.value)}>
                <Option value="3">3</Option>
                <Option value="6">6</Option>
                <Option value="9">9</Option>
              </Select>

            </div>
          </div>

          {open && <CreateUserForm user={users} setUsers={setUsers} open={open} handleOpen={handleOpen} />}
      </main>
  );
}
