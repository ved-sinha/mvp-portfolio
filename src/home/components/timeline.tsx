import { Timeline } from "@/components/ui/timeline";
import TimeOne from "../../assets/timeOne.png";
import TimeTwo from "../../assets/timeTwo.png";
import TimeThree from "../../assets/timeThree.png";

export function TimelineSection() {
  const data = [
    {
      title: "First Week",
      content: (
        <div className="sm:-mt-16 md:-mt-32 mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={TimeOne}
              alt="First week of MVP development - project planning, wireframing, and initial setup phase"
              width={500}
              height={500}
              className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[800px] w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Second Week",
      content: (
        <div className="sm:-mt-16 md:-mt-32 mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={TimeTwo}
              alt="Second week of MVP development - core feature development and backend implementation"
              width={500}
              height={500}
              className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[800px] w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Final Week",
      content: (
        <div className="sm:-mt-16 md:-mt-32 mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={TimeThree}
              alt="Final week of MVP development - testing, deployment, and launch preparation"
              width={500}
              height={500}
              className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[800px] w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
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
