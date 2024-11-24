## HSL Color Generator

A simple and intuitive tool for generating HSL (Hue, Saturation, Lightness) color codes. Customize colors easily by adjusting sliders or inputs, and preview the results in real-time. Perfect for designers and developers looking to experiment with HSL values for web and UI projects.

**Folder directory**

```bash
project/
├── index.html
├── style.css
├── scripts/
│   ├── main.js          # Entry point (handles imports and initializes the app)
│   ├── domUtils.js      # DOM utility functions (e.g., element selection, DOM manipulation)
│   ├── eventHandlers.js # Event listener functions
│   ├── utils.js         # Color manipulation or formatting utilities
```

## Importing Modules

Using Modern JavaScript Modules
If you're serving your project over an HTTP server (required for modules), you can include your main script like this:

```html
<script type="module" src="scripts/main.js"></script>
```

Using Legacy Script Tags
If you aren't using a module bundler or HTTP server, combine all the scripts manually and include them in order:

```html
<script src="scripts/domUtils.js"></script>
<script src="scripts/utils.js"></script>
<script src="scripts/eventHandlers.js"></script>
<script src="scripts/main.js"></script>
```
