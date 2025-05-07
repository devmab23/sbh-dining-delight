
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "dairy-free", label: "Dairy-Free" },
  { id: "nut-free", label: "Nut-Free" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "kosher", label: "Kosher" },
  { id: "halal", label: "Halal" },
];

const foodCategories = [
  { value: "american", label: "American" },
  { value: "italian", label: "Italian" },
  { value: "mexican", label: "Mexican" },
  { value: "asian", label: "Asian" },
  { value: "mediterranean", label: "Mediterranean" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "desserts", label: "Desserts" },
];

const satisfactionLevels = [
  { value: "1", label: "Very Dissatisfied" },
  { value: "2", label: "Dissatisfied" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Satisfied" },
  { value: "5", label: "Very Satisfied" },
];

const VotePage = () => {
  const [satisfaction, setSatisfaction] = useState<string>("");
  const [favoriteCategory, setFavoriteCategory] = useState<string>("");
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [comments, setComments] = useState<string>("");
  
  const handleDietaryChange = (id: string, checked: boolean) => {
    if (checked) {
      setDietaryPreferences([...dietaryPreferences, id]);
    } else {
      setDietaryPreferences(dietaryPreferences.filter((item) => item !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log({
      satisfaction,
      favoriteCategory,
      dietaryPreferences,
      comments,
    });
    
    toast.success("Thank you for submitting your preferences!");
    
    // Reset form
    setSatisfaction("");
    setFavoriteCategory("");
    setDietaryPreferences([]);
    setComments("");
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-sbh-600">Dining Preferences Survey</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Satisfaction Rating */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-sbh-600">How satisfied are you with the current dining options?</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-2">
                {satisfactionLevels.map((level) => (
                  <div key={level.value} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-full">
                      <Label 
                        htmlFor={`satisfaction-${level.value}`}
                        className={`w-full py-3 px-2 rounded-md text-center transition-colors cursor-pointer border-2 ${
                          satisfaction === level.value
                            ? "border-sbh-500 bg-sbh-100 text-sbh-600"
                            : "border-neutral-200 hover:border-sbh-200"
                        }`}
                      >
                        <Input
                          type="radio"
                          id={`satisfaction-${level.value}`}
                          name="satisfaction"
                          value={level.value}
                          className="sr-only"
                          checked={satisfaction === level.value}
                          onChange={() => setSatisfaction(level.value)}
                        />
                        {level.label}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Food Category */}
            <div className="space-y-3">
              <Label htmlFor="food-category" className="text-lg font-medium text-sbh-600">
                What's your favorite food category?
              </Label>
              <Select
                value={favoriteCategory}
                onValueChange={setFavoriteCategory}
              >
                <SelectTrigger id="food-category" className="w-full">
                  <SelectValue placeholder="Select a food category" />
                </SelectTrigger>
                <SelectContent>
                  {foodCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Dietary Preferences */}
            <div className="space-y-3">
              <Label className="text-lg font-medium text-sbh-600">
                Select your dietary preferences (check all that apply)
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {dietaryOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={dietaryPreferences.includes(option.id)}
                      onCheckedChange={(checked) => handleDietaryChange(option.id, checked as boolean)}
                    />
                    <Label htmlFor={option.id} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Comments */}
            <div className="space-y-3">
              <Label htmlFor="comments" className="text-lg font-medium text-sbh-600">
                Additional comments or suggestions
              </Label>
              <Textarea
                id="comments"
                placeholder="Please share any additional feedback about our dining options..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="min-h-[120px]"
              />
            </div>
            
            {/* Submit Button */}
            <Button type="submit" className="w-full md:w-auto bg-sbh-500 hover:bg-sbh-600 text-white">
              Submit Preferences
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default VotePage;
