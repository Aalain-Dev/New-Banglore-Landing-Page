
const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            About MoEngage
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            MoEngage is a cross-channel customer engagement platform built for marketers and product owners who value agility over cumbersome complexity. We help consumer brands adapt quickly to evolving customer expectations through real-time insights and personalized cross-channel communications.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We are trusted by 1,350+ global consumer brands, including Unilever, Airtel, PNB, The Coca-Cola Company, IndusInd Bank, Titan, Samsung, McAfee, Flipkart, Domino’s, The Indian Express, Nestle, Thomas Cook, and more.
          </p>
          <p className="text-gray-700 text-lg">
            To learn more visit <a href="https://www.moengage.com" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer">www.moengage.com</a>.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img src="https://www.hashgrowth.org/wp-content/themes/hashgrowth/assets/images/data-circle.png" alt="Decorative dots" className="w-full max-w-sm md:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
