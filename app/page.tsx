import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p className="text-left text-zinc-600 dark:text-zinc-400 leading-relaxed sm:text-lg font-bold">
        Formulaire de réservation
      </p>

      <div className="flex flex-col gap-3 mt-4 w-full sm:w-auto sm:flex-row">
        <Button href="/bookings">voir les réservations</Button>
        <Button variant="outline">AUTRE</Button>
      </div>

      {/* C'est ici qu'on affiche un formulaire de réservation donc c'est ici qu'on crée de nouvelles réservations */}
    </div>
  );
}
