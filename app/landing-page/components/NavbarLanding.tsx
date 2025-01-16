// components/NavbarLanding.tsx
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/SlickSite3.png';

const NavbarLanding = () => {
  return (
    <header className="bg-blue-950 text-white py-6">
        <div className="flex mx-auto justify-center items-center">
            <Link href="/" className="text-3xl font-bold text-white">
                {/* Your Logo Here */}
                <Image src={logo} alt="SlickSite Logo" width={200} height={200} />
            </Link>
        </div>
    </header>
  );
};

export default NavbarLanding;
