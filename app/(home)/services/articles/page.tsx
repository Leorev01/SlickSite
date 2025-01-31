import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const ArticleContent = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Website Article Content</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Welcome to Slick: Elevate Your Online Presence
            </h3>
            <p className="text-lg text-gray-600">
              Welcome to Slick, where words weave the story of your digital
              success. Our Article Content service is your key to enhancing
              website traffic and engaging your audience with compelling,
              SEO-optimised articles and blog posts. As a leading web
              development company, we understand the pivotal role that
              high-quality content plays in driving organic traffic, and we’re
              here to empower your online presence through our tailored Article
              Content packages.
            </p>
            <Link
              href="/quote"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
            >
              Get a Free Quote Today
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/images/services/articles.svg"
              alt="SEO Optimised Articles"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* SEO Optimised Articles Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            SEO Optimised Articles: Your Gateway to Online Visibility
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            In the vast digital landscape, standing out requires more than just
            a website – it demands captivating and relevant content. Our
            SEO-Optimised Articles service is designed to not only showcase your
            company’s services but also increase your website’s visibility on
            search engines.
          </p>
          <p className="text-lg text-gray-600">
            Our team of skilled content creators takes a strategic approach to
            crafting articles that align with search engine algorithms,
            ensuring that your content ranks well for relevant keywords. From
            informative blog posts to engaging articles about your services, our
            content is crafted to capture the attention of your target audience
            and drive organic traffic to your website.
          </p>
        </div>

        {/* Website Article Packages Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Website Article Packages: Grow your website traffic
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            Our Article Content packages are curated to provide you with
            regular, high-quality articles and blog posts that keep your
            audience engaged. Consistency is key in maintaining an active online
            presence, and our packages are tailored to deliver a steady stream
            of content that reflects the latest industry trends, highlights your
            services, and keeps your audience informed and interested.
          </p>
          <p className="text-lg text-gray-600">
            Whether you’re looking to showcase your expertise, share industry
            insights, or connect with your audience on a personal level, our
            Article Content packages are designed to meet your specific content
            marketing goals.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Contact us to discuss how our article content can elevate your
            online presence and pull in relevant traffic to your website.
          </p>
        </div>

        {/* Why Choose Slick Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Why Choose Slick for Website Article Content?
          </h4>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>
              <strong>SEO Expertise:</strong> Through thorough keyword research,
              metadata optimization, and content structuring, we empower your
              articles to not only resonate with your audience but also rank
              prominently in search results. Our SEO expertise ensures that your
              content is a powerful tool for attracting organic traffic, making
              your website a go-to resource in your industry.
            </li>
            <li>
              <strong>Tailored Packages:</strong> From the frequency of content
              production to the topics covered, we work closely with you to
              create a content plan that aligns seamlessly with your brand,
              industry, and target audience. Our commitment is to deliver
              content that not only meets but exceeds your expectations,
              contributing to a consistent and engaging online presence.
            </li>
            <li>
              <strong>Proven Results:</strong> Through case studies,
              testimonials, and real-world examples, our Previous Works page
              showcases the tangible results achieved by leveraging our Article
              Content services. We invite you to see for yourself how Slick can
              be the catalyst for transforming your online presence and
              achieving measurable success in your industry.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
};

export default ArticleContent;
