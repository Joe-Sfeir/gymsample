# FORGE motion specification

## System principles

Motion communicates physical response and interface state, not spectacle. It uses short, interruptible transforms, keeps content visible by default, disables pointer response on coarse input, and resolves immediately under reduced motion.

## M01 — Documentary hero response

- Purpose: give the first viewport physical depth without moving copy.
- Trigger: fine-pointer movement over hero.
- Behavior: media shifts by at most 20 px and settles within 650 ms.
- Mobile/touch: static art-directed portrait crop.
- Reduced motion: no transform.
- Tool: CSS custom properties updated by the existing motion system.

## M02 — Training-week state

- Purpose: preserve spatial continuity while visitors change days.
- Trigger: click, tap, ArrowLeft/Right/Up/Down.
- Behavior: active tab, image, copy, and progress state update together.
- Mobile: horizontal tab rail plus explicit Previous/Next buttons.
- Reduced motion: instant state change.
- Acceptance: active tab, panel ownership, and progress values remain announced.

## M03 — Media inspection

- Purpose: reveal context attached to coaching and facility imagery.
- Trigger: hover or keyboard focus.
- Behavior: small perspective shift and caption reveal.
- Touch: captions remain available without hover dependency.
- Reduced motion: static media with visible captions.
