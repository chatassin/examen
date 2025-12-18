"use server";

import { db } from "@/db";
import { bookingTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getBooking() {
  return await db.select().from(bookingTable);
}

export async function createBooking(form: FormData) {
  await db.insert(bookingTable).values({
    name: String(form.get("name")), //le form est à créer pour récupérer les infos de création du blog
    telnumber: String(form.get("telnumber")), //le content est obligatoire0 car notNull() sinon values souligné en rouge
    numberppl: String(form.get("numberppl")),
    date: String(form.get("date")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editBooking(form: FormData) {
  await db
    .update(bookingTable)
    .set({
      name: String(form.get("name")), //le form est à créer pour récupérer les infos de création du blog
      telnumber: String(form.get("telnumber")), //le content est obligatoire0 car notNull() sinon values souligné en rouge
      numberppl: String(form.get("numberppl")),
    })
    .where(eq(bookingTable.id, String(form.get("id"))));
  redirect((await headers()).get("referer") ?? "/");
}

export async function deleteBooking(id: string) {
  await db.delete(bookingTable).where(eq(bookingTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
