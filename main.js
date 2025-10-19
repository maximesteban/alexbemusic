// Alternar vista de eventos (lista <-> grid)
const toggleBtn = document.getElementById('toggle-view');
const iconView = document.getElementById('icon-view');
const listView = document.getElementById('event-list-view');
const gridView = document.getElementById('event-grid-view');
let isGrid = false;

function setGridDisplay() {
  if (window.innerWidth >= 768) {
    gridView.style.display = 'grid';
    gridView.classList.remove('flex');
    gridView.classList.add('grid');
    gridView.classList.remove('overflow-x-auto');
    gridView.classList.remove('space-x-6');
    // Icono de lista
    iconView.innerHTML = '<rect x="3" y="5" width="14" height="2" rx="1"/><rect x="3" y="9" width="14" height="2" rx="1"/><rect x="3" y="13" width="14" height="2" rx="1"/>';
  } else {
    gridView.style.display = 'flex';
    gridView.classList.remove('grid');
    gridView.classList.add('flex');
    gridView.classList.add('overflow-x-auto');
    gridView.classList.add('space-x-6');
    // Icono de lista (slider)
    iconView.innerHTML = '<rect x="3" y="5" width="14" height="2" rx="1"/><rect x="3" y="9" width="14" height="2" rx="1"/><rect x="3" y="13" width="14" height="2" rx="1"/>';
  }
}

function setGridIcon() {
  // Icono de grid
  iconView.innerHTML = '<rect x="3" y="3" width="5" height="5" rx="1"/><rect x="12" y="3" width="5" height="5" rx="1"/><rect x="3" y="12" width="5" height="5" rx="1"/><rect x="12" y="12" width="5" height="5" rx="1"/>';
}

if (toggleBtn && iconView && listView && gridView) {
  toggleBtn.addEventListener('click', () => {
    isGrid = !isGrid;
    if (isGrid) {
      listView.style.display = 'none';
      gridView.style.display = '';
      setGridDisplay();
    } else {
      listView.style.display = '';
      gridView.style.display = 'none';
      setGridIcon();
    }
  });

  window.addEventListener('resize', () => {
    if (isGrid && gridView.style.display !== 'none') {
      setGridDisplay();
    }
  });
  // Inicializa icono en grid
  setGridIcon();
}







// --- Modal legal: estructura clara y moderna ---
const legalContent = {
  aviso: `
    <h2 class='text-xl font-bold mb-4 text-yellow-500'>Aviso Legal</h2>
    <p>Este sitio web es propiedad de Alex Esteban Calvo. El acceso y uso de este sitio implica la aceptación de las condiciones aquí establecidas. Para cualquier consulta, puedes contactar a <a href='mailto:Alex Esteban Calvo@gmail.com' class='underline'>Alex Esteban Calvo@gmail.com</a>.</p>
  `,
  privacidad: `
    <h2 class='text-xl font-bold mb-4 text-yellow-500'>Política de Privacidad</h2>
    <p>Los únicos datos personales que se recogen son los que el usuario proporciona voluntariamente a través del formulario de contacto. Estos datos se envían directamente por correo electrónico al responsable de la web y no se almacenan en ninguna base de datos ni se utilizan para otros fines. No se cederán a terceros y se eliminarán tras responder a la consulta.</p>
  `,
  cookies: `
    <h2 class='text-xl font-bold mb-4 text-yellow-500'>Política de Cookies</h2>
    <p>Este sitio utiliza cookies técnicas necesarias para su funcionamiento y cookies de terceros (por ejemplo, SoundCloud, Instagram) para mostrar contenido embebido. Al navegar, aceptas su uso. Puedes configurar tu navegador para bloquearlas.</p>
  `
};

// Asigna eventos a los botones legales
document.querySelectorAll('.legal-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-legal');
    document.getElementById('legal-content').innerHTML = legalContent[type];
    document.getElementById('legal-modal').classList.remove('hidden');
  });
});

// Cierra el modal legal
document.getElementById('legal-close').onclick = () => {
  document.getElementById('legal-modal').classList.add('hidden');
};