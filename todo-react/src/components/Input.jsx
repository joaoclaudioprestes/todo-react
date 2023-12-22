import { GoPlusCircle } from "react-icons/go";

const Input = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
            Criar
            <GoPlusCircle />
        </button>
      </form>
    </div>
  );
};

export default Input;
