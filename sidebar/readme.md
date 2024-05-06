# Sidebar

A single file component for creating an adaptive sidebar layout. Renders the sidebar and main content as block level elements below the `breakpoint` provided (if any); above the provided breakpoint, the sidebar and main content are rendered as flexbox columns.

## Usage

Install the layout elements package:

```shell
npm i @enhance/layout-elements
```

Expose the component in your Enhance app:

```js
// app/elements/layout-sidebar.mjs
import { sidebar } from '@enhance/layout-elements'
export default sidebar
```

Use the element in your app:

```html
<layout-sidebar>
  <aside slot='sidebar'>
    <!-- sidebar content… -->
  </aside>
  <section slot='content'>
    <!-- main content… -->
  </section>
</layout-sidebar>
```

### Slots

| Name | Details |
|------|---------|
| sidebar | The content to be placed in the sidebar |
| content | The main content |


### Attributes

| Name | Default | Description |
|------|---------|-------------|
| breakpoint | 0 | The width to use for the `min-width` breakpoint at which the layout should shift from block formatting to flexbox formatting |
| gap | 0 | The size of the gap to set between the sidebar and main content |
| sidebar-width | auto | The preferred width of the sidebar |
| sidebar-min | 0 | The minimum width of the sidebar; use in combination with a fluid `sidebar-width` |
| sidebar-max | none | The maximum width of the sidebar; use in combination with a fluid `sidebar-width` |
| sidebar-position | 'start' | The position of the sidebar; when set to 'end', the sidebar will render after the main content |

### Styling

Slotted content can be styled using slot attribute selectors:

```html
<style>
  layout-sidebar [slot='sidebar'] {
    background: var(--body);
    color: var(--background);
  }

  layout-sidebar [slot='content'] {
    color: var(--body);
  }
</style>
```

## Example

The following example will cap the height of the scrollbar at the current viewport height. The sidebar content will scroll independently of the document body.

```html
<style>
  [slot='sidebar'] {
    max-height: 100vh;
    overflow-y: scroll;
  }
</style>

<layout-sidebar
  breakpoint='48em'
  gap='1rem'
  sidebar-width='25vw'
  sidebar-min='200px'
  sidebar-max='400px'
>
  <aside slot='sidebar'>
    <!-- sidebar content… -->
  </aside>
  <section slot='content'>
    <!-- main content… -->
  </section>
</layout-sidebar>
```

