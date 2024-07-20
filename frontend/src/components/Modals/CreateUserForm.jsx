import { Button, Dialog, DialogBody, DialogHeader, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react';
import { useContext, useState } from "react";
import Context from '../../modules/Context';
import axios from "../../modules/ApiAxios";

export default function CreateUserForm({ users, setUsers, open, handleOpen }) {

    // Hooks
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: 'user'
    });

    const { theme } = useContext(Context);

    // Handler
    const handleCreateUser = () => {
        // POST User
        axios.post(newUser)
            .then(response => {
                const createdUser = response.data;
                // Update users array adding new user
                setUsers([...users, createdUser]);
                // Reset form
                setNewUser({ name: '', email: '', role: 'user' });
                handleOpen();
            })
            .catch(error => console.error("Error adding user:", error));
    };

    return (
        <Dialog className={`p-4 w-96 m-auto bg-white bg-theme-${theme}`} size="md" open={open} handler={handleOpen}>
            <DialogHeader className="justify-between">
                <Typography color="blue-gray" className="mb-1 font-bold">
                    Create User
                </Typography>
                <IconButton
                    color="gray"
                    size="sm"
                    variant="text"
                    onClick={handleOpen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </DialogHeader>
            <DialogBody className="overflow-y-scroll flex flex-col pt-0">
                <form className="mb-2" onSubmit={(e) => { e.preventDefault(); handleCreateUser(); }}>
                    <div className="w-full flex flex-col gap-3">
                        <Typography>
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            required
                        />
                        <Typography>
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            required
                        />
                        <Typography>
                            Role
                        </Typography>
                        <Select
                            size="lg"
                            value={newUser.role}
                            onChange={(e) => setNewUser({ ...newUser, role: e })}
                        >
                            <Option value="user">User</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    </div>
                    <Button type="submit" className='mt-8 md:mt-12 rounded-full py-[12px] px-[16px]' color="blue" fullWidth>
                        Add User
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    );
}
