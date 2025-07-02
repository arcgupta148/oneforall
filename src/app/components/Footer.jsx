const Footer = () => {
    return (
      <footer className="bg-[#0E061F] text-white py-12 mt-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
            
            {/* Logo and Social */}
            <div className="col-span-2 space-y-4">
              <img src="/logo.png" alt="One For All" className="h-10" />
              <div className="flex space-x-4">
                <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5" /></a>
                <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" /></a>
                <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="h-5 w-5" /></a>
              </div>
              <p className="text-xs text-gray-400">Copyright © 2025 by Anime Store. All rights reserved.</p>
            </div>
  
            {/* Account */}
            <div className="space-y-2">
              <h3 className="font-semibold">Account</h3>
              <ul className="space-y-1 text-gray-300">
                <li><a href="#">Create account</a></li>
                <li><a href="#">Sign in</a></li>
                <li><a href="#">iOS app</a></li>
                <li><a href="#">Android app</a></li>
              </ul>
            </div>
  
            {/* Company */}
            <div className="space-y-2">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-1 text-gray-300">
                <li><a href="#">About Anime</a></li>
                <li><a href="#">For Business</a></li>
                <li><a href="#">Manga partners</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
  
            {/* Resources */}
            <div className="space-y-2">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-1 text-gray-300">
                <li><a href="#">Help center</a></li>
                <li><a href="#">Privacy & terms</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  