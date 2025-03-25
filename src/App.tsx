import "./App.css";
import { createSignal } from "solid-js";

function App() {
  const [theme, setTheme] = createSignal("light");

  const changeTheme = (event: Event) => {
    const newTheme = (event.target as HTMLSelectElement).value;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div class="flex flex-col gap-2 p-4">
        <label for="theme-select" class="text-lg font-semibold">
          Selecciona un tema:
        </label>
        <select 
          id="theme-select" 
          class="select select-bordered" 
          onChange={changeTheme} 
          value={theme()}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
		  <option value="retro">Retro</option>
		  <option value="cupcake">Cupcake</option>
		  <option value="aqua">Aqua</option>

        </select>
      </div>
    </>
  );
}

export default App;
