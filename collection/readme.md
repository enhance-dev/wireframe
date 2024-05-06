# Collection

A single file component for creating a horizontally scrollable collection of items, with optional [scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap).

## Usage

Install the layout elements package:

```shell
npm i @enhance/layout-elements
```

Expose the component in your Enhance app:

```js
// app/elements/layout-collection.mjs
import { collection } from '@enhance/layout-elements'
export default collection
```

Use the element in your app:

```html
<layout-collection>
  <img src='…' alt='…' />
  <img src='…' alt='…' />
  <img src='…' alt='…' />
  <img src='…' alt='…' />
</layout-collection>
```

### Attributes

| Name | Default | Description |
|------|---------|-------------|
| gap | 0 | The size of the gap to set between items in the collection |
| snap-align | start | The alignment of each item's snap point ([read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)). Can be one of `start`, `end`, or`center`. |
| snap-stop | normal | Determines whether items' snap points may be passed over while scrolling ([read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)). Can be one of `normal` or `always`. |
| snap-type | none | Determines how strictly snap points are enforced, if at all ([read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)). Can be one of `none`, `mandatory`, or `proximity`. Using `none` (the default value) disables scroll snapping entirely. |


## Example

The following example renders a collection of custom `move-card` elements with strict scroll snapping enforced. When scrolling stops, the currently snapped `movie-card` will come to rest with its start dimension aligned to the scroll container.

```html
<layout-collection
  gap='1rem'
  snap-align='start'
  snap-stop='always'
  snap-type='mandatory'
>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
  <movie-card title='…' image='…'></movie-card>
</layout-collection>
```

