import { Apple, Salad, Flame, HeartPulse, Leaf, Coffee } from "lucide-react";

const diets = [
  {
    icon: <Leaf size={20} />,
    title: "Plant Based",
    desc: "Focus on vegetables, legumes, fruits and grains.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <HeartPulse size={20} />,
    title: "Heart Healthy",
    desc: "Supports cardiovascular health and reduces cholesterol.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: <Flame size={20} />,
    title: "High Energy",
    desc: "Fuel your body for productivity and workouts.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: <Salad size={20} />,
    title: "Light Digestive",
    desc: "Gentle foods that are easy on the stomach.",
    color: "bg-sky-100 text-sky-700",
  },
];

const meals = [
  {
    title: "Morning Energy Bowl",
    items: ["Oats", "Banana", "Almonds", "Honey"],
  },
  {
    title: "Balanced Lunch",
    items: ["Brown Rice", "Grilled Chicken", "Broccoli"],
  },
  {
    title: "Light Dinner",
    items: ["Vegetable Soup", "Whole Grain Toast", "Salad"],
  },
];

const Diets = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-8">

      {/* HERO */}
      {/* <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-8 shadow-sm"> */}
      {/* <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-50 via-white to-white  p-8 shadow-sm"> */}
      <section className="rounded-3xl border border-slate-200 bg-white  p-8 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
            <Apple size={32} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Diet & Nutrition
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Nutrition plays a vital role in recovery, immunity and daily
              performance. Explore balanced diets and healthy food ideas
              designed to support your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* NUTRITION STATS */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Daily Hydration</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">3 +  Litres</h2>
          <p className="text-xs text-slate-500 mt-1">
            Recommended daily water intake
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Fruit Intake</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">3 Servings</h2>
          <p className="text-xs text-slate-500 mt-1">
            Fruits per day recommended
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Vegetables</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">5 Servings</h2>
          <p className="text-xs text-slate-500 mt-1">
            Ideal daily vegetable intake
          </p>
        </div>
      </section>

      {/* DIET TYPES */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Diet Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {diets.map((diet, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`inline-flex rounded-xl p-3 ${diet.color}`}
              >
                {diet.icon}
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {diet.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {diet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEAL IDEAS */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Daily Meal Ideas
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {meals.map((meal, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Coffee size={18} className="text-indigo-600" />
                <h3 className="font-semibold text-slate-900">
                  {meal.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {meal.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HEALTH TIPS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Nutrition Tips
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <p className="text-sm text-slate-600">
            • Stay hydrated and drink water regularly throughout the day.
          </p>

          <p className="text-sm text-slate-600">
            • Include colorful vegetables and fruits in your meals.
          </p>

          <p className="text-sm text-slate-600">
            • Limit processed foods and sugary beverages.
          </p>

          <p className="text-sm text-slate-600">
            • Maintain balanced portions of proteins, carbs and healthy fats.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Diets;