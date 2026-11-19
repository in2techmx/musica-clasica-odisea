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
  const headerAudioPill = document.getElementById("header-audio-pill");
  const headerAudioDot = document.getElementById("header-audio-dot");
  const visualizerCanvas = document.getElementById("audio-visualizer");
  const canvasCtx = visualizerCanvas ? visualizerCanvas.getContext("2d") : null;

  let currentPlayingMotif = "beethoven-5th";

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
              <img src="${exp.image}" alt="${exp.name}" class="exponent-portrait-img" loading="lazy"
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
                <img src="${titan.image}" alt="${titan.name}" class="exponent-portrait-img" loading="lazy"
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

    historyStoriesContainer.innerHTML = MUSIC_DATA.historicalChronologyStories.map(story => `
      <div class="story-card card-tilt">
        <div class="card-tilt-inner">
          <div class="story-badge-row">
            <span class="story-era-badge">${story.eraId.toUpperCase()}</span>
            <span class="story-event-tag">Hecho Histórico Real</span>
          </div>

          <h4 class="story-title">${story.title}</h4>
          <div class="story-historical-event">📌 ${story.historicalEvent}</div>
          <p class="story-impact">${story.impactOnMusic}</p>

          <div class="story-fact-box">
            <strong>¿Sabías que...?</strong>
            ${story.fascinatingFact}
          </div>
        </div>
      </div>
    `).join("");
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
                    <a href="${w.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-yt-listen">▶ Escuchar en YouTube</a>
                    <a href="${w.freeArchiveUrl}" target="_blank" rel="noopener noreferrer" class="btn-free-listen">🎼 ${w.freeLabel} (Gratis)</a>
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
                <img src="${master.image}" alt="${master.name}" loading="lazy"
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
        synth.stop();
      });
    }

    if (headerAudioPill) {
      headerAudioPill.addEventListener("click", () => {
        if (synth.isPlaying) {
          synth.stop();
        } else {
          synth.playMotif(currentPlayingMotif || "beethoven-5th");
        }
      });
    }

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
                  <a href="${w.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-yt-listen">▶ Escuchar en YouTube</a>
                  <a href="${w.freeArchiveUrl}" target="_blank" rel="noopener noreferrer" class="btn-free-listen">🎼 ${w.freeLabel} (Gratis)</a>
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
          Obras esenciales seleccionadas por periodo creativo con guía de escucha y enlaces directos gratuitos en YouTube e IMSLP / Internet Archive.
        </p>
      </div>
      <div class="lg-stages-grid">
        ${buildStagesListeningHtml(found.exp, found.era)}
      </div>
    `;
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
  initTiltAndSpotlight();
  setupAudioInteractivity();
});
