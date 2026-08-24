export function ArtDirectedHero() {
  return (
    <picture className="hero-picture">
      <source media="(max-width: 640px)" type="image/avif" srcSet="/images/forge-hero-mobile.avif" />
      <source media="(max-width: 640px)" type="image/webp" srcSet="/images/forge-hero-mobile.webp" />
      <source type="image/avif" srcSet="/images/forge-hero.avif" />
      <img src="/images/forge-hero.webp" alt="" decoding="async" fetchPriority="high" />
    </picture>
  );
}
