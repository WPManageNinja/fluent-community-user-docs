<script setup>
/**
 * Ambient aurora backdrop for the homepage.
 *
 * Four oversized, very soft radial blobs in the FluentCommunity palette drift
 * behind the page on long, offset loops — the same "slow ambient wash" idea as
 * Google's "Ask about this page" panel, but on brand.
 *
 * Fixed to the viewport (so it stays put while the page scrolls) and
 * non-interactive. Colours come from --fc-aurora-* variables in custom.css so
 * the light/dark palettes live with the rest of the branding.
 *
 * Stacking: this sits at z-index 0, above the opaque `body` background but
 * below `.VPContent.is-home`, which custom.css lifts to z-index 1. A negative
 * z-index does NOT work here — body's background paints over it.
 */
</script>

<template>
  <div class="fc-aurora" aria-hidden="true">
    <span class="fc-aurora__blob fc-aurora__blob--one" />
    <span class="fc-aurora__blob fc-aurora__blob--two" />
    <span class="fc-aurora__blob fc-aurora__blob--three" />
    <span class="fc-aurora__blob fc-aurora__blob--four" />
  </div>
</template>

<style scoped>
.fc-aurora {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  /* Strongest at the top behind the hero, calming down over the feature grid. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, rgba(0, 0, 0, 0.4) 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 55%, rgba(0, 0, 0, 0.4) 100%);
}

.fc-aurora__blob {
  position: absolute;
  width: 78vmax;
  height: 78vmax;
  border-radius: 50%;
  /* Soft alpha ramp instead of filter: blur() — same look, far cheaper to animate. */
  opacity: var(--fc-aurora-opacity);
  will-change: transform;
  animation-duration: 30s;
  animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.fc-aurora__blob--one {
  top: -34vmax;
  left: -22vmax;
  background: radial-gradient(
    circle at center,
    color-mix(in srgb, var(--fc-aurora-1) 62%, transparent) 0%,
    color-mix(in srgb, var(--fc-aurora-1) 30%, transparent) 38%,
    transparent 68%
  );
  animation-name: fc-aurora-drift-a;
}

.fc-aurora__blob--two {
  top: -26vmax;
  right: -24vmax;
  background: radial-gradient(
    circle at center,
    color-mix(in srgb, var(--fc-aurora-2) 56%, transparent) 0%,
    color-mix(in srgb, var(--fc-aurora-2) 26%, transparent) 40%,
    transparent 70%
  );
  animation-name: fc-aurora-drift-b;
  animation-duration: 38s;
  animation-delay: -6s;
}

.fc-aurora__blob--three {
  top: 6vmax;
  right: -30vmax;
  background: radial-gradient(
    circle at center,
    color-mix(in srgb, var(--fc-aurora-3) 50%, transparent) 0%,
    color-mix(in srgb, var(--fc-aurora-3) 24%, transparent) 38%,
    transparent 68%
  );
  animation-name: fc-aurora-drift-c;
  animation-duration: 34s;
  animation-delay: -14s;
}

.fc-aurora__blob--four {
  top: 2vmax;
  left: -28vmax;
  background: radial-gradient(
    circle at center,
    color-mix(in srgb, var(--fc-aurora-4) 46%, transparent) 0%,
    color-mix(in srgb, var(--fc-aurora-4) 22%, transparent) 40%,
    transparent 70%
  );
  animation-name: fc-aurora-drift-d;
  animation-duration: 44s;
  animation-delay: -22s;
}

/* Each blob travels its own path so the composite never visibly repeats. */
@keyframes fc-aurora-drift-a {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(14vmax, 9vmax, 0) scale(1.14); }
  100% { transform: translate3d(4vmax, 18vmax, 0) scale(0.94); }
}

@keyframes fc-aurora-drift-b {
  0%   { transform: translate3d(0, 0, 0) scale(1.06); }
  50%  { transform: translate3d(-16vmax, 12vmax, 0) scale(0.92); }
  100% { transform: translate3d(-6vmax, 22vmax, 0) scale(1.12); }
}

@keyframes fc-aurora-drift-c {
  0%   { transform: translate3d(0, 0, 0) scale(0.95); }
  50%  { transform: translate3d(-20vmax, -10vmax, 0) scale(1.16); }
  100% { transform: translate3d(-10vmax, 8vmax, 0) scale(1); }
}

@keyframes fc-aurora-drift-d {
  0%   { transform: translate3d(0, 0, 0) scale(1.1); }
  50%  { transform: translate3d(18vmax, -8vmax, 0) scale(0.9); }
  100% { transform: translate3d(8vmax, 10vmax, 0) scale(1.08); }
}

@media (max-width: 640px) {
  /* Calmer on small screens: one fewer light source, lower intensity. */
  .fc-aurora__blob {
    opacity: calc(var(--fc-aurora-opacity) * 0.7);
  }
  .fc-aurora__blob--four {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  /* Keep the colour, drop the movement. */
  .fc-aurora__blob {
    animation: none;
  }
}
</style>
