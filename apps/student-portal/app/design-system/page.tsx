import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Header with theme toggle */}
      <header className="container-custom flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold">Stoa of Attalos</h1>
          <p className="text-muted-foreground">Student Portal</p>
        </div>
        <ThemeToggle />
      </header>

      {/* Test content */}
      <main className="container-custom space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Design System Test</h2>
          <p className="text-muted-foreground mb-6">
            Testing the stencil aesthetic with dark mode (black/white) and light mode (navy blue).
          </p>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="stencil">Stencil</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Complete</Badge>
            <Badge variant="warning">In Progress</Badge>
            <Badge variant="info">Not Started</Badge>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Session A1S1</CardTitle>
                <CardDescription>Environment Setup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Set up your development environment with all necessary tools.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="success">Complete</Badge>
                  <span className="text-sm text-muted-foreground">45 min</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session A1S2</CardTitle>
                <CardDescription>Database Models</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn SQLAlchemy ORM and create database models.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="warning">In Progress</Badge>
                  <span className="text-sm text-muted-foreground">60 min</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session A1S3</CardTitle>
                <CardDescription>FastAPI Endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build REST API endpoints with FastAPI.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">50 min</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stencil Border Test */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Stencil Aesthetic</h3>
          <div className="stencil-border stencil-shadow p-6 max-w-md">
            <h4 className="font-bold mb-2">High Contrast Design</h4>
            <p className="text-sm">
              This demonstrates the stencil aesthetic with sharp borders and shadow effects.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
