import { Timeline } from "@/components/ui/timeline";
import TimeOne from "../../assets/timeOne.png";
import TimeTwo from "../../assets/timeTwo.png";
import TimeThree from "../../assets/timeThree.png";

export function TimelineSection() {
  const data = [
    {
      title: "First Week",
      content: (
        <div className="md:-mt-32 md:mb-32">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeOne}
              alt="startup template"
              width={500}
              height={500}
              className="h-100 w-full rounded-lg object-cover md:h-96 lg:h-[800px]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Second Week",
      content: (
        <div className="md:-mt-32">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeTwo}
              alt="hero template"
              width={500}
              height={500}
              className="h-100 w-full rounded-lg object-cover md:h-96 lg:h-[800px]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Final Week",
      content: (
        <div className="md:-mt-32">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TimeThree}
              alt="hero template"
              width={500}
              height={500}
              className="h-100 w-full rounded-lg object-cover md:h-96 lg:h-[800px]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
