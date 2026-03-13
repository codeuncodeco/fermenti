/**
 * Fermenti UI - Icons Page
 * Browse, search, and preview icons from all supported icon libraries.
 * Lucide is the recommended default — shown with a comprehensive set.
 */

// Comprehensive Lucide icon list (curated ~200 commonly used icons)
const LUCIDE_ICONS = [
  // Navigation & UI
  'home', 'menu', 'x', 'check', 'plus', 'minus', 'search', 'settings', 'sliders-horizontal',
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'arrow-up-right', 'arrow-down-left', 'corner-up-left', 'corner-down-right',
  'move', 'maximize', 'minimize', 'expand', 'shrink', 'external-link',
  'more-horizontal', 'more-vertical', 'grip-vertical', 'grip-horizontal',
  'log-in', 'log-out', 'undo', 'redo', 'refresh-cw', 'rotate-cw',

  // Actions
  'edit', 'pencil', 'pen-tool', 'eraser', 'scissors', 'copy', 'clipboard',
  'clipboard-check', 'clipboard-list', 'save', 'download', 'upload',
  'trash', 'trash-2', 'archive', 'share', 'share-2', 'send', 'forward',
  'reply', 'repeat', 'shuffle', 'filter', 'sort-asc', 'sort-desc',
  'zoom-in', 'zoom-out', 'scan', 'qr-code', 'printer', 'import',

  // Objects & Content
  'file', 'file-text', 'file-plus', 'file-minus', 'file-check', 'file-x',
  'folder', 'folder-open', 'folder-plus', 'image', 'images',
  'camera', 'video', 'film', 'music', 'mic', 'headphones', 'speaker',
  'volume-2', 'volume-x', 'book', 'book-open', 'bookmark', 'tag', 'tags',
  'flag', 'paperclip', 'link', 'link-2', 'unlink', 'package', 'box', 'gift',
  'shopping-bag', 'shopping-cart', 'credit-card', 'wallet', 'receipt',

  // Communication
  'mail', 'inbox', 'message-square', 'message-circle', 'phone',
  'phone-call', 'phone-off', 'at-sign', 'hash', 'bell', 'bell-off',
  'megaphone', 'radio', 'rss', 'wifi', 'wifi-off', 'bluetooth',

  // People & Social
  'user', 'users', 'user-plus', 'user-minus', 'user-check', 'user-x',
  'contact', 'smile', 'frown', 'meh', 'heart', 'thumbs-up', 'thumbs-down',
  'award', 'trophy', 'crown', 'hand',

  // Data & Charts
  'bar-chart', 'bar-chart-2', 'pie-chart', 'trending-up', 'trending-down',
  'activity', 'gauge', 'percent', 'calculator', 'binary', 'database',
  'table', 'kanban', 'layers', 'git-branch', 'git-commit', 'git-merge',

  // Time & Calendar
  'clock', 'timer', 'alarm-clock', 'hourglass', 'calendar',
  'calendar-days', 'calendar-check', 'calendar-plus',

  // Status & Alerts
  'check-circle', 'x-circle', 'alert-triangle', 'alert-circle', 'info',
  'help-circle', 'ban', 'shield', 'shield-check', 'shield-alert',
  'lock', 'unlock', 'key', 'fingerprint', 'scan-face',

  // Layout & Design
  'layout', 'layout-dashboard', 'layout-grid', 'layout-list',
  'columns', 'rows', 'sidebar', 'panel-left', 'panel-right',
  'square', 'circle', 'triangle', 'hexagon', 'star', 'sparkles',
  'palette', 'paintbrush', 'pipette', 'ruler', 'type', 'bold', 'italic',
  'underline', 'align-left', 'align-center', 'align-right', 'align-justify',
  'list-ordered', 'list-todo', 'heading',

  // Tech & Devices
  'monitor', 'smartphone', 'tablet', 'laptop', 'tv', 'watch', 'mouse',
  'keyboard', 'hard-drive', 'cpu', 'memory-stick', 'server', 'cloud',
  'cloud-upload', 'cloud-download', 'cloud-off', 'terminal', 'code',
  'code-2', 'braces', 'bug', 'plug', 'power', 'battery', 'zap',

  // Nature & Weather
  'sun', 'moon', 'cloud-sun', 'cloud-rain', 'snowflake', 'wind',
  'thermometer', 'droplets', 'flame', 'leaf', 'trees', 'flower',
  'mountain', 'waves',

  // Travel & Places
  'map', 'map-pin', 'navigation', 'compass', 'globe', 'plane',
  'car', 'bike', 'train', 'ship', 'building', 'building-2', 'landmark',

  // Misc
  'eye', 'eye-off', 'lightbulb', 'lamp', 'puzzle', 'rocket',
  'target', 'crosshair', 'anchor', 'infinity', 'percent', 'hash',
  'asterisk', 'command', 'option', 'delete',
];

// Bootstrap Icons curated set
const BOOTSTRAP_ICONS = [
  'house', 'search', 'heart', 'heart-fill', 'star', 'star-fill', 'gear', 'gear-fill',
  'person', 'person-fill', 'people', 'people-fill', 'bell', 'bell-fill',
  'calendar', 'calendar-event', 'envelope', 'envelope-fill', 'camera', 'camera-fill',
  'bookmark', 'bookmark-fill', 'chat', 'chat-fill', 'cloud', 'cloud-fill',
  'download', 'upload', 'eye', 'eye-fill', 'eye-slash', 'eye-slash-fill',
  'file-earmark', 'file-earmark-text', 'folder', 'folder-fill', 'globe', 'globe2',
  'lock', 'lock-fill', 'unlock', 'unlock-fill', 'pencil', 'pencil-fill',
  'trash', 'trash-fill', 'check-circle', 'check-circle-fill', 'x-circle', 'x-circle-fill',
  'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'plus', 'dash', 'x-lg', 'check-lg', 'check2',
  'clipboard', 'clipboard-check', 'clipboard-plus',
  'cart', 'cart-fill', 'bag', 'bag-fill', 'credit-card', 'wallet',
  'telephone', 'telephone-fill', 'chat-dots', 'chat-dots-fill',
  'image', 'images', 'film', 'music-note', 'mic', 'volume-up', 'volume-mute',
  'link-45deg', 'link', 'paperclip', 'tag', 'tags', 'flag', 'flag-fill',
  'share', 'share-fill', 'send', 'send-fill', 'reply', 'forward',
  'filter', 'funnel', 'sort-alpha-down', 'sort-numeric-down',
  'bar-chart', 'pie-chart', 'graph-up', 'graph-down', 'activity',
  'lightning', 'lightning-fill', 'sun', 'moon', 'cloud-sun', 'cloud-rain',
  'thermometer', 'droplet', 'droplet-fill', 'fire', 'tree', 'flower1',
  'map', 'geo-alt', 'geo-alt-fill', 'compass', 'globe-americas',
  'airplane', 'bicycle', 'truck', 'building', 'shop',
  'shield', 'shield-fill', 'shield-check', 'key', 'key-fill',
  'code-slash', 'terminal', 'bug', 'cpu', 'hdd', 'server',
  'laptop', 'phone', 'tablet', 'display', 'printer', 'wifi',
  'box', 'gift', 'trophy', 'award', 'puzzle', 'rocket',
  'hand-thumbs-up', 'hand-thumbs-down', 'emoji-smile', 'emoji-frown',
  'alarm', 'clock', 'hourglass', 'stopwatch',
  'type', 'type-bold', 'type-italic', 'text-left', 'text-center', 'text-right',
  'list-ul', 'list-ol', 'list-task', 'kanban',
  'grid', 'grid-3x3', 'layout-sidebar', 'columns',
  'palette', 'brush', 'eyedropper', 'rulers',
  'info-circle', 'info-circle-fill', 'question-circle', 'exclamation-triangle',
  'exclamation-circle', 'exclamation-circle-fill',
];

// Tabler Icons curated set
const TABLER_ICONS = [
  'home', 'search', 'heart', 'star', 'settings', 'user', 'users',
  'bell', 'calendar', 'mail', 'camera', 'bookmark', 'message',
  'cloud', 'download', 'upload', 'eye', 'eye-off', 'file', 'folder',
  'world', 'lock', 'lock-open', 'pencil', 'trash', 'check',
  'x', 'plus', 'minus', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'clipboard', 'copy', 'cut', 'filter', 'sort-ascending', 'sort-descending',
  'shopping-cart', 'credit-card', 'wallet', 'receipt',
  'phone', 'at', 'hash', 'send', 'share', 'link', 'paperclip',
  'tag', 'flag', 'pin', 'map-pin', 'compass', 'map',
  'chart-bar', 'chart-pie', 'chart-line', 'trending-up', 'trending-down',
  'activity', 'gauge', 'database', 'server', 'cpu',
  'clock', 'alarm', 'hourglass', 'calendar-event',
  'shield', 'shield-check', 'key', 'fingerprint',
  'layout', 'layout-dashboard', 'layout-grid', 'layout-list',
  'square', 'circle', 'triangle', 'hexagon', 'palette', 'brush',
  'bold', 'italic', 'underline', 'align-left', 'align-center', 'align-right',
  'list', 'list-numbers', 'list-check', 'columns',
  'device-laptop', 'device-mobile', 'device-tablet', 'device-desktop',
  'keyboard', 'mouse', 'code', 'terminal', 'bug', 'plug',
  'bolt', 'battery', 'sun', 'moon', 'cloud-rain', 'snowflake',
  'temperature', 'droplet', 'flame', 'plant', 'tree', 'flower',
  'mountain', 'wave', 'plane', 'car', 'bike', 'building',
  'rocket', 'target', 'award', 'trophy', 'crown', 'gift',
  'puzzle', 'bulb', 'photo', 'video', 'music', 'microphone',
  'volume', 'headphones', 'book', 'notebook', 'news',
  'mood-smile', 'mood-sad', 'thumb-up', 'thumb-down',
  'info-circle', 'alert-triangle', 'alert-circle', 'help',
  'ban', 'circle-check', 'circle-x',
];

// Phosphor Icons curated set
const PHOSPHOR_ICONS = [
  'house', 'magnifying-glass', 'heart', 'star', 'gear', 'user', 'users',
  'bell', 'calendar-blank', 'envelope-simple', 'camera', 'bookmark-simple',
  'chat-circle', 'cloud', 'download-simple', 'upload-simple', 'eye', 'eye-slash',
  'file', 'folder-simple', 'globe', 'lock-simple', 'lock-simple-open',
  'pencil-simple', 'trash', 'check', 'x', 'plus', 'minus',
  'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'caret-up', 'caret-down', 'caret-left', 'caret-right',
  'clipboard', 'copy', 'scissors', 'funnel', 'sort-ascending', 'sort-descending',
  'shopping-cart', 'credit-card', 'wallet', 'receipt',
  'phone', 'at', 'hash', 'paper-plane-tilt', 'share-network', 'link',
  'paperclip', 'tag', 'flag', 'map-pin', 'compass', 'map-trifold',
  'chart-bar', 'chart-pie', 'chart-line-up', 'trend-up', 'trend-down',
  'database', 'hard-drives', 'cpu',
  'clock', 'alarm', 'hourglass', 'calendar-check',
  'shield', 'shield-check', 'key', 'fingerprint',
  'layout', 'grid-four', 'list', 'squares-four', 'circles-four',
  'square', 'circle', 'triangle', 'hexagon', 'palette', 'paint-brush',
  'text-b', 'text-italic', 'text-underline', 'text-align-left',
  'text-align-center', 'text-align-right', 'list-bullets', 'list-numbers',
  'laptop', 'device-mobile', 'device-tablet', 'desktop',
  'keyboard', 'mouse', 'code', 'terminal', 'bug', 'plug',
  'lightning', 'battery-full', 'sun', 'moon', 'cloud-rain', 'snowflake',
  'thermometer', 'drop', 'fire', 'plant', 'tree', 'flower',
  'mountains', 'waves', 'airplane', 'car', 'bicycle', 'buildings',
  'rocket', 'target', 'medal', 'trophy', 'crown', 'gift',
  'puzzle-piece', 'lightbulb', 'image', 'video-camera', 'music-note',
  'microphone', 'speaker-high', 'headphones', 'book-open', 'notebook',
  'smiley', 'smiley-sad', 'thumbs-up', 'thumbs-down',
  'info', 'warning', 'warning-circle', 'question',
  'prohibit', 'check-circle', 'x-circle',
];

// Material Symbols curated set
const MATERIAL_ICONS = [
  'home', 'search', 'favorite', 'star', 'settings', 'person', 'group',
  'notifications', 'calendar_today', 'mail', 'photo_camera', 'bookmark',
  'chat', 'cloud', 'download', 'upload', 'visibility', 'visibility_off',
  'description', 'folder', 'language', 'lock', 'lock_open',
  'edit', 'delete', 'check', 'close', 'add', 'remove',
  'arrow_upward', 'arrow_downward', 'arrow_back', 'arrow_forward',
  'expand_more', 'expand_less', 'chevron_left', 'chevron_right',
  'content_copy', 'content_cut', 'content_paste', 'filter_list', 'sort',
  'shopping_cart', 'credit_card', 'account_balance_wallet', 'receipt_long',
  'phone', 'alternate_email', 'tag', 'send', 'share', 'link',
  'attach_file', 'label', 'flag', 'location_on', 'explore', 'map',
  'bar_chart', 'pie_chart', 'show_chart', 'trending_up', 'trending_down',
  'database', 'storage', 'dns',
  'schedule', 'alarm', 'hourglass_empty', 'event',
  'shield', 'verified_user', 'vpn_key', 'fingerprint',
  'dashboard', 'grid_view', 'view_list', 'view_module',
  'square', 'circle', 'change_history', 'hexagon', 'palette', 'brush',
  'format_bold', 'format_italic', 'format_underlined',
  'format_align_left', 'format_align_center', 'format_align_right',
  'format_list_bulleted', 'format_list_numbered', 'checklist',
  'laptop', 'smartphone', 'tablet', 'desktop_windows',
  'keyboard', 'mouse', 'code', 'terminal', 'bug_report', 'power',
  'bolt', 'battery_full', 'light_mode', 'dark_mode', 'cloudy',
  'thermostat', 'water_drop', 'local_fire_department', 'eco', 'park', 'forest',
  'terrain', 'waves', 'flight', 'directions_car', 'pedal_bike', 'apartment',
  'rocket_launch', 'my_location', 'military_tech', 'emoji_events', 'workspace_premium',
  'card_giftcard', 'extension', 'lightbulb', 'image', 'videocam', 'music_note',
  'mic', 'volume_up', 'headphones', 'menu_book', 'auto_stories',
  'sentiment_satisfied', 'sentiment_dissatisfied', 'thumb_up', 'thumb_down',
  'info', 'warning', 'error', 'help',
  'block', 'check_circle', 'cancel', 'task_alt',
];

// Font Awesome curated set (solid)
const FONTAWESOME_ICONS = [
  'house', 'magnifying-glass', 'heart', 'star', 'gear', 'user', 'users',
  'bell', 'calendar', 'envelope', 'camera', 'bookmark',
  'comment', 'cloud', 'download', 'upload', 'eye', 'eye-slash',
  'file', 'folder', 'globe', 'lock', 'lock-open',
  'pen', 'trash', 'check', 'xmark', 'plus', 'minus',
  'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'clipboard', 'copy', 'scissors', 'filter', 'sort',
  'cart-shopping', 'credit-card', 'wallet', 'receipt',
  'phone', 'at', 'hashtag', 'paper-plane', 'share-nodes', 'link',
  'paperclip', 'tag', 'flag', 'location-dot', 'compass', 'map',
  'chart-simple', 'chart-pie', 'chart-line', 'arrow-trend-up', 'arrow-trend-down',
  'database', 'server', 'microchip',
  'clock', 'stopwatch', 'hourglass', 'calendar-check',
  'shield', 'shield-halved', 'key', 'fingerprint',
  'table-cells', 'grip', 'list', 'border-all',
  'square', 'circle', 'play', 'palette', 'paintbrush',
  'bold', 'italic', 'underline', 'align-left', 'align-center', 'align-right',
  'list-ul', 'list-ol', 'list-check',
  'laptop', 'mobile-screen', 'tablet-screen-button', 'desktop',
  'keyboard', 'computer-mouse', 'code', 'terminal', 'bug', 'plug',
  'bolt', 'battery-full', 'sun', 'moon', 'cloud-rain', 'snowflake',
  'temperature-half', 'droplet', 'fire', 'leaf', 'tree', 'seedling',
  'mountain', 'water', 'plane', 'car', 'bicycle', 'building',
  'rocket', 'bullseye', 'medal', 'trophy', 'crown', 'gift',
  'puzzle-piece', 'lightbulb', 'image', 'video', 'music',
  'microphone', 'volume-high', 'headphones', 'book', 'book-open',
  'face-smile', 'face-frown', 'thumbs-up', 'thumbs-down',
  'circle-info', 'triangle-exclamation', 'circle-exclamation', 'circle-question',
  'ban', 'circle-check', 'circle-xmark',
];

export default {
  name: 'icons-page',

  data() {
    return {
      activeLibrary: 'lucide',
      searchQuery: '',
      copiedIcon: '',
      libraries: [
        { id: 'lucide', name: 'Lucide', badge: 'Recommended', count: LUCIDE_ICONS.length },
        { id: 'builtin', name: 'Builtin', badge: 'No CDN', count: 0 },
        { id: 'bootstrap', name: 'Bootstrap', count: BOOTSTRAP_ICONS.length },
        { id: 'tabler', name: 'Tabler', count: TABLER_ICONS.length },
        { id: 'phosphor', name: 'Phosphor', count: PHOSPHOR_ICONS.length },
        { id: 'material', name: 'Material', count: MATERIAL_ICONS.length },
        { id: 'fontawesome', name: 'Font Awesome', count: FONTAWESOME_ICONS.length },
      ],
      iconSets: {
        lucide: LUCIDE_ICONS,
        bootstrap: BOOTSTRAP_ICONS,
        tabler: TABLER_ICONS,
        phosphor: PHOSPHOR_ICONS,
        material: MATERIAL_ICONS,
        fontawesome: FONTAWESOME_ICONS,
      },
      cdnUrls: {
        lucide: 'https://unpkg.com/lucide@latest',
        bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
        tabler: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css',
        phosphor: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css',
        material: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        fontawesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
      },
    };
  },

  inject: {
    builtinIcons: { from: 'builtinIcons', default: () => ({}) },
  },

  computed: {
    builtinIconNames() {
      return Object.keys(this.builtinIcons);
    },

    currentIcons() {
      const lib = this.activeLibrary;
      const icons = lib === 'builtin' ? this.builtinIconNames : (this.iconSets[lib] || []);
      if (!this.searchQuery) return icons;
      const q = this.searchQuery.toLowerCase();
      return icons.filter(name => name.toLowerCase().includes(q));
    },

    currentLibrary() {
      return this.libraries.find(l => l.id === this.activeLibrary);
    },

    totalCount() {
      if (this.activeLibrary === 'builtin') return this.builtinIconNames.length;
      return this.iconSets[this.activeLibrary]?.length || 0;
    },

    usageSnippet() {
      const lib = this.activeLibrary;
      if (lib === 'builtin') return '<fi-icon name="search" />';
      if (lib === 'lucide') return '<fi-icon name="search" library="lucide" />';
      if (lib === 'bootstrap') return '<fi-icon name="search" library="bootstrap" />';
      if (lib === 'tabler') return '<fi-icon name="search" library="tabler" />';
      if (lib === 'phosphor') return '<fi-icon name="magnifying-glass" library="phosphor" />';
      if (lib === 'material') return '<fi-icon name="search" library="material" />';
      if (lib === 'fontawesome') return '<fi-icon name="magnifying-glass" library="fontawesome" />';
      return '';
    },
  },

  methods: {
    selectLibrary(id) {
      this.activeLibrary = id;
      this.searchQuery = '';
      this.loadLibraryCDN(id);
    },

    loadLibraryCDN(id) {
      if (id === 'builtin') return;
      const url = this.cdnUrls[id];
      if (!url) return;

      if (id === 'lucide') {
        if (document.querySelector('script[data-icon-lib="lucide"]')) {
          if (window.lucide) this.$nextTick(() => window.lucide.createIcons());
          return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.dataset.iconLib = 'lucide';
        script.onload = () => {
          if (window.lucide) window.lucide.createIcons();
        };
        document.head.appendChild(script);
      } else {
        if (document.querySelector(`link[data-icon-lib="${id}"]`)) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.dataset.iconLib = id;
        document.head.appendChild(link);
      }
    },

    getBuiltinIconSVG(name) {
      const icon = this.builtinIcons[name];
      if (!icon) return '';
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="${icon.paths}"></path></svg>`;
    },

    async copyIconName(name) {
      const lib = this.activeLibrary;
      let text;
      if (lib === 'builtin') {
        text = `<fi-icon name="${name}" />`;
      } else {
        text = `<fi-icon name="${name}" library="${lib}" />`;
      }
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      this.copiedIcon = name;
      setTimeout(() => { this.copiedIcon = ''; }, 1500);
    },

    iconDisplayName(name) {
      return name.replace(/-/g, ' ').replace(/_/g, ' ');
    },
  },

  mounted() {
    // Load Lucide by default
    this.loadLibraryCDN('lucide');

    // Update builtin count
    this.$nextTick(() => {
      const lib = this.libraries.find(l => l.id === 'builtin');
      if (lib) lib.count = this.builtinIconNames.length;
    });
  },

  updated() {
    // Re-render Lucide icons after DOM update
    if (this.activeLibrary === 'lucide' && window.lucide) {
      this.$nextTick(() => window.lucide.createIcons());
    }
  },

  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      <!-- Page Header -->
      <div>
        <h1 class="font-serif text-3xl text-text-primary dark:text-dark-text mb-2">Icon Libraries</h1>
        <p class="text-text-muted dark:text-dark-text-secondary text-base max-w-2xl">
          Browse and search icons from all supported libraries. Click any icon to copy its
          <code class="text-xs bg-bg-secondary dark:bg-dark-secondary px-1.5 py-0.5 rounded">&lt;fi-icon&gt;</code> usage.
          <span class="font-medium text-accent-brine">Lucide</span> is the recommended default.
        </p>
      </div>

      <!-- Library selector + Search -->
      <div class="flex flex-col sm:flex-row gap-4">
        <!-- Library tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="lib in libraries"
            :key="lib.id"
            @click="selectLibrary(lib.id)"
            class="relative px-3 py-2 text-sm font-medium rounded-xl border-2 transition-all duration-150"
            :class="activeLibrary === lib.id
              ? 'border-accent-brine bg-accent-brine/5 text-accent-brine'
              : 'border-bg-secondary dark:border-dark-secondary text-text-muted dark:text-dark-text-secondary hover:border-text-muted/30 hover:text-text-primary dark:hover:text-dark-text'"
          >
            {{ lib.name }}
            <span
              v-if="lib.badge"
              class="ml-1 text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full"
              :class="lib.badge === 'Recommended'
                ? 'bg-accent-brine/10 text-accent-brine'
                : 'bg-bg-secondary dark:bg-dark-secondary text-text-muted dark:text-dark-text-secondary'"
            >{{ lib.badge }}</span>
          </button>
        </div>

        <!-- Search -->
        <div class="flex-1 sm:max-w-xs">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="'Search ' + totalCount + ' icons...'"
              class="w-full pl-10 pr-4 py-2 rounded-xl border border-bg-secondary dark:border-dark-secondary bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-accent-brine/50 focus:border-accent-brine"
            />
          </div>
        </div>
      </div>

      <!-- Info bar -->
      <div class="flex items-center justify-between bg-bg-card dark:bg-dark-card rounded-xl border border-bg-secondary dark:border-dark-secondary px-4 py-3">
        <div class="flex items-center gap-3">
          <span class="text-sm font-medium text-text-primary dark:text-dark-text">{{ currentLibrary?.name }}</span>
          <span class="text-xs text-text-muted dark:text-dark-text-secondary">
            {{ currentIcons.length }}<template v-if="searchQuery"> of {{ totalCount }}</template> icons
          </span>
        </div>
        <div class="flex items-center gap-2">
          <code class="text-[10px] font-mono bg-bg-secondary dark:bg-dark-secondary text-text-muted dark:text-dark-text-secondary px-2 py-1 rounded-lg hidden sm:block">{{ usageSnippet }}</code>
          <span v-if="cdnUrls[activeLibrary]" class="text-[10px] text-text-muted dark:text-dark-text-secondary hidden md:block">CDN loaded</span>
          <span v-else class="text-[10px] text-accent-culture font-medium hidden md:block">No CDN needed</span>
        </div>
      </div>

      <!-- Icon Grid -->
      <div class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6">

        <!-- Empty state -->
        <div v-if="currentIcons.length === 0" class="text-center py-16">
          <svg class="w-12 h-12 mx-auto text-text-muted/30 dark:text-dark-text-secondary/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
          <p class="text-text-muted dark:text-dark-text-secondary">No icons match "<span class="font-medium">{{ searchQuery }}</span>"</p>
          <button @click="searchQuery = ''" class="mt-2 text-sm text-accent-brine hover:underline">Clear search</button>
        </div>

        <!-- Builtin icons grid -->
        <div v-else-if="activeLibrary === 'builtin'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <div class="w-6 h-6 text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" v-html="getBuiltinIconSVG(name)"></div>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Lucide icons grid -->
        <div v-else-if="activeLibrary === 'lucide'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <i :data-lucide="name" class="w-6 h-6 text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors"></i>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Bootstrap icons grid -->
        <div v-else-if="activeLibrary === 'bootstrap'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <i :class="'bi bi-' + name" class="text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" style="font-size:24px;"></i>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Tabler icons grid -->
        <div v-else-if="activeLibrary === 'tabler'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <i :class="'ti ti-' + name" class="text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" style="font-size:24px;"></i>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Phosphor icons grid -->
        <div v-else-if="activeLibrary === 'phosphor'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <i :class="'ph ph-' + name" class="text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" style="font-size:24px;"></i>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Material icons grid -->
        <div v-else-if="activeLibrary === 'material'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <span class="material-symbols-outlined text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" style="font-size:24px;">{{ name }}</span>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>

        <!-- Font Awesome icons grid -->
        <div v-else-if="activeLibrary === 'fontawesome'" class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          <button
            v-for="name in currentIcons"
            :key="name"
            @click="copyIconName(name)"
            class="group flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-bg-secondary/60 dark:hover:bg-dark-secondary/60 transition-all duration-150 cursor-pointer relative"
          >
            <i :class="'fa-solid fa-' + name" class="text-text-primary dark:text-dark-text group-hover:text-accent-brine transition-colors" style="font-size:20px;"></i>
            <span class="text-[10px] text-text-muted dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text truncate w-full text-center transition-colors">{{ iconDisplayName(name) }}</span>
            <span v-if="copiedIcon === name" class="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-accent-brine bg-bg-card dark:bg-dark-card border border-accent-brine/30 px-1.5 py-0.5 rounded-md shadow-sm">Copied!</span>
          </button>
        </div>
      </div>

      <!-- CDN snippet -->
      <div v-if="cdnUrls[activeLibrary]" class="bg-bg-card dark:bg-dark-card rounded-2xl border border-bg-secondary dark:border-dark-secondary p-6">
        <h2 class="font-serif text-lg text-text-primary dark:text-dark-text mb-2">Setup</h2>
        <p class="text-sm text-text-muted dark:text-dark-text-secondary mb-4">Add this to your HTML <code class="text-xs bg-bg-secondary dark:bg-dark-secondary px-1 py-0.5 rounded">&lt;head&gt;</code> to use {{ currentLibrary?.name }}:</p>
        <pre class="text-xs font-mono bg-bg-primary dark:bg-dark-primary rounded-xl border border-bg-secondary dark:border-dark-secondary p-4 overflow-x-auto text-text-primary dark:text-dark-text whitespace-pre-wrap"><template v-if="activeLibrary === 'lucide'">&lt;script src="{{ cdnUrls[activeLibrary] }}"&gt;&lt;/script&gt;</template><template v-else>&lt;link rel="stylesheet" href="{{ cdnUrls[activeLibrary] }}" /&gt;</template></pre>
      </div>

    </div>
  `,
};
