var sliders = []; // Array para almacenar los sliders
var angle = 0; // Variable para el ángulo usado en las funciones seno y coseno

function setup() {
  createCanvas(400, 400); // Crear un lienzo de 400x400 píxeles
  for (var i = 0; i < 100; i++) {
    sliders[i] = createSlider(0, 255, 50); // Crear un slider con valores entre 0 y 255, inicializado en 50
    sliders[i].position(50, i * 4); // Posicionar el slider en la pantalla
  }
}

function draw() {
  background(255); // Establecer el fondo en blanco
  var offset = 0; // Variable de desplazamiento para los cálculos de seno y coseno
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 255); // Mapear el valor del seno a un rango de 0 a 255
    sliders[i].value(x); // Establecer el valor del slider
    var y = map(cos(angle + offset), -1, 1, 0, 255); // Mapear el valor del coseno a un rango de 0 a 255
    sliders[i].position(500 + y, i * 8); // Posicionar el slider en función del valor del coseno
    offset += 0.3; // Incrementar el desplazamiento
  }
  angle += 0.05; // Incrementar el ángulo
}
