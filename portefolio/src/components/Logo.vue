<template>
  <svg class="logo" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle class="ink-o" cx="27" cy="32" r="15" fill="none" stroke-width="7" />
    <path
      class="ink-b"
      d="M37 17v30M37 17h7a7.5 7.5 0 0 1 0 15h-7m0 0h8a7.5 7.5 0 0 1 0 15h-8"
      fill="none"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
/*
 * Monogramme OB — surimpression deux encres.
 * Le O et le B sont tracés séparément ; leur croisement produit une troisième
 * teinte via mix-blend-mode (multiply en clair, screen en sombre).
 * Les couleurs et le mode de fusion viennent des tokens --logo-* de main.css.
 */
</script>

<style scoped>
.logo {
  display: block;
  width: 2.4rem;
  height: 2.4rem;
}

.ink-o {
  stroke: var(--logo-ink-o);
  mix-blend-mode: var(--logo-blend);
}

.ink-b {
  stroke: var(--logo-ink-b);
  mix-blend-mode: var(--logo-blend);
}

/* Repli si le navigateur ne sait pas fusionner : deux encres franches,
   sans troisième teinte, mais le dessin reste lisible. */
@supports not (mix-blend-mode: multiply) {
  .ink-o,
  .ink-b {
    mix-blend-mode: normal;
  }
}
</style>
