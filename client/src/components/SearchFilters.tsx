import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
  onDateFilterChange: (filter: string | null) => void;
  onStatusFilterChange: (filter: string | null) => void;
  searchQuery: string;
  dateFilter: string | null;
  statusFilter: string | null;
}

const dateFilters = [
  { label: "Past day", value: "day" },
  { label: "Past week", value: "week" },
];

const statusFilters = [
  { label: "Active", value: "active" },
  { label: "Archived", value: "archived" },
];

export default function SearchFilters({
  onSearchChange,
  onDateFilterChange,
  onStatusFilterChange,
  searchQuery,
  dateFilter,
  statusFilter
}: SearchFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const clearFilters = () => {
    setLocalSearch("");
    onSearchChange("");
    onDateFilterChange(null);
    onStatusFilterChange(null);
  };

  const hasActiveFilters = searchQuery || dateFilter || statusFilter;

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearchSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search Lightning Rods..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="pl-10"
          data-testid="input-search"
        />
        {localSearch && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
            onClick={() => setLocalSearch("")}
            data-testid="button-clear-search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </form>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-foreground">Filters:</span>
        
        {dateFilters.map((filter) => (
          <Badge
            key={filter.value}
            variant={dateFilter === filter.value ? "default" : "secondary"}
            className="cursor-pointer hover-elevate"
            onClick={() => onDateFilterChange(dateFilter === filter.value ? null : filter.value)}
            data-testid={`filter-date-${filter.value}`}
          >
            {filter.label}
          </Badge>
        ))}

        {statusFilters.map((filter) => (
          <Badge
            key={filter.value}
            variant={statusFilter === filter.value ? "default" : "secondary"}
            className="cursor-pointer hover-elevate"
            onClick={() => onStatusFilterChange(statusFilter === filter.value ? null : filter.value)}
            data-testid={`filter-status-${filter.value}`}
          >
            {filter.label}
          </Badge>
        ))}

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-6 px-2 text-xs"
            data-testid="button-clear-filters"
          >
            Clear all
          </Button>
        )}
      </div>
    </div>
  );
}