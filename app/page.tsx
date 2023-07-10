import Image from "next/image";
import {
  Trees,
  ChevronRight,
  Aperture,
  ArrowUpNarrowWide,
  Database,
  CandlestickChart,
} from "lucide-react";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="flex flex-col bg-black text-[#DDE5B6] items-center justify-between p-24">
      <div>
        <span className="text-[32px]">The Change You Need</span>
        <p className="text-xl">
          Tired of inefficient routines and outdated processes? Our services
          will bring the transformation your company craves. Get ready to
          experience innovation at its finest.
        </p>
      </div>
      <div className="w-full my-32 gap-5 grid lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="flex group bg-[#0D0D0D] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2">
            <ArrowUpNarrowWide
              size={80}
              className="text-[#6C584C] bg-white rounded-md"
            />
          </div>
          <div className="w-full">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Increased Efficiency{" "}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Save Time, Improve Workflow
            </p>
          </div>
          <div className="flex w-full justify-end transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ChevronRight className="text-2xl font-semibold" />
          </div>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="flex group bg-[#0D0D0D] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2">
            <CandlestickChart
              size={80}
              className="text-[#6C584C] bg-white rounded-md"
            />
          </div>
          <div className="w-full">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Exceptional Results{" "}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Exceed Your Goals
            </p>
          </div>
          <div className="flex w-full justify-end transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ChevronRight className="text-2xl font-semibold" />
          </div>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="flex group bg-[#0D0D0D] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2">
            <Database
              size={80}
              className="text-[#6C584C] bg-white rounded-md"
            />
          </div>
          <div className="w-full">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Data-Driven Optimization
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Unleash Your Potential
            </p>
          </div>
          <div className="flex w-full justify-end transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ChevronRight className="text-2xl font-semibold" />
          </div>
        </a>
      </div>
      <Brands />
    </main>
  );
}
