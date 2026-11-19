/**
 * ============================================================================
 * ODISEA CLÁSICA — SISTEMA DE INTERNACIONALIZACIÓN (i18n)
 * Soporte multilingüe: Español (ES), English (EN), Français (FR), Português (PT), Русский (RU), 中文 (ZH)
 * Arquitectura modular IN2TECHMX — Framework de Gobernanza y Rigor Técnico
 * ============================================================================
 */

(function () {
  'use strict';

  const SUPPORTED_LANGS = {
    'es': { name: 'Español', flag: '🇪🇸', label: 'ES', title: 'Cambiar a Español' },
    'en': { name: 'English', flag: '🇬🇧', label: 'EN', title: 'Switch to English' },
    'fr': { name: 'Français', flag: '🇫🇷', label: 'FR', title: 'Passer en Français' },
    'pt': { name: 'Português', flag: '🇵🇹', label: 'PT', title: 'Mudar para Português' },
    'ru': { name: 'Русский', flag: '🇷🇺', label: 'RU', title: 'Переключить на Русский' },
    'zh-CN': { name: '中文 (简体)', flag: '🇨🇳', label: 'ZH', title: '切换为简体中文' }
  };

  // 1. Contenedor invisible para el motor de traducción
  function ensureGoogleTranslateHost() {
    if (!document.getElementById('google_translate_element')) {
      const gt = document.createElement('div');
      gt.id = 'google_translate_element';
      gt.style.display = 'none';
      document.body.appendChild(gt);
    }
  }

  // 2. Callback global requerido por la API de Google Translate
  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,fr,pt,ru,zh-CN',
        autoDisplay: false
      }, 'google_translate_element');
    }
  };

  // 3. Inyección asíncrona del script del motor de traducción
  function loadTranslationScript() {
    if (!document.getElementById('google-translate-script')) {
      const s = document.createElement('script');
      s.id = 'google-translate-script';
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.head.appendChild(s);
    }
  }

  // 4. Leer idioma actual desde cookies o localStorage
  function getCurrentLang() {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/es\/([a-zA-Z\-]+)/);
    if (match && SUPPORTED_LANGS[match[1]]) {
      return match[1];
    }
    const stored = localStorage.getItem('odisea_lang');
    if (stored && SUPPORTED_LANGS[stored]) {
      return stored;
    }
    return 'es';
  }

  // 5. Establecer cookies para el motor de traducción
  function setTranslationCookie(targetLang) {
    const host = window.location.hostname;
    localStorage.setItem('odisea_lang', targetLang);

    if (targetLang === 'es') {
      // Limpiar cookies de traducción
      const expire = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans${expire}`;
      document.cookie = `googtrans${expire} domain=${host};`;
      if (host.includes('.')) {
        const rootDomain = host.split('.').slice(-2).join('.');
        document.cookie = `googtrans${expire} domain=.${rootDomain};`;
      }
    } else {
      const val = `/es/${targetLang}`;
      document.cookie = `googtrans=${val}; path=/;`;
      document.cookie = `googtrans=${val}; path=/; domain=${host};`;
      if (host.includes('.')) {
        const rootDomain = host.split('.').slice(-2).join('.');
        document.cookie = `googtrans=${val}; path=/; domain=.${rootDomain};`;
      }
    }
  }

  // 6. Manipular combo nativo de traducción si ya fue inyectado
  function triggerNativeCombo(targetLang) {
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = (targetLang === 'es') ? '' : targetLang;
      combo.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }

  // 7. Aplicar cambio de idioma
  function switchLanguage(targetLang) {
    if (!SUPPORTED_LANGS[targetLang]) targetLang = 'es';
    const prevLang = getCurrentLang();
    setTranslationCookie(targetLang);
    updateUI(targetLang);

    if (targetLang === 'es' && prevLang !== 'es') {
      // Para regresar a español nativo con fidelidad absoluta, recargamos
      window.location.reload();
      return;
    }

    const ok = triggerNativeCombo(targetLang);
    if (!ok) {
      // Si el combo aún no está listo en el DOM, recargamos para que el script lo aplique de inicio
      window.location.reload();
    }
  }

  // 8. Actualizar etiquetas de la interfaz
  function updateUI(lang) {
    const info = SUPPORTED_LANGS[lang] || SUPPORTED_LANGS['es'];
    
    document.querySelectorAll('.lang-current-label').forEach(el => {
      el.textContent = info.label;
    });

    document.querySelectorAll('.lang-current-flag').forEach(el => {
      el.textContent = info.flag;
    });

    document.querySelectorAll('.lang-opt-btn').forEach(btn => {
      const isAct = (btn.dataset.lang === lang);
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-selected', isAct ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-lang-pill').forEach(pill => {
      const isAct = (pill.dataset.lang === lang);
      pill.classList.toggle('active', isAct);
    });

    const rootHtml = document.documentElement;
    if (rootHtml) {
      rootHtml.setAttribute('lang', lang === 'zh-CN' ? 'zh' : lang);
    }
  }

  // 9. Inicializar controladores de eventos en el DOM
  document.addEventListener('DOMContentLoaded', () => {
    ensureGoogleTranslateHost();
    loadTranslationScript();

    const activeLang = getCurrentLang();
    updateUI(activeLang);

    // Configurar pills del menú móvil
    document.querySelectorAll('.mobile-lang-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        switchLanguage(pill.dataset.lang);
      });
    });

    // Configurar selectores multilingües
    document.querySelectorAll('.lang-selector-wrap').forEach(wrap => {
      const btn = wrap.querySelector('.lang-selector-btn');
      const menu = wrap.querySelector('.lang-dropdown-menu');
      if (!btn || !menu) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.toggle('show');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      menu.querySelectorAll('.lang-opt-btn').forEach(opt => {
        opt.addEventListener('click', () => {
          const target = opt.dataset.lang;
          menu.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
          switchLanguage(target);
        });
      });
    });

    // Cerrar al hacer clic fuera o con Escape
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang-selector-wrap')) {
        document.querySelectorAll('.lang-dropdown-menu.show').forEach(m => m.classList.remove('show'));
        document.querySelectorAll('.lang-selector-btn[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false'));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.lang-dropdown-menu.show').forEach(m => m.classList.remove('show'));
        document.querySelectorAll('.lang-selector-btn[aria-expanded="true"]').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          b.focus();
        });
      }
    });
  });

})();
