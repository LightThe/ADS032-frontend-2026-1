import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// Firulas
import { ToastContainer, toast } from 'react-toastify';

export default function RequerimentoForm() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const salvar = (data) => {
    console.log(data);
    toast.success("Requerimento salvo com sucesso!");
    reset();
    setTimeout(() => {
      navigate("/requerimentos");
    }, 3000);
  };

  const regras = {
    tipo: {
      required: "Tipo é obrigatório",
    },
    descricao: {
      required: "Descricao é obrigatório",
      minLength: {
        value: 10,
        message: "Preencha com pelo menos 10 caracteres",
      },
    },
  };
  return (
    <>
      <h2 className="text-2xl mt-8">Novo Requerimento</h2>
      <form onSubmit={handleSubmit(salvar)} className="flex flex-col w-lg">
        <label className="text-xl" htmlFor="tipo">
          Tipo de requerimento
        </label>
        <select
          className="border border-black"
          name="tipo"
          id="tipo"
          {...register("tipo", regras.tipo)}
        >
          <option value="">Selecione um tipo...</option>
          <option value="declaracao">Declaração</option>
          <option value="trancamento">Trancamento</option>
          <option value="pagamento">Pagamento</option>
          <option value="matricula">Matrícula</option>
        </select>
        {errors?.tipo && <p className="text-red-600">{errors.tipo.message}</p>}
        <label className="text-xl" htmlFor="descricao">
          Descrição
        </label>
        <textarea
          className="border border-black"
          name="descricao"
          id="descricao"
          {...register("descricao", regras.descricao)}
        ></textarea>
        {errors?.descricao && (
          <p className="text-red-600">{errors.descricao.message}</p>
        )}
        <label className="text-xl" htmlFor="data">
          Data
        </label>
        <input
          className="border border-black"
          type="date"
          id="data"
          {...register("data", regras.data)}
        />
        <div className="flex gap-4 mt-4">
          <button
            className="bg-red-800 text-white py-2 px-4 rounded"
            onClick={() => navigate("/requerimentos")}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-800 text-white py-2 px-4 rounded"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
}
