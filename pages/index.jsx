import { useEffect, useState } from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Thomas Nisar | Portfolio';
    }, []);

    const [sections] = useState([
        {
            id: 'ueber-mich',
            title: 'Über mich',
            content:
                'Ich bin Thomas Nisar, Fachinformatiker für Anwendungsentwicklung mit starkem Interesse an Projektmanagement, agilen Methoden und zukunftsorientierten IT-Lösungen.',
        },
        {
            id: 'ziele',
            title: 'Ziele',
            content:
                'Meine Ziele sind es, moderne digitale Lösungen mitzugestalten, als Scrum Master oder im Bereich IT-Projektmanagement Fuß zu fassen und dabei Teams erfolgreich zu unterstützen.',
        },
        {
            id: 'werdegang',
            title: 'Werdegang',
            content:
                'Nach meiner Umschulung zum Fachinformatiker (Anwendungsentwicklung) konnte ich Erfahrung im Kundensupport, mit agilen Tools wie Jira, Trello, Salesforce und Odoo sammeln. Zudem besitze ich das PSM I-Zertifikat.',
        },
    ]);

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar />

            {/* Parallax Hero Section */}
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Hi, ich bin Thomas Nisar
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-700 mb-6"
                    >
                        Fachinformatiker | Projektenthusiast | Scrum Master
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/thomas-nisar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                        >
                            <Linkedin size={20} /> LinkedIn Profil
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                {sections.map((section, idx) => (
                    <motion.section
                        id={section.id}
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 rounded-2xl shadow-md"
                    >
                        <Card>
                            <CardContent>
                                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {section.content}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.section>
                ))}

                {/* Parallax Zwischenabschnitt */}
                <div className="relative h-64 overflow-hidden rounded-2xl">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: "url('/images/parallax-background.jpg')" }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl md:text-4xl font-bold"
                        >
                            Meine Projekte und Erfolge
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-2 text-lg md:text-xl text-gray-200"
                        >
                            Bald findest du hier spannende Einblicke in meine Arbeit.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Kontaktbereich */}
            <motion.footer
                id="kontakt"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-12 bg-gray-50"
            >
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Kontakt</h3>
                    <p className="text-gray-600 text-lg mb-6">
                        Hast du Fragen oder möchtest einfach in Kontakt treten?
                    </p>
                    <a
                        href="mailto:thomas.nisar@example.com"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                    >
                        Schreib mir eine Mail <ArrowRight size={16} />
                    </a>
                </div>
            </motion.footer>
        </div>
    );
}