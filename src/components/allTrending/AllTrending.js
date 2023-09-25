import { TMDB } from "@/modules/fetching";


export default async function AllTrending () {
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
