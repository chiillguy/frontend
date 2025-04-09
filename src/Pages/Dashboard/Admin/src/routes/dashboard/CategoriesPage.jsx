import { useState } from "react";
import { PencilLine, Trash, Check, X } from "lucide-react";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: "Makanan Berat" },
        { id: 2, name: "Makanan Ringan" },
        { id: 3, name: "Minuman" },
    ]);

    const [newCategory, setNewCategory] = useState("");
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");

    // Tambah kategori
    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategory.trim() === "") return;

        const newId = categories.length > 0 ? categories[categories.length - 1].id + 1 : 1;
        setCategories([...categories, { id: newId, name: newCategory }]);
        setNewCategory("");
    };

    // Hapus kategori
    const handleDelete = (id) => {
        const confirm = window.confirm("Yakin ingin menghapus kategori ini?");
        if (confirm) {
            setCategories(categories.filter((cat) => cat.id !== id));
        }
    };

    // Simpan edit
    const handleSaveEdit = (id) => {
        setCategories(categories.map(cat => (
            cat.id === id ? { ...cat, name: editName } : cat
        )));
        setEditId(null);
        setEditName("");
    };

    // Batal edit
    const handleCancelEdit = () => {
        setEditId(null);
        setEditName("");
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Kategori Makanan</h1>

            {/* Form Tambah */}
            <form onSubmit={handleAddCategory} className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Nama kategori..."
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
                >
                    Tambah
                </button>
            </form>

            {/* Tabel Kategori */}
            <div className="overflow-auto border rounded">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Nama Kategori</th>
                            <th className="p-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat) => (
                            <tr key={cat.id} className="border-t hover:bg-gray-50">
                                <td className="p-2">{cat.id}</td>
                                <td className="p-2">
                                    {editId === cat.id ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            className="border px-2 py-1 rounded w-full"
                                        />
                                    ) : (
                                        cat.name
                                    )}
                                </td>
                                <td className="p-2">
                                    {editId === cat.id ? (
                                        <div className="flex gap-2">
                                            <button onClick={() => handleSaveEdit(cat.id)} className="text-green-600">
                                                <Check size={18} />
                                            </button>
                                            <button onClick={handleCancelEdit} className="text-gray-500">
                                                <X size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button
                                                className="text-blue-500"
                                                onClick={() => {
                                                    setEditId(cat.id);
                                                    setEditName(cat.name);
                                                }}
                                            >
                                                <PencilLine size={18} />
                                            </button>
                                            <button
                                                className="text-red-500"
                                                onClick={() => handleDelete(cat.id)}
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {categories.length === 0 && (
                            <tr>
                                <td colSpan="3" className="p-2 text-center text-gray-500">
                                    Belum ada kategori
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesPage;
