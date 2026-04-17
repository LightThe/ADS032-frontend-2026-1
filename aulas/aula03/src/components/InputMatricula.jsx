function InputMatricula({erro, updateValor}) {
  return (
    <>
      <label htmlFor="matricula">Matrícula</label>
      <input
        className="block my-2 border border-outline rounded-xl p-2"
        type="number"
        id="matricula"
        name="matricula"
        onChange={updateValor}
      />
      <p className="text-red-600 text-center text-xs mb-2">{erro}</p>
    </>
  );
}

export default InputMatricula;
