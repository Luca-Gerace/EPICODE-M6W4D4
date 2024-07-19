import { Button, Dialog, DialogBody, DialogHeader, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react';
import axios from '../modules/ApiAxios';
import { useState } from 'react';

export default function UpdateUserForm({ user, setUsers, open, handleOpen }) {
    // Hooks
    const [updateUser, setUpdateUser] = useState({
        name: user.name,
        email: user.email,
        role: user.role
    });

    // Handler
    const handleUpdateUser = () => {
        // PATCH User (update existing user)
        axios.patch(`/${user._id}`, updateUser)
            .then(response => {
                const updatedUser = response.data;
                // Update users array
                setUsers(prevUsers => prevUsers.map(u => (u._id === updatedUser._id ? updatedUser : u)));
                // Close the dialog
                handleOpen();
            })
            .catch(error => console.error(`Error updating user: id: ${user._id} | Name - ${user.name} | Email - ${user.email}`, error));
    };

    return (
        <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
            <DialogHeader className="justify-between">
                <Typography color="blue-gray" className="mb-1 font-bold">
                    Update User
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
                <form className="mb-2" onSubmit={(e) => { e.preventDefault(); handleUpdateUser(); }}>
                    <div className="flex flex-col gap-3">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Name"
                            value={updateUser.name}
                            onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Email"
                            value={updateUser.email}
                            onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Role
                        </Typography>
                        <Select
                            size="lg"
                            value={updateUser.role}
                            onChange={(e) => setUpdateUser({ ...updateUser, role: e })}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        >
                            <Option value="user">User</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    </div>
                    <Button type="submit" className='mt-8 md:mt-12 rounded-full py-[12px] px-[16px]' color="blue" fullWidth>
                        Update User
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    );
}
