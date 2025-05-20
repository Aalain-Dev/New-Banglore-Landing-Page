import React from 'react';

const sessions = [
  {
    time: '9:30 AM',
    title: 'Registration & Pre-event networking',
  },
  {
    time: '10:30 AM',
    title: 'Opening Keynote Session with Neelu Amber, Chief Growth Officer, Airtel',
  },
  {
    time: '11:00 AM',
    title: 'MoEngage NEXT 2025',
  },
  {
    time: '11:40 AM',
    title: 'Customer Growth Story - Policybazaar',
  },
  {
    time: '12:00 PM',
    title: "Customer Spotlight - Powering LIC's Digital Transformation: An EY & MoEngage Partnership for Growth",
  },
  {
    time: '12:20 PM',
    title: 'Panel Discussion - Breaking the Funnel: Rethinking the Customer Lifecycle for a Connected World',
  },
  {
    time: '1:00 PM',
    title: 'Lunch Break',
  },
  {
    time: '2:00 PM',
    title: 'Panel Discussion [Track 1] - Beyond the First Purchase: Building Loyalty in a Transaction-Driven World',
  },
  {
    time: '2:00 PM',
    title: 'Panel Discussion [Track 2] - The Data Advantage in Financial Services: Leveraging Analytics for Personalized Customer Engagement and Loyalty',
  },
  {
    time: '2:40 PM',
    title: "Panel Discussion [Track 1] - Bharat's Big Billions: Tapping into the Tier-2 (and 3) Consumption and Engagement Goldmine",
  },
  {
    time: '2:40 PM',
    title: 'Panel Discussion [Track 2] - Personalization at Scale: Navigating the BFSI Customer Journey',
  },
   {
    time: '2:40 PM',
    title: 'Panel Discussion [Track 2] - Personalization at Scale: Navigating the BFSI Customer Journey',
  },
];

const ConferenceAgenda = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Conference Agenda</h2>
        <p className="text-gray-400">
          The sessions will cover a wide range of topics on engaging customers and driving growth
        </p>
        <p className="text-lg mt-6 font-medium">Wednesday 28th May, 2025</p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto border-t border-gray-700 z-10">
        {sessions.map((session, i) => (
          <div key={i} className="relative flex items-start py-6 ">
            {/* Time */}
            <div className="w-28 text-sm text-gray-300">{session.time}</div>

            {/* Dot */}
            <div className="flex flex-col items-center mx-4 line-part  ">
              <span className="w-2 h-2 bg-white rounded-full mt-1 z-10" />
              {i !== sessions.length - 1 && <div className="flex-1 w-px bg-gray-700 mt-1"></div>}
            </div>

            {/* Details */}
            <div className="flex-1 border-b border-gray-800 pb-5">
              <div className="text-sm text-white font-medium">{session.title}</div>
              {session.speakers && (
                <div className="flex mt-2 gap-2">
                  {session.speakers.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="speaker"
                      className="w-8 h-8 rounded-full object-cover border border-white"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      



    </section>
    
  );
};

export default ConferenceAgenda;