
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodItems = [
  {
    id: 1,
    title: "Mediterranean Bowl",
    description: "Quinoa, roasted vegetables, feta cheese, olives, and herb-infused olive oil for a delightful Mediterranean experience.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    category: "Lunch",
    dietary: ["vegetarian"],
  },
  {
    id: 2,
    title: "Hearty Breakfast Plate",
    description: "Farm-fresh eggs, whole grain toast, organic avocado, and locally sourced bacon with seasonal fruit.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
    category: "Breakfast",
    dietary: ["gluten-free"],
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    description: "Tender grilled chicken, mixed greens, cherry tomatoes, cucumber, and honey mustard dressing.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1974&auto=format&fit=crop",
    category: "Lunch",
    dietary: ["dairy-free"],
  },
  {
    id: 4,
    title: "Vegan Buddha Bowl",
    description: "Roasted sweet potatoes, chickpeas, avocado, brown rice, and tahini sauce, packed with plant-based protein.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop",
    category: "Dinner",
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: 5,
    title: "Classic Cheeseburger",
    description: "Grass-fed beef patty, cheddar cheese, lettuce, tomato, and special sauce on a brioche bun.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
    category: "Lunch",
    dietary: [],
  },
  {
    id: 6,
    title: "Fresh Fruit Parfait",
    description: "Layers of Greek yogurt, seasonal fruits, granola, and honey for a refreshing breakfast or snack.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop",
    category: "Breakfast",
    dietary: ["vegetarian"],
  },
];

const dietaryLabels: Record<string, string> = {
  "vegetarian": "Vegetarian",
  "vegan": "Vegan",
  "gluten-free": "Gluten-Free",
  "dairy-free": "Dairy-Free",
  "nut-free": "Nut-Free",
};

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold text-sbh-600 mb-8 text-center">Full Menu</h1>
        
        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner"> Dinner</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems.map((item) => (
                <div key={item.id} className="animate-fade-in">
                  <FoodCard 
                    title={item.title} 
                    description={item.description} 
                    image={item.image} 
                  />
                  <div className="flex flex-wrap gap-2 mt-2 ml-1">
                    <Badge variant="outline" className="bg-sbh-100 text-sbh-600 hover:bg-sbh-200">
                      {item.category}
                    </Badge>
                    
                    {item.dietary.map((diet) => (
                      <Badge key={diet} variant="outline" className="bg-neutral-100 text-neutral-600 hover:bg-neutral-200">
                        {dietaryLabels[diet] || diet}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lunch">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems
                .filter((item) => item.category === "Lunch")
                .map((item) => (
                  <div key={item.id} className="animate-fade-in">
                    <FoodCard 
                      title={item.title} 
                      description={item.description} 
                      image={item.image} 
                    />
                    <div className="flex flex-wrap gap-2 mt-2 ml-1">
                      <Badge variant="outline" className="bg-sbh-100 text-sbh-600 hover:bg-sbh-200">
                        {item.category}
                      </Badge>
                      
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="outline" className="bg-neutral-100 text-neutral-600 hover:bg-neutral-200">
                          {dietaryLabels[diet] || diet}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="dinner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems
                .filter((item) => item.category === "Dinner")
                .map((item) => (
                  <div key={item.id} className="animate-fade-in">
                    <FoodCard 
                      title={item.title} 
                      description={item.description} 
                      image={item.image} 
                    />
                    <div className="flex flex-wrap gap-2 mt-2 ml-1">
                      <Badge variant="outline" className="bg-sbh-100 text-sbh-600 hover:bg-sbh-200">
                        {item.category}
                      </Badge>
                      
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="outline" className="bg-neutral-100 text-neutral-600 hover:bg-neutral-200">
                          {dietaryLabels[diet] || diet}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MenuPage;
