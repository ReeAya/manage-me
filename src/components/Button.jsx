export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-zinc-200 text-zinc-800 hover:bg-zinc-600 hover:text-zinc-100"
      {...props}
    >
      {children}
    </button>
  );
}
