export default function BotaoSubmit({ children }) {
  return (
    <button
      type="submit"
      className="p-2 rounded-xl bg-primary text-on-primary w-full my-2"
    >
      {children}
    </button>
  );
}
