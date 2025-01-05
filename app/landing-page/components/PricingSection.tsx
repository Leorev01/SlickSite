import SalesButton from "./SalesButton";

interface PricingTier {
  title: string;
  description: string;
  price: string;
  now: string;
  features: string[];
}

const pricingData: PricingTier[] = [
  {
    title: "Starter",
    description: "Perfect for small home improvement businesses just starting out.",
    price: "£599",
    now: "£399",
    features: [
      "Up to 5 custom pages",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Contact form integration",
      "Google My Business integration",
      "Ongoing maintenance"
    ],
  },
  {
    title: "Growth",
    description: "Ideal for established home improvement companies looking to grow.",
    price: "£1,299",
    now: "£799",
    features: [
      "Up to 15 custom pages",
      "Gallery or portfolio showcase",
      "Advanced SEO optimization",
      "Blog setup",
      "Testimonial and review pages",
      "Analytics and tracking integration",
      "Ongoing maintenance"
    ],
  },
  {
    title: "Custom",
    description: "Tailored solutions for larger home improvement businesses.",
    price: "",
    now: "Contact us",
    features: [
      "Unlimited custom pages",
      "Interactive project showcase",
      "Custom lead generation forms",
      "Appointment scheduling tool",
      "Live chat integration",
      "Dedicated account manager",
      "Ongoing maintenance and support"
    ],
  },
];

const PricingComponent = () => {
  return (
    <section className="py-16 bg-[#EDF2F4] dark:bg-gray-800 mb-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Web Design Services for Home Improvement Businesses
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Build a professional online presence with our tailored website solutions.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {pricingData.map((tier, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {tier.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {tier.description}
              </p>
              <div className="flex flex-row gap-2 justify-center font-bold mb-4">
                <p className="text-blue-600 text-3xl">{tier.now}</p>
                {tier.price && (
                  <p className="text-red-600 line-through text-lg">{tier.price}</p>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">
                    <span className="mr-2">✔</span>{feature}
                  </li>
                ))}
              </ul>
              {tier.now !== "Contact us" && (
                <SalesButton />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
