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
