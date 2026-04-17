import logo from "../assets/learn.svg";
import FormLogin from "../components/FormLogin";

export default function Login() {

  return (
    <main className="flex flex-col items-center border border-outline-variant rounded-xl h-min p-10 mx-auto my-auto">
      <img src={logo} alt="Icone da aplicação" className="w-20 h-20" />
      <h1 className="text-4xl font-bold">Login online em tempo real</h1>
      <FormLogin />
    </main>
  );
}
