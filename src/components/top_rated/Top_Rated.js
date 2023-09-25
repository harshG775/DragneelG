import { TMDB } from "@/modules/fetching";
export default async function Top_rated() {
	const data_Movie = await TMDB.getTopRatedPage("movie", 1, "week");
	const data_TV = await TMDB.getTopRatedPage("tv", 1, "week");
	return (
		<section>
			<div>
				<h6>top_rated</h6>
				<div>
					<button>Movie</button>
					<button>tv</button>
				</div>
			</div>
			<ul>
				<li>top_rated</li>
			</ul>
		</section>
	);
};