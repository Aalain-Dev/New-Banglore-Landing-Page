import React from 'react';

const sessions = [
  {
    time: '10:30 AM – 10:45 AM',
    title: 'Opening Ceremony - Zone 1',
  },
  {
    time: '10:45 AM – 11:00 AM	',
    title: 'Keynote Speech - Zone 1',
  },
  {
    time: '11:00 AM – 11:15 AM',
    title: 'BizDateUp Introduction - Zone 1',
  },
  {
    time: '11:15 AM – 11:45 AM',
    title: 'Startup Live Pitch (1) - Zone 1',
  },
  {
    time: '11:45 AM – 12:45 PM',
    title: "Panel Discussion (1) - Zone 1 + Speed Networking - Zone 3",
  },
  {
    time: '12:45 PM – 1:45 PM',
    title: 'Startup Live Pitches (2 & 3) - Zone 1',
  },
  {
    time: '1:45 PM – 2:30 PM	',
    title: 'Lunch and Networking',
  },
  {
    time: '2:30 PM – 3:00 PM',
    title: 'Fireside Chat (1) - Zone 1',
  },
  {
    time: '3:00 PM – 3:30 PM',
    title: 'Panel Discussion (2)',
  },
  {
    time: '3:30 PM – 4:00 PM	',
    title: "Fireside Chat (2)",
  },
  {
    time: '4:00 PM – 4:30 PM	',
    title: 'Closing Ceremony',
  },
   {
    time: '4:30 PM – 6:00 PM',
    title: 'High Tea + Coffee Rave',
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
        <p className="text-lg mt-6 font-medium">21st June, 2025</p>
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