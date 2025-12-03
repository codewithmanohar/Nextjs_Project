import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { features } from "@/lib/data"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">

                {/* Hero Section */}
                <div
                    className="
                        min-h-[250px] sm:min-h-[350px]
                        flex flex-col items-center justify-center text-center
                        bg-cover bg-center rounded-2xl mx-auto mt-20 mb-10 
                        px-4 py-10 sm:max-w-5xl 
                    "
                    style={{ backgroundImage: "url('/about_bg_img2.png')" }}
                >
                    <h1 className="text-secondary text-3xl sm:text-5xl font-semibold py-3 sm:py-5">
                        Your Favorite Flavors 🍛
                    </h1>
                    <p className="text-secondary text-sm sm:text-base max-w-xl sm:max-w-2xl">
                        Rediscover your culinary journey with your hand-picked collection of delightful recipes.
                    </p>
                </div>

                {/* Features Section */}
                <section className="flex flex-col items-center justify-center gap-6 my-10">
                    <h1 className="text-xl sm:text-2xl font-bold">How CookMateAI Works</h1>

                    <div className="
                        w-full sm:max-w-5xl 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-8 place-items-center
                    ">
                        {features.map((item, index) => (
                            <div
                                className="w-full max-w-xs bg-gray-50 rounded-2xl px-5 py-10 flex flex-col items-center shadow-sm"
                                key={index}
                            >
                                <span className="text-primary">{item.icon}</span>

                                <h1 className="text-lg sm:text-xl font-bold py-2 text-center">
                                    {item.title}
                                </h1>

                                <h2 className="text-sm text-zinc-500 max-w-56 text-center">
                                    {item.description}
                                </h2>

                                <Image
                                    className="object-fill py-5"
                                    src={item.image}
                                    width={250}
                                    height={200}
                                    alt="features_img"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Mission Section */}
                <div
                    className="
                        min-h-[280px] sm:min-h-[350px]
                        flex flex-col items-center justify-center text-center 
                        bg-cover bg-center rounded-2xl mx-auto mt-20 mb-10
                        px-4 py-10 sm:max-w-5xl
                    "
                    
                     style={{ backgroundImage: "url('/hero_about_img.png')" }}
                >
                    <h1 className="text-white text-3xl sm:text-5xl font-semibold py-3 sm:py-5">
                        Our Culinary Mission
                    </h1>

                    <p className="text-gray-100 text-sm sm:text-base max-w-xl sm:max-w-2xl leading-relaxed">
                        At CookMateAI, we believe that cooking should be an adventure. Our mission is to
                        seamlessly blend artificial intelligence with culinary creativity, empowering
                        home cooks to explore new flavors, reduce food waste, and discover the joy of
                        personalized recipes tailored to their unique tastes and available ingredients.
                        We're here to spark your next kitchen masterpiece.
                    </p>
                </div>

                {/* Action Button Section */}
                <div
                    className="
                        min-h-[200px] sm:min-h-[250px]
                        flex flex-col items-center justify-center text-center 
                        bg-cover bg-center rounded-2xl mx-auto mt-20 mb-10
                        px-4 py-12 sm:max-w-5xl
                    "
                    style={{ backgroundImage: "url('/about_bg_img2.png')" }}
                >
                    <h1 className="text-3xl sm:text-5xl font-semibold py-5 text-gray-200">
                        Ready to Start Cooking?
                    </h1>

                    <Link href="/">
                        <Button className="mt-2 flex gap-2 items-center">
                            Generate Your Next Recipe <Sparkles />
                        </Button>
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default page
