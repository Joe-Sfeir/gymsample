"use client";

import Link from "next/link";
import { useState } from "react";
import type { Membership } from "@/types";
import {
  formatCurrency,
  membershipPrice,
  type BillingPeriod,
} from "@/lib/formatting/currency";

export function PricingSelector({ plans }: { plans: Membership[] }) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  return (
    <>
      <p className="mb-5 max-w-2xl text-sm text-muted">
        Prices and policies are illustrative content for this fictional concept
        demonstration. No payment is collected.
      </p>
      <div
        className="inline-flex max-w-full overflow-x-auto border-2 border-border"
        role="group"
        aria-label="Billing period"
      >
        {(["monthly", "quarterly", "annual"] as const).map((item) => (
          <button
            className={
              "min-h-12 px-4 font-bold capitalize " +
              (period === item ? "bg-accent text-black" : "")
            }
            aria-pressed={period === item}
            onClick={() => setPeriod(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            className={
              "border-2 p-7 " +
              (plan.featured
                ? "border-accent [box-shadow:var(--shadow-hard)]"
                : "border-border")
            }
            key={plan.id}
          >
            <p className="eyebrow">Illustrative plan</p>
            <h2 className="mt-2 text-4xl font-black uppercase">{plan.name}</h2>
            <p className="mt-4 text-muted">{plan.description}</p>
            <p className="my-6 text-3xl font-black">
              {formatCurrency(membershipPrice(plan, period), plan.currency)}{" "}
              <span className="text-sm text-muted">/ {period}</span>
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-bold">Classes</dt>
                <dd className="text-muted">{plan.includedClasses}</dd>
              </div>
              <div>
                <dt className="font-bold">Coaching</dt>
                <dd className="text-muted">{plan.coachingSessions}</dd>
              </div>
              <div>
                <dt className="font-bold">Access</dt>
                <dd className="text-muted">{plan.accessTimes}</dd>
              </div>
            </dl>
            <Link className="button button-accent mt-7" href="/trial-booking">
              Try the trial flow
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
