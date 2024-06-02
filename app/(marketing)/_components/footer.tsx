import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  p-6  z-10">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost" className=" text-slate-200">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost" className=" text-slate-200">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
};
