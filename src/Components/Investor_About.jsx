import video from "../assets/Investor/bizdateup_motion.mp4"
const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
           About BizDateUp

          </h2>
          <p className="text-gray-700 text-lg mb-6">
BizDateUp is a startup ecosystem enabler, bridging the gap between early-stage startups and growth opportunities. We empower founders through strategic support, investor access, and market exposure.We aim to create spaces where startups and investors connect meaningfully. 
          </p>
          <p className="text-gray-700 text-lg mb-6">
Our events are designed to spark real conversations, unlock capital, and build long-term relationships because great ideas need more than pitch decks; they need the right people in the room.           </p>
          {/* <p className="text-gray-700 text-lg">
            To learn more visit <a href="https://www.moengage.com" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer">www.moengage.com</a>.
          </p> */}
        </div>

        {/* Right Image */}
        {/* <div className="flex justify-center md:justify-end"> */}
          <video src={video} muted loop autoPlay ></video>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
