import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import clubLogo from "@/assets/logo.png";

const memberImages: Record<string, string> = {
  "Rtr. Pragama Magotra": "https://i.ibb.co/3yp77QmS/Pragama.png",
  "Rtr. Prerna Bhilare": "https://i.ibb.co/9m1Zxg8q/Prerna.png",
  "Rtr. Pradnya Gaikar": "https://i.ibb.co/s921stS8/installation.png",
  "Rtr. Arya Londhe": "https://i.ibb.co/bgSm9CXp/Arya-londhe.png",
  "Rtr. Vaishnavi Kharat": "https://i.ibb.co/cXFwjVZk/Whats-App-Image-2026-03-04-at-17-26-57.jpg",
};
import type { Leader } from "./MessagesTab";

const coreMembers = [
  {
    name: "Rtr. Pragama Magotra",
    position: "President",
    joiningDate: "March 2024",
    message:
      "As the President, I see leadership as a commitment to serve with integrity, lead with vision, and stand firmly with my team. I am dedicated to fostering transparency, encouraging innovation, and creating opportunities where every member can grow and contribute meaningfully. Together, we will not only achieve our goals but set new benchmarks of excellence and impact.",
  },
  {
    name: "Rtr. Prerna Bhilare",
    position: "Secretary",
    joiningDate: "March 2024",
    message:
      "As Secretary of the Rotaract Club of Sinhgad College of Pharmacy, I am committed to fostering an environment where organization meets innovation, and where every member's voice contributes to our collective mission of service above self. My vision for this tenure extends beyond maintaining records and coordinating meetings. I aspire to be the backbone of seamless communication, ensuring that information flows effortlessly between our Board, members, and the community we serve. I believe that excellence lies in the details - from meticulously documented minutes that preserve our club's legacy to creating systematic frameworks that empower our teams to execute projects with precision and confidence. I see my role as Secretary not merely as an administrative position, but as a strategic partner in our club's growth. I am determined to build bridges between ideas and implementation, transforming our collective aspirations into measurable impact. This means establishing transparent processes, maintaining accountability at every level, and creating accessible channels where every member feels heard and valued. Who I am is simple: a dedicated Rotaractor who believes that structured systems unleash creativity rather than constrain it. Who I aspire to be is someone who leads by example, calm under pressure, meticulous in execution, and unwavering in commitment to our shared goals. My ambition for this year is to elevate our operational standards while nurturing the spirit of fellowship that defines us. I envision a club where efficiency and empathy coexist, where our documentation reflects our dedication, and where every initiative we undertake leaves a lasting impression on our community. Together, we will build something remarkable - not just through grand gestures, but through consistent, purposeful action guided by integrity and fueled by passion. Let us create a legacy worth remembering.",
  },
  {
    name: "Rtr. Pradnya Gaikar",
    position: "Vice President",
    joiningDate: "March 2024",
    message:
      "Data Not Available",
  },
  {
    name: "Rtr. Arya Londhe",
    position: "Treasurer",
    joiningDate: "March 2024",
    message:
      "As the Treasurer of RC SCOP, I am entrusted with upholding the financial integrity and fiduciary responsibility of our club. I oversee strategic budgeting, ensure transparent fiscal operations, and maintain meticulous records to support every initiative. Through prudent allocation of resources and unwavering accountability, I facilitate the seamless execution of our projects. My objective is to sustain financial stability while fostering the club’s progressive growth and long-term impact.",
  },
  {
    name: "Rtr. Vaishnavi Kharat",
    position: "IPP & Club Advisor",
    joiningDate: "March 2024",
    message:
      "As the Immediate Past President and Club Advisor, I am committed to providing guidance and support to our current leadership while ensuring continuity in our club's vision and mission. My role is to share insights from my experience, offer mentorship to our leaders, and help navigate challenges with a steady hand. I aspire to be a resource for our club, fostering growth and development while maintaining the values that define us. Together, we will continue to make a positive impact in our community and uphold the spirit of service above self.",
  },
];

interface CoreMembersTabProps {
  onSelectLeader: (leader: Leader) => void;
}

const CoreMembersTab = ({ onSelectLeader }: CoreMembersTabProps) => (
  <div className="space-y-5">
    {coreMembers.map((member, index) => (
      <motion.div
        key={member.name}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      >
        <Card
          className="shadow-lg border-border/50 hover:shadow-xl transition-all cursor-pointer hover:scale-[1.01] group"
          onClick={() =>
            onSelectLeader({
              name: member.name,
              title: member.position,
              photo: memberImages[member.name] || clubLogo,
              message: `${member.message}\n\nJoining Date: ${member.joiningDate}`,
            })
          }
        >
          <CardContent className="p-6 flex items-center gap-5">
            <Avatar className="h-14 w-14 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
              <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                {member.name
                  .replace("Rtr. ", "")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.position}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default CoreMembersTab;