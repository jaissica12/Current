import { useState } from 'react'
import SearchFilters from '../SearchFilters'

export default function SearchFiltersExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>("active");

  return (
    <div className="p-4 max-w-2xl">
      <SearchFilters
        onSearchChange={setSearchQuery}
        onDateFilterChange={setDateFilter}
        onStatusFilterChange={setStatusFilter}
        searchQuery={searchQuery}
        dateFilter={dateFilter}
        statusFilter={statusFilter}
      />
    </div>
  )
}