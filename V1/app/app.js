/**
 * APP.JS
 * Ecosistema IN2TECHMX - Odisea de la Música Clásica
 * Controlador interactivo de vanguardia (+10,000€ Vanguard Craft)
 * Incluye: 3D Tilt & Magnetic Spotlight, Decodificador en Vivo, Timeline Dinámico y Motor de Audio.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Instancia del Sintetizador Orquestal
  const synth = new ClassicalSynthesizer();

  // Elementos de la interfaz
  const progressBar = document.getElementById("scroll-progress-bar");
  const navLinks = document.querySelectorAll(".nav-link");
  const timelineContainer = document.getElementById("timeline-container");
  const timelineFilterButtons = document.querySelectorAll(".timeline-filter-btn");
  const titansContainer = document.getElementById("titans-container");
  const catalogsGrid = document.getElementById("catalogs-grid");

  // Elementos del Dock de Audio Flotante
  const audioDeck = document.getElementById("floating-audio-deck");
  const deckTitle = document.getElementById("deck-track-title");
  const deckStatus = document.getElementById("deck-status-label");
  const deckPlayBtn = document.getElementById("deck-play-btn");
  const deckStopBtn = document.getElementById("deck-stop-btn");
  const headerAudioPill = document.getElementById("header-audio-pill");
  const headerAudioDot = document.getElementById("header-audio-dot");
  const visualizerCanvas = document.getElementById("audio-visualizer");
  const canvasCtx = visualizerCanvas ? visualizerCanvas.getContext("2d") : null;

  // Estado del reproductor
  let currentPlayingMotif = "beethoven-5th";

  // ==========================================================================
  // 1. SCROLL PROGRESS BAR & ACTIVE NAV OBSERVER
  // ==========================================================================
  window.addEventListener("scroll", () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalScroll) * 100;
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  });

  const sections = document.querySelectorAll("section[id]");
  const observerOptions = { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // ==========================================================================
  // 2. 3D TILT & MAGNETIC SPOTLIGHT (ESTÁNDAR RODRI GONZÁLEZ)
  // ==========================================================================
  function initTiltAndSpotlight() {
    const tiltElements = document.querySelectorAll(".card-tilt, .catalog-card, .titan-card, .why-card, .compass-item");

    tiltElements.forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Variables CSS para el resplandor magnético
        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);

        // Rotación 3D armónica y suave (-1 a +1 escalado)
        const deltaX = (x - rect.width / 2) / (rect.width / 2);
        const deltaY = (y - rect.height / 2) / (rect.height / 2);

        const rotX = (-(deltaY * 6)).toFixed(2);
        const rotY = (deltaX * 6).toFixed(2);

        el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px) scale3d(1.015, 1.015, 1.015)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)";
      });
    });
  }

  // ==========================================================================
  // 3. RENDERIZADO DEL TIMELINE HISTÓRICO
  // ==========================================================================
  function renderTimeline() {
    if (!timelineContainer || !MUSIC_DATA.eras) return;
    timelineContainer.innerHTML = "";

    MUSIC_DATA.eras.forEach(era => {
      const eraEl = document.createElement("div");
      eraEl.className = "era-entry";
      eraEl.dataset.eraId = era.id;
      eraEl.style.setProperty("--era-accent", era.accent);

      let exponentsHtml = era.exponents.map(exp => `
        <div class="exponent-pill">
          <div class="exponent-header">
            <span class="exponent-avatar">${exp.avatar}</span>
            <div>
              <div class="exponent-name">${exp.name}</div>
              <span class="exponent-role">${exp.role} (${exp.years})</span>
            </div>
          </div>
          <p class="exponent-why">${exp.whyExponent}</p>
          <button class="btn-audio-motif" data-motif="${exp.motifKey}">
            <span>▶</span> Escuchar Motivo (${exp.masterpiece.split("/")[0].trim()})
          </button>
        </div>
      `).join("");

      eraEl.innerHTML = `
        <div class="era-node-dot"></div>
        <div class="era-card card-tilt" style="--card-accent: ${era.accent}">
          <div class="card-tilt-inner">
            <div class="era-badge-row">
              <span class="era-period-badge">${era.period}</span>
              <span class="editorial-badge" style="margin-bottom:0">Hito Central</span>
            </div>
            <h3 class="era-title">${era.name}</h3>
            <p class="era-tagline">"${era.tagline}"</p>
            
            <div class="era-desc-grid">
              <div class="era-desc-item">
                <h5>Contexto Histórico & Filosófico</h5>
                <p>${era.context}</p>
              </div>
              <div class="era-desc-item">
                <h5>Ruptura / Innovación Técnica</h5>
                <p>${era.breakthrough}</p>
              </div>
            </div>

            <div class="era-desc-item" style="margin-bottom: 1.5rem">
              <h5>Instrumentación Clave de la Época</h5>
              <p style="color: var(--gold-light)">${era.instruments}</p>
            </div>

            <h4 class="era-exponents-title">Máximos Exponentes e Hitos de esta Época</h4>
            <div class="era-exponents-list">
              ${exponentsHtml}
            </div>
          </div>
        </div>
      `;

      timelineContainer.appendChild(eraEl);
    });

    // Filtros del timeline
    timelineFilterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        timelineFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        const entries = timelineContainer.querySelectorAll(".era-entry");
        entries.forEach(entry => {
          if (filter === "all" || entry.dataset.eraId === filter) {
            entry.style.display = "block";
            setTimeout(() => {
              entry.style.opacity = "1";
              entry.style.transform = "translateY(0)";
            }, 10);
          } else {
            entry.style.opacity = "0";
            entry.style.transform = "translateY(15px)";
            setTimeout(() => {
              entry.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================================================
  // 4. DECODIFICADOR INTERACTIVO DE NOMENCLATURA
  // ==========================================================================
  function initDecoder() {
    const genreSelect = document.getElementById("decoder-genre");
    const composerSelect = document.getElementById("decoder-composer");
    const keySelect = document.getElementById("decoder-key");
    const numberSelect = document.getElementById("decoder-number");

    const assembledTitleEl = document.getElementById("assembled-title");
    const assembledMeaningEl = document.getElementById("assembled-meaning");

    // Relación compositor -> sistema de catálogo correspondiente
    const COMPOSER_CATALOGS = {
      "beethoven": { name: "Ludwig van Beethoven", cat: "Op.", numRange: "Op. 67", tag: "Opus" },
      "bach": { name: "Johann Sebastian Bach", cat: "BWV", numRange: "BWV 1048", tag: "Bach-Werke-Verzeichnis" },
      "mozart": { name: "Wolfgang Amadeus Mozart", cat: "K.", numRange: "K. 525", tag: "Köchel-Verzeichnis" },
      "schubert": { name: "Franz Schubert", cat: "D.", numRange: "D. 759", tag: "Deutsch-Verzeichnis" },
      "haydn": { name: "Joseph Haydn", cat: "Hob.", numRange: "Hob. I:94", tag: "Hoboken-Verzeichnis" },
      "vivaldi": { name: "Antonio Vivaldi", cat: "RV", numRange: "RV 269", tag: "Ryom-Verzeichnis" }
    };

    function updateDecoder() {
      if (!genreSelect || !composerSelect || !keySelect || !numberSelect) return;

      const genre = genreSelect.value;
      const composerKey = composerSelect.value;
      const key = keySelect.value;
      const number = numberSelect.value;
      const compData = COMPOSER_CATALOGS[composerKey] || COMPOSER_CATALOGS["beethoven"];

      const fullTitle = `${genre} n.º ${number} en ${key}, ${compData.numRange} — ${compData.name}`;
      if (assembledTitleEl) {
        assembledTitleEl.textContent = fullTitle;
      }

      if (assembledMeaningEl) {
        assembledMeaningEl.innerHTML = `
          <strong>¿Cómo se interpreta esto didácticamente?</strong><br>
          Esta obra es una composición formal de tipo <strong>${genre}</strong> (la número <strong>${number}</strong> que escribió el maestro).
          Está construida sobre la escala de <strong>${key}</strong>, lo que dicta su arquitectura armónica y carácter emocional.
          El identificador <strong>${compData.numRange}</strong> corresponde al catálogo universal <em>${compData.tag}</em>,
          el cual garantiza que los musicólogos de todo el mundo sepan con exactitud milimétrica de qué manuscrito histórico se trata.
        `;
      }
    }

    [genreSelect, composerSelect, keySelect, numberSelect].forEach(sel => {
      if (sel) sel.addEventListener("change", updateDecoder);
    });

    updateDecoder();
  }

  // ==========================================================================
  // 5. RENDERIZADO DE CATÁLOGOS UNIVERSALES Y TITANES
  // ==========================================================================
  function renderCatalogsAndTitans() {
    // Render de Catálogos
    if (catalogsGrid && MUSIC_DATA.nomenclatureGuide) {
      catalogsGrid.innerHTML = MUSIC_DATA.nomenclatureGuide.catalogSystems.map(cat => `
        <div class="catalog-card card-tilt">
          <div class="catalog-code">${cat.code}</div>
          <div class="catalog-name">${cat.name}</div>
          <div class="catalog-composer">Asignado a: ${cat.assignedTo}</div>
          <p class="catalog-desc">${cat.originReason}</p>
        </div>
      `).join("");
    }

    // Render de Titanes
    if (titansContainer && MUSIC_DATA.eras) {
      let allTitans = [];
      MUSIC_DATA.eras.forEach(e => {
        e.exponents.forEach(exp => {
          allTitans.push({ ...exp, eraName: e.name, eraAccent: e.accent });
        });
      });

      titansContainer.innerHTML = allTitans.map(titan => `
        <div class="titan-card card-tilt" style="--card-accent: ${titan.eraAccent}">
          <div class="card-tilt-inner">
            <div class="titan-top">
              <div class="titan-icon-box">${titan.avatar}</div>
              <div>
                <h4 class="titan-name">${titan.name}</h4>
                <div class="titan-dates">${titan.years} • <span style="color:${titan.eraAccent}">${titan.eraName}</span></div>
                <div class="titan-role">${titan.role}</div>
              </div>
            </div>

            <div class="titan-why-block">
              <h6>¿Por qué es un Máximo Exponente?</h6>
              <p>${titan.whyExponent}</p>
            </div>

            <h6>Aportes e Hitos que Hicieron Historia:</h6>
            <ul class="titan-milestones-list">
              ${titan.milestones.map(m => `<li>${m}</li>`).join("")}
            </ul>

            <div class="titan-footer">
              <div class="titan-masterpiece">
                Obra Emblemática:
                <span>${titan.masterpiece}</span>
              </div>
              <button class="btn-audio-motif" data-motif="${titan.motifKey}">
                <span>▶</span> Escuchar Motivo
              </button>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  // ==========================================================================
  // 6. MOTOR DE AUDIO Y VISUALIZADOR EN TIEMPO REAL
  // ==========================================================================
  function setupAudioInteractivity() {
    // Callbacks de estado del sintetizador
    synth.onStateChange = ({ isPlaying, motifId, motif }) => {
      if (isPlaying && motif) {
        currentPlayingMotif = motifId;
        if (deckTitle) deckTitle.textContent = motif.title;
        if (deckStatus) deckStatus.textContent = `REPRODUCIENDO (${motif.era.toUpperCase()})`;
        if (deckPlayBtn) deckPlayBtn.innerHTML = "⏸";
        if (headerAudioDot) headerAudioDot.classList.add("playing");
      } else {
        if (deckStatus) deckStatus.textContent = "ESTACIÓN EN ESPERA";
        if (deckPlayBtn) deckPlayBtn.innerHTML = "▶";
        if (headerAudioDot) headerAudioDot.classList.remove("playing");
      }
    };

    // Botones de reproducción de motivos en tarjetas
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-audio-motif");
      if (btn) {
        const motifKey = btn.dataset.motif;
        if (motifKey) {
          synth.playMotif(motifKey);
        }
      }
    });

    // Control de reproducción en el Dock
    if (deckPlayBtn) {
      deckPlayBtn.addEventListener("click", () => {
        if (synth.isPlaying) {
          synth.stop();
        } else {
          synth.playMotif(currentPlayingMotif || "beethoven-5th");
        }
      });
    }

    if (deckStopBtn) {
      deckStopBtn.addEventListener("click", () => {
        synth.stop();
      });
    }

    if (headerAudioPill) {
      headerAudioPill.addEventListener("click", () => {
        if (synth.isPlaying) {
          synth.stop();
        } else {
          synth.playMotif("beethoven-5th");
        }
      });
    }

    // Atajos de teclado para accesibilidad
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "SELECT") {
        e.preventDefault();
        if (synth.isPlaying) {
          synth.stop();
        } else {
          synth.playMotif(currentPlayingMotif);
        }
      } else if (e.code === "Escape") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    // Animación del visualizador de audio en Canvas
    function drawVisualizer() {
      requestAnimationFrame(drawVisualizer);
      if (!visualizerCanvas || !canvasCtx) return;

      const width = visualizerCanvas.width;
      const height = visualizerCanvas.height;
      canvasCtx.clearRect(0, 0, width, height);

      if (synth.isPlaying) {
        const data = synth.getFrequencyData();
        const barWidth = (width / data.length) * 2.2;
        let x = 0;

        for (let i = 0; i < data.length; i++) {
          const barHeight = (data[i] / 255) * height;
          
          const gradient = canvasCtx.createLinearGradient(0, height, 0, 0);
          gradient.addColorStop(0, "#d4af37");
          gradient.addColorStop(1, "#fef08a");

          canvasCtx.fillStyle = gradient;
          canvasCtx.fillRect(x, height - barHeight, barWidth - 1.5, barHeight);
          x += barWidth;
        }
      } else {
        // Línea en reposo
        canvasCtx.fillStyle = "rgba(229, 184, 92, 0.25)";
        canvasCtx.fillRect(0, height / 2 - 1, width, 2);
      }
    }

    drawVisualizer();
  }

  // ==========================================================================
  // INICIALIZACIÓN COMPLETA
  // ==========================================================================
  renderTimeline();
  initDecoder();
  renderCatalogsAndTitans();
  initTiltAndSpotlight();
  setupAudioInteractivity();
});
