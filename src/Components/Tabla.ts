import { TaskActions } from "../flux/Actions";

export class TaskForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form>
                <input type="text" name="title" placeholder="Título" required />
                <input type="text" name="description" placeholder="Descripción" />
                <button type="submit">Agregar Tarea</button>
            </form>
        `;

        this.querySelector('form')?.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const titleInput = form.elements.namedItem('title') as HTMLInputElement;
            const descInput = form.elements.namedItem('description') as HTMLInputElement;

            TaskActions.addTask(titleInput.value, descInput.value);
            form.reset();
        });
    }
}

export default TaskForm
