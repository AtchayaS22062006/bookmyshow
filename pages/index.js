import Link from 'next/link';

const MOVIES = [
  { id: 1, title: 'Leo', genre: 'Action', language: 'Tamil' },
  { id: 2, title: 'Jawan', genre: 'Action', language: 'Hindi' },
  { id: 3, title: 'The Matrix', genre: 'Sci-Fi', language: 'English' },
  { id: 4, title: 'Interstellar', genre: 'Sci-Fi', language: 'English' },
  { id: 5, title: 'Parasite', genre: 'Thriller', language: 'Korean' },
  { id: 6, title: 'Inception', genre: 'Thriller', language: 'English' },
  { id: 7, title: 'Spirited Away', genre: 'Animation', language: 'Japanese' },
  { id: 8, title: 'The Dark Knight', genre: 'Action', language: 'English' },
  { id: 9, title: 'Avatar', genre: 'Sci-Fi', language: 'English' }
];

export default function Home() {
  return (
    <div className="page-bg">
      <div className="container">
        <h1> BookMyShow Demo</h1>

        <div className="movie-box">
          <div className="grid">
            {MOVIES.map((m) => (
              <div className="card" key={m.id}>
                <div className="card-body">
                  <h3>{m.title}</h3>
                  <p className="meta">{m.genre}  {m.language}</p>
                  <Link href="/movie" className="btn">Book Tickets</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
