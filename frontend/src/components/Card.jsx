import { Button } from "@material-tailwind/react";
import { useState } from "react";
import UpdateUserForm from "./UpdateUserForm";

export default function Card({ user, setUsers }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <Button>Delete</Button>
            <Button onClick={handleOpen}>Update</Button>
            {open && <UpdateUserForm user={user} setUsers={setUsers} open={open} handleOpen={handleOpen} />}
        </div>
    );
}
