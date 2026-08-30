import React from 'react';
import MockupContainer from '../../../../components/ui/HowItWorks/MockUpContainer';

export const OwnerMenuSetup: React.FC = () => {
  return (
    <section className="bg-white border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase bg-emerald-100 px-4 py-1.5 rounded-full inline-block">
            STEP 2 • MENU MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 font-heading">
            Publish Your Menus.
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Add, edit, and update meal entries to keep students informed on upcoming dishes and meal availability.
          </p>
        </div>

        {/* Dual Explanation for Subscriber vs PAYG */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
              <i className="fa-solid fa-users" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-emerald-950">
                For Monthly Subscribers
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
                Publishing tomorrow's exact thali items prompts subscribers to confirm their attendance before 8:00 PM, giving you clean headcount numbers.
              </p>
            </div>
          </div>

          <div className="bg-orange-50/70 border border-orange-200 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-saffron text-white flex items-center justify-center font-bold text-base flex-shrink-0">
              <i className="fa-solid fa-bolt" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-gray-900">
                For Pay-As-You-Go Diners
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">
                List attractive daily specials with pricing to draw in ad-hoc students from across campus who want a quick, delicious single meal.
              </p>
            </div>
          </div>
        </div>

        {/* Menu Setup Mockup */}
        <MockupContainer type="desktop" title="fleximeal.in/partner/menu-manager" badge="Menu Hub">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-base text-gray-900 font-heading">
                  Tomorrow's Live Menu Dishes
                </h3>
                <p className="text-xs text-gray-500">
                  Published to campus students • Cutoff time: 8:00 PM
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                  <span>Add Tomorrow Dish</span>
                </button>
              </div>
            </div>

            {/* Menu Items Table Mockup */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Item 1 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop"
                      alt="Paneer Butter Masala Thali"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase">
                        Lunch Special
                      </span>
                      <span className="text-xs font-extrabold text-gray-900">₹89</span>
                    </div>
                    <h4 className="font-bold text-xs text-gray-900 mt-1">
                      Paneer Butter Masala Thali
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      3 Chapatis, Dal Tadka, Jeera Rice, Salad
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Active
                </span>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=300&auto=format&fit=crop"
                      alt="Homestyle Dal Baati"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
                        Dinner Special
                      </span>
                      <span className="text-xs font-extrabold text-gray-900">₹75</span>
                    </div>
                    <h4 className="font-bold text-xs text-gray-900 mt-1">
                      Homestyle Dal Baati Churma
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      2 Baati, Ghee Tadka Dal, Garlic Chutney
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Active
                </span>
              </div>
            </div>
          </div>
        </MockupContainer>
      </div>
    </section>
  );
};

export default OwnerMenuSetup;
