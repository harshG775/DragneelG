import "./page.module.css";

import AllTrending from "@/components/allTrending/AllTrending";
import Top_rated from "@/components/top_rated/Top_Rated";
import Trending from "@/components/trending/Trending";

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

