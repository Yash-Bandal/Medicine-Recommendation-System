import { create } from "zustand";

const usePredictionStore = create((set) => ({
    result: null,
    loading: false,

    setResult: (data) => set({ result: data }),
    setLoading: (state) => set({ loading: state }),

    clearResult: () => set({ result: null }),
}));

export default usePredictionStore;