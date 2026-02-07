export default function Footer({ darkMode }: { darkMode: boolean }) {
  const footerBg = darkMode ? "bg-black" : "bg-white";
  const borderClass = darkMode ? "border-zinc-800" : "border-zinc-200";

  return (
    <footer className={`flex justify-between p-12 border-t ${footerBg} ${borderClass} transition-colors duration-300 text-sm`}>
      <div className="space-y-1">
        <p className="font-bold text-base">My Portfolio</p>
        <p className={darkMode ? "text-zinc-400" : "text-zinc-500"}>Cebu, City</p>
      </div>
      
      <div className="flex flex-col space-y-3">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/projects" className="hover:underline">Projects</a>
      </div>

      <div className="flex flex-col space-y-3">
        <p>Blog 1</p>
        <p>Blog 2</p>
        <p>Blog 3</p>
      </div>

      <div className="flex flex-col space-y-3">
        <p>Email: JAYMAR.YECYEC@gmail.com</p>
        <p>Phone: 09273647854</p>
        <p>Github</p>
      </div>
    </footer>
  );
}