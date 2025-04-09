import { BookOpen, ChefHat, Users } from "lucide-react";

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Dashboard</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Total Admin */}
                <div className="flex flex-col gap-4 rounded-xl bg-blue-50 p-6 shadow-sm dark:bg-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-md bg-blue-200 p-2 text-blue-600 dark:bg-blue-700 dark:text-white">
                            <Users size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-700 dark:text-white">Total Admin</h3>
                    </div>
                    <div className="text-5xl font-bold text-slate-900 dark:text-white">3</div>
                </div>

                {/* Jumlah Resep */}
                <div className="flex flex-col gap-4 rounded-xl bg-green-50 p-6 shadow-sm dark:bg-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-md bg-green-200 p-2 text-green-600 dark:bg-green-700 dark:text-white">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-green-700 dark:text-white">Jumlah Resep</h3>
                    </div>
                    <div className="text-5xl font-bold text-slate-900 dark:text-white">127</div>
                </div>

                {/* Jumlah Chef */}
                <div className="flex flex-col gap-4 rounded-xl bg-yellow-50 p-6 shadow-sm dark:bg-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-md bg-yellow-200 p-2 text-yellow-600 dark:bg-yellow-700 dark:text-white">
                            <ChefHat size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-yellow-700 dark:text-white">Jumlah Chef</h3>
                    </div>
                    <div className="text-5xl font-bold text-slate-900 dark:text-white">18</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
