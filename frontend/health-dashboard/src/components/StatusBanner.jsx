import { AnimatePresence, motion } from "framer-motion";
import { Activity } from "lucide-react";

const StatusBanner = ({ isSubmitting, formValues }) => {
    return (
        <AnimatePresence>
            {isSubmitting && (
                <motion.div
                    key="status-banner"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 shadow-sm"
                >
                    <div className="flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-blue-600 animate-pulse" />
                        <p className="text-blue-700">
                            Analyzing:{" "}
                            <strong>{formValues.dietary_preferences || "..."}</strong> preference,&nbsp;
                            <strong>{formValues.fitness_goals || "..."}</strong> goal,&nbsp;
                            lifestyle: <strong>{formValues.lifestyle_factors || "..."}</strong>
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StatusBanner;
