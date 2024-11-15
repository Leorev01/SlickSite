import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Dynamically load the Trustpilot script when the component mounts
    const script = document.createElement('script');
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = () => {
      console.log("Trustpilot Widget loaded");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []); // Empty dependency array to run only once

  return (
    <div>

      {/* Trustpilot Widget */}
      <div className="trustpilot-widget mt-8" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6734fb019ecd53e30da492bb" data-style-height="52px" data-style-width="100%">
        <a href="https://uk.trustpilot.com/review/slick-site.com" target="_blank" rel="noopener">
          Trustpilot
        </a>
      </div>

      {/* End Trustpilot Widget */}
    </div>
  );
}
