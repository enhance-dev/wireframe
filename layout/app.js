export default function AppLayout({ html }) {
  return html`
    <style>
      :host {
        --default-header-height: 4rem;
        --default-sidebar-transition: transform 0.25s cubic-bezier(.86,0,.07,1);
        --default-sidebar-min-width: 15rem;
        height: 100dvh;
        overflow: hidden;
      }

      ::slotted([slot='header']) {
        grid-area: header;
        position: sticky;
        min-height: var(--layout-header-height, var(--default-header-height));
        top: 0;
      }

      ::slotted([slot='sidebar']) {
        grid-area: sidebar;
        position: fixed;
        top: var(--layout-header-height, var(--default-header-height));
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        transition: var(--layout-sidebar-transition, var(--default-sidebar-transition));
      }

      ::slotted([slot='footer']) {
        grid-area: footer;
      }

      [slot='header']:has(input[type='checkbox']:checked) + [slot='sidebar'] {
        transform: translateX(0);
      }

      @media only screen and (min-width:48em) {

        :host {
          display: grid;
            'sidebar main' 1fr
            'sidebar footer' min-content
            / var(--sidebar-min-width, var(--default-sidebar-min-width)) 1fr;
        }

        ::slotted([slot='header']) {
          grid-area: header;
          position: static;
        }

        ::slotted([slot='sidebar']) {
          position: static;
          transform: initial;
          transition: initial;
        }
      }
    </style>
    <slot name="header"></slot>
    <slot name="sidebar"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  `
}

