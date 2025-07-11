
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Add newsletter signup logic here
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive deals, and special offers. Join over 50,000 subscribers!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 text-gray-900 placeholder-gray-500 border-0 rounded-full"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
