import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, LogOut } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full px-6 py-4 bg-white dark:bg-[#252628] border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">

            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                Dashboard
            </h1>

            <div className="flex items-center gap-3">

                {/* Theme Toggle */}
                {/* <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
                >
                    {theme === "dark" ? (
                        <Sun size={20} className="text-yellow-400" />
                    ) : (
                        <Moon size={20} className="text-gray-800" />
                    )}
                </button> */}

                {/* Profile */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center font-semibold"
                    >
                        Y
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white dark:bg-[#2c2d30] border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">

                            <div className="flex items-center gap-3 px-4 py-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center font-semibold text-gray-700 dark:text-white">
                                    Y
                                </div>

                                <div className="leading-tight">
                                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                                        Dr. Yash Bandal
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        yashbandal25@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 dark:border-gray-700" />

                            <button className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <LogOut size={16} />
                                Sign out
                            </button>

                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;