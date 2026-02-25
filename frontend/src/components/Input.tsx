import type { ComponentType, InputHTMLAttributes } from "react";

interface IntputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<{ className?: string }>;
}

const Input = ({ icon: Icon, ...props }: IntputProps) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-rose-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-slate-800 bg-opacity-50 rounded-lg border border-slate-700 focus:border-rose-500 focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-400 transition duration-200"
      />
    </div>
  );
};
export default Input;
