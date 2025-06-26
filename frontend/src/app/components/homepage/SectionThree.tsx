import AnimatedContent from "../AnimatedContent";
import { Shield, Zap, BarChart3 } from "lucide-react";
const SectionThree = () => {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose FlowVault
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Built with security, speed, and profitability in mind
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Insurance Protected
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your investments are protected by our comprehensive insurance
                pool, ensuring peace of mind for all stakeholders
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.2}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Zap className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Instant Funding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get cash within hours, not weeks. Smart contracts automate the
                entire process with maximum efficiency
              </p>
            </div>
          </AnimatedContent>
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <BarChart3 className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                DeFi Yields
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Earn additional returns on collateral through integrated DeFi
                protocols and yield farming opportunities
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
export default SectionThree;
