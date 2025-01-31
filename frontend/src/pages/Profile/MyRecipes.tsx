import { useQuery } from "react-query"
import { getUserRecipes } from "../../apiServices/RecipeService"
import { useAuth } from "../../contexts/AuthContext"
import { RecipeTile } from "../../components/RecipeTile";


export const MyRecipes = () => {
    const { user } = useAuth();

    const { data: recipes, refetch } = useQuery(
        "getUserRecipes",
        async () => await getUserRecipes(user!.id),
        {
            onSuccess: (r) => {
                console.log(r);
                
            }
        }
    )

    return (
        <div className="d-flex flex-wrap">
            {recipes && recipes[0] && recipes.map(r => <RecipeTile recipe={r} key={r.id} refetch={refetch}/>)}
        </div>
    )
}
