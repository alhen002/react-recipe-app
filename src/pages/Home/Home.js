import {useFetch} from "../../hooks/useFetch";


// styles
import './Home.css';
import {RecipeList} from "../../components/RecipeList";

export function Home() {

    const {data : recipes, isPending, error} = useFetch('http://localhost:3000/recipes');


    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Pending....</div>}
            {recipes && <RecipeList recipes={recipes}/> }
        </div>
    );
}

