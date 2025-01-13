import CTA from '@/components/CTA';
import pageImage from '../../public/images/about/me.jpg';
import cardImage from '../../public/images/about/card.svg';
import timeImage from '../../public/images/about/time.svg';
import changesImage from '../../public/images/about/changes.svg';
import mindImage from '../../public/images/about/mind.svg';
import Image from 'next/image';

const tabs = [
    {
        imageUrl: cardImage,
        title: 'Cost-Effective',
        description: 'We charge a fraction of the cost of other agencies, without compromising on quality.'
    },
    {
        imageUrl: timeImage,
        title: 'Efficient',
        description: 'We know that time is money, thats why we gurantee your website is up and running within a month.'
    },
    {
        imageUrl: changesImage,
        title: 'Unlimited Changes',
        description: 'We offer unlimited changes to your website design until you are 100% satisfied.'
    },
    {
        imageUrl: mindImage,
        title: 'Peace of Mind',
        description: 'We handle everything from hosting to domain registration, so you can relax and focus on your business.'
    },
]

const AboutPage = () => {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src={pageImage}
                alt="About Us"
                className="rounded-lg shadow-lg w-full md:w-3/4"
              />
            </div>
            {/* About Section */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-4">About Slick Site</h2>
              <p className='text-lg text-blue-950'>&quot;Hi, I’m Leo, the founder of Slick Site. I launched Slick Site while studying Computer Science at University, and since then, I’ve had the privilege of creating websites for a diverse range of satisfied clients. These projects have spanned various industries, from photographer portfolios to roofing companies.
                <br/><br/>
                At Slick Site, my goal is to craft tailor-made websites that perfectly align with my clients&apos; needs—delivering exceptional quality at a fraction of the cost of large agencies. While I may be relatively young, I bring over four years of web development experience to the table, and I’m confident in the expertise I’ve gained along the way.&quot;
                <br/><br/>
                Leo Revrenna</p>
            </div>
          </div>
          {/* Content Section */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-blue-950 my-10">Why Choose Slick Site?</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {tabs.map((tab, index) => (
                    <div key={index} className="flex flex-col items-center justify-between">
                        <Image src={tab.imageUrl} alt={tab.title} width={200} height={200} />
                        <>
                            <h3 className="text-lg font-semibold text-blue-950 mt-4">{tab.title}</h3>
                            <p className="text-gray-600">{tab.description}</p>
                        </>
                    </div>
                ))}
            </div>
          </div>

          {/* CTA Section */}
          <CTA />
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  