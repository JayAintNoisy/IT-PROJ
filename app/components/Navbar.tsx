export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const borderClass = darkMode ? "border-zinc-800" : "border-zinc-200";

  return (
    <header className={`flex justify-between items-center p-6 border-b ${borderClass} transition-colors duration-300`}>
      <h1 className="font-bold text-xl tracking-tight">Portfolio</h1>
      
      <nav className="space-x-8 font-medium">
        <a href="/" className="hover:opacity-70">Home</a>
        <a href="/about" className="hover:opacity-70">About</a>
        <a href="/projects" className="hover:opacity-70">Projects</a>
        <a href="/blogs" className="hover:opacity-70">Blogs</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-full transition-colors ${darkMode ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"}`}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <button className={`${darkMode ? "bg-white text-black" : "bg-black text-white"} px-6 py-2 rounded-lg font-bold transition-all`}>
          Contact
        </button>
      </div>
    </header>
  );
}