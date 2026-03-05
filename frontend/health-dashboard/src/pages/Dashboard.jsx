import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Activity, ShieldCheck, Pill, Apple, Dumbbell, AlertCircle } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import MedicineIco from "../assets/icons/medicine.png";
import usePredictionStore from "../store/usePredictionStore";


const Dashboard = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const { result, loading, setResult, setLoading } = usePredictionStore();
  const symptomsValue = watch("symptoms", "");
  const isInputEmpty = !symptomsValue || symptomsValue.trim().length === 0;
  const symptomRegister = register("symptoms");

  const [symptomsList, setSymptomsList] = useState([]);
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);


  
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/symptoms")
      .then((res) => res.json())
      .then((data) => setSymptomsList(data))
      .catch((err) => console.error(err));
  }, []);
// ============================================


  const [error, setError] = useState(null);

const onSubmit = async (data) => {
  try {
    setLoading(true);
    setError(null);   // reset previous error
    setResult(null);  // clear previous result

    const response = await fetch("http://127.0.0.1:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: data.symptoms,
      }),
    });

    if (!response.ok) {
      throw new Error("Prediction failed. Try different symptoms.");
    }

    const resData = await response.json();

    if (!resData || !resData.predicted_disease) {
      throw new Error("No prediction available for these symptoms.");
    }

    setResult(resData);
  } catch (err) {
    console.error(err);
    setError(err.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};



  const handleSymptomChange = (e) => {
    const value = e.target.value;

    if (!value.trim()) {
      setFilteredSymptoms([]);
      return;
    }

    const lastWord = value.split(",").pop().trim().toLowerCase();

    const matches = symptomsList.filter((symptom) =>
      symptom.toLowerCase().includes(lastWord)
    );

    setFilteredSymptoms(matches.slice(0, 6));
  };

  const selectSymptom = (symptom) => {
    const inputValue = watch("symptoms") || "";

    // Split current symptoms
    const parts = inputValue.split(",");

    // Replace last partially typed symptom
    parts[parts.length - 1] = symptom;

    const newValue = parts.map(p => p.trim()).filter(Boolean).join(", ");

    setValue("symptoms", newValue + ", ");
    setFilteredSymptoms([]);
  };

  const ResultCard = ({ title, icon, children, accent = "indigo" }) => {
    const accentClasses = {
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
      rose: "bg-rose-50 text-rose-700 border-rose-100",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
      amber: "bg-amber-50 text-amber-700 border-amber-100",
      sky: "bg-sky-50 text-sky-700 border-sky-100",
    };

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="mb-4 flex items-center gap-3">
          <div className={`rounded-xl border px-3 py-2 ${accentClasses[accent]}`}>
            {icon}
          </div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        </div>
        <div className="text-sm leading-relaxed text-slate-600">
          {children || <p className="text-slate-400">No data available.</p>}
        </div>
      </div>
    );
  };

  const ResultSkeleton = () => (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-slate-200" />
        <div className="h-4 w-32 rounded bg-slate-200" />
      </div>
      <div className="space-y-3">
        <div className="h-3 w-full rounded bg-slate-200" />
        <div className="h-3 w-5/6 rounded bg-slate-200" />
        <div className="h-3 w-3/4 rounded bg-slate-200" />
      </div>
    </div>
  );

  return (
    <div className=" mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      {/* <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8"> */}
      <section className="rounded-2xl border border-slate-200 bg-white px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Left — main heading + description */}
          <div className="space-y-5 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Clinical Support
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="text-xs font-medium text-slate-500">
                Dashboard
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Medicine Recommendation System
            </h1>

            <p className="text-base leading-relaxed text-slate-600">
              Input symptoms to receive machine-learning-assisted disease predictions
              together with tailored precautions, medications, dietary advice, and
              exercise recommendations.
            </p>
          </div>
          {/* Right — 4 status blocks in 2×2 grid */}
          <div className="grid grid-cols-2 gap-4 self-start lg:grid-cols-2 lg:gap-5 lg:min-w-[320px] xl:min-w-[360px]">
            {/* Card 1 - Available Symptoms */}
            <div className="rounded-xl border border-slate-100 bg-slate-100/50 px-5 py-5 flex flex-col justify-between min-h-[110px]">
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                Available Symptoms
              </div>
              <div className="mt-3 text-2xl font-semibold text-slate-900">
                {symptomsList.length}
              </div>
            </div>

            {/* Card 2 - Detected Diseases */}
            <div className="rounded-xl border border-slate-100 bg-slate-100/50 px-5 py-5 flex flex-col justify-between min-h-[110px]">
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                 Diseases
              </div>
              <div className="mt-3 text-2xl font-semibold text-slate-900">
                42 {/* ← replace with real count when available */}
              </div>
            </div>
            {/* Status */}
            <div className="rounded-xl border border-slate-100 bg-slate-100/50 px-5 py-4">
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                Status
              </div>
              <div className={`
          mt-2.5 text-lg font-medium
          ${loading ? 'text-amber-700' : 'text-emerald-700'}
        `}>
                {loading ? 'Analyzing…' : 'Ready'}
              </div>
            </div>

            {/* Card 4 - Last Recommendation (capsule icon) */}
            <div className="rounded-xl    px-5 py-5 flex flex-col justify-between min-h-[110px]">
              <img 
              className="w-24"
              src={MedicineIco}/ >
            </div>
          </div>

          
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Enter Symptoms
            </label>
            <p className="text-xs text-slate-500">
              Add multiple symptoms separated by commas.
            </p>
          </div>

          <div className="relative">
            <input
              {...symptomRegister}
              onChange={(e) => {
                symptomRegister.onChange(e);   // update react-hook-form
                handleSymptomChange(e);        // run your suggestion logic
              }}
              placeholder="itching, skin_rash, headache"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />

            {filteredSymptoms.length > 0 && (
              <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {filteredSymptoms.map((symptom, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectSymptom(symptom)}
                    className="w-full border-b border-slate-100 px-4 py-2 text-left text-sm text-slate-700 transition hover:bg-indigo-50 hover:text-sky-700 last:border-b-0"
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || isInputEmpty}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-sky-300"
          >
            {loading && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-100 border-t-white" />
            )}
            {loading ? "Predicting..." : "Predict Recommendation"}
          </button>

          
        </form>
      </section>

      {loading && (
        <section className="space-y-4">
          <LoadingSpinner />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ResultSkeleton key={index} />
            ))}
          </div>
        </section>
      )}

      
      {error && !loading && (
  <section>
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
      <AlertCircle className="h-5 w-5 text-red-600" />
      <p>{error}</p>
    </div>
  </section>
)}


      {result && !loading && (
        <section className="space-y-8">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Recommendation Summary
            </h2>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Prediction Complete
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Disease Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl border px-3 py-2 bg-rose-50 text-rose-700 border-rose-100">
                  <Activity size={18} />
                </div>
                <h2 className="text-base font-semibold text-slate-900">
                  Predicted Disease
                </h2>
              </div>

              <p className="text-xl font-semibold text-rose-600 mb-3">
                {result.predicted_disease}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {result.description}
              </p>
            </div>


            {/* Medication Section */}
            <div className="space-y-4">
              {/* <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Medications
              </h3> */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl border px-3 py-2 bg-sky-50 text-sky-700 border-sky-100">
                    <Pill size={18} />
                  </div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Medications
                  </h2>
                </div>

                <ul className="space-y-2">
                  {result.medications?.map((m, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>


          
          {/* Lifestyle Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Lifestyle & Prevention
            </h3>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <ResultCard
                title="Precautions"
                icon={<ShieldCheck size={18} />}
                accent="emerald"
              >
                <ul className="space-y-2">
                  {result.precautions?.map((p, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </ResultCard>

              <ResultCard title="Diets" icon={<Apple size={18} />} accent="amber">
                <ul className="space-y-2">
                  {result.diets?.map((d, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </ResultCard>

              <ResultCard
                title="Workouts"
                icon={<Dumbbell size={18} />}
                accent="indigo"
              >
                <ul className="space-y-2">
                  {result.workouts?.map((w, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </ResultCard>
            </div>
          </div>

        </section>
      )}
    </div>
  );
};

export default Dashboard;
