
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const foodItems = [
  {
    id: 1,
    title: "Mediterranean Bowl",
    description: "Quinoa, roasted vegetables, feta cheese, olives, and herb-infused olive oil for a delightful Mediterranean experience.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    category: "Lunch",
  },
  {
    id: 2,
    title: "Hearty Breakfast Plate",
    description: "Farm-fresh eggs, whole grain toast, organic avocado, and locally sourced bacon with seasonal fruit.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
    category: "Breakfast",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-sbh-600 text-white py-16">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Today's Menu</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover a variety of delicious, sustainable, and nutritious options available today.
            </p>
            <Button asChild className="bg-white text-sbh-600 hover:bg-neutral-100">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Featured Meals */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-sbh-600">Featured Meals of the Day</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {foodItems.map((item) => (
              <div key={item.id} className="animate-fade-in">
                <FoodCard 
                  title={item.title} 
                  description={item.description} 
                  image={item.image} 
                />
                <div className="mt-2 ml-1">
                  <span className="inline-block bg-sbh-100 text-sbh-600 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Voting */}
      <section className="py-12 px-4 bg-neutral-200">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-sbh-600">Share Your Dining Preferences</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-600">
            Help us improve your dining experience by sharing what you love about our food offerings.
          </p>
          <Button asChild className="bg-sbh-500 hover:bg-sbh-600 text-white">
            <Link to="/vote">Vote Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
