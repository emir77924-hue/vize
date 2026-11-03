import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  onSearchChange: (val: string) => void;
  selectedCategory: Category | "";
  onCategoryChange: (val: Category | "") => void;
  categories: Category[];
}

export default function EventFilter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div className="filtre-kutusu">
      <div className="filtre-grup">
        <label>Etkinlik ara</label>
        <input
          type="search"
          placeholder="Örn: atölye..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filtre-grup">
        <label>Kategori</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as Category | "")}
        >
          <option value="">Tümü</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}