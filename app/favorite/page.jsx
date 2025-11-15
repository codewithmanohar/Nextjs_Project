import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { RECIPE_CARDS } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='container mx-auto my-14'>
            <section>
                <Header />
            </section>
            {/* Hero Section */}

            <div className="min-h-[400px]  flex flex-col items-center justify-center text-center px-4">
                <h1 className='text-primary text-5xl font-semibold py-5 '>
                    Your Favorite Flavors 🍛
                </h1>
                <p className=' text-gray-500 text-sm text-wrap max-w-2xl  '>
                    Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                </p>
            </div>

            {/* Recipe Cards */}
            <section className='flex items-center justify-center gap-14 py-10 max-w-5xl mx-auto flex-wrap'>
                {RECIPE_CARDS.map((card, index) => (
                    <div
                        key={index}
                        className=' rounded-xl max-w-xs bg-gray-100 pb-5'
                    >
                        <Image
                            src={card.image}
                            width={320}
                            height={100}
                            alt='image' />

                        <div className='text-wrap p-5'>
                            <h2 className='font-bold'>{card.title}</h2>
                            <h4 className='text-sm text-wrap'>{card.description}</h4>
                        </div>
                        <div className='gap-5 flex items-center px-5  '>
                            <Button variant="outline">View Recipe</Button>
                            <Button variant="default">Remove</Button>
                        </div>
                    </div>
                ))}
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default page