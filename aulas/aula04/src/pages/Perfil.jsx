import { useParams } from "react-router";
import { useForm } from "react-hook-form";

export default function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // register() => {name, onChange, onBlur, ...}

  const salvar = (data) => console.log(data); // Callback de handleSubmit

  const regras = {
    nome: {
      required: "Nome é obrigatório",
      minLength: { value: 3, message: "Tenha um nome grande, por favor" },
      maxLength: { value: 100, message: "Tenha um nome NÃO TÃO GRANDE" },
    },
    email: {
      required: "COLOCA O EMAIL, CARA",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Seu e-mail precia ser um e-mail",
      },
    },
    nascimento: {
      validate: {
        minDate: (value) =>
          Date.parse(value) >= new Date("01/01/1900 00:00:00 UTC").getTime() ||
          "Data inválida",
        maxDate: (value) =>
          Date.parse(`${value} 00:00:00 UTC`) < new Date().getTime() || "Data inválidate",
      },
    },
    telefone: {
      min: {
        value: 0,
        message: "Insira um telefone válido",
      },
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Seu telefone precisa ser um telefone",
      },
    },
  };

  return (
    <>
      <h1>Perfil do usuário [{id}]</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" {...register("nome", regras.nome)} />
          {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email", regras.email)} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="nascimento">Data de nascimento</label>
          <input
            id="nascimento"
            type="date"
            {...register("nascimento", regras.nascimento)}
          />
          {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="tel"
            {...register("telefone", regras.telefone)}
          />
          {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
