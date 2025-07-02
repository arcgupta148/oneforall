import Navbar from './components/Navbar';
import Footer from './components/Footer' // uncomment if you use it

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section without dark overlay */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat sm:bg-top  flex items-center justify-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
      </div>

      <section className="py-12">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            <img src="/character1.png" alt="Left Image" className="w-24 h-30 object-contain" />
            <img src="/character2.png" alt="Center Image" className="w-24 h-30 object-contain" />
            <img src="/character3.png" alt="Right Image" className="w-24 h-30 object-contain" />
          </div>
        </div>
      </section>

{/* Categories Section */}
<section className="py-12 px-4">
  <div className="max-w-screen-lg mx-auto px-50">
    
    {/* Categories Title */}
    <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-left">Categories</h2>

    {/* Categories Grid */}
    <div className="flex flex-wrap justify-start gap-8 mb-12">
      {/* Hoodie */}
      <div className="flex flex-col items-center">
        <img src="/hoodie1.png" alt="Hoodies" className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-2 font-semibold text-sm text-indigo-600">Hoodies</p>
      </div>

      {/* T-shirts */}
      <div className="flex flex-col items-center">
        <img src="/tshirt1.png" alt="T-shirts" className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-2 font-semibold text-sm text-indigo-600">T-shirts</p>
      </div>

      {/* Accessories */}
      <div className="flex flex-col items-center">
        <img src="/accessory1.png" alt="Accessories" className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-2 font-semibold text-sm text-indigo-600">Accessories</p>
      </div>

      {/* Gaming Hoodies */}
      <div className="flex flex-col items-center">
        <img src="/gaming1.png" alt="Gaming Hoodies" className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-2 font-semibold text-sm text-indigo-600">Gaming Hoodies</p>
      </div>
    </div>

    {/* Choose By Anime Section */}
    <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-left">Choose By Anime</h2>

    <div className="grid grid-cols-3 md:grid-cols-5 gap-20">
      {[
        { src: "/aot.png", name: "Attack On Titan" },
        { src: "/berserk.png", name: "Berserk" },
        { src: "/onepiece.png", name: "One Piece" },
        { src: "/jujutsu.png", name: "Jujutsu Kaisen" },
        { src: "/bleach.png", name: "Bleach" },
        { src: "/solo.png", name: "Solo Leveling" },
        { src: "/hxh.png", name: "Hunter X Hunter" },
        { src: "/dbz.png", name: "Dragon Ball" }
      ].map(({ src, name }) => (
        <div key={name} className="flex flex-col items-center">
          <img src={src} alt={name} className="w-16 h-16 object-contain" />
          <p className="mt-2 font-semibold text-xs text-indigo-600 text-center">{name}</p>
        </div>
      ))}
    </div>
    {/* Featured Section */}
<div className="mt-16 space-y-12">
  {/* Featured Products */}
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold text-indigo-600">Featured Products</h2>
    <button className="bg-indigo-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-indigo-600 transition">
      Shop Now <span className="ml-2">🛒</span>
    </button>
  </div>

  {/* Featured Accessories */}
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold text-indigo-600">Featured Accessories</h2>
    <button className="bg-indigo-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-indigo-600 transition">
      Shop Now <span className="ml-2">🛒</span>
    </button>
  </div>
</div>
  </div>
</section>





      {/* <Footer /> */}
      <Footer></Footer>
    </div>
  )
}
