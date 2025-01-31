import Link from "next/link";

const LandingPageFooter = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">
          Ready to take your business to the next level?
        </p>
        <p className="mt-2 text-gray-300">
          Let’s build a website that attracts leads and grows your business.
        </p>
        <Link
          href="/quote"
          className="mt-6 inline-block px-8 py-4 bg-yellow-500 text-blue-950 font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Get Your Free Quote Today
        </Link>
        <p className="mt-6 text-sm text-gray-400">
          &copy; 2024 SlickSite. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
