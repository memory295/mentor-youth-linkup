
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The MUST Alumni mentorship program was life-changing. I found a mentor who not only guided my technical skills but also helped shape my career path.",
    author: "Sarah Johnson",
    position: "Frontend Developer at Facebook",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As an alumnus, giving back to the community through mentoring has been incredibly rewarding. The platform makes it easy to connect and collaborate with talented students.",
    author: "David Chen",
    position: "CTO at TechStart",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The project collaboration feature helped me build a real-world portfolio with guidance from industry experts. This directly led to my first job offer.",
    author: "Alex Rivera",
    position: "Data Scientist at Microsoft",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    quote: "I've mentored on several platforms, but MUST Alumni Committee offers the most comprehensive tools for effective guidance and project collaboration.",
    author: "Priya Patel",
    position: "Senior Engineer at Google",
    image: "https://randomuser.me/api/portraits/women/75.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Hear from mentors and mentees who have experienced the impact of our platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border border-border">
            <div className="mb-6 text-xl md:text-2xl italic text-foreground">
              "{testimonials[currentIndex].quote}"
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-must-blue' : 'bg-must-blue/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
