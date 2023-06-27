import { ReactNode } from "react";
interface PhaseBoxProps {
  children: ReactNode;
}
const PhaseBox = ({ children }: PhaseBoxProps) => {
  return (
    <div className="p-[2rem] bg-dark rounded-2xl min-w-[250px]">{children}</div>
  );
};

export default PhaseBox;
