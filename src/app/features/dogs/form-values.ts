export const defaultData = {
  image_link: 'https://via.placeholder.com/600/92c952',
  good_with_children: 0,
  good_with_other_dogs: 0,
  shedding: 0,
  grooming: 0,
  drooling: 0,
  coat_length: 0,
  good_with_strangers: 0,
  playfulness: 0,
  protectiveness: 0,
  trainability: 0,
  energy: 0,
  barking: 0,
  min_life_expectancy: 0,
  max_life_expectancy: 0,
  max_height_male: 0,
  max_height_female: 0,
  max_weight_male: 0,
  max_weight_female: 0,
  min_height_male: 0,
  min_height_female: 0,
  min_weight_male: 0,
  min_weight_female: 0,
  name: '',
}
export const mockData: Response = {
  image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
  good_with_children: 5,
  good_with_other_dogs: 5,
  shedding: 4,
  grooming: 2,
  drooling: 2,
  coat_length: 1,
  good_with_strangers: 5,
  playfulness: 4,
  protectiveness: 3,
  trainability: 5,
  energy: 3,
  barking: 1,
  min_life_expectancy: 10,
  max_life_expectancy: 12,
  max_height_male: 24,
  max_height_female: 24,
  max_weight_male: 75,
  max_weight_female: 65,
  min_height_male: 23,
  min_height_female: 23,
  min_weight_male: 65,
  min_weight_female: 55,
  name: "Golden Retriever"
}

export type Response = {
  image_link: string;
  good_with_children: number;
  good_with_other_dogs: number;
  shedding: number;
  grooming: number;
  drooling: number;
  coat_length: number;
  good_with_strangers: number;
  playfulness: number;
  protectiveness: number;
  trainability: number;
  energy: number;
  barking: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  max_height_male: number;
  max_height_female: number;
  max_weight_male: number;
  max_weight_female: number;
  min_height_male: number;
  min_height_female: number;
  min_weight_male: number;
  min_weight_female: number;
  name: string;
}
