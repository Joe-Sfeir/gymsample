"use client";
export function CookiePreferencesButton(){return <button className="underline underline-offset-4" type="button" onClick={()=>window.dispatchEvent(new Event("forge:cookie-preferences"))}>Cookie preferences</button>}
