async function cargarCursos() {
  const res = await fetch('data/cursos.json');
  const cursos = await res.json();
  const contenedor = document.getElementById('cursos');

  cursos.forEach((curso, i) => {
    const btn = document.createElement('button');
    btn.textContent = `${curso.Codigo} - ${curso.Nombre}`;
    btn.className = 'bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 text-sm';
    btn.onclick = () => agregarHorario(curso);
    contenedor.appendChild(btn);
  });
}

function agregarHorario(curso) {
  const div = document.createElement('div');
  div.className = 'p-2 border bg-green-100 rounded shadow text-xs whitespace-pre-wrap';
  div.innerText = `📘 ${curso.Nombre}\n📖 ${curso.Horario_Teoria}\n🔬 ${curso.Horario_Practica}`;
  document.getElementById('horario').appendChild(div);
}

window.onload = cargarCursos;
