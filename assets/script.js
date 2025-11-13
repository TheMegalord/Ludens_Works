const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const modal = document.getElementById('modal');
const cerrarAjustes = document.getElementById('cerrarAjustes');
const cuentaBtn = document.getElementById('cuentaBtn');
const vipBtn = document.getElementById('vipBtn');
const creditosBtn = document.getElementById('creditosBtn');

settingsBtn.addEventListener('click', () => settingsMenu.classList.toggle('hidden'));
cerrarAjustes.addEventListener('click', () => settingsMenu.classList.add('hidden'));

cuentaBtn.addEventListener('click', () => {
  mostrarModal('<h3>Cuenta</h3><p>Inicia sesión o crea una cuenta para guardar tu progreso.</p><input placeholder="Usuario"><br><input placeholder="Contraseña" type="password"><br><button>Crear cuenta</button><button>Iniciar sesión</button>');
});

vipBtn.addEventListener('click', () => {
  mostrarModal('<h3>VIP</h3><p>Compra el plan VIP y obtén 25% de descuento en todos los juegos.</p><button>Comprar VIP</button>');
});

creditosBtn.addEventListener('click', () => {
  mostrarModal('<h3>Créditos</h3><p>Creado por Yamil Calsin, Roberto Pariona y ChatGPT</p>');
});

function mostrarModal(contenido) {
  modal.innerHTML = contenido + '<br><button onclick="cerrarModal()">Cerrar</button>';
  modal.classList.remove('hidden');
}

function cerrarModal() {
  modal.classList.add('hidden');
}
