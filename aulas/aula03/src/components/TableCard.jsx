export default function TableCard({headers, items}) {
  console.log(Object.values(items[1]));
  return (
    <table className="bg-surface-container-highest rounded-xl my-2 p-4 hover:shadow-sm w-full">
      <thead className="p-1 font-bold">
        <tr>
          {headers.map((header, index)=>(
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx)=>(
          <tr key={idx}>
            {Object.values(item).map((val, idx)=>(
              <td key={idx}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
