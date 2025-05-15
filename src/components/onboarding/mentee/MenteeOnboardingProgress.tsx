
import { FC } from 'react';

interface MenteeOnboardingProgressProps {
  currentStep: number;
}

const MenteeOnboardingProgress: FC<MenteeOnboardingProgressProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center w-full max-w-md">
        <div className={`w-1/3 flex flex-col items-center ${currentStep >= 1 ? 'text-must-blue' : 'text-muted-foreground'}`}>
          <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${currentStep >= 1 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>1</div>
          <span className="text-xs font-medium">Basic Info</span>
        </div>
        <div className={`w-1/3 flex flex-col items-center ${currentStep >= 2 ? 'text-must-blue' : 'text-muted-foreground'}`}>
          <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${currentStep >= 2 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>2</div>
          <span className="text-xs font-medium">Career Goals</span>
        </div>
        <div className={`w-1/3 flex flex-col items-center ${currentStep >= 3 ? 'text-must-blue' : 'text-muted-foreground'}`}>
          <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${currentStep >= 3 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>3</div>
          <span className="text-xs font-medium">Availability</span>
        </div>
      </div>
    </div>
  );
};

export default MenteeOnboardingProgress;
