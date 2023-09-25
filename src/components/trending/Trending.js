import { TMDB } from "@/modules/fetching";
export default async function Trending () {
	const data_Movie = await TMDB.getTrendingPage("movie", 1, "week");
	const data_TV = await TMDB.getTrendingPage("tv", 1, "week");
	return (
		<section>
			<div>
				<h6>Trending</h6>
				<div>
					<button>Movie</button>
					<button>tv</button>
				</div>
			</div>
			<ul>
				<li>Trending</li>
			</ul>
		</section>
	);
};