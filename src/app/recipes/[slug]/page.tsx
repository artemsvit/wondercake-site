import { getDessertBySlug } from '@/services/dessertService';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = await getDessertBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-4">{recipe.name}</h1>
        <p className="text-gray-600 mb-4">{recipe.description}</p>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">Prep Time</h3>
            <p className="text-gray-600">{recipe.prepTime}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">Cook Time</h3>
            <p className="text-gray-600">{recipe.cookTime}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">Servings</h3>
            <p className="text-gray-600">{recipe.servings}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">Difficulty</h3>
            <p className="text-gray-600">{recipe.difficulty}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-serif mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <span className="font-medium mr-4">{index + 1}.</span>
                <p>{instruction}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {recipe.tips && recipe.tips.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-serif mb-4">Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {recipe.nutritionalInfo && (
        <section className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-serif mb-4">Nutritional Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Calories</h3>
              <p className="text-gray-600">{recipe.nutritionalInfo.calories}kcal</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Protein</h3>
              <p className="text-gray-600">{recipe.nutritionalInfo.protein}g</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Carbs</h3>
              <p className="text-gray-600">{recipe.nutritionalInfo.carbohydrates}g</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Fat</h3>
              <p className="text-gray-600">{recipe.nutritionalInfo.fat}g</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Sugar</h3>
              <p className="text-gray-600">{recipe.nutritionalInfo.sugar}g</p>
            </div>
          </div>
        </section>
      )}

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
