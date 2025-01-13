import Link from "next/link";
import Image from "next/image";
import whatsappIcon from "../public/images/icons/whatsapp.svg";
import facebookIcon from "../public/images/icons/facebook.svg";

export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-8 ">
        <div className="grid grid-cols-3 px-20">
          <div className='flex flex-col items-center justify-start space-x-4'>
              <Image src='/images/SlickSite3.png' alt='Logo' width={400} height={400} />
              <p>We transform your online presence to generate a surge in leads and inquiries, delivering premium sales appointments tailored to service-based businesses.</p>
          </div>
          <div className="mx-auto text-center px-6">
            <p className="text-xl font-semibold mb-4">Useful Links</p>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white">About</Link>
              <Link href='#' className="text-gray-400 hover:text-white">Services</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Our Work</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Free Quote</Link>
              <Link href="#" className="text-gray-400 hover:text-white">TrustPilot</Link>
              <Link href="#" className="text-gray-400 hover:text-white">FaceBook</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mx-auto text-center px-6">
            <p className="text-xl font-semibold mb-4">Contact Us</p>
            <Link href="tel:07462636123" className="hover:scale-105">📞 07462636123</Link>
            <Link href="mailto:leo@slick-site.com" className="hover:scale-105">📧 leo@slick-site.com</Link>
            <div  className='flex items-center justify-center space-x-2'>
              <Image src={facebookIcon} alt="WhatsApp" width={30} height={30} />
              <Link href="https://www.facebook.com/profile.php?id=61571227828830&locale=en_GB" target="_blank" className="hover:scale-105">Slick Site</Link>
            </div>
            <div className='flex items-center justify-center space-x-2'>      
              <Image src={whatsappIcon} alt="WhatsApp" width={30} height={30} />
              <Link href="https://wa.me/07462636123" target="_blank" className="hover:scale-105">07462636123</Link>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-6 text-center">&copy; 2024 SlickSite. All Rights Reserved.</p>
      </footer>
    );
  }
  