/**
 * Fermenti UI - FiButton Component
 * Button with variants, sizes, loading state, and icon slot
 */

export default {
  name: 'fi-button',

  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'ghost', 'danger', 'outline'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg'].includes(v)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  computed: {
    variantClasses() {
      const variants = {
        primary: 'bg-accent-brine text-white border border-accent-brine/30 shadow-warm hover:shadow-warm-lg hover:brightness-110 active:shadow-warm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brine/50 focus-visible:ring-offset-2',
        secondary: 'bg-bg-secondary dark:bg-dark-secondary text-text-primary dark:text-dark-text border border-text-muted/20 dark:border-dark-text/10 hover:bg-bg-secondary/70 dark:hover:bg-dark-secondary/70 hover:shadow-sm active:bg-bg-secondary/50 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brine/50 focus-visible:ring-offset-2',
        ghost: 'bg-transparent text-text-primary dark:text-dark-text border border-transparent hover:bg-bg-secondary/50 dark:hover:bg-dark-secondary/50 hover:border-text-muted/10 active:bg-bg-secondary/70 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brine/50 focus-visible:ring-offset-2',
        danger: 'bg-accent-ferment text-white border border-accent-ferment/30 shadow-warm hover:shadow-warm-lg hover:brightness-110 active:shadow-warm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-ferment/50 focus-visible:ring-offset-2',
        outline: 'bg-transparent text-accent-brine border-2 border-accent-brine hover:bg-accent-brine/10 active:bg-accent-brine/20 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brine/50 focus-visible:ring-offset-2',
      };
      return variants[this.variant] || variants.primary;
    },

    sizeClasses() {
      const sizes = {
        sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
        md: 'px-4 py-2.5 text-sm rounded-xl gap-2',
        lg: 'px-6 py-3 text-base rounded-xl gap-2.5'
      };
      return sizes[this.size] || sizes.md;
    }
  },

  methods: {
    onClick(e) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', e);
      }
    }
  },

  template: `
    <button
      :class="[
        'inline-flex items-center justify-center font-medium transition-all duration-200 ease-ferment select-none',
        sizeClasses,
        variantClasses,
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      :disabled="disabled || loading"
      @click="onClick"
      :aria-disabled="disabled || loading"
      :aria-busy="loading"
    >
      <!-- Loading spinner -->
      <svg v-if="loading" class="animate-spin w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>

      <!-- Icon slot -->
      <slot v-if="!loading" name="icon"></slot>

      <!-- Default slot (label) -->
      <slot></slot>
    </button>
  `
};
