List of components

- Form

  - puede recibir o no un ID
  - si no recibe un ID renderiza un formulario con el campo name vacio y un boton con el texto crear
  - si recibe un ID renderiza un formulario con el campo name con el valor del todo con ese ID y un boton con el texto editar

- ToDo list

  - Recibe un array de todo y los reneriza

- ToDo
  - recibe un objeto
  - renderiza el nombre del objeto
  - segun el estado recibido renderiza un boton con el texto done / undone
  - renderiza un boton con el texto 'delete'

Capa de datos:

- Lista ToDo

  - id: number
  - name: string
  - done: boolean

- Estado del formulario
