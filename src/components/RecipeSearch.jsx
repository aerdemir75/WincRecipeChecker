import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Center, Heading } from "@chakra-ui/react";


export const RecipeSearch = ({
  items,
  handleFilteredRecipes,
  originalItems,
}) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setSearchField(searchValue);

    if (searchValue === "") {
      
      handleFilteredRecipes(originalItems);
    } else {
      //filter Recipes (searchField)
      const matchedRecipes = items.filter((item) => {
        const { label, dietLabels, cautions, healthLabels } = item.recipe;
        return (
          label.toLowerCase().includes(searchValue.toLowerCase()) ||
          dietLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          cautions.some((caution) =>
            caution.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          healthLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      });
      //function call from App
      handleFilteredRecipes(matchedRecipes);
    }
  };

  return (
    <Center flexDir="column" gap={4} mt={8} mb={6}>
      <Heading as="h2" size="xl">
        Search for a recipe:
      </Heading>
      <TextInput changeFn={handleChange} w={200} />
    </Center>
  );
};