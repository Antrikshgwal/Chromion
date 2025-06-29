import React from "react";
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import AnimatedContent from "../AnimatedContent";

const SectionFour = () => {
  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-20"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          About Us
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Revolutionizing invoice financing through blockchain technology and
          decentralized finance
        </p>
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="ease.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.1}
          delay={0.1}
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-12">
            <div className="text-center">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                FlowVault bridges the gap between traditional invoice financing
                and modern DeFi solutions. We&apos;re democratizing access to
                working capital by creating a transparent, efficient, and
                profitable ecosystem where businesses can unlock the value of
                their outstanding invoices while investors earn competitive
                returns through smart contract automation.
              </p>
            </div>
          </div>
        </AnimatedContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={false}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.2}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Innovation First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering the integration of traditional invoice factoring with
                cutting-edge blockchain technology and DeFi protocols for
                unprecedented efficiency.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={true}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.3}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Community Driven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built by finance professionals and blockchain experts who
                understand the real challenges businesses face in managing cash
                flow and working capital.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={true}
            duration={1.0}
            ease="bounce.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.4}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging years of experience in traditional finance combined
                with innovative DeFi strategies to deliver superior returns and
                reliability.
              </p>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="ease.out"
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
          delay={0.4}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-3xl shadow-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
              To become the leading decentralized platform for invoice financing
              globally, creating a world where businesses of all sizes have
              immediate access to their earned revenue, and investors can
              participate in a transparent, profitable, and secure financial
              ecosystem powered by blockchain technology.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default SectionFour;
