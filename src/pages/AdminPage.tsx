
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Sample menu items for the admin page
const existingItems = [
  {
    id: 1,
    title: "Mediterranean Bowl",
    category: "Lunch",
    dietary: ["vegetarian"],
    active: true
  },
  {
    id: 2,
    title: "Hearty Breakfast Plate",
    category: "Breakfast",
    dietary: ["gluten-free"],
    active: true
  },
  {
    id: 3,
    title: "Vegan Buddha Bowl",
    category: "Dinner",
    dietary: ["vegan", "gluten-free"],
    active: false
  },
];

const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "dairy-free", label: "Dairy-Free" },
  { id: "nut-free", label: "Nut-Free" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "kosher", label: "Kosher" },
  { id: "halal", label: "Halal" },
];

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState(existingItems);

  const handleDietaryChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedDietary([...selectedDietary, id]);
    } else {
      setSelectedDietary(selectedDietary.filter((item) => item !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to an API
    const newItem = {
      id: menuItems.length + 1,
      title,
      category,
      dietary: selectedDietary,
      active: true,
    };
    
    setMenuItems([...menuItems, newItem]);
    
    toast.success("Menu item added successfully!");
    
    // Reset form
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("");
    setSelectedDietary([]);
  };

  const toggleItemActive = (id: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
    toast.success("Menu item status updated!");
  };

  const deleteItem = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
    toast.success("Menu item deleted!");
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold text-sbh-600 mb-8 text-center">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Add New Menu Item */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Menu Item</CardTitle>
              <CardDescription>
                Create a new food item to display on the menu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Breakfast">Breakfast</SelectItem>
                      <SelectItem value="Lunch">Lunch</SelectItem>
                      <SelectItem value="Dinner">Dinner</SelectItem>
                      <SelectItem value="Snack">Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Dietary Information</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {dietaryOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`new-${option.id}`}
                          checked={selectedDietary.includes(option.id)}
                          onCheckedChange={(checked) => handleDietaryChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={`new-${option.id}`} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-sbh-500 hover:bg-sbh-600 text-white">
                  Add Menu Item
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Manage Existing Items */}
          <Card>
            <CardHeader>
              <CardTitle>Manage Menu Items</CardTitle>
              <CardDescription>
                Edit or remove existing menu items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menuItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>
                          <Checkbox
                            checked={item.active}
                            onCheckedChange={() => toggleItemActive(item.id)}
                          />
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteItem(item.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {menuItems.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-4">
                          No menu items found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
