import { useState, useMemo } from "react";
import SearchFilters from "@/components/SearchFilters";
import LightningRodCard, { type LightningRod } from "@/components/LightningRodCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Archive } from "lucide-react";

// TODO: remove mock functionality - replace with real data
const mockLightningRods: LightningRod[] = [
  {
    id: "1",
    title: "AI-Powered Customer Support Chatbot",
    problemContext: "Customer support response times are too slow, leading to decreased satisfaction scores.",
    implementationPlan: "Deploy ML-based chatbot to handle tier-1 support queries, with escalation paths to human agents for complex issues.",
    budget: "$50,000",
    status: "active",
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    currentPhase: "AI Review"
  },
  {
    id: "2", 
    title: "Automated Code Review System",
    problemContext: "Manual code reviews create bottlenecks in our deployment pipeline.",
    implementationPlan: "Implement automated code analysis tools with custom rules for security, performance, and style compliance.",
    budget: "$30,000",
    status: "in-review",
    lastUpdated: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    currentPhase: "Team Review"
  },
  {
    id: "3",
    title: "Real-time Analytics Dashboard",
    problemContext: "Business stakeholders lack visibility into key performance metrics in real-time.",
    implementationPlan: "Build comprehensive analytics dashboard with live data feeds and customizable widgets.",
    budget: "$75,000",
    status: "archived",
    lastUpdated: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    title: "Mobile App Performance Optimization",
    problemContext: "Mobile app load times are impacting user retention rates.",
    implementationPlan: "Implement lazy loading, optimize images, and redesign data fetching strategies.",
    budget: "$25,000",
    status: "approved",
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    currentPhase: "Implementation"
  }
];

export default function LivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>("active");

  const filteredRods = useMemo(() => {
    return mockLightningRods.filter(rod => {
      // Search filter
      if (searchQuery && !rod.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !rod.problemContext.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Date filter
      if (dateFilter) {
        const now = new Date();
        const rodDate = rod.lastUpdated;
        const timeDiff = now.getTime() - rodDate.getTime();
        const daysDiff = timeDiff / (1000 * 3600 * 24);

        if (dateFilter === "day" && daysDiff > 1) return false;
        if (dateFilter === "week" && daysDiff > 7) return false;
      }

      // Status filter  
      if (statusFilter && rod.status !== statusFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, dateFilter, statusFilter]);

  const activeRods = filteredRods.filter(rod => rod.status === "active" || rod.status === "in-review" || rod.status === "approved");
  const archivedRods = filteredRods.filter(rod => rod.status === "archived");

  const handleCardClick = (rod: LightningRod) => {
    console.log('Viewing Lightning Rod:', rod.id);
    // TODO: Navigate to status page or detail view
  };

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground" data-testid="text-page-title">
          Live Lightning Rods
        </h1>
        <p className="text-muted-foreground" data-testid="text-page-description">
          Track and manage your innovation ideas and proposals
        </p>
      </div>

      <SearchFilters
        onSearchChange={setSearchQuery}
        onDateFilterChange={setDateFilter}
        onStatusFilterChange={setStatusFilter}
        searchQuery={searchQuery}
        dateFilter={dateFilter}
        statusFilter={statusFilter}
      />

      <div className="grid gap-6">
        {/* Active Lightning Rods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Active Lightning Rods
              <span className="text-sm font-normal text-muted-foreground">
                ({activeRods.length})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeRods.length === 0 ? (
              <p className="text-center text-muted-foreground py-8" data-testid="text-no-active">
                No active Lightning Rods match your current filters.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activeRods.map(rod => (
                  <LightningRodCard
                    key={rod.id}
                    lightningRod={rod}
                    onClick={() => handleCardClick(rod)}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Archived Lightning Rods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="w-5 h-5 text-muted-foreground" />
              Archived Lightning Rods
              <span className="text-sm font-normal text-muted-foreground">
                ({archivedRods.length})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {archivedRods.length === 0 ? (
              <p className="text-center text-muted-foreground py-8" data-testid="text-no-archived">
                No archived Lightning Rods match your current filters.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {archivedRods.map(rod => (
                  <LightningRodCard
                    key={rod.id}
                    lightningRod={rod}
                    onClick={() => handleCardClick(rod)}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}