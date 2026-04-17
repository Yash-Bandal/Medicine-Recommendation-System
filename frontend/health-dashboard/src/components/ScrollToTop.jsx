import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ containerRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({ top: 0 });
    }

    // fallback (harmless)
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
