type PropType = {
    categories: string[]
}
export default function NavBar({ categories }: PropType,selectCategory:string) {
    return (
       
             <nav className="sticky uppercase top-0 bg-white border-b p-4 flex gap-6 overflow-x-auto whitespace-nowrap z-50 shadow-sm scrollbar-hide">
               {categories.map((cat) => {
                 const id = cat.toLowerCase();
                 const isActive = selectCategory === id;
                 return (
                   <a
                     key={cat}
                     href={`#${id}`}
                     className={`relative px-3 py-1 text-sm font-medium transition-colors duration-300 ${isActive
                       ? "text-black font-semibold"
                       : "text-gray-500 hover:text-black"
                       }`}
                   >
                     {cat}
                     <span
                       className={`absolute left-0 -bottom-1 h-[2px] w-full rounded bg-black transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"
                         } origin-left`}
                     />
                   </a>
                 );
               })}
             </nav>
       

    );
}
