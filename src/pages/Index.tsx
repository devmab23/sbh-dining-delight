
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useEffect } from "react";

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
    category: "Dinner",
  },
];

const HomePage = () => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
  const handleVoteClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.info("You need to login to access the voting section");
      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      

      {/* Featured Meals */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-sbh-600"> Today's Meal</h2>
          
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
        
        
        {/* Footer */}
        <footer className="py-8 px-4 bg-neutral-100 border-t border-neutral-200">
          <div className="container mx-auto text-center">
            <p className="text-sm text-neutral-500">© 2025 Sher-e-Bangla Hall, BUET. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
};

export default HomePage;
