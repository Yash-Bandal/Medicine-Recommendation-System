// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import ScrollToTop from "./ScrollToTop"; 



const scrollRef = useRef(null);


const Layout = () => {



    const [initializing, setInitializing] = useState(true);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      // simulate startup tasks (theme / auth / config)
      setTimeout(() => {
        setInitializing(false);
      }, 1200);
    }, []);

    // Loading screen
  // Loading screen
  if (initializing) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-slate-950 transition-colors duration-300">

        <div ref={scrollRef}  className="flex flex-col items-center gap-7">

          <p className="text-xl sm:text-2xl font-light tracking-widest text-slate-600 dark:text-slate-300">
            Preparing your dashboard
          </p>

          <div className="flex items-center gap-3">
            <span className="dot bg-slate-500 dark:bg-slate-400" />
            <span className="dot bg-slate-500 dark:bg-slate-400" />
            <span className="dot bg-slate-500 dark:bg-slate-400" />
          </div>

        </div>

        <style jsx>{`
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          animation: calmPulse 1.5s infinite ease-in-out;
        }

        .dot:nth-child(2) {
          animation-delay: 0.25s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.5s;
        }

        @keyframes calmPulse {
          0%, 80%, 100% {
            transform: scale(0.75);
            opacity: 0.35;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      </div>
    );
  }

  
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8fc] dark:bg-[#0f1316]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">

          <ScrollToTop containerRef={scrollRef} />

        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;
