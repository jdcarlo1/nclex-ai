import { ArrowRight } from "lucide-react";

const books = [
  { title: "Pharmacology", img: "/books/images/pharm-cover.jpg" },
  { title: "EKG & Rhythm Interpretation", img: "/books/images/ekg-cover.jpg" },
  { title: "Prioritization, Delegation & Assignment", img: "/books/images/pda-cover.jpg" },
  { title: "Medical-Surgical", img: "/books/images/medsurg-cover.jpg" },
  { title: "Maternity & Obstetrics", img: "/books/images/maternity-cover.jpg" },
  { title: "Pediatric", img: "/books/images/peds-cover.jpg" },
  { title: "Psychiatric", img: "/books/images/psych-cover.jpg" },
  { title: "Pathophysiology", img: "/books/images/patho-cover.jpg" },
  { title: "Master Comparison Flashcards", img: "/books/images/comparison-cover.jpg"  },
];

export default function BooksSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
        NCLEX-RN Prep Books
      </h2>
      <p className="text-gray-500 text-center mb-12 text-lg">
        4,650 hard practice questions with full rationales — $2.99 each on Amazon
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {books.map((book) => (
          <a key={book.title} href="/books/" className="group">
            <img
              src={book.img}
              alt={book.title + " book cover"}
              className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
            />
            <p className="text-sm font-semibold text-gray-900 text-center mt-3 group-hover:text-blue-600">
              {book.title}
            </p>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/books/"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-blue-200"
        >
          View All Books
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}
