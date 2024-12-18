export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-blue-600 text-white py-4">
                <nav className="container mx-auto px-4 flex justify-between">
                    <h1 className="text-2xl font-bold">D. Y. Patil Coding Hackathon 2024</h1>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/schedule" className="hover:underline">Schedule</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto px-4 mt-8">{children}</main>
            <footer className="bg-blue-600 text-white py-4 text-center">
                <p>&copy; 2024 D. Y. Patil College of Engineering. All rights reserved.</p>
            </footer>
        </div>
    );
}
