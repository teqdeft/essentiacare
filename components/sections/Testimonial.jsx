import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Megan C",
    role: "Pet Care",
    avatar: "/images/essentia/avatar-megan-c.png",
    quote:
      "I am so grateful for their telehealth services! I have a busy schedule and couldn't make it to the vet with my dog, Teddy, but their virtual vet care made it so easy. The vet was incredibly knowledgeable, and I loved that I could get the help I needed without having to leave the house. My pup is doing much better, and I'll definitely be using this service again for any future needs. I highly recommend it and the flexibility they have!",
  },
  {
    name: "Jasmine P",
    role: "Counseling",
    avatar: "/images/essentia/avatar-jasmine-p.png",
    quote:
      "With the nation being in the state it is in, I have been super stressed. I just needed somewhere to unload my worries and I did with the counseling program at EssentiaCare. I called anytime and always got to speak with a counselor. One time I even called around 3am because I was having what I thought was a panic attack. The counselor helped by just talking to me and I didn't have to pay a dime for the call. Gosh! I am so thankful to this company. Thank you for being there, thank you for this company and thank you for caring.",
  },
  {
    name: "Kyle F",
    role: "Medical Care",
    avatar: "/images/essentia/avatar-kyle-f.png",
    quote:
      "As a videographer, my workdays are unpredictable, and finding time to see a doctor is always a challenge. I was amazed by how convenient their 24-hour access to healthcare was. Being able to get a consultation at any time of day or night meant I never had to pause my projects or rearrange my schedule. It's honestly a game-changer, and I now use their services regularly!",
  },
  {
    name: "Megan M",
    role: "Medical Care",
    avatar: "/images/essentia/avatar-megan-m.png",
    quote:
      "As a CEO, my days are packed with meetings, travel, and tight deadlines, so finding time for healthcare has always been difficult. Their telehealth services have been a lifesaver. The flexibility of having consultations whenever I need them, without interrupting my busy schedule has made a huge difference in my life. I now prioritize my health without the stress of making appointments or waiting for availability. I highly recommend it to anyone with a hectic lifestyle and the doctors are amazing too!",
  },
];

export default function Testimonial() {
  return (
    <SectionWrapper gray>
      <SectionHeader
        badge="Testimonials"
        title="What our Clients are"
        titleAccent="Saying About Us"
        description="At EssentiaCare, we are dedicated to providing personalized, holistic care that meets the unique needs of each individual. Hear from those who have experienced the transformative benefits of our health and wellness services. These are just a few testimonials from our valued clients who have seen firsthand how our approach to care has made a difference in their lives."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col"
          >
            <Quote className="w-9 h-9 text-primary/20 mb-4" />
            <blockquote className="text-base md:text-[17px] text-gray-700 leading-relaxed italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover bg-gray-100"
              />
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-primary font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
