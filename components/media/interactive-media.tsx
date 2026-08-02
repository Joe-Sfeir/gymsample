export function InteractiveMedia({ children, label, detail, className = "" }: { children: React.ReactNode; label: string; detail: string; className?: string }) {
  return <figure className={`interactive-media ${className}`} data-reactive-media tabIndex={0}><div className="interactive-media-visual">{children}</div><figcaption className="interactive-media-caption"><span className="eyebrow">{label}</span><strong>{detail}</strong><span className="interactive-media-arrow" aria-hidden="true">↗</span></figcaption></figure>;
}
