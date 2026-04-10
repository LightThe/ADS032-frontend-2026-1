function Card(props) {
  return (
    <article className="bg-surface-container-highest rounded-xl my-2 p-4 hover:shadow-sm">
      <h3 className='text-xl font-bold'>{props.title}</h3>
      <ul>
        {props.items.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
