export class TableComp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>

        Table, tr, td {
            background: #fff;
            border-radius: 12px;
            boder: 1 px, solid, black; 
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            max-width: 500px;
            margin: 1rem auto;
        }
        
        
        
        </style>


            <Table>
            <tr>
                <td>Columna 1, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
                <td>Columna 2, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
                <td>Columna 3, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
            </tr>

            <tr>
                <td>Columna 1, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
                <td>Columna 2, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
                <td>Columna 3, <input type="text" name="title" placeholder="letra" required /><input type="text" name="title" placeholder="color" required /><td>
            </tr>
            </table>
        `;
    }
}

export default TableComp;
