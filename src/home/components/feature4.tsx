import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatItem {
  value: number;
  suffix?: string;
  description: string;
}

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      value: 85,
      suffix: '%',
      description: 'Of our MVPs are tested by real users within the first week'
    },
    {
      value: 15500,
      suffix: '+',
      description: 'Hours of combined product and engineering experience'
    },
    {
      value: 20000000000,
      suffix: '+',
      description: 'Requests handled by systems we’ve helped build'
    }
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(0) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Smooth easing

      const newCounts = stats.map((stat) => {
        const targetValue = stat.value;
        const currentValue = Math.floor(targetValue * easeOutQuart);
        return currentValue;
      });

      setCounts(newCounts);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(stats.map(stat => stat.value));
      }
    }, stepDuration);
  };

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white",
        className
      )}
    >
      <div className="max-w-6xl mx-auto mt-12 sm:mt-20 md:mt-30">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="text-center p-4 sm:p-0">
                {/* Large Statistic */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    {formatNumber(counts[index])}
                  </span>
                  {stat.suffix && (
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
