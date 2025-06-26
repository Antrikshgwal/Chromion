import AnimatedContent from "../AnimatedContent";
import { Users, Upload, TrendingUp } from "lucide-react";
const SectionTwo = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How FlowVault Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Simple, secure, and transparent process from invoice to instant cash
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.2}
          >
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Upload Invoice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Business uploads verified invoice and gets instant evaluation
                with transparent terms and conditions
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.2}
          >
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Investor Funding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Investors provide 95% of invoice value with comprehensive
                insurance protection and guaranteed returns
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.2}
          >
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Everyone Profits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Investors earn 4% returns, businesses get instant cash flow plus
                additional DeFi yield opportunities
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
