import { Button, Typography, Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import axios from "../../modules/ApiAxios";

export default function CreateUserForm() {

    // Hooks
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: 'user'
    });

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
            })
            .catch(error => console.error("Error adding user:", error));
    };

    return (
        <form className="mb-2" onSubmit={(e) => { e.preventDefault(); handleCreateUser(); }}>
            <div className="flex flex-col gap-3">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Name
                </Typography>
                <Input
                    size="lg"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
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
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
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
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e })}
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
                Add User
            </Button>
        </form>
    );
}
