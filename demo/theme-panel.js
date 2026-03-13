/**
 * Fermenti UI - Floating Theme Panel
 * A compact, fixed panel that floats from the header next to the dark mode toggle.
 * Provides preset themes, color customization, font picker, and export — all with live preview.
 */

export default {
  name: 'fi-theme-panel',

  props: {
    open: { type: Boolean, default: false },
  },

  emits: ['update:open'],

  data() {
    return {
      activeTab: 'presets',
      activePreset: 'classic',
      presets: {
        classic: {
          name: 'Fermenti Classic',
          vibe: 'Warm, earthy',
          colors: {
            bgPrimary: '#FAF7F2', bgSecondary: '#F2ECE3', bgCard: '#FFFFFF',
            accentBrine: '#C4A35A', textPrimary: '#2C1810', textMuted: '#A89485',
          },
        },
        ocean: {
          name: 'Ocean Breeze',
          vibe: 'Cool, calm',
          colors: {
            bgPrimary: '#F0F7FA', bgSecondary: '#E0EEF5', bgCard: '#FFFFFF',
            accentBrine: '#2B8A9E', textPrimary: '#1A2E3B', textMuted: '#6B8A99',
          },
        },
        forest: {
          name: 'Forest Floor',
          vibe: 'Natural',
          colors: {
            bgPrimary: '#F2F5F0', bgSecondary: '#E5EBE0', bgCard: '#FFFFFF',
            accentBrine: '#5A8C5A', textPrimary: '#1C2E1C', textMuted: '#6B8B6B',
          },
        },
        sunset: {
          name: 'Sunset Glow',
          vibe: 'Vibrant',
          colors: {
            bgPrimary: '#FFF5ED', bgSecondary: '#FFE8D6', bgCard: '#FFFFFF',
            accentBrine: '#E07A5F', textPrimary: '#3D1F10', textMuted: '#9B7A6A',
          },
        },
        minimal: {
          name: 'Minimal Ink',
          vibe: 'Clean',
          colors: {
            bgPrimary: '#FFFFFF', bgSecondary: '#F5F5F5', bgCard: '#FFFFFF',
            accentBrine: '#333333', textPrimary: '#111111', textMuted: '#888888',
          },
        },
        berry: {
          name: 'Berry Harvest',
          vibe: 'Rich',
          colors: {
            bgPrimary: '#F5F0F7', bgSecondary: '#EBE0F0', bgCard: '#FFFFFF',
            accentBrine: '#7B4B94', textPrimary: '#2E1A3B', textMuted: '#8B7B99',
          },
        },
      },
      colors: {
        bgPrimary: '#FAF7F2', bgSecondary: '#F2ECE3', bgCard: '#FFFFFF',
        accentBrine: '#C4A35A', textPrimary: '#2C1810', textMuted: '#A89485',
      },
      fonts: {
        serif: 'Instrument Serif',
        sans: 'DM Sans',
        mono: 'JetBrains Mono',
      },
      serifFonts: ['Instrument Serif', 'Playfair Display', 'Merriweather', 'Lora', 'Crimson Text', 'EB Garamond', 'Cormorant Garamond', 'Bitter'],
      sansFonts: ['DM Sans', 'Inter', 'Poppins', 'Nunito', 'Outfit', 'Work Sans', 'Source Sans 3', 'Rubik'],
      monoFonts: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'IBM Plex Mono', 'Space Mono', 'Inconsolata'],
      copied: '',
    };
  },

  computed: {
    colorFields() {
      return [
        { key: 'bgPrimary', label: 'Background', cssVar: '--fi-bg-primary' },
        { key: 'bgSecondary', label: 'Secondary', cssVar: '--fi-bg-secondary' },
        { key: 'bgCard', label: 'Card', cssVar: '--fi-bg-card' },
        { key: 'accentBrine', label: 'Accent', cssVar: '--fi-accent-brine' },
        { key: 'textPrimary', label: 'Text', cssVar: '--fi-text-primary' },
        { key: 'textMuted', label: 'Muted', cssVar: '--fi-text-muted' },
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
  },

  methods: {
    close() {
      this.$emit('update:open', false);
    },

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
      // Use :root:not(.dark) so .dark {} in fermenti.css still wins in dark mode
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

    presetSwatchColors(preset) {
      const c = preset.colors;
      return [c.bgPrimary, c.bgSecondary, c.accentBrine, c.textPrimary];
    },

    async copyToClipboard(text, label) {
      try {
        await navigator.clipboard.writeText(text);
        this.copied = label;
        setTimeout(() => { this.copied = ''; }, 2000);
      } catch (e) {
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

    handleClickOutside(e) {
      if (this.open && this.$refs.panel && !this.$refs.panel.contains(e.target)) {
        // Check if click was on the toggle button (parent manages that)
        if (e.target.closest('[data-theme-toggle]')) return;
        this.close();
      }
    },
  },

  watch: {
    open(val) {
      if (val) {
        this.$nextTick(() => {
          document.addEventListener('click', this.handleClickOutside);
        });
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },

  template: `
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-1 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-1 scale-95"
    >
      <div
        v-if="open"
        ref="panel"
        class="absolute right-0 top-full mt-2 w-[380px] max-h-[calc(100vh-5rem)] overflow-y-auto rounded-2xl border border-bg-secondary dark:border-dark-secondary bg-bg-card dark:bg-dark-card shadow-2xl z-50"
      >
        <!-- Panel header -->
        <div class="sticky top-0 bg-bg-card/95 dark:bg-dark-card/95 backdrop-blur-sm border-b border-bg-secondary dark:border-dark-secondary px-4 py-3 flex items-center justify-between z-10">
          <h3 class="font-serif text-base text-text-primary dark:text-dark-text">Theme</h3>
          <button
            @click="close"
            class="p-1 rounded-lg hover:bg-bg-secondary dark:hover:bg-dark-secondary transition-colors text-text-muted dark:text-dark-text-secondary"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Tab navigation -->
        <div class="sticky top-[49px] bg-bg-card/95 dark:bg-dark-card/95 backdrop-blur-sm border-b border-bg-secondary dark:border-dark-secondary px-4 py-2 flex gap-1 z-10">
          <button
            v-for="tab in [
              { id: 'presets', label: 'Presets' },
              { id: 'colors', label: 'Colors' },
              { id: 'fonts', label: 'Fonts' },
              { id: 'export', label: 'Export' },
            ]"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150"
            :class="activeTab === tab.id
              ? 'bg-accent-brine text-white shadow-sm'
              : 'text-text-muted dark:text-dark-text-secondary hover:bg-bg-secondary dark:hover:bg-dark-secondary hover:text-text-primary dark:hover:text-dark-text'"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Panel body -->
        <div class="p-4">

          <!-- === PRESETS TAB === -->
          <div v-if="activeTab === 'presets'" class="space-y-2">
            <button
              v-for="(preset, key) in presets"
              :key="key"
              @click="applyPreset(key)"
              class="w-full text-left rounded-xl border-2 p-3 transition-all duration-150 hover:shadow-sm"
              :class="activePreset === key
                ? 'border-accent-brine ring-1 ring-accent-brine/30 shadow-sm'
                : 'border-bg-secondary dark:border-dark-secondary hover:border-text-muted/30'"
            >
              <div class="flex items-center gap-3">
                <!-- Swatches -->
                <div class="flex gap-0.5 shrink-0">
                  <div
                    v-for="(color, ci) in presetSwatchColors(preset)"
                    :key="ci"
                    class="w-5 h-5 rounded-md border border-black/5"
                    :style="{ backgroundColor: color }"
                  ></div>
                </div>
                <!-- Label -->
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-text-primary dark:text-dark-text leading-tight">{{ preset.name }}</p>
                  <p class="text-[10px] text-text-muted dark:text-dark-text-secondary">{{ preset.vibe }}</p>
                </div>
                <!-- Check -->
                <div v-if="activePreset === key" class="w-5 h-5 rounded-full bg-accent-brine flex items-center justify-center shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <!-- === COLORS TAB === -->
          <div v-if="activeTab === 'colors'" class="space-y-3">
            <div class="flex items-center justify-between mb-1">
              <p class="text-xs text-text-muted dark:text-dark-text-secondary">Changes apply live.</p>
              <button
                @click="resetToPreset"
                class="text-[10px] font-medium text-accent-brine hover:text-accent-brine/80 transition-colors px-2 py-1 rounded-lg hover:bg-bg-secondary dark:hover:bg-dark-secondary"
              >
                Reset
              </button>
            </div>
            <div
              v-for="field in colorFields"
              :key="field.key"
              class="flex items-center gap-3"
            >
              <label class="relative cursor-pointer group shrink-0">
                <input
                  type="color"
                  :value="colors[field.key]"
                  @input="onColorChange(field.key, $event)"
                  class="sr-only"
                />
                <div
                  class="w-8 h-8 rounded-lg border-2 border-bg-secondary dark:border-dark-secondary group-hover:shadow-md transition-shadow"
                  :style="{ backgroundColor: colors[field.key] }"
                ></div>
              </label>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-medium text-text-primary dark:text-dark-text">{{ field.label }}</p>
              </div>
              <code class="text-[10px] text-text-muted dark:text-dark-text-secondary font-mono">{{ colors[field.key] }}</code>
            </div>

            <!-- Live swatch strip -->
            <div class="mt-3 pt-3 border-t border-bg-secondary dark:border-dark-secondary">
              <p class="text-[10px] uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary mb-2">Palette</p>
              <div class="flex gap-1 h-8 rounded-lg overflow-hidden">
                <div v-for="field in colorFields" :key="field.key" class="flex-1" :style="{ backgroundColor: colors[field.key] }"></div>
              </div>
            </div>
          </div>

          <!-- === FONTS TAB === -->
          <div v-if="activeTab === 'fonts'" class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-text-primary dark:text-dark-text mb-1">Serif</label>
              <select
                :value="fonts.serif"
                @change="onFontChange('serif', $event)"
                class="w-full px-3 py-1.5 rounded-lg border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
              >
                <option v-for="f in serifFonts" :key="f" :value="f">{{ f }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-text-primary dark:text-dark-text mb-1">Sans-Serif</label>
              <select
                :value="fonts.sans"
                @change="onFontChange('sans', $event)"
                class="w-full px-3 py-1.5 rounded-lg border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
              >
                <option v-for="f in sansFonts" :key="f" :value="f">{{ f }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-text-primary dark:text-dark-text mb-1">Monospace</label>
              <select
                :value="fonts.mono"
                @change="onFontChange('mono', $event)"
                class="w-full px-3 py-1.5 rounded-lg border border-bg-secondary dark:border-dark-secondary bg-bg-primary dark:bg-dark-primary text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50"
              >
                <option v-for="f in monoFonts" :key="f" :value="f">{{ f }}</option>
              </select>
            </div>

            <!-- Compact font preview -->
            <div class="pt-3 border-t border-bg-secondary dark:border-dark-secondary space-y-2">
              <p class="text-[10px] uppercase tracking-wider font-semibold text-text-muted dark:text-dark-text-secondary">Preview</p>
              <p class="text-lg text-text-primary dark:text-dark-text" :style="{ fontFamily: '\\'' + fonts.serif + '\\', Georgia, serif' }">
                The art of fermentation.
              </p>
              <p class="text-sm text-text-primary dark:text-dark-text" :style="{ fontFamily: '\\'' + fonts.sans + '\\', system-ui, sans-serif' }">
                Every culture develops its own signature fermented foods.
              </p>
              <p class="text-xs text-text-muted dark:text-dark-text-secondary" :style="{ fontFamily: '\\'' + fonts.mono + '\\', monospace' }">
                const culture = await ferment();
              </p>
            </div>
          </div>

          <!-- === EXPORT TAB === -->
          <div v-if="activeTab === 'export'" class="space-y-4">
            <div>
              <p class="text-xs font-medium text-text-primary dark:text-dark-text mb-2">CSS Variables</p>
              <pre class="text-[10px] font-mono bg-bg-primary dark:bg-dark-primary rounded-lg border border-bg-secondary dark:border-dark-secondary p-3 overflow-x-auto text-text-primary dark:text-dark-text whitespace-pre-wrap leading-relaxed">{{ cssVariablesExport }}</pre>
            </div>
            <fi-button variant="primary" size="sm" @click="copyToClipboard(cssVariablesExport, 'css')" class="w-full">
              <span v-if="copied === 'css'">Copied!</span>
              <span v-else>Copy CSS Variables</span>
            </fi-button>
          </div>

        </div>
      </div>
    </transition>
  `,
};
