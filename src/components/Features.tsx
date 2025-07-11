
import { Truck, Shield, Headphones, RefreshCw, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Fast Shipping",
    description: "Free delivery on orders over $50. Express shipping available nationwide."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your payment information is protected with bank-level security encryption."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our friendly support team is here to help you anytime, anywhere."
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return any item within 30 days for a full refund."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All products are carefully tested and come with our quality guarantee."
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders placed before 2 PM are processed and shipped the same day."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
