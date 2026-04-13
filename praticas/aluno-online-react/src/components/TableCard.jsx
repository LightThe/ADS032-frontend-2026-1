export default function TableCard() {
  return (
    <article className="my-4 border border-gray-200 rounded-xl">
      <h3 className="text-lg bg-gray-200 rounded-t-xl p-1 font-bold">2026.1</h3>
      <table className="p-2 w-full">
        <thead className="bg-gray-200 p-1 font-bold">
          <tr>
            <th>Disciplina</th>
            <th>A1</th>
            <th>A2</th>
            <th>A3</th>
            <th>Menção</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-100">BI e Data Warehousing</td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100">SR</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-100">Construção de Frontend</td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100">SR</td>
          </tr>
          <tr>
            <td className="border border-gray-100">Manutenção de Software e Devops</td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100"></td>
            <td className="border border-gray-100">SR</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
