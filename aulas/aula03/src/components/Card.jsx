function Card(props) {
  return (
    <article className="border rounded-lg border-blue-100 m-2">
      <h3 className="bg-blue-100 p-1">{props.title}</h3>
      {props.children}
    </article>
  );
}

export default Card;
