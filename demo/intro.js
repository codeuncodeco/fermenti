/**
 * Fermenti UI - Intro / Landing Page
 * Welcome page showcasing the framework's features and components
 */

export default {
  name: 'intro-page',

  emits: ['navigate'],

  data() {
    return {
      toggleDemo: false,
      progressValue: 65,
      heroBadges: [
        { text: '27 Components', delay: '0s' },
        { text: 'Dark Mode', delay: '0.1s' },
        { text: 'PWA Ready', delay: '0.2s' },
        { text: 'Customizable', delay: '0.3s' },
      ],
    };
  },

  methods: {
    goTo(page) {
      this.$emit('navigate', page);
    },
  },

  template: `
    <div class="min-h-screen bg-bg-primary dark:bg-dark-primary">

      <!-- ==================== HERO ==================== -->
      <section class="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <!-- Decorative background blobs -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div class="absolute -top-24 -left-24 w-96 h-96 bg-accent-brine/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-culture/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative max-w-4xl mx-auto text-center">
          <!-- Logo mark -->
          <div class="inline-flex items-center justify-center w-16 h-16 bg-accent-brine rounded-2xl mb-8 shadow-warm-lg">
            <span class="text-white font-serif text-3xl font-bold">F</span>
          </div>

          <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-primary dark:text-dark-text mb-6 tracking-tight">
            Fermenti
          </h1>

          <p class="text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            A fermentation-inspired UI framework for Vue 3 + Tailwind CSS
          </p>

          <!-- Animated badges -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <span
              v-for="(badge, i) in heroBadges"
              :key="i"
              class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-brine/15 text-accent-brine animate-fade-in"
              :style="{ animationDelay: badge.delay, animationFillMode: 'both' }"
            >
              {{ badge.text }}
            </span>
          </div>
        </div>
      </section>

      <!-- ==================== FEATURES GRID ==================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="font-serif text-3xl text-text-primary dark:text-dark-text text-center mb-12">
          Why Fermenti?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Rich Components -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm transition-shadow duration-300">
            <div class="w-10 h-10 bg-accent-brine/15 rounded-xl flex items-center justify-center mb-4">
              <span class="text-accent-brine text-lg">&#9881;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2">Rich Components</h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              27 Vue 3 components for forms, navigation, data display, and editors.
            </p>
          </div>

          <!-- Themeable -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm transition-shadow duration-300">
            <div class="w-10 h-10 bg-accent-culture/15 rounded-xl flex items-center justify-center mb-4">
              <span class="text-accent-culture text-lg">&#9752;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2">Themeable</h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              Fermentation-inspired design tokens, CSS custom properties, and dark mode support.
            </p>
          </div>

          <!-- Icon Libraries -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm transition-shadow duration-300">
            <div class="w-10 h-10 bg-accent-aged/15 rounded-xl flex items-center justify-center mb-4">
              <span class="text-accent-aged text-lg">&#9733;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2">Icon Libraries</h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              Support for Lucide, Bootstrap Icons, Tabler, Phosphor, Material, and Font Awesome.
            </p>
          </div>

          <!-- PWA Ready -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm transition-shadow duration-300">
            <div class="w-10 h-10 bg-accent-ferment/15 rounded-xl flex items-center justify-center mb-4">
              <span class="text-accent-ferment text-lg">&#128241;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2">PWA Ready</h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              Mobile-first responsive components, touch-friendly interactions, and offline-capable patterns.
            </p>
          </div>
        </div>
      </section>

      <!-- ==================== QUICK START ==================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="font-serif text-3xl text-text-primary dark:text-dark-text text-center mb-12">
          Quick Start
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- CDN Usage -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary">
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-4">CDN Usage</h3>
            <pre class="bg-bg-secondary dark:bg-dark-secondary rounded-xl p-4 overflow-x-auto"><code class="font-mono text-sm text-text-primary dark:text-dark-text">&lt;link rel="stylesheet" href="fermenti.css"&gt;
&lt;script src="https://unpkg.com/vue@3"&gt;&lt;/script&gt;
&lt;script type="module" src="fermenti.js"&gt;&lt;/script&gt;

&lt;div id="app"&gt;
  &lt;fi-button variant="primary"&gt;
    Get Started
  &lt;/fi-button&gt;
&lt;/div&gt;</code></pre>
          </div>

          <!-- pnpm Install -->
          <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary">
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-4">Package Manager</h3>
            <pre class="bg-bg-secondary dark:bg-dark-secondary rounded-xl p-4 overflow-x-auto"><code class="font-mono text-sm text-text-primary dark:text-dark-text">pnpm install fermenti

# main.js
import { createApp } from 'vue'
import Fermenti from 'fermenti'
import 'fermenti/css'

const app = createApp(App)
app.use(Fermenti)
app.mount('#app')</code></pre>
          </div>
        </div>
      </section>

      <!-- ==================== COMPONENT PREVIEW ==================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="font-serif text-3xl text-text-primary dark:text-dark-text text-center mb-4">
          Component Preview
        </h2>
        <p class="text-center text-text-muted dark:text-dark-text-secondary mb-12">
          A taste of what Fermenti offers, rendered live.
        </p>

        <div class="bg-bg-card dark:bg-dark-card rounded-2xl p-8 border border-bg-secondary dark:border-dark-secondary space-y-8">

          <!-- Buttons row -->
          <div>
            <h4 class="text-sm font-medium text-text-muted dark:text-dark-text-secondary uppercase tracking-wider mb-4">Buttons</h4>
            <div class="flex flex-wrap items-center gap-3">
              <fi-button variant="primary">Primary</fi-button>
              <fi-button variant="secondary">Secondary</fi-button>
              <fi-button variant="outline">Outline</fi-button>
              <fi-button variant="ghost">Ghost</fi-button>
            </div>
          </div>

          <!-- Badges row -->
          <div>
            <h4 class="text-sm font-medium text-text-muted dark:text-dark-text-secondary uppercase tracking-wider mb-4">Badges</h4>
            <div class="flex flex-wrap items-center gap-3">
              <fi-badge label="Success" variant="success" dot />
              <fi-badge label="Warning" variant="warning" dot />
              <fi-badge label="Danger" variant="danger" dot />
            </div>
          </div>

          <!-- Toggle -->
          <div>
            <h4 class="text-sm font-medium text-text-muted dark:text-dark-text-secondary uppercase tracking-wider mb-4">Toggle</h4>
            <div class="max-w-xs">
              <fi-toggle v-model="toggleDemo" label="Enable fermentation tracking" description="Receive notifications when your batch is ready." />
            </div>
          </div>

          <!-- Progress -->
          <div>
            <h4 class="text-sm font-medium text-text-muted dark:text-dark-text-secondary uppercase tracking-wider mb-4">Progress</h4>
            <div class="max-w-md">
              <fi-progress :value="progressValue" label="Fermentation Progress" show-value variant="culture" />
            </div>
          </div>

        </div>
      </section>

      <!-- ==================== EXPLORE THE DEMOS ==================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="font-serif text-3xl text-text-primary dark:text-dark-text text-center mb-12">
          Explore the Demos
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <!-- Component Showcase -->
          <button
            @click="goTo('showcase')"
            class="text-left bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm hover:border-accent-brine/30 transition-all duration-300 group cursor-pointer"
          >
            <div class="w-12 h-12 bg-accent-brine/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-brine/25 transition-colors">
              <span class="text-accent-brine text-xl">&#9783;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2 group-hover:text-accent-brine transition-colors">
              Component Showcase
            </h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              Browse all 27 components with live examples, props, and variants.
            </p>
          </button>

          <!-- Dashboard Demo -->
          <button
            @click="goTo('dashboard')"
            class="text-left bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm hover:border-accent-culture/30 transition-all duration-300 group cursor-pointer"
          >
            <div class="w-12 h-12 bg-accent-culture/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-culture/25 transition-colors">
              <span class="text-accent-culture text-xl">&#9636;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2 group-hover:text-accent-culture transition-colors">
              Dashboard Demo
            </h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              A mock analytics dashboard built entirely with Fermenti components.
            </p>
          </button>

          <!-- Settings Demo -->
          <button
            @click="goTo('settings')"
            class="text-left bg-bg-card dark:bg-dark-card rounded-2xl p-6 border border-bg-secondary dark:border-dark-secondary hover:shadow-warm hover:border-accent-aged/30 transition-all duration-300 group cursor-pointer"
          >
            <div class="w-12 h-12 bg-accent-aged/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-aged/25 transition-colors">
              <span class="text-accent-aged text-xl">&#9881;</span>
            </div>
            <h3 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2 group-hover:text-accent-aged transition-colors">
              Settings Demo
            </h3>
            <p class="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
              A mock settings page with forms, toggles, modals, and more.
            </p>
          </button>
        </div>
      </section>

      <!-- ==================== FOOTER ==================== -->
      <footer class="border-t border-bg-secondary dark:border-dark-secondary mt-8 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p class="text-sm text-text-muted dark:text-dark-text-secondary italic">
            Made with salt, patience, and good bacteria.
          </p>
          <div class="flex items-center justify-center gap-4">
            <a
              href="https://github.com/codeuncodeco/fermenti"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-accent-brine dark:hover:text-accent-brine transition-colors"
            >
              GitHub
            </a>
            <span class="text-text-muted dark:text-dark-text-secondary">&middot;</span>
            <span class="text-xs text-text-muted dark:text-dark-text-secondary">
              GPL v3
            </span>
          </div>
        </div>
      </footer>

    </div>
  `,
};
