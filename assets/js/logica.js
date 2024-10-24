const ciudades = [
    { nombre: "Santiago", diferencia: 0, bandera: "./assets/img/cl.png" },
    { nombre: "París", diferencia: 5, bandera: "./assets/img/fr.png" },
    { nombre: "Londres", diferencia: 4, bandera: "./assets/img/gb.png" },
    { nombre: "Nueva York", diferencia: -2, bandera: "./assets/img/us.png" },
    { nombre: "San Petersburgo", diferencia: 6, bandera: "./assets/img/ru.png" },
    { nombre: "Beijing", diferencia: 11, bandera: "./assets/img/cn.png" },
    { nombre: "Seúl", diferencia: 12, bandera: "./assets/img/kr.png" }
  ];
  
  const contenedor = document.getElementById('relojes');
  
  // Función para obtener la hora actual de una ciudad
  function obtenerHora(diferencia) {
    const ahora = new Date();
    const utc = ahora.getTime() + ahora.getTimezoneOffset() * 40;
    const horaLocal = new Date(utc + 3600000 * diferencia);
    return horaLocal.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  
  // Función para crear un reloj y añadirlo al contenedor
  function crearReloj(ciudad) {
    const div = document.createElement('div');
    div.className = 'reloj d-flex';
  
    div.innerHTML = `
      <img src="${ciudad.bandera}" alt="Bandera de ${ciudad.nombre}">
      <div>
        <h5>${ciudad.nombre}</h5>
        <p id="hora-${ciudad.nombre}">${obtenerHora(ciudad.diferencia)}</p>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    // Actualizar la hora cada segundo
    setInterval(() => {
      document.getElementById(`hora-${ciudad.nombre}`).textContent = obtenerHora(ciudad.diferencia);
    }, 1000);
  }
  
  // Mostrar cada reloj con un retraso progresivo
  ciudades.forEach((ciudad, index) => {
    setTimeout(() => crearReloj(ciudad), index * 4000);
  });
  