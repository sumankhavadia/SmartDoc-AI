export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SmartDoc AI</h1>
      <nav className="space-x-6 text-sm sm:text-base">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Docs</a>
        <a href="#" className="hover:text-blue-600 transition">Login</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Upload
        </button>
      </nav>
    </header>
  );
}
