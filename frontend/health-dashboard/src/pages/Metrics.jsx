import {
  Brain,
  Database,
  Activity,
  BarChart3,
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
} from "recharts";

const modelAccuracy = [
  { model: "SVC", accuracy: 92 },
  { model: "RandomForest", accuracy: 96 },
  { model: "GradientBoosting", accuracy: 83.6 },
  { model: "KNN", accuracy: 92 },
  { model: "MultinomialNB", accuracy: 96 },
];

const datasetComposition = [
  { name: "Diseases", value: 42 },
  { name: "Symptoms", value: 132 },
];

const COLORS = ["#6366f1", "#22c55e"];

const modelDistribution = [
  { name: "SVC", value: 92 },
  { name: "RandomForest", value: 96 },
  { name: "GradientBoosting", value: 83.6 },
  { name: "KNN", value: 92 },
  { name: "MultinomialNB", value: 96 },
];

const Statistics = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 space-y-10">

      {/* HERO */}
      {/* <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-8 shadow-sm"> */}
      <section className="rounded-3xl border border-slate-200 bg-white to-cyan-50 p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-indigo-100 p-4 text-indigo-700">
            <BarChart3 size={32} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Model & Dataset Statistics
            </h1>

            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Performance overview of machine learning models used in the
              Medicine Recommendation System. The system predicts diseases
              based on symptom input using a multiclass classification model.
            </p>
          </div>
        </div>
      </section>

      {/* KPI CARDS */}
      <section className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Database className="text-indigo-600 mb-2" />
          <p className="text-sm text-slate-500">Total Diseases</p>
          <p className="text-2xl font-bold text-slate-900">42</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Activity className="text-emerald-600 mb-2" />
          <p className="text-sm text-slate-500">Total Symptoms</p>
          <p className="text-2xl font-bold text-slate-900">132</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Brain className="text-rose-600 mb-2" />
          <p className="text-sm text-slate-500">Classification Type</p>
          <p className="text-lg font-semibold text-slate-900">
            Multiclass
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <BarChart3 className="text-orange-500 mb-2" />
          <p className="text-sm text-slate-500">Best Model Accuracy</p>
          <p className="text-2xl font-bold text-slate-900">96%</p>
        </div>

      </section>

      {/* CHARTS */}
      <section className="grid gap-6 md:grid-cols-2">

        {/* Model Accuracy Comparison */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Model Accuracy Comparison
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelAccuracy}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="model" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#4282f8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dataset Composition */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Dataset Composition
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={datasetComposition}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {datasetComposition.map((entry, index) => (
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

      </section>

      {/* MODEL PERFORMANCE DISTRIBUTION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Model Performance Distribution
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={modelDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {modelDistribution.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={[
                      "#6366f1",
                      "#22c55e",
                      "#f59e0b",
                      "#ef4444",
                      "#0ea5e9",
                    ][index]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </section>

      {/* MODEL INSIGHTS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Model Insights
        </h2>

        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Random Forest and Multinomial Naive Bayes achieved the highest accuracy of 96%.</li>
          <li>• Support Vector Classifier and KNN both achieved 92% accuracy.</li>
          <li>• Gradient Boosting performed slightly lower at ~83.6%.</li>
          <li>• The dataset contains 42 disease classes and 132 symptoms.</li>
          <li>• The system performs multiclass classification to predict diseases based on symptom combinations.</li>
        </ul>

      </section>

    </div>
  );
};

export default Statistics;