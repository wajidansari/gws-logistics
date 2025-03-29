import { cn } from "@/lib/utils"; // Adjust the import path based on your project structure

export const Badge = ({ children,className ,bg}) => {
  return (
    <div
      className={cn(
        "flex h-6 w-fit items-center bg-black/30 ", className

      )}
    >
      <div className={cn("bg-primary h-full w-1",bg)} />
      <div className="p-2">
        <p className="text-sm text-primary-foreground">{children}</p>
      </div>
    </div>
  );
};