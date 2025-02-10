import { ReactNode } from "react";
import Header from "../components/header";

const LayoutPage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-full">
      <Header />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default LayoutPage;
