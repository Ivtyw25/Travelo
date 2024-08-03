export default function Header() {
    return (
        <div className="p-4 flex justify-between items-center bg-black text-white">
            <h3 className="font-bold text-3xl text-yellow-500 ml-20">Travelo</h3>
            <div className="flex flex-grow justify-center">
                <div className="flex space-x-32"> {/* Increased the spacing to space-x-32 */}
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-black rounded-xl px-4 py-2 font-medium transition duration-300">Home</button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-black rounded-xl px-4 py-2 font-medium transition duration-300">Tours</button>
                </div>
            </div>
            <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl px-4 py-2 font-medium transition duration-300 mr-4">Sign in</button>
        </div>
    );
}









