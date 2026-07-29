export default function TodoInput({ handleSubmit, handleInput, input }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="What needs to be done?"
        />
        <input className="btn" type="submit" value="Add Task" />
      </form>
    </>
  );
}
