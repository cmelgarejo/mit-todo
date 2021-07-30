function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Turn on computer',
      isCompleted: false,
    },
    {
      text: 'Check email',
      isCompleted: false,
    },
    {
      text: 'Make coffee',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo todo={todo} index={i} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
