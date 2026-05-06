export default function BotaoSubmit({ children }) {
  return (
    <button type="submit" className="bg-gray-300 my-2 p-2 rounded-xl w-full">
      {children}
    </button>
  );
}
