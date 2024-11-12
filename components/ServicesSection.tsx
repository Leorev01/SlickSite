export default function ServicesSection() {
  const services = [
    {
      title: 'Website Design & Development',
      description: 'We craft stunning and functional websites that are optimized for performance and user experience.',
      icon: '🌐',
    },
    {
      title: 'UI/UX Optimization',
      description: 'Enhance user satisfaction and engagement with our tailored UI/UX design services.',
      icon: '🎨',
    },
    {
      title: 'eCommerce Solutions',
      description: 'Boost your online sales with our custom eCommerce solutions. We build scalable online stores.',
      icon: '🛒',
    },
    {
      title: 'Branding & Graphic Design',
      description: 'Create a memorable brand identity with our comprehensive branding and graphic design services.',
      icon: '✨',
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Drive traffic and increase conversions with our SEO and digital marketing strategies.',
      icon: '📈',
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          Tailored web design and digital solutions to elevate your brand and grow your business.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
