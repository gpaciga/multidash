# Multidash

App intended for cycling through multiple dashboards on a single monitor. Prototype project as a little side project, no promises this is either unique or useful.

Very work in progress.

## Usage

Urls to scroll through are defined by an array in `public/config.json`.

Image files can be put in `public` and listed in the array too.

Cadence is set by a constant at the top of `src/Slideshow.js`.

Start with `npm run start`.

## Future

- Scroll through a directory of images too
- urls defined in their own config
- pick up new urls and images without restarting
- interface to click through slides manually
- set time on each slide independently

