import "./page.module.css";
import { TMDB } from "@/modules/fetching";
export default async function Home() {
    const resp = await TMDB.getAllTrendingPage(1,"day")
    console.log(resp)
    
	return (
		<div>
            <h1>    
                data.results[0].original_title
            </h1>

			<h1>bottom</h1>
		</div>
	);
}
