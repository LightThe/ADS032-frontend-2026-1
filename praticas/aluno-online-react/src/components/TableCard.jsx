export default function TableCard({ headers, title, items }) {
  return (
    <article className="border border-gray-300 rounded-xl my-2 w-full">
      {title && (
        <h3 className="bg-gray-300 text-xl font-bold rounded-t-xl p-2">{title}</h3>
      )}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-300 text-xl font-bold rounded-t-xl">
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="even:bg-gray-100">
              {Object.values(item).map((val, idx) => (
                <td key={idx} className="p-1 border border-gray-200">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
