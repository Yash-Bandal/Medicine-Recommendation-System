import {
  Dumbbell,
  Activity,
  Globe,
  HeartPulse,
  Flame,
  Timer,
  Zap,
} from "lucide-react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

/* Public health data references
WHO Global Health Observatory
CDC Physical Activity Statistics
WHO Physical Activity Guidelines
*/

const inactivityByRegion = [
  { region: "Americas", value: 39 },
  { region: "Eastern Mediterranean", value: 37 },
  { region: "Europe", value: 32 },
  { region: "Western Pacific", value: 28 },
  { region: "Africa", value: 22 },
  { region: "South-East Asia", value: 17 },
];

const exerciseByAge = [
  { age: "18–24", minutes: 150 },
  { age: "25–34", minutes: 135 },
  { age: "35–44", minutes: 120 },
  { age: "45–54", minutes: 105 },
  { age: "55–64", minutes: 95 },
  { age: "65+", minutes: 80 },
];

const calorieTrend = [
  { week: "Week 1", calories: 1100 },
  { week: "Week 2", calories: 1300 },
  { week: "Week 3", calories: 1500 },
  { week: "Week 4", calories: 1700 },
];

const COLORS = ["#6366f1", "#f8e800", "#22c55e", "#f59e0b", "#ef4444", "#0ea5e9"];

const workouts = [
  {
    title: "Strength Training",
    desc: "Improves muscle strength and bone density.",
  },
  {
    title: "Cardio Training",
    desc: "Improves heart health and endurance.",
  },
  {
    title: "HIIT Workouts",
    desc: "Short bursts of intense exercise to burn calories.",
  },
  {
    title: "Mobility & Flexibility",
    desc: "Enhances joint mobility and reduces injury risk.",
  },
];

const Workouts = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 space-y-10">

      {/* HERO */}
      {/* <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-8 shadow-sm"> */}
      <section className="rounded-3xl border border-slate-200 bg- white to-sky-50 p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-indigo-100 p-4 text-indigo-700">
            <Dumbbell size={32} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Workout & Fitness Analytics
            </h1>

            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Regular physical activity improves cardiovascular health,
              muscle strength, mental wellbeing, and longevity.
              Explore global physical activity patterns and workout insights.
            </p>
          </div>
        </div>
      </section>

      {/* KPI STATS */}
      <section className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Timer className="text-indigo-600 mb-2" />
          <p className="text-sm text-slate-500">Recommended Weekly Activity</p>
          <p className="text-2xl font-bold text-slate-900">150 min</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Flame className="text-orange-500 mb-2" />
          <p className="text-sm text-slate-500">Avg Calories Burned</p>
          <p className="text-2xl font-bold text-slate-900">1500 kcal</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Activity className="text-green-600 mb-2" />
          <p className="text-sm text-slate-500">Active Adults Globally</p>
          <p className="text-2xl font-bold text-slate-900">69%</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <HeartPulse className="text-rose-600 mb-2" />
          <p className="text-sm text-slate-500">Exercise Sessions / Week</p>
          <p className="text-2xl font-bold text-slate-900">3 – 5</p>
        </div>
      </section>

      {/* CHARTS */}
      <section className="grid gap-6 md:grid-cols-2">

        {/* Global inactivity */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
            <Globe size={18} />
            Global Physical Inactivity (% adults)
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inactivityByRegion}
                  dataKey="value"
                  nameKey="region"
                  outerRadius={110}
                  label
                >
                  {inactivityByRegion.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Age exercise */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
            <Activity size={18} />
            Weekly Exercise by Age
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={exerciseByAge}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="#1cb4f5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </section>

      {/* CALORIE TREND */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
          <Flame size={18} />
          Recommended Increase in Calorie Burn
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={calorieTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="calories"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WORKOUT PROGRAMS */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Workout Programs
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workouts.map((workout, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="rounded-xl bg-indigo-50 p-3 w-fit text-indigo-600">
                <Zap size={18} />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {workout.title}
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                {workout.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HEALTH INSIGHTS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Fitness Insights
        </h2>

        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Adults should aim for at least 150 minutes of moderate exercise weekly.</li>
          <li>• Strength training twice a week improves muscle mass and bone health.</li>
          <li>• Regular exercise can reduce cardiovascular disease risk by up to 35%.</li>
          <li>• Physical inactivity is one of the leading global risk factors for mortality.</li>
        </ul>
      </section>

    </div>
  );
};

export default Workouts;