import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quiz = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions to get personalized car recommendations that match your lifestyle and preferences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-floating p-8">
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-4">
                🚗 Car Selection Quiz Coming Soon!
              </div>
              <p className="text-muted-foreground mb-8">
                We're building an amazing step-by-step questionnaire to help you find the perfect car. 
                This will include questions about car type, origin, performance, space needs, and more.
              </p>
              
              <div className="flex gap-4 justify-center">
                <Button variant="outline" className="btn-hero-outline">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
                <Button className="btn-hero">
                  Get Notified
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;