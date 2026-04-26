import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Sharma Enterprises Pvt. Ltd.",
    text: "R N B P & Co. has been our CA firm for over 8 years. Their expertise in tax planning has saved us lakhs every year. Highly professional and always available.",
  },
  {
    name: "Priya Mehta",
    role: "Founder, PM Retail Solutions",
    text: "From company registration to GST compliance, they handled everything seamlessly. The team is knowledgeable, responsive, and genuinely cares about your business.",
  },
  {
    name: "Anil Gupta",
    role: "CFO, TechVenture India",
    text: "Their audit team is thorough and efficient. They identified process gaps we weren't even aware of. Truly a value-adding partner for our organization.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f1eb] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Client Stories
          </span>
          <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-bold mt-3 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-[#0a1628]/10 hover:border-[#c9a84c]/40 transition-colors duration-300 shadow-sm"
            >
              <Quote size={32} className="text-[#c9a84c]/40 mb-6" />
              <p className="text-[#0a1628]/70 text-sm leading-relaxed font-sans mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-[#0a1628]/10 pt-6">
                <div className="font-bold text-[#0a1628]">{testimonial.name}</div>
                <div className="text-[#c9a84c] text-xs font-sans mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
