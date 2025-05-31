import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <a href="#" className="text-2xl font-bold hover:text-blue-600 transition">
                    Thomas Nisar
                </a>
                <div className="hidden md:flex items-center gap-6">
                    <a href="#ueber-mich" className="hover:text-blue-600 transition">
                        Über mich
                    </a>
                    <a href="#ziele" className="hover:text-blue-600 transition">
                        Ziele
                    </a>
                    <a href="#werdegang" className="hover:text-blue-600 transition">
                        Werdegang
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-1 hover:text-blue-600 transition"
                        >
                            Mehr <ChevronDown size={16} />
                        </button>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg"
                            >
                                <a
                                    href="#kontakt"
                                    className="block px-4 py-2 hover:bg-gray-100 transition"
                                >
                                    Kontakt
                                </a>
                                <a
                                    href="#projekte"
                                    className="block px-4 py-2 hover:bg-gray-100 transition"
                                >
                                    Projekte
                                </a>
                            </motion.div>
                        )}
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {dropdownOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {dropdownOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden bg-white border-t border-gray-200"
                >
                    <a
                        href="#ueber-mich"
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                    >
                        Über mich
                    </a>
                    <a
                        href="#ziele"
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                    >
                        Ziele
                    </a>
                    <a
                        href="#werdegang"
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                    >
                        Werdegang
                    </a>
                    <a
                        href="#kontakt"
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                    >
                        Kontakt
                    </a>
                    <a
                        href="#projekte"
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                    >
                        Projekte
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}