"use client";

import { useEffect, useState } from "react";
import {
  XIcon,
  TelegramIcon,
  GithubIcon,
  RustIcon,
  TypeScriptIcon,
  ReactIcon,
  GolangIcon,
  SolanaIcon,
} from "@/components/icons";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 sm:py-16 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-coral-100/40 via-salmon-100/20 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-coral-100/30 via-transparent to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Profile Image */}
          <div
            className={`mb-10 lg:mb-0 flex-shrink-0 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src={"/monke.png"}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <h1
                className={`text-display-sm sm:text-display font-bold tracking-tight transition-all duration-700 delay-100 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-ink-400">Hi, I am </span>
                <span className="gradient-text">Sean Hoe</span>
              </h1>

              <p
                className={`text-xl sm:text-2xl font-normal text-ink-100 leading-relaxed transition-all duration-700 delay-200 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Building the future of onchain finance
              </p>
            </div>

            {/* Tags with coral accents */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="px-3 py-1.5 text-sm text-coral-700 bg-coral-50 border border-coral-200 rounded-md hover:bg-coral-100 transition-colors cursor-default">
                Payments
              </span>
              <span className="px-3 py-1.5 text-sm text-coral-700 bg-coral-50 border border-coral-200 rounded-md hover:bg-coral-100 transition-colors cursor-default">
                DeFi
              </span>
              <span className="px-3 py-1.5 text-sm text-coral-700 bg-coral-50 border border-coral-200 rounded-md hover:bg-coral-100 transition-colors cursor-default">
                Software
              </span>
              <span className="px-3 py-1.5 text-sm text-coral-700 bg-coral-50 border border-coral-200 rounded-md hover:bg-coral-100 transition-colors cursor-default">
                Fintech
              </span>
            </div>

            {/* Tech Stack with downloaded SVG logos */}
            <div
              className={`pt-4 transition-all duration-700 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-sm text-coral-600 mb-4 font-medium uppercase tracking-wide">
                Tech Stack
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="group flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors cursor-default">
                  <RustIcon className="w-5 h-5" />
                  <span className="text-sm">Rust</span>
                </div>
                <div className="group flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors cursor-default">
                  <TypeScriptIcon className="w-5 h-5" />
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="group flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors cursor-default">
                  <ReactIcon className="w-5 h-5" />
                  <span className="text-sm">React</span>
                </div>
                <div className="group flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors cursor-default">
                  <GolangIcon className="w-5 h-5" />
                  <span className="text-sm">Go</span>
                </div>
              </div>
            </div>

            {/* Blockchain - Solana */}
            <div
              className={`pt-2 transition-all duration-700 delay-450 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-sm text-coral-600 mb-3 font-medium uppercase tracking-wide">
                Blockchain
              </p>
              <div className="flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors cursor-default group">
                <SolanaIcon className="w-5 h-5" />
                <span className="text-sm">Solana</span>
              </div>
            </div>

            {/* Social links - all text style like GitHub */}
            <div
              className={`pt-6 border-t border-coral-200/50 transition-all duration-700 delay-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-sm text-coral-600 mb-4 font-medium uppercase tracking-wide">
                Connect
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <a
                  href="https://x.com/Sean_Hoee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors duration-200"
                >
                  <XIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">@Sean_Hoee</span>
                  <span className="text-xs text-coral-400 group-hover:text-coral-600 transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="https://t.me/seanhoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors duration-200"
                >
                  <TelegramIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">@seanhoe</span>
                  <span className="text-xs text-coral-400 group-hover:text-coral-600 transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="https://github.com/Seann2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ink-200 hover:text-coral-600 transition-colors duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    github.com/Seann2003
                  </span>
                  <span className="text-xs text-coral-400 group-hover:text-coral-600 transition-colors">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
