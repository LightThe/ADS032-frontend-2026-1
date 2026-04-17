function InputSenha({ erro, updateValor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        className="block mt-2 border border-outline rounded-xl p-2"
        type="number"
        id="senha"
        name="senha"
        onChange={updateValor}
      />
      <p className="text-red-600 text-center text-xs mb-2">{erro}</p>
    </>
  );
}

export default InputSenha;
