import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebaseContext";

const Home = () => {
  const { isLoggedIn } = useFirebase();
  const navigate = useNavigate();

  const [todoInput, setTododInput] = useState("");
  const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);

  const handleTodoInput = (e) => {
    e.preventDefault();
    if (!todoInput) return;

    setTodos([
      ...todos,
      {
        status: false,
        work: todoInput,
        id: Date.now(),
      },
    ]);
    setTododInput("");
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEdit = (id) => {
    todos.forEach((todo, i) => {
      if (todo.id === id) {
        // console.log(todos[i].work);
        setTododInput(todos[i].work);
      }
    });
  };

  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center my-10 max-w-2xl w-full mx-auto px-5">
        <form className="max-w-2xl w-full mx-auto" onSubmit={handleTodoInput}>
          <div className="h-16 flex">
            <input
              className="h-full border border-blue-300 outline-none w-full text-lg md:text-xl lg:text-2xl px-2 md:px-3 lg:px-4"
              type="text"
              placeholder="Enter todos..."
              value={todoInput}
              onChange={(e) => setTododInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-900 h-full text-slate-100 text-3xl px-4"
            >
              <i className="bx bx-plus "></i>
            </button>
          </div>
        </form>

        <ul className="border">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-between px-2 py-2 hover:bg-blue-100 border"
              >
                <div className="flex gap-2">
                  <input type="checkbox" id={todo.id} checked={todo.status} />
                  <label htmlFor={todo.id} className="text-base md:text-lg">
                    {todo.work}
                  </label>
                </div>
                <div className="flex gap-5">
                  <button onClick={() => handleEdit(todo.id)}>
                    <i className="bx bxs-edit text-yellow-500 text-lg"></i>
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>
                    <i className="bx bx-trash text-red-600 text-lg"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
