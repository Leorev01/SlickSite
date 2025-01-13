import Image from 'next/image';
import conversionImage from '@/public/images/conversion.png';

export default function HeroSection() {
  return (
    <div className="relative pt-36 flex md:flex-row flex-col mx-10">
      <div className="container mx-auto px-6 flex flex-col justify-center text-blue-950">
        <h1 className="text-5xl font-bold mb-6">
        Boost Your Service-Based Business with High-Converting Websites
        </h1>
        <p className="text-lg max-w-2xl text-start mb-8">
        We transform your online presence to drive more leads and inquiries, delivering high-quality sales appointments that help grow your service-based business.
        </p>
        <div className="flex space-x-4">
          <button
            className="px-9 py-3 rounded-full text-xl bg-blue-950 text-white font-bold"
          >
            FREE QUOTE
          </button>
        </div>
      </div>
      <div>
        <Image src={conversionImage} alt="Conversion Image"  width={800} height={800}/>
      </div>
    </div>
  );
}
