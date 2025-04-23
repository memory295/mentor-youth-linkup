
import { useState, useEffect } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Stat = ({ value, label, suffix = "", duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString(), 10);
    const incrementTime = (duration / end) * 1.1;
    
    if (start === end) return;
    
    const timer = setInterval(() => {
      start = start + 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-must-blue-light/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Impact by Numbers</h2>
          <p className="text-lg text-muted-foreground">
            See how the MUST Alumni Committee platform is connecting professionals and aspiring tech talents.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={1000} label="Alumni" suffix="+" />
          <Stat value={500} label="Active Mentorships" suffix="+" />
          <Stat value={200} label="Completed Projects" suffix="+" />
          <Stat value={50} label="Tech Events Yearly" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
