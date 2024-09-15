import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals and small projects",
    features: ["1 user", "5 projects", "2GB storage", "Basic support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$19",
    description: "Great for professionals and growing teams",
    features: [
      "5 users",
      "20 projects",
      "20GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Upgrade to Premium",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 text-black">
        Наши цены
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${
              tier.highlighted ? "border-primary shadow-lg" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-xl font-semibold">
                {tier.price}/month
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
