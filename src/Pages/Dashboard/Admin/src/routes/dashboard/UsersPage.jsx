import { useState, useEffect } from "react";
import { PencilLine, Trash } from "lucide-react";

const UsersPage = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers([
            { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
            { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
            { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Moderator", status: "Active" },
        ]);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1> 

            <div className="card">
                <div className="card-header">
                    <p className="card-title">Users Management</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row h-5">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Name</th>
                                    <th className="table-head">Email</th>
                                    <th className="table-head">Role</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="table-row">
                                        <td className="table-cell">{customer.id}</td>
                                        <td className="table-cell">{customer.name}</td>
                                        <td className="table-cell">{customer.email}</td>
                                        <td className="table-cell">{customer.role}</td>
                                        <td className={`table-cell ${customer.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{customer.status}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
