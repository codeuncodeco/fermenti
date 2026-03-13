/**
 * Fermenti UI - Theme Picker Page
 * Rich, interactive theme customization with preset themes, color pickers,
 * Google Fonts selector, icon library switcher, and live preview.
 */

export default {
  name: 'theme-picker-page',

  data() {
    return {
      activePreset: 'classic',
      presets: {
        classic: {
          name: 'Fermenti Classic',
          description: 'Warm, earthy tones inspired by artisan craft',
          vibe: 'Warm, earthy',
          colors: {
            bgPrimary: '#FAF7F2',
            bgSecondary: '#F2ECE3',
            bgCard: '#FFFFFF',
            accentBrine: '#C4A35A',
            textPrimary: '#2C1810',
            textMuted: '#A89485',
          },
        },
        ocean: {
          name: 'Ocean Breeze',
          description: 'Cool, calm palette evoking coastal serenity',
          vibe: 'Cool, calm',
          colors: {
            bgPrimary: '#F0F7FA',
            bgSecondary: '#E0EEF5',
            bgCard: '#FFFFFF',
            accentBrine: '#2B8A9E',
            textPrimary: '#1A2E3B',
            textMuted: '#6B8A99',
          },
        },
        forest: {
          name: 'Forest Floor',
          description: 'Natural greens drawn from woodland depths',
          vibe: 'Natural',
          colors: {
            bgPrimary: '#F2F5F0',
            bgSecondary: '#E5EBE0',
            bgCard: '#FFFFFF',
            accentBrine: '#5A8C5A',
            textPrimary: '#1C2E1C',
            textMuted: '#6B8B6B',
          },
        },
        sunset: {
          name: 'Sunset Glow',
          description: 'Vibrant warmth of golden hour radiance',
          vibe: 'Vibrant',
          colors: {
            bgPrimary: '#FFF5ED',
            bgSecondary: '#FFE8D6',
            bgCard: '#FFFFFF',
            accentBrine: '#E07A5F',
            textPrimary: '#3D1F10',
            textMuted: '#9B7A6A',
          },
        },
        minimal: {
          name: 'Minimal Ink',
          description: 'Clean monochrome for distraction-free focus',
          vibe: 'Clean',
          colors: {
            bgPrimary: '#FFFFFF',
            bgSecondary: '#F5F5F5',
            bgCard: '#FFFFFF',
            accentBrine: '#333333',
            textPrimary: '#111111',
            textMuted: '#888888',
          },
        },
        berry: {
          name: 'Berry Harvest',
          description: 'Rich purple hues of ripe autumn berries',
          vibe: 'Rich',
          colors: {
            bgPrimary: '#F5F0F7',
            bgSecondary: '#EBE0F0',
            bgCard: '#FFFFFF',
            accentBrine: '#7B4B94',
            textPrimary: '#2E1A3B',
            textMuted: '#8B7B99',
          },
        },
      },
      colors: {
        bgPrimary: '#FAF7F2',
        bgSecondary: '#F2ECE3',
        bgCard: '#FFFFFF',
        accentBrine: '#C4A35A',
        textPrimary: '#2C1810',
        textMuted: '#A89485',
      },
      fonts: {
        serif: 'Instrument Serif',
        sans: 'DM Sans',
        mono: 'JetBrains Mono',
      },
      serifFonts: [
        'Instrument Serif',
        'Playfair Display',
        'Merriweather',
        'Lora',
        'Crimson Text',
        'EB Garamond',
        'Cormorant Garamond',
        'Bitter',
      ],
      sansFonts: [
        'DM Sans',
        'Inter',
        'Poppins',
        'Nunito',
        'Outfit',
        'Work Sans',
        'Source Sans 3',
        'Rubik',
      ],
      monoFonts: [
        'JetBrains Mono',
        'Fira Code',
        'Source Code Pro',
        'IBM Plex Mono',
        'Space Mono',
        'Inconsolata',
      ],
      activeIconLibrary: 'builtin',
      iconLibraries: [
        { id: 'builtin', name: 'Builtin', description: 'Default SVG icons, always available' },
        { id: 'lucide', name: 'Lucide', description: 'Beautiful & consistent stroke icons', url: 'https://unpkg.com/lucide@latest', isScript: true },
        { id: 'bootstrap', name: 'Bootstrap Icons', description: 'Official Bootstrap icon set', url: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' },
        { id: 'tabler', name: 'Tabler Icons', description: 'Over 4000 free MIT-licensed icons', url: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css' },
        { id: 'phosphor', name: 'Phosphor Icons', description: 'Flexible icon family for any project', url: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css' },
        { id: 'material', name: 'Material Symbols', description: 'Google Material Design icons', url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' },
        { id: 'fontawesome', name: 'Font Awesome', description: 'The iconic SVG, font, and CSS toolkit', url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' },
      ],
      builtinIconNames: ['search', 'settings', 'star', 'heart', 'check', 'plus', 'edit', 'trash', 'filter', 'download'],
      externalIconSamples: {
        lucide: [
          { name: 'home', element: 'i', attr: 'data-lucide', value: 'home' },
          { name: 'search', element: 'i', attr: 'data-lucide', value: 'search' },
          { name: 'heart', element: 'i', attr: 'data-lucide', value: 'heart' },
          { name: 'star', element: 'i', attr: 'data-lucide', value: 'star' },
          { name: 'settings', element: 'i', attr: 'data-lucide', value: 'settings' },
          { name: 'user', element: 'i', attr: 'data-lucide', value: 'user' },
          { name: 'bell', element: 'i', attr: 'data-lucide', value: 'bell' },
          { name: 'calendar', element: 'i', attr: 'data-lucide', value: 'calendar' },
          { name: 'mail', element: 'i', attr: 'data-lucide', value: 'mail' },
          { name: 'camera', element: 'i', attr: 'data-lucide', value: 'camera' },
        ],
        bootstrap: ['bi-house', 'bi-search', 'bi-heart', 'bi-star', 'bi-gear', 'bi-person', 'bi-bell', 'bi-calendar', 'bi-envelope', 'bi-camera'],
        tabler: ['ti ti-home', 'ti ti-search', 'ti ti-heart', 'ti ti-star', 'ti ti-settings', 'ti ti-user', 'ti ti-bell', 'ti ti-calendar', 'ti ti-mail', 'ti ti-camera'],
        phosphor: ['ph ph-house', 'ph ph-magnifying-glass', 'ph ph-heart', 'ph ph-star', 'ph ph-gear', 'ph ph-user', 'ph ph-bell', 'ph ph-calendar-blank', 'ph ph-envelope-simple', 'ph ph-camera'],
        material: ['home', 'search', 'favorite', 'star', 'settings', 'person', 'notifications', 'calendar_today', 'mail', 'photo_camera'],
        fontawesome: ['fa-solid fa-house', 'fa-solid fa-magnifying-glass', 'fa-solid fa-heart', 'fa-solid fa-star', 'fa-solid fa-gear', 'fa-solid fa-user', 'fa-solid fa-bell', 'fa-solid fa-calendar', 'fa-solid fa-envelope', 'fa-solid fa-camera'],
      },
      previewToggle: false,
      previewProgress: 65,
      copied: '',
    };
  },

  inject: {
    builtinIcons: { from: 'builtinIcons', default: () => ({}) },
    renderIconSVG: { from: 'renderIconSVG', default: () => () => '' },
  },

  computed: {
    colorFields() {
      return [
        { key: 'bgPrimary', label: 'Primary Background', cssVar: '--fi-bg-primary' },
        { key: 'bgSecondary', label: 'Secondary Background', cssVar: '--fi-bg-secondary' },
        { key: 'bgCard', label: 'Card Background', cssVar: '--fi-bg-card' },
        { key: 'accentBrine', label: 'Accent Color', cssVar: '--fi-accent-brine' },
        { key: 'textPrimary', label: 'Text Color', cssVar: '--fi-text-primary' },
        { key: 'textMuted', label: 'Text Muted Color', cssVar: '--fi-text-muted' },
      ];
    },

    cssVariablesExport() {
      return `:root {
  --fi-bg-primary: ${this.colors.bgPrimary};
  --fi-bg-secondary: ${this.colors.bgSecondary};
  --fi-bg-card: ${this.colors.bgCard};
  --fi-accent-brine: ${this.colors.accentBrine};
  --fi-text-primary: ${this.colors.textPrimary};
  --fi-text-muted: ${this.colors.textMuted};
}`;
    },

    cdnLinksExport() {
      const lines = [];
      // Font links
      const fontFamilies = [];
      if (this.fonts.serif !== 'Instrument Serif') {
        fontFamilies.push(this.fonts.serif.replace(/ /g, '+'));
      }
      if (this.fonts.sans !== 'DM Sans') {
        fontFamilies.push(this.fonts.sans.replace(/ /g, '+'));
      }
      if (this.fonts.mono !== 'JetBrains Mono') {
        fontFamilies.push(this.fonts.mono.replace(/ /g, '+'));
      }
      // Always include the defaults
      fontFamilies.unshift('Instrument+Serif:ital@0;1');
      fontFamilies.unshift('DM+Sans:wght@400;500;600;700');
      fontFamilies.unshift('JetBrains+Mono:wght@400;500;600');

      const uniqueFamilies = [...new Set(fontFamilies)];
      const fontUrl = `https://fonts.googleapis.com/css2?${uniqueFamilies.map(f => 'family=' + f).join('&')}&display=swap`;
      lines.push(`<link rel="preconnect" href="https://fonts.googleapis.com" />`);
      lines.push(`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`);
      lines.push(`<link href="${fontUrl}" rel="stylesheet" />`);

      // Icon library
      if (this.activeIconLibrary !== 'builtin') {
        const lib = this.iconLibraries.find(l => l.id === this.activeIconLibrary);
        if (lib && lib.url) {
          if (lib.isScript) {
            lines.push(`<script src="${lib.url}"><\/script>`);
          } else {
            lines.push(`<link rel="stylesheet" href="${lib.url}" />`);
          }
        }
      }
      return lines.join('\n');
    },
  },

  methods: {
    applyPreset(presetKey) {
      this.activePreset = presetKey;
      const preset = this.presets[presetKey];
      if (!preset) return;
      this.colors = { ...preset.colors };
      this.applyColors();
    },

    applyColors() {
      this.injectThemeStyle();
    },

    onColorChange(key, event) {
      this.colors[key] = event.target.value;
      this.activePreset = '';
      this.applyColors();
    },

    resetToPreset() {
      if (this.activePreset) {
        this.applyPreset(this.activePreset);
      } else {
        this.applyPreset('classic');
      }
    },

    loadFont(fontName) {
      const familyParam = fontName.replace(/ /g, '+');
      const id = `font-${familyParam}`;
      if (document.getElementById(id)) return;
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@400;500;600;700&display=swap`;
      document.head.appendChild(link);
    },

    onFontChange(category, event) {
      const fontName = event.target.value;
      this.fonts[category] = fontName;
      this.loadFont(fontName);
      this.injectThemeStyle();
    },

    injectThemeStyle() {
      let style = document.getElementById('fi-theme-overrides');
      if (!style) {
        style = document.createElement('style');
        style.id = 'fi-theme-overrides';
        document.head.appendChild(style);
      }
      style.textContent = `
        :root:not(.dark) {
          --fi-bg-primary: ${this.colors.bgPrimary};
          --fi-bg-secondary: ${this.colors.bgSecondary};
          --fi-bg-card: ${this.colors.bgCard};
          --fi-accent-brine: ${this.colors.accentBrine};
          --fi-text-primary: ${this.colors.textPrimary};
          --fi-text-muted: ${this.colors.textMuted};
          --fi-font-serif: "${this.fonts.serif}", Georgia, serif;
          --fi-font-sans: "${this.fonts.sans}", system-ui, sans-serif;
          --fi-font-mono: "${this.fonts.mono}", monospace;
        }
        .dark {
          --fi-font-serif: "${this.fonts.serif}", Georgia, serif;
          --fi-font-sans: "${this.fonts.sans}", system-ui, sans-serif;
          --fi-font-mono: "${this.fonts.mono}", monospace;
        }
      `;
    },

    selectIconLibrary(libId) {
      this.activeIconLibrary = libId;
      const lib = this.iconLibraries.find(l => l.id === libId);
      if (!lib || libId === 'builtin') return;
      this.loadIconLibrary(lib);
    },

    loadIconLibrary(lib) {
      if (lib.isScript) {
        if (document.querySelector(`script[data-icon-lib="${lib.id}"]`)) return;
        const script = document.createElement('script');
        script.src = lib.url;
        script.dataset.iconLib = lib.id;
        script.onload = () => {
          if (window.lucide) {
            window.lucide.createIcons();
          }
        };
        document.head.appendChild(script);
      } else {
        if (document.querySelector(`link[data-icon-lib="${lib.id}"]`)) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = lib.url;
        link.dataset.iconLib = lib.id;
        document.head.appendChild(link);
      }
    },

    getBuiltinIconSVG(name) {
      const icon = this.builtinIcons[name];
      if (!icon) return '';
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="${icon.paths}"></path></svg>`;
    },

    getIconHTML(libId, iconRef) {
      if (libId === 'bootstrap') {
        return `<i class="${iconRef}" style="font-size:24px;"></i>`;
      }
      if (libId === 'tabler') {
        return `<i class="${iconRef}" style="font-size:24px;"></i>`;
      }
      if (libId === 'phosphor') {
        return `<i class="${iconRef}" style="font-size:24px;"></i>`;
      }
      if (libId === 'material') {
        return `<span class="material-symbols-outlined" style="font-size:24px;">${iconRef}</span>`;
      }
      if (libId === 'fontawesome') {
        return `<i class="${iconRef}" style="font-size:20px;"></i>`;
      }
      return '';
    },

    getIconLabel(libId, iconRef) {
      if (libId === 'bootstrap') return iconRef.replace('bi-', '');
      if (libId === 'tabler') return iconRef.replace('ti ti-', '');
      if (libId === 'phosphor') return iconRef.replace('ph ph-', '');
      if (libId === 'fontawesome') return iconRef.replace('fa-solid fa-', '');
      if (libId === 'material') return iconRef;
      return iconRef;
    },

    async copyToClipboard(text, label) {
      try {
        await navigator.clipboard.writeText(text);
        this.copied = label;
        setTimeout(() => { this.copied = ''; }, 2000);
      } catch (e) {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        this.copied = label;
        setTimeout(() => { this.copied = ''; }, 2000);
      }
    },

    presetSwatchColors(preset) {
      const c = preset.colors;
      return [c.bgPrimary, c.bgSecondary, c.accentBrine, c.textPrimary];
    },
  },

  mounted() {
    this.applyColors();
  },

  template: `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

      <!-- Page Header -->
      <div>
        <h1 class="font-serif text-3xl text-text-primary dark:text-dark-text mb-2">Theme Customizer</h1>
        <p class="text-text-muted dark:text-dark-text-secondary text-base">
          Personalize the look and feel of Fermenti UI. Pick a preset, fine-tune colors, swap fonts, and choose your icon library.
        </p>
      </div>

      <!-- ============================================
           A. Preset Themes
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <h2 class="font-serif text-xl text-text-primary dark:text-dark-text mb-1">Preset Themes</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">Click a theme to apply it instantly.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            v-for="(preset, key) in presets"
            :key="key"
            @click="applyPreset(key)"
            class="relative text-left rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-brine/50"
            :class="activePreset === key
              ? 'border-accent-brine ring-2 ring-accent-brine/30 shadow-md'
              : 'border-bg-secondary dark:border-dark-secondary hover:border-text-muted/30'"
          >
            <!-- Active indicator -->
            <div
              v-if="activePreset === key"
              class="absolute top-2 right-2 w-5 h-5 rounded-full bg-accent-brine flex items-center justify-center"
            >
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <!-- Swatch strip -->
            <div class="flex gap-1 mb-3">
              <div
                v-for="(color, ci) in presetSwatchColors(preset)"
                :key="ci"
                class="h-6 flex-1 rounded-md border border-black/5"
                :style="{ backgroundColor: color }"
              ></div>
            </div>

            <!-- Name & description -->
            <p class="font-sans font-semibold text-sm text-text-primary dark:text-dark-text">{{ preset.name }}</p>
            <p class="text-xs text-text-muted dark:text-dark-text-secondary mt-0.5">{{ preset.description }}</p>
            <span class="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-bg-secondary dark:bg-dark-secondary text-text-muted dark:text-dark-text-secondary">
              {{ preset.vibe }}
            </span>
          </button>
        </div>
      </section>

      <!-- ============================================
           B. Color Customizer
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <div class="flex items-center justify-between mb-1">
          <h2 class="font-serif text-xl text-text-primary dark:text-dark-text">Color Customizer</h2>
          <button
            @click="resetToPreset"
            class="text-xs font-medium text-accent-brine hover:text-accent-brine/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-bg-secondary dark:hover:bg-dark-secondary"
          >
            Reset to Preset
          </button>
        </div>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">Fine-tune individual colors. Changes apply in real-time.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="field in colorFields"
            :key="field.key"
            class="flex items-center gap-3"
          >
            <label class="relative cursor-pointer group">
              <input
                type="color"
                :value="colors[field.key]"
                @input="onColorChange(field.key, $event)"
                class="sr-only"
              />
              <div
                class="w-10 h-10 rounded-xl border-2 border-bg-secondary dark:border-dark-secondary shadow-sm group-hover:shadow-md transition-shadow"
                :style="{ backgroundColor: colors[field.key] }"
              ></div>
            </label>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-text-primary dark:text-dark-text">{{ field.label }}</p>
              <p class="text-xs text-text-muted dark:text-dark-text-secondary font-mono">{{ colors[field.key] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================
           C. Google Fonts Picker
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <h2 class="font-serif text-xl text-text-primary dark:text-dark-text mb-1">Typography</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">Choose fonts for each typographic role. Fonts are loaded from Google Fonts.</p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <!-- Serif -->
          <div>
            <label class="block text-sm font-medium text-text-primary dark:text-dark-text mb-1.5">Serif Font</label>
            <select
              :value="fonts.serif"
              @change="onFontChange('serif', $event)"
              class="w-full px-3 py-2 rounded-xl border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
            >
              <option v-for="f in serifFonts" :key="f" :value="f">{{ f }}</option>
            </select>
          </div>

          <!-- Sans -->
          <div>
            <label class="block text-sm font-medium text-text-primary dark:text-dark-text mb-1.5">Sans-Serif Font</label>
            <select
              :value="fonts.sans"
              @change="onFontChange('sans', $event)"
              class="w-full px-3 py-2 rounded-xl border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
            >
              <option v-for="f in sansFonts" :key="f" :value="f">{{ f }}</option>
            </select>
          </div>

          <!-- Mono -->
          <div>
            <label class="block text-sm font-medium text-text-primary dark:text-dark-text mb-1.5">Monospace Font</label>
            <select
              :value="fonts.mono"
              @change="onFontChange('mono', $event)"
              class="w-full px-3 py-2 rounded-xl border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
            >
              <option v-for="f in monoFonts" :key="f" :value="f">{{ f }}</option>
            </select>
          </div>
        </div>

        <!-- Font Preview -->
        <div class="rounded-xl border border-bg-secondary dark:border-dark-secondary p-5 bg-bg-primary/50 dark:bg-dark-primary/50 space-y-4">
          <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Font Preview</p>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-text-muted dark:text-dark-text-secondary mb-1">Serif</p>
            <p class="text-2xl text-text-primary dark:text-dark-text" :style="{ fontFamily: '\\'' + fonts.serif + '\\', Georgia, serif' }">
              The art of fermentation transforms simple ingredients.
            </p>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-text-muted dark:text-dark-text-secondary mb-1">Sans-Serif</p>
            <p class="text-base text-text-primary dark:text-dark-text" :style="{ fontFamily: '\\'' + fonts.sans + '\\', system-ui, sans-serif' }">
              Every culture develops its own signature fermented foods, shaped by local ingredients and climate. The microbial magic within creates complex flavors over time.
            </p>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-text-muted dark:text-dark-text-secondary mb-1">Monospace</p>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary" :style="{ fontFamily: '\\'' + fonts.mono + '\\', monospace' }">
              const culture = await ferment({ temp: 24, days: 7 });
            </p>
          </div>
        </div>
      </section>

      <!-- ============================================
           D. Icon Library Selector
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <h2 class="font-serif text-xl text-text-primary dark:text-dark-text mb-1">Icon Library</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">Select an icon library. External libraries are loaded from CDN on demand.</p>

        <!-- Library radio buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          <label
            v-for="lib in iconLibraries"
            :key="lib.id"
            class="relative flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-sm"
            :class="activeIconLibrary === lib.id
              ? 'border-accent-brine bg-accent-brine/5'
              : 'border-bg-secondary dark:border-dark-secondary hover:border-text-muted/30'"
          >
            <input
              type="radio"
              name="icon-library"
              :value="lib.id"
              :checked="activeIconLibrary === lib.id"
              @change="selectIconLibrary(lib.id)"
              class="mt-0.5 accent-accent-brine"
            />
            <div class="min-w-0">
              <p class="text-sm font-medium text-text-primary dark:text-dark-text">{{ lib.name }}</p>
              <p class="text-xs text-text-muted dark:text-dark-text-secondary">{{ lib.description }}</p>
            </div>
          </label>
        </div>

        <!-- Sample icons grid -->
        <div class="rounded-xl border border-bg-secondary dark:border-dark-secondary p-5 bg-bg-primary/50 dark:bg-dark-primary/50">
          <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-4">Sample Icons</p>

          <!-- Builtin icons -->
          <div v-if="activeIconLibrary === 'builtin'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="name in builtinIconNames"
              :key="name"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <div class="w-6 h-6 text-text-primary dark:text-dark-text" v-html="getBuiltinIconSVG(name)"></div>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ name }}</span>
            </div>
          </div>

          <!-- Lucide icons -->
          <div v-else-if="activeIconLibrary === 'lucide'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="icon in externalIconSamples.lucide"
              :key="icon.name"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <i :data-lucide="icon.value" class="w-6 h-6 text-text-primary dark:text-dark-text"></i>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ icon.name }}</span>
            </div>
          </div>

          <!-- Bootstrap Icons -->
          <div v-else-if="activeIconLibrary === 'bootstrap'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="cls in externalIconSamples.bootstrap"
              :key="cls"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <i :class="cls" class="text-text-primary dark:text-dark-text" style="font-size:24px;"></i>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ cls.replace('bi-', '') }}</span>
            </div>
          </div>

          <!-- Tabler Icons -->
          <div v-else-if="activeIconLibrary === 'tabler'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="cls in externalIconSamples.tabler"
              :key="cls"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <i :class="cls" class="text-text-primary dark:text-dark-text" style="font-size:24px;"></i>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ cls.replace('ti ti-', '') }}</span>
            </div>
          </div>

          <!-- Phosphor Icons -->
          <div v-else-if="activeIconLibrary === 'phosphor'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="cls in externalIconSamples.phosphor"
              :key="cls"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <i :class="cls" class="text-text-primary dark:text-dark-text" style="font-size:24px;"></i>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ cls.replace('ph ph-', '') }}</span>
            </div>
          </div>

          <!-- Material Symbols -->
          <div v-else-if="activeIconLibrary === 'material'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="name in externalIconSamples.material"
              :key="name"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <span class="material-symbols-outlined text-text-primary dark:text-dark-text" style="font-size:24px;">{{ name }}</span>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ name }}</span>
            </div>
          </div>

          <!-- Font Awesome -->
          <div v-else-if="activeIconLibrary === 'fontawesome'" class="grid grid-cols-5 sm:grid-cols-10 gap-3">
            <div
              v-for="cls in externalIconSamples.fontawesome"
              :key="cls"
              class="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 transition-colors"
            >
              <i :class="cls" class="text-text-primary dark:text-dark-text" style="font-size:20px;"></i>
              <span class="text-[10px] text-text-muted dark:text-dark-text-secondary truncate w-full text-center">{{ cls.replace('fa-solid fa-', '') }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================
           E. Live Preview Panel
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <h2 class="font-serif text-xl text-text-primary dark:text-dark-text mb-1">Live Preview</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">See how your theme looks on real components.</p>

        <div class="space-y-8">
          <!-- Buttons row -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Buttons</p>
            <div class="flex flex-wrap gap-3">
              <fi-button variant="primary">Primary</fi-button>
              <fi-button variant="secondary">Secondary</fi-button>
              <fi-button variant="outline">Outline</fi-button>
              <fi-button variant="danger">Danger</fi-button>
            </div>
          </div>

          <!-- Card -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Card</p>
            <fi-card class="max-w-md">
              <template #header>
                <div class="flex items-center justify-between">
                  <h3 class="font-serif text-lg text-text-primary dark:text-dark-text">Sourdough Starter</h3>
                  <fi-badge variant="success">Active</fi-badge>
                </div>
              </template>
              <p class="text-sm text-text-secondary dark:text-dark-text-secondary">
                A 3-year-old rye sourdough culture maintained at room temperature. Fed daily with equal parts flour and water.
              </p>
              <template #footer>
                <div class="flex gap-2">
                  <fi-button variant="primary" size="sm">View Details</fi-button>
                  <fi-button variant="ghost" size="sm">Share</fi-button>
                </div>
              </template>
            </fi-card>
          </div>

          <!-- Badges -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Badges</p>
            <div class="flex flex-wrap gap-2">
              <fi-badge variant="default">Default</fi-badge>
              <fi-badge variant="success">Success</fi-badge>
              <fi-badge variant="warning">Warning</fi-badge>
              <fi-badge variant="danger">Danger</fi-badge>
              <fi-badge variant="info">Info</fi-badge>
            </div>
          </div>

          <!-- Toggle -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Toggle</p>
            <fi-toggle v-model="previewToggle" label="Enable fermentation tracking" description="Monitor temperature and pH levels in real-time"></fi-toggle>
          </div>

          <!-- Progress -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Progress</p>
            <fi-progress :value="previewProgress" label="Fermentation Progress" show-label></fi-progress>
          </div>

          <!-- Input -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-3">Input</p>
            <div class="max-w-sm">
              <fi-input placeholder="Search cultures..." label="Culture Name"></fi-input>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================
           F. Export Section
           ============================================ -->
      <section class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6 sm:p-8">
        <h2 class="font-serif text-xl text-text-primary dark:text-dark-text mb-1">Export Theme</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-6">Copy your customizations to use in your own project.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <!-- CSS Variables Preview -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-2">CSS Custom Properties</p>
            <pre class="text-xs font-mono bg-bg-primary dark:bg-dark-primary rounded-xl border border-bg-secondary dark:border-dark-secondary p-4 overflow-x-auto text-text-primary dark:text-dark-text whitespace-pre-wrap">{{ cssVariablesExport }}</pre>
          </div>

          <!-- CDN Links Preview -->
          <div>
            <p class="text-xs uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-2">CDN Links</p>
            <pre class="text-xs font-mono bg-bg-primary dark:bg-dark-primary rounded-xl border border-bg-secondary dark:border-dark-secondary p-4 overflow-x-auto text-text-primary dark:text-dark-text whitespace-pre-wrap">{{ cdnLinksExport }}</pre>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <fi-button variant="primary" @click="copyToClipboard(cssVariablesExport, 'css')">
            <span v-if="copied === 'css'">Copied!</span>
            <span v-else>Copy CSS Variables</span>
          </fi-button>
          <fi-button variant="secondary" @click="copyToClipboard(cdnLinksExport, 'cdn')">
            <span v-if="copied === 'cdn'">Copied!</span>
            <span v-else>Copy CDN Links</span>
          </fi-button>
        </div>
      </section>

    </div>
  `,
};
