import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Check, X, Mail, FileText } from "lucide-react";
import { LightningRod } from "./LightningRodCard";
import { useToast } from "@/hooks/use-toast";

interface ApprovalsTableProps {
  lightningRods: LightningRod[];
  onView: (id: string) => void;
  onApprove: (id: string) => void;
  onCancel: (id: string) => void;
  onSendEmail: (id: string) => void;
  onGoToDoc: (id: string) => void;
}

const reviewLevels = {
  "in-review": "Team Review",
  "active": "AI Review",
  "approved": "Completed",
  "rejected": "Rejected",
  "archived": "Archived"
};

export default function ApprovalsTable({ 
  lightningRods, 
  onView, 
  onApprove, 
  onCancel,
  onSendEmail,
  onGoToDoc
}: ApprovalsTableProps) {
  const { toast } = useToast();

  const handleSendEmail = (id: string, title: string) => {
    // TODO: remove mock functionality
    console.log('Sending email for Lightning Rod:', id);
    onSendEmail(id);
    toast({
      title: "Email Sent",
      description: `Review request sent to reviewers for "${title}"`
    });
  };

  const handleApprove = (id: string, title: string) => {
    console.log('Approving Lightning Rod:', id);
    onApprove(id);
    toast({
      title: "Approved",
      description: `"${title}" has been approved`
    });
  };

  const handleCancel = (id: string, title: string) => {
    console.log('Cancelling Lightning Rod:', id);
    onCancel(id);
    toast({
      title: "Cancelled",
      description: `"${title}" has been cancelled`
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          Approvals Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lightning Rod Title</TableHead>
                <TableHead>Requested Review Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lightningRods.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    No Lightning Rods require approval at this time.
                  </TableCell>
                </TableRow>
              ) : (
                lightningRods.map((rod) => (
                  <TableRow key={rod.id} data-testid={`row-approval-${rod.id}`}>
                    <TableCell className="font-medium" data-testid={`text-title-${rod.id}`}>
                      {rod.title}
                    </TableCell>
                    <TableCell data-testid={`text-review-level-${rod.id}`}>
                      {reviewLevels[rod.status] || "Unknown"}
                    </TableCell>
                    <TableCell data-testid={`text-status-${rod.id}`}>
                      <Badge 
                        variant={
                          rod.status === "approved" ? "default" :
                          rod.status === "rejected" ? "destructive" :
                          rod.status === "in-review" ? "secondary" :
                          "outline"
                        }
                      >
                        {rod.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onGoToDoc(rod.id)}
                          data-testid={`button-go-to-doc-${rod.id}`}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          Go to doc
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onView(rod.id)}
                          data-testid={`button-view-${rod.id}`}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View status
                        </Button>
                        
                        {rod.status === "in-review" && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSendEmail(rod.id, rod.title)}
                              data-testid={`button-email-${rod.id}`}
                            >
                              <Mail className="w-4 h-4 mr-1" />
                              Email
                            </Button>
                            <Button
                              variant="default"
                              size="sm"
                              onClick={() => handleApprove(rod.id, rod.title)}
                              data-testid={`button-approve-${rod.id}`}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                          </>
                        )}
                        
                        {(rod.status === "in-review" || rod.status === "active") && (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleCancel(rod.id, rod.title)}
                            data-testid={`button-cancel-${rod.id}`}
                          >
                            <X className="w-4 h-4 mr-1" />
                            Cancel
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}