import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function SectionLoadError() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-destructive" />
          <CardTitle className="text-destructive">Error Occurred</CardTitle>
        </div>
        <CardDescription>
          We encountered an issue while loading this section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Unable to load content</AlertTitle>
          <AlertDescription>
            There was a problem retrieving the data for this section. This could
            be due to a network issue or a problem with our servers.
          </AlertDescription>
        </Alert>
        <p className="text-sm text-muted-foreground">
          You can try refreshing the page or attempt to reload this section. If
          the problem persists, please report it to our support team.
        </p>
      </CardContent>
    </Card>
  );
}
