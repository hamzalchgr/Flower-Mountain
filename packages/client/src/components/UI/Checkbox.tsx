import { Check } from 'lucide-react';

const Checkbox = ({ label = '' }) => {
   return (
      <label className="flex items-start gap-2 cursor-pointer leading-5">
         <input type="checkbox" className="peer sr-only" />

         <div className="h-5 w-5 border border-black flex items-center justify-center peer-checked:bg-black text-white">
            <Check size={18} strokeWidth={2.5} />
         </div>

         <span>{label}</span>
      </label>
   );
};

export default Checkbox;
