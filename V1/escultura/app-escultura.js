/**
 * ============================================================================
 * ODISEA DE LA ESCULTURA — CONTROLADOR INTERACTIVO (app-escultura.js)
 * Ecosistema Odisea de las Artes | IN2TECHMX
 * ============================================================================
 */

(function initEsculturaApp() {
  'use strict';

  const DATA = window.ESCULTURA_DATA;
  if (!DATA) {
    console.error('No se encontró ESCULTURA_DATA.');
    return;
  }

  // 1. BARRA DE PROGRESO DE LECTURA
  function initProgressBar() {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progress = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = `${progress}%`;
    });
  }

  // 2. RENDERIZADO DEL TIMELINE DE 30,000 AÑOS
  function renderTimeline() {
    const container = document.getElementById('sculpture-timeline-container');
    if (!container) return;

    container.innerHTML = DATA.eras.map((era, index) => `
      <div class="era-card card-tilt" data-era="${era.id}">
        <div class="card-tilt-inner">
          <div class="era-badge" style="background:${era.color}22; color:${era.color}; border:1px solid ${era.color}55;">
            ${era.years}
          </div>
          <h4 class="era-title">${era.name}</h4>
          <p class="era-desc">${era.desc}</p>
          <div class="era-milestone">
            <strong>Hito Cardinal:</strong> ${era.milestone}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 3. DECODIFICADOR INTERACTIVO DE LA ESCULTURA
  function initDecoder() {
    const techSelect = document.getElementById('decoder-tech-select');
    const matSelect = document.getElementById('decoder-mat-select');
    const canonSelect = document.getElementById('decoder-canon-select');
    const outputCard = document.getElementById('decoder-result-card');

    if (!techSelect || !matSelect || !canonSelect || !outputCard) return;

    function updateDecoder() {
      const techId = techSelect.value;
      const mat = matSelect.value;
      const canonId = canonSelect.value;

      const techObj = DATA.techniques.find(t => t.id === techId) || DATA.techniques[0];
      const canonObj = DATA.canons.find(c => c.id === canonId) || DATA.canons[0];

      outputCard.innerHTML = `
        <div class="decoder-result-header">
          <span class="decoder-result-badge">Ecuación Escultórica Decodificada</span>
          <h4 class="decoder-result-title">${techObj.name} + ${mat}</h4>
        </div>
        <div class="decoder-result-body">
          <div class="decoder-result-section">
            <span class="decoder-label">Principio de Ejecución:</span>
            <p>${techObj.principle}</p>
          </div>
          <div class="decoder-result-section">
            <span class="decoder-label">Herramientas Cardinales de Taller:</span>
            <p>${techObj.tools.join(', ')}.</p>
          </div>
          <div class="decoder-result-section">
            <span class="decoder-label">Canon / Principio Estético Aplicado:</span>
            <p><strong>${canonObj.name}:</strong> ${canonObj.desc}</p>
          </div>
          <div class="decoder-result-footer">
            <span class="decoder-example-badge">Ejemplo Histórico Cumbre:</span>
            <p class="decoder-example-text">${techObj.iconicExample}</p>
          </div>
        </div>
      `;
    }

    techSelect.addEventListener('change', updateDecoder);
    matSelect.addEventListener('change', updateDecoder);
    canonSelect.addEventListener('change', updateDecoder);
    updateDecoder();
  }

  // 4. RENDERIZADO Y FILTRADO DE LOS 20 TITANES
  function initTitans() {
    const grid = document.getElementById('titans-sculpture-grid');
    const searchInput = document.getElementById('titan-search-input');
    const eraFilter = document.getElementById('titan-era-filter');
    const countBadge = document.getElementById('titans-count-badge');

    if (!grid) return;

    function renderList(list) {
      if (countBadge) countBadge.textContent = `${list.length} de ${DATA.titans.length} Maestros`;

      if (list.length === 0) {
        grid.innerHTML = `
          <div class="empty-state" style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
            No se encontraron escultores que coincidan con el criterio de búsqueda.
          </div>
        `;
        return;
      }

      grid.innerHTML = list.map((titan, idx) => `
        <article class="titan-card card-tilt" data-id="${titan.id}">
          <div class="card-tilt-inner">
            <div class="titan-header">
              <span class="titan-index">#${String(idx + 1).padStart(2, '0')}</span>
              <span class="titan-era-badge">${titan.eraName}</span>
            </div>
            <h3 class="titan-name">${titan.name}</h3>
            <span class="titan-years">${titan.years}</span>
            <p class="titan-title-epigraph">${titan.title}</p>

            <div class="titan-details">
              <div class="titan-detail-item">
                <span class="titan-detail-label">Obra Emblemática:</span>
                <span class="titan-detail-val">${titan.masterpiece}</span>
              </div>
              <div class="titan-detail-item">
                <span class="titan-detail-label">Material &amp; Técnica:</span>
                <span class="titan-detail-val">${titan.material} • ${titan.technique}</span>
              </div>
            </div>

            <p class="titan-summary">${titan.summary}</p>

            <blockquote class="titan-quote">
              «${titan.quote}»
            </blockquote>
          </div>
        </article>
      `).join('');
    }

    function filterTitans() {
      const q = (searchInput?.value || '').toLowerCase().trim();
      const era = eraFilter?.value || 'all';

      const filtered = DATA.titans.filter(t => {
        const matchesQuery = !q || 
          t.name.toLowerCase().includes(q) || 
          t.masterpiece.toLowerCase().includes(q) || 
          t.material.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q);

        const matchesEra = (era === 'all') || (t.era === era);
        return matchesQuery && matchesEra;
      });

      renderList(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', filterTitans);
    if (eraFilter) eraFilter.addEventListener('change', filterTitans);

    renderList(DATA.titans);
  }

  // 5. LABORATORIO DE APRECIACIÓN ESPACIAL 360° (SIMULADOR DE PERSPECTIVA)
  function initViewingLab() {
    const slider = document.getElementById('lab-angle-slider');
    const angleText = document.getElementById('lab-angle-display');
    const perspectiveTitle = document.getElementById('lab-perspective-title');
    const perspectiveDesc = document.getElementById('lab-perspective-desc');
    const statueModel = document.getElementById('lab-statue-wireframe');

    if (!slider || !angleText || !perspectiveTitle || !perspectiveDesc) return;

    const PERSPECTIVES = [
      {
        min: 0, max: 45,
        title: "Vista Frontal • Centro de Tensión & Mirada",
        desc: "El punto de encuentro inicial. Aprecia la mirada concentrada y el equilibrio de la cabeza sobre el cuello en tensión.",
        lightAngle: "0deg"
      },
      {
        min: 46, max: 135,
        title: "Perfil Derecho • La Línea del Contrapposto",
        desc: "Observa la pierna de apoyo soportando el peso del bloque, liberando la pierna izquierda en suave flexión. La cadera se eleva naturalmente.",
        lightAngle: "90deg"
      },
      {
        min: 136, max: 225,
        title: "Vista Posterior • La Espalda & Anatomía Táctil",
        desc: "La columna vertebral y los omóplatos tallados con sutileza. El non-finito o las marcas del trépano revelan el pulso del taller.",
        lightAngle: "180deg"
      },
      {
        min: 226, max: 315,
        title: "Perfil Izquierdo • La Tensión del Brazo y el Espacio",
        desc: "El brazo en ángulo desafía la densidad de la piedra, abriendo una ventana de aire (vacío compositivo) que enmarca la figura.",
        lightAngle: "270deg"
      },
      {
        min: 316, max: 360,
        title: "Retorno al Frente • Integración Tridimensional",
        desc: "Tras completar el giro de 360°, la escultura ya no es una silueta estática, sino una presencia física que habita el mismo espacio que tú.",
        lightAngle: "360deg"
      }
    ];

    slider.addEventListener('input', () => {
      const angle = parseInt(slider.value, 10);
      angleText.textContent = `${angle}°`;

      if (statueModel) {
        statueModel.style.transform = `rotateY(${angle}deg)`;
      }

      const p = PERSPECTIVES.find(item => angle >= item.min && angle <= item.max) || PERSPECTIVES[0];
      perspectiveTitle.textContent = p.title;
      perspectiveDesc.textContent = p.desc;
    });
  }

  // 6. HISTORIAS & CRÓNICAS MATERIALES
  function renderStories() {
    const container = document.getElementById('sculpture-stories-grid');
    if (!container) return;

    container.innerHTML = DATA.stories.map(s => `
      <div class="story-card card-tilt">
        <div class="card-tilt-inner">
          <div class="story-badge">${s.tag}</div>
          <span class="story-era">${s.era}</span>
          <h4 class="story-title">${s.title}</h4>
          <p class="story-summary">${s.summary}</p>
        </div>
      </div>
    `).join('');
  }

  // 7. INICIALIZACIÓN GLOBAL
  document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    renderTimeline();
    initDecoder();
    initTitans();
    initViewingLab();
    renderStories();
    console.log('Odisea de la Escultura inicializada con éxito.');
  });

})();
