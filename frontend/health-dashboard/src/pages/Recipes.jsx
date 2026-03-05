// src/components/HospitalSearch.jsx  (or wherever you keep it)
import { useState, useEffect } from "react";
import { Search, MapPin, Hospital, Activity, Loader2 } from "lucide-react";

const HospitalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Replace with YOUR real Google Places API key
  const GOOGLE_API_KEY = "AIzaSyYourActualKeyHereReplaceThis";

  // Try to get user's current location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          console.warn("Location permission denied", err);
        }
      );
    }
  }, []);

  const searchHospitals = async () => {
    if (!query.trim() && !userLocation) {
      setError("Please enter a location or allow location access.");
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      let url;

      if (query.trim()) {
        // Search by text query (city, area, hospital name, etc.)
        url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          query + " hospital"
        )}&key=${GOOGLE_API_KEY}`;
      } else if (userLocation) {
        // Nearby search using user's location
        url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=15000&type=hospital&key=${GOOGLE_API_KEY}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.status !== "OK") {
        throw new Error(data.error_message || data.status);
      }

      setResults(data.results || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch hospitals. Check API key or try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUseMyLocation = () => {
    if (userLocation) {
      setQuery(""); // clear text search
      searchHospitals();
    } else {
      setError("Location not available. Please allow location access.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-blue-100 p-4 text-blue-700">
            <Hospital size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Find Nearby Hospitals
            </h1>
            <p className="mt-2 text-slate-600">
              Locate hospitals, clinics & medical centers near you or in any city.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar + Location Button */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="City, area, hospital name or PIN code..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-xl border border-slate-300 px-5 py-3 text-base focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
            onKeyDown={(e) => e.key === "Enter" && searchHospitals()}
          />

          <div className="flex gap-3">
            <button
              onClick={searchHospitals}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 disabled:opacity-60 transition"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />}
              Search
            </button>

            <button
              onClick={handleUseMyLocation}
              disabled={loading || !userLocation}
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-50 disabled:opacity-50 transition"
            >
              <MapPin size={18} />
              Near Me
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
        )}
      </section>

      {/* Stats (static for now – can make dynamic later) */}
      <section className="grid sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg">
              <Activity size={20} />
            </div>
            <p className="text-sm text-slate-600 font-medium">Searches Today</p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">214</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
              <Hospital size={20} />
            </div>
            <p className="text-sm text-slate-600 font-medium">Hospitals Listed</p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">18,500+</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-lg">
              <MapPin size={20} />
            </div>
            <p className="text-sm text-slate-600 font-medium">Cities Covered</p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">640+</h2>
        </div>
      </section>

      {/* Results */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm min-h-[300px]">
        <h2 className="text-xl font-semibold text-slate-900 mb-5">
          Hospitals & Medical Centers
        </h2>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={32} />
            <span className="ml-3 text-slate-600">Finding hospitals...</span>
          </div>
        )}

        {!loading && results.length === 0 && !error && (
          <p className="text-center py-12 text-slate-500">
            Search for a city, area or click "Near Me" to find hospitals.
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((place) => (
            <div
              key={place.place_id}
              className="rounded-xl border border-slate-100 p-5 hover:border-blue-200 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-900 text-lg">
                {place.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {place.vicinity || place.formatted_address || "Location not available"}
              </p>

              {place.rating && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-amber-500 font-medium">★ {place.rating}</span>
                  <span className="text-xs text-slate-500">
                    ({place.user_ratings_total || 0} ratings)
                  </span>
                </div>
              )}

              {place.opening_hours && (
                <p className="mt-2 text-sm">
                  {place.opening_hours.open_now ? (
                    <span className="text-emerald-600 font-medium">Open now</span>
                  ) : (
                    <span className="text-rose-600">Closed</span>
                  )}
                </p>
              )}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  place.name
                )}&query_place_id=${place.place_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                View on Google Maps →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HospitalSearch;