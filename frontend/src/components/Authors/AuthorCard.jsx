import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import { useState } from "react";
import UpdateUserForm from "../Modals/UpdateUserForm";
   
export default function AuthorCard({ user, setUsers }) {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <article>
            <Card className="p-4 border-2 rounded-lg">
                <CardHeader>
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {user.name}
                    </Typography>
                    <Typography>
                        {user.email}
                    </Typography>
                    <Typography>
                        {user.role}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Delete</Button>
                    <Button onClick={handleOpen}>Update</Button>
                </CardFooter>
            </Card>
            {open && <UpdateUserForm user={user} setUsers={setUsers} open={open} handleOpen={handleOpen} />}
        </article>
    );
}