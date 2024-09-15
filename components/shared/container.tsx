import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-[1440px] mx-auto flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
