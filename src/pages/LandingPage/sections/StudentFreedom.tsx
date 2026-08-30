import React from 'react';
import { useNavigate } from "react-router-dom";

export const StudentFreedom: React.FC = () =>
{
  const navigate = useNavigate();
   const handleExplorePayAsYouGo = () => {
    navigate('/for-students#payg-loop');

  setTimeout(() => {
    document.getElementById('payg-loop')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 100);
  };
  const handleViewStudentPlans = () => {
  navigate('/for-students#monthly-loop');
};
const handleSeeTomorrowMenu = () =>{
  navigate('/explore-messes#campus-mess-explore-section');
}
  return (
    <section className="py-5 bg-white" id="student-freedom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-saffron text-[#FF6B00] font-extrabold text-xs tracking-widest uppercase bg-amber-100/80 px-4 py-1.5 rounded-full inline-block">
            STUDENT FREEDOM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 font-heading font-['Outfit',sans-serif]">
            Your Mess. Your Rules.
          </h2>
          <p className="text-gray-600 mt-3 mx-auto text-base py-4">
            Choose the plan that fits your dynamic college lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pay As You Go */}
          <div className="bg-brand-accentCream bg-[#FFF8EE] border-2 border-orange-200 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-saffron bg-[#FF6B00] text-white flex items-center justify-center text-2xl font-bold mb-6">
                <i className="fa-solid fa-bolt" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading font-['Outfit',sans-serif] py-4">
                PAY AS YOU GO
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed py-2">
                No forced monthly commitment. Browse local messes, check today's special menu, and buy single meal passes whenever you want.
              </p>
              <ul className="mt-6 space-y-3 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Zero upfront subscription cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Instant QR meal pass delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Try different messes every day</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={handleExplorePayAsYouGo}
              className="mt-8 w-full py-3.5 rounded-xl bg-gray-900 hover:bg-brand-saffron hover:bg-[#FF6B00] text-white font-extrabold text-xs transition"
            >
              Explore Pay-As-You-Go
            </button>
          </div>

          {/* Flexible Subscription */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden border border-gray-700">
            <div className="absolute top-4 right-4 bg-brand-tomato bg-[#DC2626] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-tomato bg-[#DC2626] text-white flex items-center justify-center text-2xl font-bold mb-6">
                <i className="fa-solid fa-crown" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold font-heading font-['Outfit',sans-serif] text-white py-4">
                FLEXIBLE SUBSCRIPTION
              </h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed py-2">
                Enjoy discounted monthly homestyle dining with full flexibility to skip days or pause your plan when traveling home.
              </p>
              <ul className="mt-6 space-y-3 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-amber-400" aria-hidden="true" />
                  <span>Up to 25% bulk savings per meal</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-amber-400" aria-hidden="true" />
                  <span>Attendance notification engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-amber-400" aria-hidden="true" />
                  <span>Roll-over unused meal credits</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={handleViewStudentPlans}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-tomato to-brand-saffron from-[#DC2626] to-[#FF6B00] text-white font-extrabold text-xs hover:opacity-90 transition"
            >
              View Student Plans
            </button>
          </div>

          {/* Book Tomorrow's Meal Today */}
          <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                <i className="fa-solid fa-calendar-day" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading font-['Outfit',sans-serif] py-4">
                BOOK TOMORROW TODAY
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed py-2">
                Mess owners publish tomorrow's special menu by 8:00 PM. Preview exact dishes, confirm attendance, and ensure your warm meal is reserved.
              </p>
              <ul className="mt-6 space-y-3 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Preview full menu &amp; nutrition</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Helps mess owners avoid waste</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true" />
                  <span>Priority pickup at mess counter</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={handleSeeTomorrowMenu}
              className="mt-8 w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs transition"
            >
              See Tomorrow's Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFreedom;
