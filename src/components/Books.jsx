import { useRef } from 'react';

const booksData = [
  {
    id: 1,
    title: "Shadow Behind the Eternity",
    genre: "Philosophical Sci-Fi Thriller",
    color: "#a855f7",
    cover: "https://books2read-prod.s3.amazonaws.com/CACHE/images/ubl_book_images/book_display_image_vGcnL7E/76609257b467da7b50aa3d0baccb27e5",
    synopsis: "What happens when death is no longer the end? A mind-bending dive into digital consciousness and the afterlife — where the line between dying and downloading blurs into something terrifyingly beautiful.",
    link: "https://books2read.com/u/mdEBMX"
  },
  {
    id: 2,
    title: "ChronoGenesis: The Shattered Future",
    genre: "Sci-Fi Thriller · Series Book 1",
    color: "#00d4ff",
    cover: "https://books2read-prod.s3.amazonaws.com/CACHE/images/ubl_book_images/book_display_image_hWwofO1/a2b5f737ade2defbd1610b6b230f6360",
    synopsis: "Time has become a weapon. Lila Reeves — a barista haunted by her parents' mysterious disappearance — starts experiencing temporal distortions that shatter the boundary between reality and nightmare. The clock is running out. On everything.",
    link: "https://books2read.com/u/mZ8DVB"
  },
  {
    id: 3,
    title: "ChronoGenesis: Echoes of the Architect",
    genre: "Sci-Fi Thriller · Series Book 2",
    color: "#00d4ff",
    cover: "https://books2read-prod.s3.amazonaws.com/CACHE/images/ubl_book_images/book_display_image_9DC2WPQ/dbe289e920096e9b3542d27d37811f8a",
    synopsis: "The war for time isn't over. In the aftermath of Lila's ultimate sacrifice, fractured timelines spiral toward collapse — and the Architect's shadow grows longer. The sequel that hits harder than the first.",
    link: "https://books2read.com/u/brEZee"
  },
  {
    id: 4,
    title: "Ink & Rain",
    genre: "Literary Fiction",
    color: "#60a5fa",
    cover: "https://books2read-prod.s3.amazonaws.com/CACHE/images/ubl_book_images/book_display_image_K3yZYN4/23981cfc83e473f62d8087990c2d2dd0",
    synopsis: "Tokyo. Rain. A student and a mysterious artist finding each other in the spaces between words. A quiet, devastating story about connection, creativity, and how love finds us when we least expect it.",
    link: "https://books2read.com/u/mlxA9q"
  },
  {
    id: 5,
    title: "In the Quiet Moments",
    genre: "Non-Fiction / Reflective",
    color: "#f59e0b",
    cover: "https://books2read-prod.s3.amazonaws.com/CACHE/images/ubl_book_images/book_display_image_bw81g95/f06230c1e5ec549fd9f559edbce662cc",
    synopsis: "A collection of honest reflections on emotion, introspection, and self-discovery. For anyone who has ever found meaning in the silence between their own thoughts.",
    link: "https://books2read.com/u/49KQ0W"
  },
  {
    id: 6,
    title: "Lucid",
    genre: "Sci-Fi",
    color: "#1f1d46ff",
    cover: "data:image/jpeg;base64,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",
    synopsis: `Clara awakens in a city transformed into a living dreamscape that feeds on memory and emotion. As the “layer” rewrites reality into code, she and those connected to her must decide whether to fight, merge, or dissolve. A blend of sci‑fi, psychological horror, and tragic romance, Lucid explores what survives when consciousness itself becomes the battlefield.`,
    link: "https://books2read.com/u/mgvYy7"
  }
];


const BookCard = ({ book }) => {
  return (
    <div className="book-card-wrap">
      <div
        className="book-card premium-hover"
        style={{
          borderTop: `2px solid ${book.color}`,
          '--hover-glow': book.color
        }}
      >
        <div className="specular-static"></div>
        <div className="book-cover-container">
          <img src={book.cover} alt={book.title} className="book-cover" loading="lazy" />
        </div>
        <div className="book-info">
          <div className="book-genre" style={{ color: book.color }}>{book.genre}</div>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-synopsis">{book.synopsis}</p>
          <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost book-btn" style={{ width: '100%', borderColor: book.color, color: book.color }}>
            Get This Book →
          </a>
        </div>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <section id="books" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Worlds I've Built</h2>

        <div className="books-container reveal">
          {booksData.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="books-cta reveal">
          <a href="https://books2read.com/ap/n9QBAw/Salehin-Ashfi" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Find All My Books →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Books;
