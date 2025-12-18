import { createBooking } from "@/lib/booking";
import { redirect } from "next/navigation";

async function handleCreateBooking(formData: FormData) {
  "use server";
  await createBooking(formData);
  redirect("/bookings");
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p className="text-left text-zinc-600 dark:text-zinc-400 leading-relaxed sm:text-lg font-bold">
        Formulaire de réservation
      </p>
      <form action={handleCreateBooking} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="telnumber" className="block text-sm font-medium mb-1">
            Numéro de téléphone
          </label>
          <textarea
            name="telnumber"
            id="telnumber"
            required
            className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
          ></textarea>
        </div>
        <div>
          <label htmlFor="numberppl" className="block text-sm font-medium mb-1">
            Nombre de personnes
          </label>
          <textarea
            name="numberppl"
            id="numberppl"
            required
            className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
          ></textarea>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date et heure
          </label>
          <textarea
            name="date"
            id="date"
            required
            className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Enregistrer la réservation
        </button>
      </form>
    </div>
  );
}
