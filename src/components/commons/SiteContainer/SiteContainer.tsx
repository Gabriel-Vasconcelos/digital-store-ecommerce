import { ReactNode } from "react";

const SiteContainer = ({ children }: { children: ReactNode }) => {
  return <div className="px-5">{children}</div>;
};

export default SiteContainer;
