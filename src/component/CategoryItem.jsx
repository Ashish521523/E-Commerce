import "./CategoryItem.css";
import { categoryData } from "../ProductData/categoryData";
function CategoryItem() {
  return (
    <div className="category-container">
      {categoryData.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="category-card">
            <div className="category-icon">
              <Icon />
            </div>

            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryItem;
