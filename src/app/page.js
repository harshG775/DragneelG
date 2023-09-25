import "./page.module.css";
export default async function Home() {
	return (
		<div>
			<section>
				<AllTrending />
			</section>
            <br />
			<main>
				<Trending />
				<Top_rated />
			</main>
		</div>
	);
}

import { TMDB } from "@/modules/fetching";

const AllTrending = async () => {
	const data = await TMDB.getAllTrendingPage(1, "week");
	return (
		<section>
			<ul>
                <li>carousel</li>
                <li>carousel</li>
                <li>carousel</li>
            </ul>
		</section>
	);
};

const Trending = async (prop) => {
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
const Top_rated = async () => {
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
