import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { Box, Center, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  const handleFilteredRecipes = (recipes) => {
    setFilteredRecipes(recipes);
  };
  return (
    <Box>
      <Center h="100hv" flexDir="column" bgColor="gray.900" color="whitesmoke">
        <Heading as="h1" fontSize={["3xl", "4xl", "6xl"]}>
          Winc Recipe Checker
        </Heading>

        {selectedItem ? (
          <RecipePage item={selectedItem} clickFn={setSelectedItem} />
        ) : (
          <>
            <RecipeSearch
              items={filteredRecipes}
              clickFn={setSelectedItem}
              originalItems={data.hits}
              handleFilteredRecipes={handleFilteredRecipes}
            />
            <RecipeListPage
              selectedItem={selectedItem}
              clickFn={setSelectedItem}
              items={filteredRecipes}
            />
          </>
        )}
      </Center>
    </Box>
  );
};
