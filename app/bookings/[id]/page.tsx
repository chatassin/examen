import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBooking } from "@/lib/booking";
import Link from "next/link";

type BlogPostPageProps = {
  params: { id: string };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const id = Number(params.id);
  const post = await getBooking();

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
          <h1 className="text-3xl font-bold text-red-600">Erreur 404</h1>
          <p className="mt-4">Réservation non trouvée.</p>
          <Link
            href="/bookings"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            Retour à la liste des réservations
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}
