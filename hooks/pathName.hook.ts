import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const usePathnameChange = () => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      console.log("Pathname changed to:", pathname);
      previousPathname.current = pathname; // Update the previous pathname
    }
  }, [pathname]);

  return pathname;
};
