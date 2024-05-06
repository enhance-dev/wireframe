export default function LayoutSidebar({ html, state }) {
  const { attrs } = state
  const {
    breakpoint = '0',
    gap = '0',
    'sidebar-width': sidebarWidth = 'auto',
    'sidebar-min': sidebarMin = '0',
    'sidebar-max': sidebarMax = 'none',
    'sidebar-position': sidebarPosition = 'start',
  } = attrs

  return html`
    <style>
      @media screen and (min-width: ${breakpoint}) {
        :host {
          display: flex;
          gap: ${gap};
        }

        ::slotted([slot='sidebar']) {
          flex-shrink: 0;
          width: ${sidebarWidth};
          min-width: ${sidebarMin};
          max-width: ${sidebarMax};
          ${sidebarPosition === 'end' ? 'order: 1;' : 'order: 0;'}
        }

        ::slotted([slot='content']) {
          flex-grow: 1;
        }
      }

    </style>
    <slot name='sidebar'></slot>
    <slot name='content'></slot>
  `
}
