/**
 * Fermenti UI - FiIcon Component
 * Universal icon component supporting multiple icon libraries
 */

import { builtinIcons } from '../icons.js';

export default {
  name: 'fi-icon',

  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 'md',
      validator: v => ['sm', 'md', 'lg'].includes(v) || typeof v === 'number'
    },
    library: {
      type: String,
      default: 'builtin',
      validator: v => ['builtin', 'lucide', 'heroicons', 'material', 'fontawesome', 'bootstrap', 'tabler', 'phosphor'].includes(v)
    },
    weight: {
      type: String,
      default: 'regular',
      validator: v => ['thin', 'light', 'regular', 'bold', 'fill'].includes(v)
    },
    prefix: {
      type: String,
      default: 'fas',
      validator: v => ['fas', 'far', 'fab', 'fal', 'fad'].includes(v)
    }
  },

  computed: {
    sizeValue() {
      if (typeof this.size === 'number') return this.size;
      const sizes = { sm: 16, md: 20, lg: 24 };
      return sizes[this.size] || 20;
    },

    sizeClasses() {
      if (typeof this.size === 'number') return '';
      const classes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };
      return classes[this.size] || 'w-5 h-5';
    },

    sizeStyle() {
      if (typeof this.size === 'number') {
        return { width: this.size + 'px', height: this.size + 'px' };
      }
      return {};
    },

    builtinIcon() {
      // Look up by exact name first, then try camelCase conversion
      if (builtinIcons[this.name]) return builtinIcons[this.name];
      // Convert camelCase to kebab-case for lookup
      const kebab = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      return builtinIcons[kebab] || null;
    },

    faClasses() {
      // Convert camelCase to kebab-case for Font Awesome
      const kebab = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      return this.prefix + ' fa-' + kebab;
    },

    phosphorClasses() {
      const kebab = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      const weightSuffix = this.weight === 'regular' ? '' : '-' + this.weight;
      return 'ph' + weightSuffix + ' ph-' + kebab;
    },

    tablerClasses() {
      const kebab = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      return 'ti ti-' + kebab;
    },

    bootstrapClasses() {
      const kebab = this.name.replace(/([A-Z])/g, '-$1').toLowerCase();
      return 'bi bi-' + kebab;
    }
  },

  mounted() {
    // For Lucide icons, call createIcons after mount
    if (this.library === 'lucide' && window.lucide) {
      this.$nextTick(() => {
        window.lucide.createIcons({ nodes: [this.$el] });
      });
    }
  },

  updated() {
    if (this.library === 'lucide' && window.lucide) {
      this.$nextTick(() => {
        window.lucide.createIcons({ nodes: [this.$el] });
      });
    }
  },

  template: `
    <template v-if="library === 'builtin'">
      <svg
        v-if="builtinIcon"
        :class="sizeClasses"
        :style="sizeStyle"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :viewBox="builtinIcon.viewBox"
        :aria-label="name + ' icon'"
        role="img"
      >
        <path :d="builtinIcon.paths" />
      </svg>
    </template>
    <template v-else-if="library === 'lucide'">
      <i :data-lucide="name" :class="sizeClasses" :style="sizeStyle" role="img" :aria-label="name + ' icon'"></i>
    </template>
    <template v-else-if="library === 'material'">
      <span
        class="material-symbols-outlined"
        :style="{ fontSize: sizeValue + 'px', width: sizeValue + 'px', height: sizeValue + 'px', lineHeight: sizeValue + 'px' }"
        role="img"
        :aria-label="name + ' icon'"
      >{{ name }}</span>
    </template>
    <template v-else-if="library === 'fontawesome'">
      <i :class="faClasses" :style="{ fontSize: sizeValue + 'px' }" role="img" :aria-label="name + ' icon'"></i>
    </template>
    <template v-else-if="library === 'bootstrap'">
      <i :class="bootstrapClasses" :style="{ fontSize: sizeValue + 'px' }" role="img" :aria-label="name + ' icon'"></i>
    </template>
    <template v-else-if="library === 'tabler'">
      <i :class="tablerClasses" :style="{ fontSize: sizeValue + 'px' }" role="img" :aria-label="name + ' icon'"></i>
    </template>
    <template v-else-if="library === 'phosphor'">
      <i :class="phosphorClasses" :style="{ fontSize: sizeValue + 'px' }" role="img" :aria-label="name + ' icon'"></i>
    </template>
    <template v-else-if="library === 'heroicons'">
      <svg
        v-if="builtinIcon"
        :class="sizeClasses"
        :style="sizeStyle"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :viewBox="builtinIcon.viewBox"
        role="img"
        :aria-label="name + ' icon'"
      >
        <path :d="builtinIcon.paths" />
      </svg>
    </template>
  `
};
