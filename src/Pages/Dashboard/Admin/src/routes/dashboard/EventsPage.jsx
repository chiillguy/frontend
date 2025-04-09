import { useState, useEffect } from "react";
import { PencilLine, Trash } from "lucide-react";

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            {
                id: 1,
                title: "Festival Kuliner",
                description: "Event makanan tradisional dan modern.",
                date: "2025-05-10",
                location: "Lapangan Merdeka, Jakarta",
                image: "https://images.unsplash.com/photo-1564758566189-aceed7f737cf",
            },
            {
                id: 2,
                title: "Workshop Coding",
                description: "Belajar frontend dan backend dalam satu hari.",
                date: "2025-06-01",
                location: "Coworking Space Bandung",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
            },
        ]);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Events</h1> 

            <div className="card">
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table w-full text-sm text-left">
                            <thead className="bg-gray-100 sticky top-0 z-10">
                                <tr>
                                    <th className="p-2">#</th>
                                    <th className="p-2">Image</th>
                                    <th className="p-2">Title</th>
                                    <th className="p-2">Description</th>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Location</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event.id} className="border-b hover:bg-gray-50">
                                        <td className="p-2">{event.id}</td>
                                        <td className="p-2">
                                            <img 
                                                src={event.image} 
                                                alt={event.title} 
                                                className="w-20 h-20 object-cover rounded-md border"
                                            />
                                        </td>
                                        <td className="p-2">{event.title}</td>
                                        <td className="p-2">{event.description}</td>
                                        <td className="p-2">{event.date}</td>
                                        <td className="p-2">{event.location}</td>
                                        <td className="p-2">
                                            <div className="flex items-center gap-x-2">
                                                <button className="text-blue-500">
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

export default EventsPage;
