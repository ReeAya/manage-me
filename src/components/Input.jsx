import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-zinc-300 bg-zinc-100 text-zinc-600 focus:outline-none focus:border-zinc-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold text-zinc-600">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} {...props} />
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </p>
  );
});

export default Input;
