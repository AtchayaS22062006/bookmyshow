import Link from 'next/link';

export default function Movie() {
	return (
		<div className="page-bg">
			<div className="container movie-page">
				<h1>🎥 Leo</h1>
				<p>Language: Tamil</p>
				<p>Genre: Action</p>
				<p>Duration: 2h 45m</p>

				<div className="movie-actions">
					<button onClick={() => alert('Ticket Booked Successfully!')}>Book Now</button>
					<Link href="/" className="link-back">Back to listings</Link>
				</div>
			</div>
		</div>
	);
}