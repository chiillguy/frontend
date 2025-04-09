import { useState, useEffect } from "react";
import { PencilLine, Trash } from "lucide-react";

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes([
            {
                id: 1,
                image: "https://via.placeholder.com/80",
                title: "Nasi Goreng",
                description: "Nasi goreng khas Indonesia.",
                ingredients: "Nasi, telur, kecap, bawang, cabai",
                steps: "1. Tumis bawang, 2. Masukkan nasi, 3. Tambahkan telur & kecap",
            },
            {
                id: 2,
                image: "https://via.placeholder.com/80",
                title: "Sate Ayam",
                description: "Sate ayam dengan bumbu kacang.",
                ingredients: "Ayam, tusuk sate, bumbu kacang",
                steps: "1. Marinasi ayam, 2. Tusuk, 3. Bakar, 4. Sajikan dengan bumbu",
            },
        ]);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Recipes</h1> 

            <div className="card">
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table w-full text-sm text-left">
                            <thead className="bg-gray-100 sticky top-0 z-10">
                                <tr className="table-row">
                                    <th className="p-2">#</th>
                                    <th className="p-2">Image</th>
                                    <th className="p-2">Title</th>
                                    <th className="p-2">Description</th>
                                    <th className="p-2">Ingredients</th>
                                    <th className="p-2">Steps</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recipes.map((recipe) => (
                                    <tr key={recipe.id} className="border-b hover:bg-gray-50">
                                        <td className="p-2">{recipe.id}</td>
                                        <td className="p-2">
                                            <img src={recipe.image} alt={recipe.title} className="w-20 h-20 object-cover rounded" />
                                        </td>
                                        <td className="p-2">{recipe.title}</td>
                                        <td className="p-2">{recipe.description}</td>
                                        <td className="p-2">{recipe.ingredients}</td>
                                        <td className="p-2">{recipe.steps}</td>
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

export default RecipesPage;
