import React from "react";

const ScheduleTable = () => {
  const schedule = [
    { time: "10:30 AM – 10:45 AM", activity: "Opening Ceremony - Zone 1" },
    { time: "10:45 AM – 11:00 AM", activity: "Keynote Speech - Zone 1" },
    { time: "11:00 AM – 11:15 AM", activity: "BizDateUp Introduction - Zone 1" },
    { time: "11:15 AM – 11:45 AM", activity: "Startup Live Pitch (1) - Zone 1" },
    { time: "11:45 AM – 12:45 PM", activity: "Panel Discussion (1) - Zone 1 + Speed Networking - Zone 3" },
    { time: "12:45 PM – 1:45 PM", activity: "Startup Live Pitches (2 & 3) - Zone 1" },
    { time: "1:45 PM – 2:30 PM", activity: "Lunch and Networking" },
    { time: "2:30 PM – 3:00 PM", activity: "Fireside Chat (1) - Zone 1" },
    { time: "3:00 PM – 3:30 PM", activity: "Panel Discussion (2)" },
    { time: "3:30 PM – 4:00 PM", activity: "Fireside Chat (2)" },
    { time: "4:00 PM – 4:30 PM", activity: "Closing Ceremony" },
    { time: "4:30 PM – 6:00 PM", activity: "High Tea + Coffee Rave" },
  ];

  return (
  <div className="container">
      <div className="overflow-x-auto p-4">
        <h1 className="text-center xl:text-[3.125rem] pb-0 font-bold text-[1.5rem] blue-color mb-5">Event Schedule</h1>
      <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 bg-[#211F52] text-white border border-[#fff] border-2 text-left xl:text-[18px] text-[14px]">Time</th>
            <th className="p-3 bg-[#211F52] text-white border border-[#fff] border-2 text-left xl:text-[18px] text-[14px]">Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 cursor-pointer">
              <td className="p-3  xl:text-[18px] text-[14px] font-semibold border-1 border-[#211F52]">{item.time}</td>
              <td className="p-3  xl:text-[18px] text-[14px] font-semibold border-1 border-[#211F52]">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ScheduleTable;
