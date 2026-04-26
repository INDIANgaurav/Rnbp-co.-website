import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Events | R N B P & Co. Chartered Accountants",
  description:
    "A glimpse into our team events and offsite activities at R N B P & Co.",
};

const events = [
  {
    title: "Lansdowne Team Outing",
    location: "Lansdowne, Uttarakhand",
    description:
      "A refreshing team getaway to the serene hills of Lansdowne. Our team bonded over group activities, nature walks, and memorable moments together.",
    images: [
      { src: "/LANSDOWNE/Group Activity - Lansdowne.jpeg", alt: "Group Activity Lansdowne" },
      { src: "/LANSDOWNE/Group Activity - Lansdowne (2).jpeg", alt: "Group Activity Lansdowne 2" },
      { src: "/LANSDOWNE/Group Activity - Lansdowne (3).jpeg", alt: "Group Activity Lansdowne 3" },
      { src: "/LANSDOWNE/Group Activity - Lansdowne (6).jpeg", alt: "Group Activity Lansdowne 6" },
      { src: "/LANSDOWNE/Group Photo - Lansdowne - 7.jpeg", alt: "Group Photo Lansdowne" },
      { src: "/LANSDOWNE/Group Photo - Lansdowne (5).jpeg", alt: "Group Photo Lansdowne 5" },
      { src: "/LANSDOWNE/Group Photo - Lansdowne (6).jpeg", alt: "Group Photo Lansdowne 6" },
    ],
  },
  {
    title: "Mussoorie & Rishikesh Adventure",
    location: "Mussoorie & Rishikesh, Uttarakhand",
    description:
      "An adventurous trip combining the charm of Mussoorie's hills with the thrill of white-water rafting in Rishikesh. A perfect blend of fun and team spirit.",
    images: [
      { src: "/MUSSOORIE/Group Photo - 1.jpeg", alt: "Group Photo Mussoorie 1" },
      { src: "/MUSSOORIE/Group photo.jpeg", alt: "Group Photo Mussoorie" },
      { src: "/MUSSOORIE/Rafting - Rishikesh.jpeg", alt: "Rafting Rishikesh" },
      { src: "/MUSSOORIE/Rafting - Rishikesh (2).jpeg", alt: "Rafting Rishikesh 2" },
      { src: "/MUSSOORIE/Rafting - Rishikesh (Mussoorie Trip).jpeg", alt: "Rafting Mussoorie Trip" },
      { src: "/MUSSOORIE/Rafting - Rishikesh (Mussoorie Trip) (2).jpeg", alt: "Rafting Mussoorie Trip 2" },
    ],
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#f8f5f0] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[#c9a84c] font-black uppercase opacity-[0.06]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            EVENTS
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Life at RNBP
          </span>
          <h1 className="text-[#0a1628] text-5xl sm:text-6xl font-bold mt-3 mb-4">
            Our Events
          </h1>
          <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-2xl leading-relaxed">
            Beyond work, we believe in building a strong team culture. Here&apos;s a glimpse 
            of our team outings, adventures, and memories made together.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {events.map((event, eventIndex) => (
            <div key={eventIndex}>
              {/* Event Header */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[#c9a84c] text-xs font-sans font-semibold uppercase tracking-wider">
                    <MapPin size={13} />
                    {event.location}
                  </span>
                </div>
                <h2 className="text-[#0a1628] text-3xl sm:text-4xl font-bold mb-3">
                  {event.title}
                </h2>
                <div className="w-12 h-0.5 bg-[#c9a84c] mb-4" />
                <p className="text-[#0a1628]/60 font-sans max-w-2xl leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Photo Grid - unique masonry pattern */}
              <div className="grid grid-cols-3 gap-3">
                {/* First image - spans 2 cols */}
                <div className="col-span-2 relative h-72 sm:h-96 overflow-hidden group">
                  <Image
                    src={event.images[0].src}
                    alt={event.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="66vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Second image - right side, same height */}
                <div className="relative h-72 sm:h-96 overflow-hidden group">
                  <Image
                    src={event.images[1].src}
                    alt={event.images[1].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Remaining images - equal 3 columns */}
                {event.images.slice(2).map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative h-52 sm:h-64 overflow-hidden group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* Divider between events */}
              {eventIndex < events.length - 1 && (
                <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Join Our Team
          </span>
          <h2 className="text-[#0a1628] text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Be Part of Our Story
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-xl mx-auto leading-relaxed">
            We work hard and celebrate harder. If you want to be part of a team that values 
            people as much as performance, we&apos;d love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}
