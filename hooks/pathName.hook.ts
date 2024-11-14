import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

//custom hook to get current pah on changes in routes
export const usePathnameChange = () => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      console.log("Pathname changed to:", pathname);
      previousPathname.current = pathname; // Updating the previous pathname
    }
  }, [pathname]);

  return pathname;
};
