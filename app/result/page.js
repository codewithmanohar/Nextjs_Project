import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { COOKING_INSTRUCTIONS, imgs, RECIPE_INGREDIENTS } from '@/lib/data'
import { ChefHat, Heart, RotateCcw, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    
   <section>
        <Header />
      </section>
    <div className='mx-auto container max-w-5xl  my-14'>
      

      <section className='text-center py-10 w-full flex items-center justify-center flex-col'>
        <h1 className='text-primary text-5xl font-semibold py-5 '>
          Classic Butter Chicken 🍛
        </h1>
        <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
          A rich, creamy, and mildly spiced Indian curry, perfect for a cozy dinner. Best served with naan bread or basmati rice.
        </p>
      </section>
      <section>
        <Image
          alt='dish_img'
          src="https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&h=650&w=940" 
          width={1000}
          height={100}
          />
      </section>

      <section className='my-10 px-10 py-5 bg-gray-50 rounded-xl'>
        <h1 className='text-2xl py-5 font-bold flex gap-2 items-center'>Ingredients <ShoppingCart /></h1>
        {RECIPE_INGREDIENTS.map((Ingredient, index) => (
          <div key={index}>
            <h2 className='text-xl font-semibold py-5'>{Ingredient.section}</h2>
            {Ingredient.items.map((item, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <h3 className='text-sm text-gray-600 flex items-center gap-2'>
                  <ChefHat className='text-primary' size={15} /> {item}
                </h3>

              </div>
            ))}
          </div>
        ))}
      </section>

      <section className='py-10'>
        <h1 className='text-2xl py-10 font-bold flex gap-2 items-center'>
          Cooking Instructions <ShoppingCart />
        </h1>

        {COOKING_INSTRUCTIONS.map((item,index) => (
          <div 
            key={index}
            className='flex gap-5'>
            <span className='font-bold '>{item.step}.</span>
            <span>{item.text}</span>
          </div>
        ))}
      </section>

      <section className='flex gap-5 items-center justify-center my-10' >
        <Button variant='outline'><Heart /> Save Recipe</Button>
        <Button variant='default'><RotateCcw /> Generate Variation</Button>
      </section>

      <section>
        <Footer />
      </section>
    </div>
     </>
  )
}

export default page