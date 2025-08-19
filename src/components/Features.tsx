import { Brain, BarChart3, Search, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Questionnaire",
      description: "Answer simple questions about your preferences, lifestyle, and budget to help us understand your needs.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Recommendations", 
      description: "Our intelligent algorithm analyzes your responses and matches you with the perfect cars from our database.",
      step: "02"
    },
    {
      icon: BarChart3,
      title: "Compare & Choose", 
      description: "Review detailed comparisons of your top 3 matches and make an informed decision with confidence.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finding your perfect car has never been easier. Our 3-step process ensures you get personalized recommendations that match your exact needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-floating p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {feature.step}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-primary mb-2" />
            <div className="text-sm font-medium">Trusted Reviews</div>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="w-8 h-8 text-primary mb-2" />
            <div className="text-sm font-medium">AI Technology</div>
          </div>
          <div className="flex flex-col items-center">
            <Search className="w-8 h-8 text-primary mb-2" />
            <div className="text-sm font-medium">Smart Matching</div>
          </div>
          <div className="flex flex-col items-center">
            <BarChart3 className="w-8 h-8 text-primary mb-2" />
            <div className="text-sm font-medium">Easy Comparison</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;