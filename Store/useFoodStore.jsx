// /Store/useIngredientsStore.js
import { create } from 'zustand'

const useFoodStore = create((set) => ({
  food_type: "Potato",
  

  setFoodType: (newType) => set({ food_type: newType }),
  
}))

export default useFoodStore;
