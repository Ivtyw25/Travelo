
export default function Header() {
    return (
        <div className="navbar bg-black text-white flex justify-between items-center p-4">
            <div className="leftBar flex items-center m-auto">
                <h3 className="font-bold text-2xl"><span class="pr-2">&#9992;</span>Travelo</h3>
            </div>
            <div className="rightBar flex items-center gap-10 m-auto ">
                <span className="font-medium hover:text-gray-400 cursor-pointer">Home</span>
                <span className="font-medium hover:text-gray-400 cursor-pointer">Tours</span>
                <button className="bg-gray-800 rounded-xl px-4 py-1 font-medium hover:bg-gray-700">
                    Sign in
                </button>
            </div>
        </div>
    );
}


