export default function Card({title, items}) {
  return (

    <article className="rounded-xl my-2 hover:shadow-sm border border-gray-300">
      <h3 className='bg-gray-300 text-xl font-bold p-2 rounded-t-xl'>{title}</h3>
      <ul className="p-4">
        {items.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
