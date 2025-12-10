"use client";

import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Navigation from "@/components/Navigation";

export default function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,
        delay: 80,
        deleteSpeed: 50,
      });

      typewriter
        .pauseFor(500)
        .typeString("Yunseo Jeong")
        .pauseFor(2000)
        .deleteAll()
        .typeString("a Security Researcher")
        .pauseFor(2000)
        .deleteAll()
        .typeString("a CTF Player")
        .pauseFor(2000)
        .deleteAll()
        .typeString("a Web3 Enthusiast")
        .pauseFor(2000)
        .deleteAll()
        .typeString("a Problem Solver")
        .pauseFor(2000)
        .deleteAll()
        .start();
    }
  }, []);

  return (
    <div className="bg-[--color-bun-dark] text-[--color-bun-text] min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero px-6 pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl mb-6">
            Hi, I&apos;m{" "}
            <span
              className="typewriter-text text-[--color-bun-cyan]"
              ref={typewriterRef}
            ></span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-balance text-lg text-[--color-bun-text-muted] md:text-xl">
            Blockchain Security Researcher & CTF Player, exploring
            vulnerabilities in Web3 and Web2.
          </p>
          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#experience"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 hover:border-[--color-bun-cyan]/50 hover:bg-white/10 transition-all hover-lift"
            >
              <span className="text-white font-medium">Experience</span>
              <svg
                className="w-4 h-4 text-[--color-bun-cyan] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#activities"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 hover:border-[--color-bun-pink]/50 hover:bg-white/10 transition-all hover-lift"
            >
              <span className="text-white font-medium">Activities</span>
              <svg
                className="w-4 h-4 text-[--color-bun-pink] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-[--color-bun-cyan] to-[--color-bun-pink] px-6 py-3 font-medium text-white hover:opacity-90 transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[--color-bun-text-muted]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-[--color-bun-text-muted] leading-relaxed">
            Sophomore in Information Security at Joongbu University, diving into
            blockchain security and web development while sharpening skills
            through CTF competitions and hands-on security club activities
            focused on real-world exploit paths.
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  제 3회 전라남도 웹 취약점 경진대회
                </h3>
                <span className="text-[--color-bun-cyan] text-sm font-medium">
                  우수상
                </span>
              </div>
              <p className="text-[--color-bun-text-muted] text-sm">
                2025.06 · 한국융합보안학회 · Team SCP
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  제 5회 JBU-CTF
                </h3>
                <span className="text-[--color-bun-pink] text-sm font-medium">
                  중부대학교 총장상
                </span>
              </div>
              <p className="text-[--color-bun-text-muted] text-sm">
                2024.11 · 중부대학교 · Team 김정천
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-10">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4">
                CTF / Wargame Authoring
              </h3>
              <div className="space-y-3 text-[--color-bun-text-muted]">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-white font-semibold">
                    제 6회 JBU-CTF - Web3
                  </p>
                  <span className="text-sm">2025.11</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-white font-semibold">
                    ReadFlag Wargame - Web3
                  </p>
                  <span className="text-sm">2025.12 ~</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    정보보안동아리 S.C.P
                  </h3>
                  <p className="text-[--color-bun-pink] font-medium">
                    2024.03 ~
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">직책</h4>
                  <ul className="space-y-2 text-[--color-bun-text-muted]">
                    <li>• 학습부장 (2025.03 ~ 07)</li>
                    <li>• 부회장 (2025.07 ~)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    동아리 내부 세미나
                  </h4>
                  <ul className="space-y-2 text-[--color-bun-text-muted]">
                    <li>• LFI to RCE (2024.06)</li>
                    <li>• TE.0 Request smuggling 이해하기 (2025.05)</li>
                    <li>
                      • Node.js Querystring 모듈 분석 (LINE CTF 2021 -
                      Doublecheck) (2025.06)
                    </li>
                    <li>• Yei Finance 보안사고 분석 (2025.07)</li>
                    <li>• Mistakes in Identifying Callers (2025.10)</li>
                    <li>• Balancer V2 보안사고 분석 (2025.12)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-orange]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Team RubiyaLab
                  </h3>
                  <p className="text-[--color-bun-orange] font-medium">
                    2025.04 ~
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    팀 내부 스터디
                  </h4>
                  <ul className="space-y-2 text-[--color-bun-text-muted]">
                    <li>
                      • Redteam Study (2025.04 ~ 07) — 모의침투 및 레드팀 스터디
                    </li>
                    <li>
                      • Web Study (2025.04 ~ 08) — 웹 취약점 기초, 1-day 분석
                      심화 스터디
                    </li>
                    <li>
                      • Web3 Study (2025.06 ~) — Etherium 생태계, 스마트
                      컨트랙트 취약점 연구
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    CTF Participations
                  </h4>
                  <ul className="space-y-2 text-[--color-bun-text-muted]">
                    <li>• RSTCON 2025 CTF #6</li>
                    <li>• V1t CTF 2025 #6</li>
                    <li>• Platypwn 2025 #16</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    버그줍줍단
                  </h3>
                  <p className="text-[--color-bun-cyan] font-medium">Member</p>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm">
                  2025.05 ~
                </span>
              </div>
              <p className="text-[--color-bun-text-muted]">
                Bug hunting team focusing on hands-on vulnerability discovery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="group rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[--color-bun-cyan] transition-colors">
                      Optimism/OP Stack 기반 L2 롤업 취약점 분석
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      완료
                    </span>
                  </div>
                  <p className="text-[--color-bun-text-muted] mb-4">
                    Layer 2 블록체인 솔루션인 Optimism과 OP Stack의 보안 취약점
                    연구 및 분석 프로젝트
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      Blockchain
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                      Security
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-orange]/20 text-[--color-bun-orange] border border-[--color-bun-orange]/30">
                      L2
                    </span>
                  </div>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm ml-4 whitespace-nowrap">
                  2025.09 ~ 2025.12
                </span>
              </div>
            </div>

            <div className="group rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[--color-bun-pink] transition-colors">
                      Yei Finance 보안 사고 분석
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                      완료
                    </span>
                  </div>
                  <p className="text-[--color-bun-text-muted] mb-4">
                    Aave 포크 프로토콜인 Yei Finance의 보안 사고 분석 및 취약점
                    연구
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                      DeFi
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      Security Analysis
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-orange]/20 text-[--color-bun-orange] border border-[--color-bun-orange]/30">
                      Incident Response
                    </span>
                  </div>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm ml-4 whitespace-nowrap">
                  2025.08
                </span>
              </div>
            </div>

            <div className="group rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[--color-bun-cyan] transition-colors">
                      Aave 포크 프로토콜 저유동성 위협 탐지 도구 제작
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      완료
                    </span>
                  </div>
                  <p className="text-[--color-bun-text-muted] mb-4">
                    Aave 포크 기반 프로토콜의 저유동성 상황을 자동 감지하고
                    알림하는 보안 도구 개발
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      DeFi
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                      Monitoring
                    </span>
                    <span className="text-xs px-3 py-1 rounded bg-[--color-bun-orange]/20 text-[--color-bun-orange] border border-[--color-bun-orange]/30">
                      Threat Detection
                    </span>
                  </div>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm ml-4 whitespace-nowrap">
                  2025.12
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-[--color-bun-text-muted] mb-12">
            Have a project in mind? Let&apos;s connect and build something
            amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:oesc910@gmail.com"
              className="rounded-lg bg-[--color-bun-cyan] px-8 py-4 font-medium text-white hover:bg-[--color-bun-cyan]/90 transition-all hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://github.com/oesp91"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-medium text-white hover:border-[--color-bun-cyan]/50 hover:bg-white/10 transition-all hover-lift"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="mx-auto max-w-7xl text-center text-[--color-bun-text-muted]">
          <p>
            &copy; {new Date().getFullYear()} Yunseo Jeong. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
