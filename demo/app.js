import FiAvatar from '../src/components/FiAvatar.js';
import FiBadge from '../src/components/FiBadge.js';
import FiButton from '../src/components/FiButton.js';
import FiCard from '../src/components/FiCard.js';
import FiChangelog from '../src/components/FiChangelog.js';
import FiChip from '../src/components/FiChip.js';
import FiCollapsible from '../src/components/FiCollapsible.js';
import FiEmptyState from '../src/components/FiEmptyState.js';
import FiFilterPanel from '../src/components/FiFilterPanel.js';
import FiGrid from '../src/components/FiGrid.js';
import FiIcon from '../src/components/FiIcon.js';
import FiInput from '../src/components/FiInput.js';
import FiModal from '../src/components/FiModal.js';
import FiNavBar from '../src/components/FiNavBar.js';
import FiProgress from '../src/components/FiProgress.js';
import FiSearchBar from '../src/components/FiSearchBar.js';
import FiSelect from '../src/components/FiSelect.js';
import FiSidebar from '../src/components/FiSidebar.js';
import FiStepper from '../src/components/FiStepper.js';
import FiTabs from '../src/components/FiTabs.js';
import FiTextarea from '../src/components/FiTextarea.js';
import FiToast from '../src/components/FiToast.js';
import FiToggle from '../src/components/FiToggle.js';
import { builtinIcons, renderIconSVG } from '../src/icons.js';

import IntroPage from './intro.js';
import ShowcasePage from './showcase.js';
import DashboardPage from './dashboard.js';
import SettingsPage from './settings.js';
import IconsPage from './icons.js';
import ThemePanel from './theme-panel.js';

const DemoApp = {
  name: 'demo-app',

  data() {
    return {
      currentPage: 'home',
      darkMode: false,
      themePanelOpen: false,
      navTabs: [
        { id: 'home', label: 'Home' },
        { id: 'showcase', label: 'Showcase' },
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'icons', label: 'Icons' },
        { id: 'settings', label: 'Settings' },
      ],
    };
  },

  watch: {
    darkMode(val) {
      document.documentElement.classList.toggle('dark', val);
    },
  },

  created() {
    const hash = window.location.hash.slice(1);
    if (['home', 'showcase', 'dashboard', 'icons', 'settings'].includes(hash)) {
      this.currentPage = hash;
    }
  },

  methods: {
    navigate(page) {
      this.currentPage = page;
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },

  template: `
    <div class="min-h-screen">
      <!-- Top Header -->
      <header class="sticky top-0 z-30 bg-bg-card/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-bg-secondary dark:border-dark-secondary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Brand -->
            <div class="flex items-center gap-3 cursor-pointer" @click="navigate('home')">
              <div class="w-8 h-8 bg-accent-brine rounded-xl flex items-center justify-center">
                <span class="text-white font-serif text-lg font-bold">F</span>
              </div>
              <h1 class="font-serif text-xl text-text-primary dark:text-dark-text">Fermenti <span class="text-text-muted dark:text-dark-text-secondary font-sans text-sm font-normal">UI Demo</span></h1>
            </div>

            <!-- Nav Tabs -->
            <nav class="hidden md:block">
              <fi-tabs :tabs="navTabs" :model-value="currentPage" @update:model-value="navigate" variant="underline" />
            </nav>

            <!-- Dark mode toggle + Theme panel -->
            <div class="relative flex items-center gap-2">
              <!-- Theme picker toggle -->
              <button
                data-theme-toggle
                @click.stop="themePanelOpen = !themePanelOpen"
                class="p-2 rounded-xl hover:bg-bg-secondary dark:hover:bg-dark-secondary transition-colors"
                :class="themePanelOpen ? 'bg-bg-secondary dark:bg-dark-secondary' : ''"
                aria-label="Open theme picker"
              >
                <svg class="w-5 h-5 text-text-secondary dark:text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </button>

              <!-- Dark mode toggle -->
              <button
                @click="darkMode = !darkMode"
                class="p-2 rounded-xl hover:bg-bg-secondary dark:hover:bg-dark-secondary transition-colors"
                :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
              >
                <svg v-if="!darkMode" class="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <svg v-else class="w-5 h-5 text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>

              <!-- Floating theme panel -->
              <fi-theme-panel v-model:open="themePanelOpen" />
            </div>
          </div>
        </div>

        <!-- Mobile nav -->
        <div class="md:hidden px-4 pb-2 overflow-x-auto">
          <fi-tabs :tabs="navTabs" :model-value="currentPage" @update:model-value="navigate" variant="pills" />
        </div>
      </header>

      <!-- Page content -->
      <main>
        <intro-page v-if="currentPage === 'home'" @navigate="navigate" />
        <showcase-page v-if="currentPage === 'showcase'" />
        <dashboard-page v-if="currentPage === 'dashboard'" />
        <icons-page v-if="currentPage === 'icons'" />
        <settings-page v-if="currentPage === 'settings'" />
      </main>

      <!-- Footer -->
      <footer class="border-t border-bg-secondary dark:border-dark-secondary mt-16 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-sm text-text-muted dark:text-dark-text-secondary">
            Fermenti UI Framework &middot; Built with Vue 3 + Tailwind CSS &middot; Made with salt, patience, and good bacteria.
          </p>
        </div>
      </footer>
    </div>
  `,
};

const { createApp } = Vue;
const app = createApp(DemoApp);

// Register all framework components
const components = {
  'fi-avatar': FiAvatar,
  'fi-badge': FiBadge,
  'fi-button': FiButton,
  'fi-card': FiCard,
  'fi-changelog': FiChangelog,
  'fi-chip': FiChip,
  'fi-collapsible': FiCollapsible,
  'fi-empty-state': FiEmptyState,
  'fi-filter-panel': FiFilterPanel,
  'fi-grid': FiGrid,
  'fi-icon': FiIcon,
  'fi-input': FiInput,
  'fi-modal': FiModal,
  'fi-nav-bar': FiNavBar,
  'fi-progress': FiProgress,
  'fi-search-bar': FiSearchBar,
  'fi-select': FiSelect,
  'fi-sidebar': FiSidebar,
  'fi-stepper': FiStepper,
  'fi-tabs': FiTabs,
  'fi-textarea': FiTextarea,
  'fi-toast': FiToast,
  'fi-toggle': FiToggle,
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

// Register demo page components
app.component('intro-page', IntroPage);
app.component('showcase-page', ShowcasePage);
app.component('dashboard-page', DashboardPage);
app.component('settings-page', SettingsPage);
app.component('icons-page', IconsPage);
app.component('fi-theme-panel', ThemePanel);

// Provide icons globally
app.provide('builtinIcons', builtinIcons);
app.provide('renderIconSVG', renderIconSVG);

app.mount('#app');
