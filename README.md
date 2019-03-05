# Multidash

App intended for cycling through multiple dashboards on a single monitor. Prototype project as a little side project, no promises this is either unique or useful. In fact, the Chrome/Chromium extension [Tab Roulette](https://chrome.google.com/webstore/detail/tab-roulette/dlgdimppibbgkjbhnfbkgbfgiclmjlch?hl=en) does pretty much everything this app does, but with less setup (just replace `config.js` with a folder of bookmarks).

Very work in progress.

## Usage

Urls to scroll through and the cadence are defined by an array in `src/config.js`.

Type can be either `url` or `img`. Optionally, `seconds` controls how long to stay on the slide.

Images can be hosted in the `public` directory. Example puppy from unsplash.com.

Start with `npm run start`.

Next/Previous buttons appear when you hover over the bottom of the screen.

## Future

- expand small images to fill screen
- change animation direction when clicking "previous"
- nicer looking buttons
- interface to add slides

