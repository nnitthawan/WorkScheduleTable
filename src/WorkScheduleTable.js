import React, { useState } from "react";
import './work.css';

const initialWorkData = [
  { work: true, date: "4/8/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/9/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/10/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/11/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/12/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/13/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/14/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/15/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/16/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: true, date: "4/17/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/18/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/19/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/20/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: true, date: "4/21/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/22/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: true, date: "4/23/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/24/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/25/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/26/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/27/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "4/28/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/29/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "4/30/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/1/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/2/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/3/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/4/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/5/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/6/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/7/2025", start: "09:00 น.", end: "16:00 น.", pay: "", note: "พี่ไปดูงาน" },
  { work: false, date: "5/8/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/9/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/10/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/11/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/12/2025", start: "", end: "", pay: "", note: "" },
  { work: false, date: "5/13/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/14/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/15/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/16/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/17/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/18/2025", start: "", end: "", pay: "", note: "วันหยุด" },
  { work: false, date: "5/19/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/20/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/21/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" },
  { work: false, date: "5/22/2025", start: "09:00 น.", end: "16:00 น.", pay: 300, note: "" }
];

export default function WorkScheduleTable() {
  const [workDataState, setWorkDataState] = useState(initialWorkData);

  const toggleWork = (index) => {
    const updated = [...workDataState];
    updated[index].work = !updated[index].work;
    setWorkDataState(updated);
  };

  const toggleHoliday = (index) => {
    const updated = [...workDataState];
    if (updated[index].note === "วันหยุด") {
      updated[index] = {
        ...updated[index],
        work: true,
        note: "",
        start: "09:00 น.",
        end: "16:00 น.",
        pay: 300,
      };
    } else {
      updated[index] = {
        ...updated[index],
        work: false,
        note: "วันหยุด",
        start: "",
        end: "",
        pay: "",
      };
    }
    setWorkDataState(updated);
  };

  const totalWorkDays = workDataState.filter(d => d.work && d.start).length;
  const totalPay = workDataState.reduce(
    (sum, d) => sum + (d.work && typeof d.pay === "number" ? d.pay : 0),
    0
  );
  const totalHolidays = workDataState.filter(d => d.note === "วันหยุด").length;
  const remainingWorkDays = workDataState.filter(d => !d.work && d.start).length;
  const totalSalary = totalPay + remainingWorkDays * 300;

  return (
    <div className="container p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📅 ตารางเช็คการทำงาน</h1>

      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-2 py-1">มาทำงาน</th>
            <th className="border px-2 py-1">วันที่</th>
            <th className="border px-2 py-1">เข้างาน</th>
            <th className="border px-2 py-1">เลิกงาน</th>
            <th className="border px-2 py-1 ">ค่าตอบแทน</th>
            <th className="border px-2 py-1">สถานะ</th>
            <th className="border px-2 py-1">จัดการวันหยุด</th>
          </tr>
        </thead>
        <tbody>
          {workDataState.map((entry, idx) => (
            <tr
              key={idx}
              className={`text-center hover:bg-gray-50 ${entry.note === "วันหยุด"
                ? "holiday bg-pink-300 text-pink-800 shadow-lg rounded-lg"
                : entry.work
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
                }`}
            >

              <td className="border px-2 py-1">
                <input
                  type="checkbox"
                  checked={entry.work}
                  disabled={entry.note === "วันหยุด"}
                  onChange={() => toggleWork(idx)}
                />
              </td>
              <td className="border px-2 py-1">{entry.date}</td>
              <td className="border px-2 py-1">{entry.start}</td>
              <td className="border px-2 py-1">{entry.end}</td>
              <td className="border px-2 py-1 pay-column">{entry.pay}</td>
              <td className="border px-2 py-1 font-medium">
                {entry.note === "วันหยุด" ? "🎉 วันหยุด" : entry.work ? "✅ ทำงาน" : "❌ ไม่ได้ทำ"}
              </td>
              <td className="border px-2 py-1">
                <button
                  onClick={() => toggleHoliday(idx)}
                  className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 
                ${entry.note === "วันหยุด"
                      ? "holiday"  // คลาสสำหรับปุ่มวันหยุด
                      : "workday"}  // คลาสสำหรับปุ่มวันทำงาน
    `}
                >
                  {entry.note === "วันหยุด" ? "ยกเลิกวันหยุด" : "ตั้งเป็นวันหยุด"}
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary-box mt-6 p-4 bg-pink-50 border border-pink-200 rounded-xl">
        <h2 className="font-semibold text-lg mb-2">📊 สรุปผล</h2>
        <p>✅ จำนวนวันที่มาทำงาน: <strong>{totalWorkDays}</strong> วัน</p>
        <p>💰 รวมค่าตอบแทนทั้งหมด: <strong>{totalPay.toLocaleString()} บาท</strong></p>
        <p>📅 วันหยุดทั้งหมด: <strong>{totalHolidays}</strong> วัน</p>
        <p>📅 วันที่เหลือที่ต้องทำงาน: <strong>{remainingWorkDays}</strong> วัน</p>
        <p>💵 รวมค่าตอบแทนรวม (รวมวันที่ยังไม่ได้ติ๊ก): <strong>{totalSalary.toLocaleString()} บาท</strong></p>
      </div>
    </div>
  );
}
