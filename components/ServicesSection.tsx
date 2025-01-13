import Image from 'next/image';
import SubHeading from './SubHeading';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'We create custom, high-quality websites that are mobile-responsive, fast, and SEO-friendly to generate leads and boost your online presence.',
      url: 'images/services/web-design2.svg',
    },
    {
      title: 'SEO & Content Marketing',
      description: 'We optimize your website for search engines to attract organic traffic and create tailored, industry-specific content that engages and converts visitors.',
      url: 'images/services/seo.svg',
    },
    {
      title: 'Website Hosting & Maintenance',
      description: 'We provide secure, reliable hosting services and ongoing maintenance to ensure your website is always up-to-date and running smoothly.',
      url: 'images/services/hosting.svg',
    },
  ];

  return (
    <section className='bg-gray-50 text-center text-blue-950 py-12'>
      <SubHeading title='OUR SERVICES' text='What We Offer' />
      <div className='flex md:flex-row items-center justify-center flex-col mb-4'>
        {services.map((service) => (
          <div key={service.title} className='flex flex-col items-center justify-center p-4'>
            <Image src={service.url} alt={service.title} width={300} height={300} />
            <h5 className='font-bold'>{service.title}</h5>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Link href='/services' className='text-purple-700 font-bold text-xl hover:text-purple-900'>
        🡢 FIND OUT MORE
      </Link>
    </section>
  );
}
