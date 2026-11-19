/**
 * APP.JS (V2 Expandida)
 * Ecosistema IN2TECHMX - Odisea de la Música Clásica
 * Controlador interactivo de vanguardia (+10,000€ Vanguard Craft)
 * Gestiona: Retratos Reales, Catálogos Propios, Etapas Creativas,
 * Crónicas de Historia Material, 3D Tilt y Motor de Audio.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Hidratar guía de audición si está cargada
  if (typeof window.hydrateListeningGuide === "function" && typeof MUSIC_DATA !== "undefined") {
    window.hydrateListeningGuide(MUSIC_DATA);
  }

  // Instancia del Sintetizador Orquestal
  const synth = new ClassicalSynthesizer();

  // Elementos comunes de la interfaz
  const progressBar = document.getElementById("scroll-progress-bar");
  const navLinks = document.querySelectorAll(".nav-link");
  const timelineContainer = document.getElementById("timeline-container");
  const timelineFilterButtons = document.querySelectorAll(".timeline-filter-btn");
  const titansContainer = document.getElementById("titans-container");
  const catalogsGrid = document.getElementById("catalogs-grid");
  const historyStoriesContainer = document.getElementById("history-stories-container");
  const mastersFullContainer = document.getElementById("masters-full-container");

  // Elementos del Dock de Audio Flotante
  const deckTitle = document.getElementById("deck-track-title");
  const deckStatus = document.getElementById("deck-status-label");
  const deckPlayBtn = document.getElementById("deck-play-btn");
  const deckStopBtn = document.getElementById("deck-stop-btn");
  const deckAutoSyncBtn = document.getElementById("deck-autosync-btn");
  const headerAudioPill = document.getElementById("header-audio-pill");
  const headerAudioDot = document.getElementById("header-audio-dot");
  const visualizerCanvas = document.getElementById("audio-visualizer");
  const canvasCtx = visualizerCanvas ? visualizerCanvas.getContext("2d") : null;

  let currentPlayingMotif = "beethoven-5th";
  let autoSoundtrackEnabled = false;
  let currentSectionMotif = "beethoven-5th";
  let autoSyncTimer = null;

  const SECTION_MOTIF_MAP = {
    "hero": "beethoven-5th",
    "proto": "proto-grecia",
    "que-es": "vivaldi-primavera",
    "medieval": "hildegarda",
    "renacimiento": "palestrina",
    "barroco": "bach-toccata",
    "nomenclatura": "beethoven-5th",
    "clasicismo": "mozart-nachtmusik",
    "titanes": "mozart-nachtmusik",
    "romanticismo": "chopin-nocturne",
    "historias": "chopin-nocturne",
    "siglo-xx": "debussy-clair",
    "guia-audicion": "debussy-clair",
    "contemporanea": "glass-minimalism",
    "cine-actualidad": "williams-theme",
    "por-que-escuchar": "part-tintinnabuli"
  };

  function updateAutoSyncUI() {
    if (!deckAutoSyncBtn) return;
    deckAutoSyncBtn.classList.toggle("active", autoSoundtrackEnabled);
    deckAutoSyncBtn.textContent = autoSoundtrackEnabled ? "✦ Auto-Sección: ON" : "✦ Auto-Sección: OFF";
  }

  function scheduleSectionMotif(contextKey) {
    const motifKey = SECTION_MOTIF_MAP[contextKey];
    if (!motifKey) return;
    currentSectionMotif = motifKey;
    if (!autoSoundtrackEnabled) return;
    if (synth.isPlaying && currentPlayingMotif === motifKey) return;
    clearTimeout(autoSyncTimer);
    autoSyncTimer = setTimeout(() => {
      if (autoSoundtrackEnabled && (!synth.isPlaying || currentPlayingMotif !== motifKey)) {
        synth.playMotif(motifKey);
      }
    }, 550);
  }

  // ==========================================================================
  // 0. MAPA DE SUBPÁGINAS — Ruta relativa desde la carpeta app/
  // ==========================================================================
  const SUBPAGE_MAP = {
    "guido-darezzo":        null, // sin subpágina individual
    "hildegarda-von-bingen": "exponentes/hildegarda-von-bingen.html",
    "leonin-perotin":       null, // sin subpágina individual
    "josquin-des-prez":     "exponentes/josquin-des-prez.html",
    "palestrina":           "exponentes/palestrina.html",
    "bach":                 "exponentes/bach.html",
    "vivaldi":              "exponentes/vivaldi.html",
    "handel":               "exponentes/handel.html",
    "haydn":                "exponentes/haydn.html",
    "mozart":               "exponentes/mozart.html",
    "beethoven":            "exponentes/beethoven.html",
    "chopin":               "exponentes/chopin.html",
    "tchaikovsky":          "exponentes/tchaikovsky.html",
    "wagner":               "exponentes/wagner.html",
    "debussy":              "exponentes/debussy.html",
    "stravinsky":           "exponentes/stravinsky.html",
    "schoenberg":           "exponentes/schoenberg.html",
    "philip-glass":         "exponentes/philip-glass.html",
    "arvo-part":            "exponentes/arvo-part.html",
    "john-williams":        "exponentes/john-williams.html"
  };

  // ==========================================================================
  // 1. SCROLL PROGRESS BAR & ACTIVE NAV OBSERVER
  // ==========================================================================
  window.addEventListener("scroll", () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  });

  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0) {
    const observerOptions = { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            } else if (!link.classList.contains("nav-link-special")) {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // ==========================================================================
  // 2. 3D TILT & MAGNETIC SPOTLIGHT (ESTÁNDAR RODRI GONZÁLEZ)
  // ==========================================================================
  function initTiltAndSpotlight() {
    const tiltElements = document.querySelectorAll(
      ".card-tilt, .catalog-card, .titan-card, .why-card, .compass-item, .story-card, .master-composer-card, .master-period-card"
    );

    tiltElements.forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);

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
  // 3. RENDERIZADO DEL TIMELINE HISTÓRICO CON RETRATOS REALES
  // ==========================================================================
  function renderTimeline() {
    if (!timelineContainer || !MUSIC_DATA.eras) return;
    timelineContainer.innerHTML = "";

    MUSIC_DATA.eras.forEach(era => {
      const eraEl = document.createElement("div");
      eraEl.className = "era-entry";
      eraEl.dataset.eraId = era.id;
      eraEl.style.setProperty("--era-accent", era.accent);

      let exponentsHtml = era.exponents.map(exp => {
        const subpageUrl = SUBPAGE_MAP[exp.id];
        const catalogBtn = subpageUrl
          ? `<a href="${subpageUrl}" class="btn-catalog-subpage">Ver Catálogo Completo &amp; Obras →</a>`
          : "";
        return `
        <div class="exponent-pill">
          <div class="exponent-header">
            <div class="exponent-portrait-box">
              <img src="${exp.image}" alt="Retrato histórico de ${exp.name} (${exp.years}), ${exp.role}" class="exponent-portrait-img" loading="lazy"
                   onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'exponent-portrait-fallback\\'>${exp.initials}</div>'">
            </div>
            <div>
              <div class="exponent-name">${exp.name}</div>
              <span class="exponent-role">${exp.role} (${exp.years})</span>
            </div>
          </div>
          <p class="exponent-why">${exp.whyExponent}</p>
          <div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-top:0.6rem;">
            <button class="btn-audio-motif" data-motif="${exp.motifKey}">
              <span>▶</span> Escuchar Motivo (${exp.masterpiece.split("/")[0].trim()})
            </button>
            ${catalogBtn}
          </div>
        </div>`;
      }).join("");

      eraEl.innerHTML = `
        <div class="era-node-dot"></div>
        <div class="era-card card-tilt" style="--card-accent: ${era.accent}">
          <div class="card-tilt-inner">
            <div class="era-card-banner">
              <img src="assets/eras/era-${era.id}.jpg" alt="Arquitectura y atmósfera de ${era.name}" loading="lazy">
            </div>
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

    const COMPOSER_CATALOGS = {
      "beethoven": { name: "Ludwig van Beethoven", cat: "Op.", numRange: "Op. 67", tag: "Opus (orden aproximado de publicación)" },
      "bach": { name: "Johann Sebastian Bach", cat: "BWV", numRange: "BWV 1048", tag: "Bach-Werke-Verzeichnis (temático)" },
      "mozart": { name: "Wolfgang Amadeus Mozart", cat: "K.", numRange: "K. 550", tag: "Köchel-Verzeichnis (cronológico)" },
      "schubert": { name: "Franz Schubert", cat: "D.", numRange: "D. 759", tag: "Deutsch-Verzeichnis (cronológico)" },
      "haydn": { name: "Joseph Haydn", cat: "Hob.", numRange: "Hob. I:94", tag: "Hoboken-Verzeichnis (por género)" },
      "vivaldi": { name: "Antonio Vivaldi", cat: "RV", numRange: "RV 269", tag: "Ryom-Verzeichnis (por instrumentación)" }
    };

    // Base verificada de combinaciones históricas reales dentro del decodificador
    const REAL_HISTORICAL_WORKS = {
      "beethoven|Sinfonía|1|Do mayor": { cat: "Op. 21 (1800)", note: "Su primera sinfonía, estrenada en Viena en 1800." },
      "beethoven|Sinfonía|3|Mi bemol mayor": { cat: "Op. 55 'Heroica' (1804)", note: "Obra histórica real que transformó la dimensión del sinfonismo." },
      "beethoven|Sinfonía|5|Do menor": { cat: "Op. 67 (1808)", note: "Obra histórica real estrenada en el Theater an der Wien en 1808." },
      "beethoven|Sinfonía|9|Re menor": { cat: "Op. 125 'Coral' (1824)", note: "Su novena y última sinfonía, que incorpora voces solistas y coro en el movimiento final." },
      "beethoven|Concierto para Piano|3|Do menor": { cat: "Op. 37 (1800)", note: "Su único concierto para piano en modo menor." },
      "beethoven|Concierto para Piano|5|Mi bemol mayor": { cat: "Op. 73 'Emperador' (1809)", note: "Su quinto y último concierto para piano." },
      "beethoven|Sonata para Piano|5|Do menor": { cat: "Op. 10 n.º 1 (1798)", note: "Sonata juvenil real de su primera etapa vienesa." },
      "mozart|Cuarteto de Cuerdas|1|Sol mayor": { cat: "K. 80 'Lodi' (1770)", note: "Su primer cuarteto de cuerdas, compuesto en Italia a los 14 años." },
      "haydn|Sinfonía|1|Re mayor": { cat: "Hob. I:1 (1759)", note: "Compuesta para el conde Morzin; su n.º 94 en Sol mayor es 'La Sorpresa' (Hob. I:94)." },
      "bach|Suite Orquestal|1|Do mayor": { cat: "BWV 1066", note: "Bach compuso 4 Oberturas/Suites Orquestales (BWV 1066–1069)." },
      "schubert|Sinfonía|3|Re mayor": { cat: "D. 200 (1815)", note: "Schubert compuso su 3ª en Re mayor; su célebre 'Inconclusa' es la n.º 8 en Si menor (D. 759)." }
    };

    const COMPOSER_REALITY_HINTS = {
      "bach": "Nota histórica: J. S. Bach (Barroco) no compuso 'Sinfonías' ni 'Cuartetos de Cuerdas' clásicos (formas nacidas décadas después con Haydn), sino Conciertos, Suites (BWV 1066–1069), Fugas, Cantatas y Pasiones.",
      "vivaldi": "Nota histórica: Vivaldi destacó en más de 500 Conciertos (como RV 269 'La Primavera' en Mi mayor) y óperas; el molde clásico de Sinfonía y Cuarteto de Cuerdas surgió posteriormente.",
      "mozart": "Nota histórica: Mozart escribió 41 sinfonías (ej. n.º 25 y n.º 40 en Sol menor, K. 183 y K. 550) y 27 conciertos para piano (ej. n.º 20 en Re menor, K. 466).",
      "schubert": "Nota histórica: Schubert compuso 9 sinfonías (n.º 4 'Trágica' en Do menor, D. 417; n.º 5 en Si bemol mayor, D. 485) y 15 cuartetos de cuerda (como 'La muerte y la doncella' en Re menor, D. 810), pero ningún Concierto para Piano.",
      "haydn": "Nota histórica: Haydn escribió 104 sinfonías (como la n.º 94 'La Sorpresa' en Sol mayor, Hob. I:94) y 68 cuartetos de cuerdas (Hob. III).",
      "beethoven": "Nota histórica: Beethoven compuso 9 sinfonías, 5 conciertos para piano, 32 sonatas para piano y 16 cuartetos de cuerda."
    };

    function updateDecoder() {
      if (!genreSelect || !composerSelect || !keySelect || !numberSelect) return;

      const genre = genreSelect.value;
      const composerKey = composerSelect.value;
      const key = keySelect.value;
      const number = numberSelect.value;
      const compData = COMPOSER_CATALOGS[composerKey] || COMPOSER_CATALOGS["beethoven"];

      const lookupKey = `${composerKey}|${genre}|${number}|${key}`;
      const realMatch = REAL_HISTORICAL_WORKS[lookupKey];
      const catCode = realMatch ? realMatch.cat : `${compData.cat} [ej. ${compData.numRange}]`;

      const fullTitle = `${genre} n.º ${number} en ${key}, ${catCode} — ${compData.name}`;
      if (assembledTitleEl) {
        assembledTitleEl.textContent = fullTitle;
      }

      if (assembledMeaningEl) {
        const statusBadge = realMatch
          ? `<div style="display:inline-block; margin-bottom:0.65rem; padding:0.25rem 0.75rem; border-radius:999px; background:rgba(16,185,129,0.16); border:1px solid rgba(16,185,129,0.5); color:#a7f3d0; font-size:0.74rem; font-weight:700;">✓ Obra Histórica Real Verificada (${realMatch.cat})</div><br><span style="color:var(--gold-light);">${realMatch.note}</span><br><br>`
          : `<div style="display:inline-block; margin-bottom:0.65rem; padding:0.25rem 0.75rem; border-radius:999px; background:rgba(245,158,11,0.14); border:1px solid rgba(245,158,11,0.45); color:#fde68a; font-size:0.74rem; font-weight:700;">🧪 Combinación Didáctica Simulada (Para practicar lectura de títulos)</div><br><span style="color:var(--text-muted); font-size:0.84rem;">${COMPOSER_REALITY_HINTS[composerKey] || ""}</span><br><br>`;

        assembledMeaningEl.innerHTML = `
          ${statusBadge}
          <strong>Lectura de sus 4 elementos:</strong>
          Forma musical <strong>${genre}</strong> · Número de serie <strong>n.º ${number}</strong> ·
          Tonalidad <strong>${key}</strong> · Sistema de catalogación <strong>${compData.tag}</strong>.
        `;
      }
    }

    [genreSelect, composerSelect, keySelect, numberSelect].forEach(sel => {
      if (sel) sel.addEventListener("change", updateDecoder);
    });

    updateDecoder();
  }

  // ==========================================================================
  // 5. RENDERIZADO DE TITANES CON RETRATOS REALES
  // ==========================================================================
  function renderCatalogsAndTitans() {
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

    if (titansContainer && MUSIC_DATA.eras) {
      let allTitans = [];
      MUSIC_DATA.eras.forEach(e => {
        e.exponents.forEach(exp => {
          allTitans.push({ ...exp, eraName: e.name, eraAccent: e.accent });
        });
      });

      titansContainer.innerHTML = allTitans.map(titan => {
        const subpageUrl = SUBPAGE_MAP[titan.id];
        const catalogCTA = subpageUrl
          ? `<a href="${subpageUrl}" class="btn-catalog-subpage btn-catalog-cta" style="display:block; text-align:center; margin-top:0.6rem;">📖 Ver Catálogo Completo & Obras →</a>`
          : "";
        return `
        <div class="titan-card card-tilt" style="--card-accent: ${titan.eraAccent}">
          <div class="card-tilt-inner">
            <div class="titan-top">
              <div class="exponent-portrait-box">
                <img src="${titan.image}" alt="Retrato histórico de ${titan.name} (${titan.years}), ${titan.eraName}" class="exponent-portrait-img" loading="lazy"
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'exponent-portrait-fallback\\'>${titan.initials}</div>'">
              </div>
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
            ${catalogCTA}
          </div>
        </div>`;
      }).join("");
    }
  }

  // ==========================================================================
  // 6. RENDERIZADO DE HISTORIAS DE SANGRE, PESTE Y REVOLUCIONES
  // ==========================================================================
  function renderHistoryStories() {
    if (!historyStoriesContainer || !MUSIC_DATA.historicalChronologyStories) return;

    historyStoriesContainer.innerHTML = MUSIC_DATA.historicalChronologyStories.map(story => {
      const cleanEra = story.eraId.replace(/-/g, " ").toUpperCase();
      const catTag = story.categoryTag || "Documentado";
      const sourceHtml = story.sourceRef
        ? `<div style="margin-top:0.85rem; padding-top:0.65rem; border-top:1px solid rgba(229,184,92,0.14); font-size:0.74rem; color:var(--text-muted); font-style:italic;">${story.sourceRef}</div>`
        : "";
      return `
      <div class="story-card card-tilt">
        <div class="card-tilt-inner">
          <div class="story-badge-row">
            <span class="story-era-badge">${cleanEra}</span>
            <span class="story-event-tag">${catTag}</span>
          </div>

          <h4 class="story-title">${story.title}</h4>
          <div class="story-historical-event">${story.historicalEvent}</div>
          <p class="story-impact">${story.impactOnMusic}</p>

          <div class="story-fact-box">
            <strong>Contexto &amp; Crónica:</strong>
            ${story.fascinatingFact}
          </div>
          ${sourceHtml}
        </div>
      </div>
    `;
    }).join("");
  }

  // ==========================================================================
  // 7. RENDERIZADO DE LA VISTA MONOGRÁFICA DE EXPONENTES (EXPONENTES.HTML)
  // ==========================================================================
  function renderMastersFullPage() {
    if (!mastersFullContainer || !MUSIC_DATA.eras) return;
    mastersFullContainer.innerHTML = "";

    MUSIC_DATA.eras.forEach(era => {
      era.exponents.forEach(master => {
        const card = document.createElement("article");
        card.className = "master-composer-card card-tilt";
        card.dataset.eraId = era.id;
        card.style.setProperty("--card-accent", era.accent);

        let periodsHtml = master.periods ? master.periods.map((p, idx) => {
          const recWorksHtml = (p.recommendedWorks && p.recommendedWorks.length > 0) ? `
            <div class="period-recommended-works">
              <div class="period-rec-label">🎧 Obras Recomendadas para Entender esta Etapa</div>
              ${p.recommendedWorks.map(w => `
                <div class="lg-work-item">
                  <div class="lg-work-top">
                    <div class="lg-work-title">${w.title}</div>
                    <span class="lg-work-duration">${w.duration}</span>
                  </div>
                  <p class="lg-work-why">${w.whyListen}</p>
                  <div class="lg-work-actions">
                    <a href="${w.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-yt-listen">▶ YouTube</a>
                    <a href="${w.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-spotify-listen">♫ Spotify</a>
                    <a href="${w.freeArchiveUrl}" target="_blank" rel="noopener noreferrer" class="btn-free-listen">🎧 ${w.freeLabel}</a>
                  </div>
                </div>
              `).join("")}
            </div>
          ` : "";
          return `
          <div class="master-period-card">
            <div class="period-name">Etapa ${idx + 1}: ${p.name}</div>
            <p class="period-focus"><strong>Contexto de Vida:</strong> ${p.focus}</p>
            <div class="period-proposal-box">
              <strong>¿Qué propone en esta etapa?</strong><br>
              ${p.proposal}
            </div>
            ${recWorksHtml}
          </div>
        `;
        }).join("") : `<p style="color:var(--text-muted)">Etapas integradas en manuscritos litúrgicos.</p>`;

        card.innerHTML = `
          <div class="card-tilt-inner">
            <div class="master-header">
              <div class="master-big-portrait">
                <img src="${master.image}" alt="Retrato histórico de ${master.name} (${master.years}), ${era.name}" loading="lazy"
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'exponent-portrait-fallback\\' style=\\'font-size:2rem\\'>${master.initials}</div>'">
              </div>
              <div class="master-title-box">
                <span class="editorial-badge" style="margin-bottom:0.4rem; color:${era.accent}; border-color:${era.accent}">${era.name.toUpperCase()} (${era.period})</span>
                <h3>${master.name}</h3>
                <div class="master-meta-row">
                  <span>${master.years}</span> • 
                  <strong style="color:var(--gold-primary)">${master.role}</strong>
                </div>
                <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.55; max-width:850px;">
                  ${master.whyExponent}
                </p>
                <div style="margin-top:1rem; display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center;">
                  <button class="btn-audio-motif" data-motif="${master.motifKey}">
                    <span>▶</span> Escuchar Motivo Orquestal (${master.masterpiece.split("/")[0].trim()})
                  </button>
                  ${SUBPAGE_MAP[master.id] ? `<a href="${SUBPAGE_MAP[master.id]}" class="btn-catalog-subpage">📖 Ver Catálogo Dedicado →</a>` : ""}
                </div>
              </div>
            </div>

            <!-- Catálogo Propio del Compositor -->
            <div class="master-catalog-section">
              <h5>📚 Catálogo Propio: ${master.catalogInfo ? master.catalogInfo.systemName : 'Catálogo Histórico'}</h5>
              <p style="font-size:0.88rem; color:#cbd5e1; line-height:1.55; margin-bottom:0.8rem;">
                ${master.catalogInfo ? master.catalogInfo.structure : 'Obras catalogadas en códices manuscritos monásticos.'}
              </p>
              <div style="font-size:0.82rem; color:var(--gold-light);">
                <strong>Obras Maestras Canónicas:</strong> 
                ${master.catalogInfo ? master.catalogInfo.keyWorks.join(" • ") : master.masterpiece}
              </div>
            </div>

            <!-- Etapas de su Obra y Qué Propone en Cada Una -->
            <h5 style="font-family:var(--font-serif-display); font-size:1.15rem; color:#ffffff; margin-bottom:0.6rem;">
              Etapas Creativas y Evolución de su Pensamiento Musical
            </h5>
            <div class="master-periods-grid">
              ${periodsHtml}
            </div>
          </div>
        `;

        mastersFullContainer.appendChild(card);
      });
    });

    // Filtros por época en la página de exponentes
    timelineFilterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        timelineFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        const cards = mastersFullContainer.querySelectorAll(".master-composer-card");
        cards.forEach(c => {
          if (filter === "all" || c.dataset.eraId === filter) {
            c.style.display = "block";
          } else {
            c.style.display = "none";
          }
        });
      });
    });
  }

  // ==========================================================================
  // 8. MOTOR DE AUDIO Y VISUALIZADOR EN TIEMPO REAL
  // ==========================================================================
  function setupAudioInteractivity() {
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

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-audio-motif");
      if (btn) {
        const motifKey = btn.dataset.motif;
        if (motifKey) {
          synth.playMotif(motifKey);
        }
      }
    });

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
        autoSoundtrackEnabled = false;
        clearTimeout(autoSyncTimer);
        updateAutoSyncUI();
        synth.stop();
      });
    }

    if (deckAutoSyncBtn) {
      deckAutoSyncBtn.addEventListener("click", () => {
        autoSoundtrackEnabled = !autoSoundtrackEnabled;
        updateAutoSyncUI();
        if (autoSoundtrackEnabled) {
          synth.playMotif(currentSectionMotif || currentPlayingMotif || "beethoven-5th");
        } else {
          clearTimeout(autoSyncTimer);
          synth.stop();
        }
      });
    }

    if (headerAudioPill) {
      headerAudioPill.addEventListener("click", () => {
        if (synth.isPlaying) {
          autoSoundtrackEnabled = false;
          clearTimeout(autoSyncTimer);
          updateAutoSyncUI();
          synth.stop();
        } else {
          autoSoundtrackEnabled = true;
          updateAutoSyncUI();
          synth.playMotif(currentSectionMotif || currentPlayingMotif || "beethoven-5th");
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.code === "KeyP") {
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
        canvasCtx.fillStyle = "rgba(229, 184, 92, 0.25)";
        canvasCtx.fillRect(0, height / 2 - 1, width, 2);
      }
    }

    drawVisualizer();
  }

  // ==========================================================================
  // 7B. GUÍA DE AUDICIÓN INTERACTIVA POR AUTOR Y ETAPA (INDEX.HTML & SUBPÁGINAS)
  // ==========================================================================
  function buildStagesListeningHtml(composer, era) {
    const stagesHtml = (composer.periods || []).map((p, idx) => {
      const works = p.recommendedWorks || [];
      return `
        <div class="lg-stage-card">
          <div>
            <span class="lg-stage-badge">Etapa ${idx + 1} · ${era.name}</span>
            <h5 class="lg-stage-title">${p.name}</h5>
          </div>
          <div class="lg-stage-proposal">${p.proposal}</div>
          <div class="lg-works-list">
            ${works.map(w => `
              <div class="lg-work-item">
                <div class="lg-work-top">
                  <div class="lg-work-title">${w.title}</div>
                  <span class="lg-work-duration">${w.duration}</span>
                </div>
                <p class="lg-work-why">${w.whyListen}</p>
                <div class="lg-work-actions">
                  <a href="${w.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-yt-listen">▶ YouTube</a>
                  <a href="${w.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-spotify-listen">♫ Spotify</a>
                  <a href="${w.freeArchiveUrl}" target="_blank" rel="noopener noreferrer" class="btn-free-listen">🎧 ${w.freeLabel}</a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
    return stagesHtml;
  }

  function renderListeningGuideSection() {
    const selectorEl = document.getElementById("lg-composer-selector");
    const spotlightEl = document.getElementById("lg-spotlight-panel");
    if (!selectorEl || !spotlightEl || typeof MUSIC_DATA === "undefined") return;

    const allEntries = [];
    MUSIC_DATA.eras.forEach(era => {
      era.exponents.forEach(exp => allEntries.push({ exp, era }));
    });
    if (allEntries.length === 0) return;

    let activeId = "beethoven";
    if (!allEntries.some(e => e.exp.id === activeId)) {
      activeId = allEntries[0].exp.id;
    }

    function renderSpotlight(composerId) {
      const found = allEntries.find(e => e.exp.id === composerId) || allEntries[0];
      const { exp, era } = found;
      const subpageUrl = SUBPAGE_MAP[exp.id];

      spotlightEl.innerHTML = `
        <div class="lg-spotlight-header">
          <div class="lg-spotlight-portrait">
            <img src="${exp.image}" alt="${exp.name}">
          </div>
          <div class="lg-spotlight-meta" style="flex:1;">
            <span class="editorial-badge" style="margin-bottom:0.35rem; color:${era.accent}; border-color:${era.accent}">${era.name} (${era.period})</span>
            <h4>${exp.name} <span style="font-size:0.95rem; color:var(--text-muted); font-family:var(--font-sans); font-weight:400;">(${exp.years})</span></h4>
            <p>${exp.whyExponent}</p>
            <div style="margin-top:0.85rem; display:flex; gap:0.7rem; flex-wrap:wrap; align-items:center;">
              <button class="btn-audio-motif" data-motif="${exp.motifKey}"><span>▶</span> Escuchar Motivo Integrado</button>
              ${subpageUrl ? `<a href="${subpageUrl}" class="btn-catalog-subpage">📖 Abrir Catálogo Completo →</a>` : ""}
            </div>
          </div>
        </div>
        <div class="lg-stages-grid">
          ${buildStagesListeningHtml(exp, era)}
        </div>
      `;
    }

    selectorEl.innerHTML = allEntries.map(({ exp }) => `
      <button type="button" class="lg-composer-chip ${exp.id === activeId ? "active" : ""}" data-lg-id="${exp.id}">
        <img src="${exp.image}" alt="${exp.name}" loading="lazy">
        <span>${exp.name.split("(")[0].trim()}</span>
      </button>
    `).join("");

    selectorEl.querySelectorAll(".lg-composer-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        selectorEl.querySelectorAll(".lg-composer-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeId = chip.dataset.lgId;
        renderSpotlight(activeId);
      });
    });

    renderSpotlight(activeId);
  }

  function renderSubpageListeningGuide() {
    const mount = document.getElementById("subpage-listening-guide");
    if (!mount || typeof MUSIC_DATA === "undefined") return;
    const composerId = mount.dataset.composerId;
    if (!composerId) return;

    let found = null;
    MUSIC_DATA.eras.forEach(era => {
      era.exponents.forEach(exp => {
        if (exp.id === composerId) found = { exp, era };
      });
    });
    if (!found) return;

    mount.innerHTML = `
      <div class="section-header" style="margin-bottom:2rem;">
        <div class="editorial-badge">🎧 Guía de Audición Recomendada • YouTube &amp; Audio Libre</div>
        <h3 class="section-title" style="font-size:clamp(1.6rem, 3vw, 2.3rem);">Qué Escuchar para Entender Cada Etapa de ${found.exp.name}</h3>
        <p class="section-desc">
          Obras esenciales seleccionadas por periodo creativo con guía de escucha y enlaces directos gratuitos en YouTube, Spotify e Internet Archive Audio.
        </p>
      </div>
      <div class="lg-stages-grid">
        ${buildStagesListeningHtml(found.exp, found.era)}
      </div>
    `;
  }

  // ==========================================================================
  // 7C. MOTOR DE FONDO CRONOLÓGICO CONTINUO (VIAJE EN EL TIEMPO)
  // ==========================================================================
  let setActiveTimeEra = () => {};

  function initTimeJourneyBackdrop() {
    const isSubpage = window.location.pathname.includes("/exponentes/");
    const prefix = isSubpage ? "../" : "";

    const TIME_LAYERS = [
      { id: "hero",          period: "1,500 Años",  label: "Sala Sinfónica",  img: `${prefix}assets/hero-concert-hall.jpg` },
      { id: "medieval",      period: "c. 500–1400", label: "Medieval",        img: `${prefix}assets/eras/era-medieval.jpg` },
      { id: "renacimiento",  period: "1400–1600",   label: "Renacimiento",    img: `${prefix}assets/eras/era-renacimiento.jpg` },
      { id: "barroco",       period: "1600–1750",   label: "Barroco",         img: `${prefix}assets/eras/era-barroco.jpg` },
      { id: "clasicismo",    period: "1750–1820",   label: "Clasicismo",      img: `${prefix}assets/eras/era-clasicismo.jpg` },
      { id: "romanticismo",  period: "1815–1910",   label: "Romanticismo",    img: `${prefix}assets/eras/era-romanticismo.jpg` },
      { id: "siglo-xx",      period: "1890–1975",   label: "Siglo XX",        img: `${prefix}assets/eras/era-siglo-xx.jpg` },
      { id: "contemporanea", period: "1975–Hoy",    label: "Contemporánea",   img: `${prefix}assets/eras/era-contemporanea.jpg` }
    ];

    const canvas = document.createElement("div");
    canvas.className = "time-journey-canvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.innerHTML = TIME_LAYERS.map((l, idx) =>
      `<div class="tj-layer ${idx === 0 ? "active" : ""}" data-tj-id="${l.id}" style="background-image:url('${l.img}')"></div>`
    ).join("") + `<div class="tj-scrim"></div>`;
    document.body.prepend(canvas);

    const hud = document.createElement("div");
    hud.className = "time-journey-hud";
    hud.innerHTML = `
      <div class="tj-hud-thumb" id="tj-hud-thumb" style="background-image:url('${TIME_LAYERS[0].img}')"></div>
      <div class="tj-hud-text">
        <span class="tj-hud-period" id="tj-hud-period">${TIME_LAYERS[0].period}</span>
        <span class="tj-hud-era" id="tj-hud-era">${TIME_LAYERS[0].label}</span>
      </div>
    `;
    document.body.appendChild(hud);

    let currentEraId = "hero";
    setActiveTimeEra = (eraId) => {
      const target = TIME_LAYERS.find(l => l.id === eraId) || TIME_LAYERS[0];
      if (target.id === currentEraId) return;
      currentEraId = target.id;
      canvas.querySelectorAll(".tj-layer").forEach(el => {
        el.classList.toggle("active", el.dataset.tjId === target.id);
      });
      const thumb = document.getElementById("tj-hud-thumb");
      const per = document.getElementById("tj-hud-period");
      const lbl = document.getElementById("tj-hud-era");
      if (thumb) thumb.style.backgroundImage = `url('${target.img}')`;
      if (per) per.textContent = target.period;
      if (lbl) lbl.textContent = target.label;
    };

    // Si es subpágina de un compositor, fijar su época histórica automáticamente
    const subMount = document.getElementById("subpage-listening-guide");
    if (subMount && typeof MUSIC_DATA !== "undefined") {
      const cid = subMount.dataset.composerId;
      MUSIC_DATA.eras.forEach(era => {
        if (era.exponents.some(e => e.id === cid)) {
          setActiveTimeEra(era.id);
        }
      });
      return;
    }

    // Mapeo de secciones + entradas del timeline para progresión continua en el tiempo
    const SECTION_ERA_MAP = {
      "que-es": "medieval",
      "nomenclatura": "barroco",
      "titanes": "clasicismo",
      "historias": "romanticismo",
      "guia-audicion": "siglo-xx",
      "cine-actualidad": "contemporanea",
      "por-que-escuchar": "contemporanea"
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.eraId) {
          setActiveTimeEra(el.dataset.eraId);
          scheduleSectionMotif(el.dataset.eraId);
        } else if (el.classList.contains("hero-section")) {
          setActiveTimeEra("hero");
          scheduleSectionMotif("hero");
        } else if (el.id && SECTION_ERA_MAP[el.id]) {
          setActiveTimeEra(SECTION_ERA_MAP[el.id]);
          scheduleSectionMotif(el.id);
        }
      });
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0 });

    const heroEl = document.querySelector(".hero-section");
    if (heroEl) obs.observe(heroEl);
    document.querySelectorAll(".era-entry[data-era-id], .master-composer-card[data-era-id]").forEach(el => obs.observe(el));
    Object.keys(SECTION_ERA_MAP).forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) obs.observe(sec);
    });
  }

  // ==========================================================================
  // INICIALIZACIÓN
  // ==========================================================================
  renderTimeline();
  initDecoder();
  renderCatalogsAndTitans();
  renderHistoryStories();
  renderMastersFullPage();
  renderListeningGuideSection();
  renderSubpageListeningGuide();
  initTimeJourneyBackdrop();
  initTiltAndSpotlight();
  setupAudioInteractivity();
});
