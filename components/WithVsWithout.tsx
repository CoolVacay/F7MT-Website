import { CheckCircle, XCircle } from "lucide-react";

const points = {
  without: [
    "Reserve studies sit unused and tasks get missed",
    "Costs spiral due to missed preventative maintenance",
    "Teams are frustrated without clear workflows",
  ],
  with: [
    "Reserve study becomes actionable",
    "Maintenance is streamlined, trackable, and cost-effective",
    "Teams work smarter, not harder",
  ],
};

export default function WithVsWithout() {
  return (
    <section className="py-16 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Without vs. With <span className="text-indigo-600">F7 Task Flow</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-600" />
              Without F7 Task Flow
            </h3>
            <ul className="space-y-4">
              {points.without.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-red-700">
                  <XCircle className="w-5 h-5 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              With F7 Task Flow
            </h3>
            <ul className="space-y-4">
              {points.with.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
