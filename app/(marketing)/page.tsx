import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const headingFont = localFont({
  src: "../../public/fonts/Poppins-SemiBold.ttf",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="flex h-screen items-center justify-center flex-col absolute z-50 inset-0 text-white font-bold px-4 pointer-events-none md:text-3xl text-center">
        <div className="flex items-center justify-center flex-col">
          <div className="mb-4 flex items-center shadow-sm p-4 from-sky-200 to bg-pink-200  text-fuchsia-700 rounded-full uppercase">
            <Medal className="h-6 w-6 mr-2" />
            No. 1 Task Management
          </div>
          <h1
            className={cn(
              "text-3xl md:text-6xl text-center text-neutral-200 mb-6",
              headingFont.className
            )}
          >
            FlitWick helps team move
          </h1>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to bg-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            work forward.
          </div>
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-300 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Collaborate, Manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with FlitWick.
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-up">Get FlitWick for free</Link>
        </Button>
      </div>
    </BackgroundGradientAnimation>
  );
};
export default MarketingPage;
