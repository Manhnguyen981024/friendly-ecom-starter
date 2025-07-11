
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "Absolutely amazing products and service! The quality exceeded my expectations and shipping was incredibly fast. I'll definitely be ordering again.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c995?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content: "Great customer service and high-quality products. The team was very responsive when I had questions about my order. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Consultant",
    content: "I've been a customer for over a year now and I'm consistently impressed with the quality and attention to detail. Worth every penny!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4 opacity-70" />
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
