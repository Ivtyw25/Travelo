export default function Footer(){
    return(
    <footer class="bg-black text-white py-8 text-center">
        <div class="container mx-auto flex flex-wrap justify-between">
        <div class="footer-section flex-1 m-4">
            <h4 class="mb-2 text-lg font-bold">About Us</h4>
            <p class="leading-relaxed">We are a travel company dedicated to providing the best travel experiences.</p>
        </div>
        <div class="footer-section flex-1 m-4">
            <h4 class="mb-2 text-lg font-bold">Contact</h4>
            <ul class="list-none p-0">
            <li class="mb-1">Email: contact@travelcompany.com</li>
            <li>Phone: +123 456 7890</li>
            </ul>
        </div>
        <div class="footer-section flex-1 m-4">
            <h4 class="mb-2 text-lg font-bold">Follow Us</h4>
            <ul class="list-none p-0 flex justify-center gap-4">
            <li><a href="https://twitter.com" target="_blank" class="text-white hover:text-gray-400">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" class="text-white hover:text-gray-400">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" class="text-white hover:text-gray-400">Instagram</a></li>
            </ul>
        </div>
        </div>
        <div class="mt-8">
        <p>&copy; 2024 Travel Company. All rights reserved.</p>
        </div>
    </footer>
    )
}