# Stoic Vivaldi

A lightweight webpage for personal use meant to be a widget for Vivaldi's dashboard. Generates a random stoic quote on load.

Be sure to toggle "Share Theme Colors" when adding the webpage for proper theming.

## Example
<img width="489" height="574" alt="Example dashboard widget" src="https://github.com/user-attachments/assets/b25db0ac-65e3-4978-a9bd-7b5b6daddf57" />

## Hiding URL

- Enable "Allow CSS modifications" in vivaldi:experiments.
- In Settings > Appearance, select a folder to put your CSS file
- Create a CSS file in the folder and add this line:

```css
.dashboard-widget .url-wrapper {
  display: none;
}
```

- Restart Vivaldi

## Credit

- Vanilla HTML/CSS & JavaScript
- [Stoic Quotes](https://github.com/benhoneywill/stoic-quotes) by Ben Honeywill
- [Custom dashboard widgets](https://forum.vivaldi.net/topic/101613/custom-dashboard-widgets)
