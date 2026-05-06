function InputEmail({ erro, updateValor }) {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input
        className="block my-2 border border-black rounded-xl p-2"
        type="text"
        id="email"
        name="email"
        onChange={updateValor}
      />
      <p className="text-red-600 text-center text-xs mb-2">{erro}</p>
    </>
  );
}

export default InputEmail;
