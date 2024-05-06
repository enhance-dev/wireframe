export default function LayoutCollection ({ html, state }) {
  const { attrs } = state
  const {
    gap = '0',
    'snap-align': snapAlign = 'start',
    'snap-stop': snapStop = 'normal',
    'snap-type': snapType = 'none',
  } = attrs

  if (!['start', 'end', 'center'].includes(snapAlign)) {
    console.warn('layout-collection: snap-align attribute should be one of "start", "end", or "center"')
  }

  if (!['normal', 'always'].includes(snapStop)) {
    console.warn('layout-collection: snap-stop attribute should be one of "normal" or "always"')
  }

  if (!['mandatory', 'proximity', 'none'].includes(snapType)) {
    console.warn('layout-collection: snap-type attribute should be one of "mandatory", "proximity", or "none"')
  }

  return html`
    <style>
      :host {
        display: flex;
        gap: ${gap};
        overflow-x: scroll;
        overscroll-behavior-x: contain;
        scroll-snap-type: ${snapType === 'none' ? 'none' : `x ${snapType}`};
      }
      
      :host > * {
        scroll-snap-align: ${snapAlign};
        scroll-snap-stop: ${snapStop};
        max-height: 100%;
        flex-shrink: 0;
      }
    </style>
    <slot></slot>
  `
}
