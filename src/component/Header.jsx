<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
</svg>


export default function Header(){
    return(
        <div class="p-4 flex justify-around bg-black text-white items-center">
            <h3 class="font-bold text-2xl"><span class="pr-2">&#9992;</span>Travelo</h3>
            <span class="font-medium">Home</span>
            <span class="font-medium">Tours</span>
            <button class="bg-gray-800 rounded-xl px-4 py-1 font-medium">Sign in</button>
        </div>
    )
}

