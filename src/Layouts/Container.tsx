import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  // Add any container-specific logic or styling here
  return <div className="container mx-auto max-w-6xl pt-10">{children}</div>;
};

export default Container;
