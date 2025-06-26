import CountUp from "react-countup";
import Link from "next/link";
import SplitText from "../SplitTest";
import { ChevronRight } from "lucide-react";
const SectionOne = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mt-10 mb-6 text-center flex flex-col items-center">
          <SplitText
            text="Turn Invoices Into"
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <SplitText
            text="Instant Cash"
            className="text-5xl md:text-6xl font-bold text-blue-600"
            delay={300}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
          />
        </div>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          The first blockchain platform where businesses get immediate funding
          and investors earn secure returns. Protected by insurance, powered by
          DeFi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/business"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            I&apos;m a Business <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/investor"
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            I&apos;m an Investor <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <CountUp
                start={0}
                end={10}
                duration={4}
                decimals={1}
                prefix="$"
                suffix="M+"
                enableScrollSpy
                scrollSpyOnce={false}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="text-3xl font-bold"></span>
                )}
              </CountUp>
            </div>
            <div className="text-gray-600 font-medium">Funded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <CountUp
                start={0}
                end={4.2}
                duration={4}
                decimals={1}
                suffix="%"
                enableScrollSpy
                scrollSpyOnce={false}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="text-3xl font-bold"></span>
                )}
              </CountUp>
            </div>
            <div className="text-gray-600 font-medium">Avg Returns</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <CountUp
                start={0}
                end={98.7}
                duration={4}
                decimals={1}
                suffix="%"
                enableScrollSpy
                scrollSpyOnce={false}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="text-3xl font-bold"></span>
                )}
              </CountUp>
            </div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <CountUp
                start={0}
                end={500}
                duration={4}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce={false}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="text-3xl font-bold"></span>
                )}
              </CountUp>
            </div>
            <div className="text-gray-600 font-medium">Businesses</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;
