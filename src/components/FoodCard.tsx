
import { cn } from "@/lib/utils";

interface FoodCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const FoodCard = ({ title, description, image, className }: FoodCardProps) => {
  return (
    <div className={cn("food-card", className)}>
      <div className="relative">
        <img src={image} alt={title} className="food-card-image" />
      </div>
      <div className="food-card-content">
        <h3 className="food-card-title">{title}</h3>
        <p className="food-card-description">{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
