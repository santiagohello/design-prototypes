# Icon Import Rules

## Preserve the full icon structure

Icons in Figma consist of:

- a square container frame
- an inner SVG/vector shape

Both elements are part of the icon definition.

Do not import only the vector shape.

---

## Never normalize or scale icons

Do NOT:

- scale the SVG to fill the frame
- remove internal padding
- crop to vector bounds
- rewrite the viewBox
- normalize icon proportions

The SVG artwork must preserve its original dimensions and proportions exactly as defined in Figma.

---

## Preserve the container

The outer frame defines:

- layout size
- alignment
- spacing
- hit area
- consistency across the icon set

Always preserve the original frame size (16x16, 20x20, 24x24, etc.).

---

## Expected behavior

Correct:

```html
<div class="icon-container">
  <svg viewBox="original-viewbox">
    ...
  </svg>
</div>
```

Incorrect:

```html
<svg width="24" height="24">
  <!-- scaled vector -->
</svg>
```

when the original vector did not fill the frame.

---

## Goal

Imported icons must visually match the Figma source 1:1, including:

- padding
- empty space
- optical alignment
- non-square artwork inside square frames