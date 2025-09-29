import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Step {
  title: string
  description: string
}

interface IntegrationStepsProps {
  steps: Step[]
}

export function IntegrationSteps({ steps }: IntegrationStepsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="relative bg-card/50 backdrop-blur-sm border-2 border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{step.description}</p>
          </CardContent>
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
          )}
        </Card>
      ))}
    </div>
  )
}
