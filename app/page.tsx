import Image from "next/image";
import Link from "next/link";
import { gymConfig } from "@/config/gym";
import { homepageContent } from "@/content/homepage";
import { classes } from "@/content/classes";
import { trainers } from "@/content/trainers";
import {
  facilities,
  faqs,
  firstVisit,
  gymRules,
  trainingWeek,
} from "@/content/site";
import { memberships } from "@/content/memberships";
import { TrainingWeek } from "@/components/homepage/training-week";
import { InteractiveMedia } from "@/components/media/interactive-media";
import { ArtDirectedHero } from "@/components/media/art-directed-hero";

export default function Home() {
  return (
    <main>
      <section
        className="hero-reactive relative grid min-h-[78vh] items-end overflow-hidden border-b-4 border-accent"
        data-reactive-media
      >
        <ArtDirectedHero />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container relative z-10 py-16">
          <p className="eyebrow" data-reveal>
            {homepageContent.hero.eyebrow}
          </p>
          <h1 className="display mt-5 max-w-6xl" data-reveal>
            {homepageContent.hero.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg" data-reveal>
            {homepageContent.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-reveal>
            <Link className="button button-accent" href="/trial-booking">
              Try the booking flow
            </Link>
            <Link className="button bg-background/80" href="/schedule">
              View schedule
            </Link>
          </div>
          <p className="mt-10 text-sm font-bold uppercase" data-reveal>
            Strength · Conditioning · Mobility
          </p>
        </div>
      </section>
      <section className="bg-accent py-5 text-black">
        <div className="container grid gap-2 font-bold uppercase md:grid-cols-2">
          <p>Demonstration timetable · weekdays from 06:30</p>
          <p className="md:text-right">{gymConfig.address}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <p className="text-8xl font-black text-accent">01</p>
          <div>
            <p className="eyebrow">Training philosophy</p>
            <h2 className="mt-4 text-5xl font-black uppercase sm:text-7xl">
              {homepageContent.philosophy.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg text-muted">
              {homepageContent.philosophy.body}
            </p>
          </div>
        </div>
      </section>
      <TrainingWeek days={trainingWeek} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured classes</p>
          <h2 className="mt-3 text-5xl font-black uppercase">
            Choose the work.
          </h2>
          <div className="mt-10 divide-y-2 divide-border border-y-2 border-border">
            {classes.slice(0, 3).map((item, index) => (
              <Link
                className="grid gap-4 py-7 no-underline sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                href={`/classes/${item.slug}`}
                key={item.id}
              >
                <span className="text-4xl font-black text-accent">
                  0{index + 1}
                </span>
                <span>
                  <strong className="text-2xl uppercase">{item.name}</strong>
                  <span className="mt-1 block text-sm text-muted">
                    {item.shortDescription}
                  </span>
                </span>
                <span aria-hidden="true" className="text-3xl">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#e8e1d5] text-black">
        <div className="container grid gap-8 lg:grid-cols-2">
          <InteractiveMedia
            className="aspect-[4/5]"
            label="Hover to inspect"
            detail="Coaching at FORGE"
          >
            <Image
              src={trainers[0].photo}
              alt="Fictional coach Maya Khoury on the concept strength floor"
              width={800}
              height={1000}
            />
          </InteractiveMedia>
          <div className="self-end">
            <p className="eyebrow">Coaching</p>
            <h2 className="mt-3 text-6xl font-black uppercase">
              People set the standard.
            </h2>
            <p className="mt-7 text-lg">
              Two clearly fictional profiles demonstrate how coaching approach,
              specialties, and class links can be presented without invented
              credentials.
            </p>
            <Link className="button mt-8 border-black" href="/trainers">
              Meet the trainers
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
          <InteractiveMedia
            label="Explore the floor"
            detail={facilities[0].name}
          >
            <Image
              src={facilities[0].image}
              alt="Fictional FORGE training floor with strength and conditioning zones"
              width={1200}
              height={800}
            />
          </InteractiveMedia>
          <div>
            <p className="eyebrow">Facilities</p>
            <h2 className="mt-3 text-5xl font-black uppercase">
              Everything has a purpose.
            </h2>
            <p className="mt-5 text-muted">
              The interactive plan demonstrates equipment, circulation, and
              accessibility notes while clearly identifying the venue as a
              concept.
            </p>
            <Link className="button mt-7" href="/facilities">
              Explore the space
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-surface">
        <div className="container">
          <p className="eyebrow">Illustrative memberships</p>
          <h2 className="mt-3 text-5xl font-black uppercase">
            Train first. Choose clearly.
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {memberships.map((plan) => (
              <article className="border-2 border-border p-7" key={plan.id}>
                <h3 className="text-3xl font-black uppercase">{plan.name}</h3>
                <p className="mt-3 text-muted">{plan.description}</p>
                <p className="mt-5 font-bold text-accent">
                  From ${plan.monthlyPrice} / month · demo price
                </p>
              </article>
            ))}
          </div>
          <Link className="button button-accent mt-8" href="/memberships">
            Compare memberships
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">First visit</p>
            <h2 className="mt-3 text-5xl font-black uppercase">
              Start with an assessment.
            </h2>
            <ol className="mt-8 space-y-5">
              {firstVisit.map((step, index) => (
                <li className="flex gap-4" key={step}>
                  <strong className="text-accent">0{index + 1}</strong>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Gym rules preview</p>
            <h2 className="mt-3 text-5xl font-black uppercase">
              Respect the room.
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {gymRules.map((rule) => (
                <li className="py-4" key={rule}>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-surface">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-5xl font-black uppercase">
            Before you arrive.
          </h2>
          <div className="mt-8">
            {faqs.slice(0, 3).map((item) => (
              <details
                className="border-t-2 border-border py-6"
                key={item.question}
              >
                <summary className="cursor-pointer text-xl font-bold">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link className="button mt-6" href="/faq">
            All questions
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact the studio behind the demo</p>
            <h2 className="mt-3 text-5xl font-black uppercase">
              Build your version.
            </h2>
            <p className="mt-6 text-muted">{gymConfig.address}</p>
            <p className="mt-2 text-muted">
              {gymConfig.email} · {gymConfig.phone}
            </p>
            <Link className="button mt-7" href="/contact">
              Contact Spline
            </Link>
          </div>
          <Link
            className="interactive-map grid min-h-72 place-items-center border-2 border-border bg-surface p-8 text-center no-underline"
            href={gymConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong className="text-3xl uppercase">Concept location</strong>
              <br />
              <span className="mt-3 block text-muted">Open Beirut in Maps</span>
              <span
                className="mt-8 block text-5xl text-accent"
                aria-hidden="true"
              >
                ↗
              </span>
            </span>
          </Link>
        </div>
      </section>
      <section className="border-y-4 border-accent bg-accent py-20 text-black">
        <div className="container">
          <p className="text-sm font-black uppercase">
            One session. Clear next step.
          </p>
          <h2 className="mt-4 max-w-5xl text-6xl font-black uppercase sm:text-8xl">
            Book one trial before choosing a membership.
          </h2>
          <Link className="button mt-8 border-black" href="/trial-booking">
            Book a trial
          </Link>
        </div>
      </section>
    </main>
  );
}
