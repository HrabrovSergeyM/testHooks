import React, { FC, useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypesSelector } from "../hooks/useTypesSelector";

const TodoList: FC = () => {
  const { error, limit, loading, page, todos } = useTypesSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useAction();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            onClick={() => {
              setTodoPage(p);
            }}
            style={{
              border: p === page ? "2px solid maroon" : "1px solid grey",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
