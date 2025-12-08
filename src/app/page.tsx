'use client';

import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Navigation from '@/components/Navigation';

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
        .typeString('Yunseo Jeong')
        .pauseFor(2000)
        .deleteAll()
        .typeString('a Security Researcher')
        .pauseFor(2000)
        .deleteAll()
        .typeString('a CTF Player')
        .pauseFor(2000)
        .deleteAll()
        .typeString('a Web3 Enthusiast')
        .pauseFor(2000)
        .deleteAll()
        .typeString('a Problem Solver')
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
            Hi, I&apos;m{' '}
            <span className="typewriter-text text-[--color-bun-cyan]" ref={typewriterRef}></span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-balance text-lg text-[--color-bun-text-muted] md:text-xl">
            Blockchain Security Researcher & CTF Player, exploring vulnerabilities in Web3 and Web2.
          </p>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#experience"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 hover:border-[--color-bun-cyan]/50 hover:bg-white/10 transition-all hover-lift"
            >
              <span className="text-white font-medium">Experience</span>
              <svg className="w-4 h-4 text-[--color-bun-cyan] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#activities"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 hover:border-[--color-bun-pink]/50 hover:bg-white/10 transition-all hover-lift"
            >
              <span className="text-white font-medium">Activities</span>
              <svg className="w-4 h-4 text-[--color-bun-pink] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
          <svg className="w-6 h-6 text-[--color-bun-text-muted]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-[--color-bun-text-muted] leading-relaxed">
            중부대학교 정보보호학과 2학년 재학 중이며, 블록체인 보안과 웹 개발에 관심이 많습니다.
            <br />
            다양한 CTF 대회 참가와 보안 동아리 활동을 통해 실력을 쌓아가고 있습니다.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {/* Joongbu University */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Joongbu University</h3>
                  <p className="text-[--color-bun-cyan] font-medium">정보보호학전공 2학년</p>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm">2024 ~</span>
              </div>
            </div>

            {/* S.C.P */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">S.C.P</h3>
                  <p className="text-[--color-bun-pink] font-medium">정보보안동아리</p>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm">2024.03 ~</span>
              </div>
              <ul className="space-y-2 text-[--color-bun-text-muted]">
                <li className="flex items-start gap-2">
                  <span className="text-[--color-bun-pink] mt-1">•</span>
                  <span>학습부장 (2025.03 ~ 08)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-bun-pink] mt-1">•</span>
                  <span>부회장 (2025.09 ~)</span>
                </li>
              </ul>
            </div>

            {/* RubiyaLab */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-orange]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">RubiyaLab</h3>
                  <p className="text-[--color-bun-orange] font-medium">Member</p>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm">2025.03 ~</span>
              </div>
            </div>

            {/* 버그줍줍단 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">버그줍줍단</h3>
                  <p className="text-[--color-bun-cyan] font-medium">Member</p>
                </div>
                <span className="text-[--color-bun-text-muted] text-sm">2025.05 ~</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Activities</h2>

          {/* SCP 활동 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[--color-bun-cyan] mb-6">S.C.P</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
                <h4 className="text-lg font-semibold text-white mb-2">내부 세미나</h4>
                <p className="text-[--color-bun-text-muted] text-sm">정기적인 보안 기술 세미나</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
                <h4 className="text-lg font-semibold text-white mb-2">2024-2 Penetration Testing 멘토링</h4>
                <p className="text-[--color-bun-text-muted] text-sm">모의 침투 테스트 멘토링</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
                <h4 className="text-lg font-semibold text-white mb-2">2025-1 Linux 멘토링</h4>
                <p className="text-[--color-bun-text-muted] text-sm">리눅스 시스템 멘토링</p>
              </div>
            </div>
          </div>

          {/* CTF & 대회 */}
          <div>
            <h3 className="text-2xl font-bold text-[--color-bun-pink] mb-6">CTF & Competitions</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">2024 JBU-CTF 대학부 #3</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                    중부대학교 총장상
                  </span>
                </div>
                <p className="text-[--color-bun-text-muted] text-sm">Team 김정천</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-orange]/50 transition-all hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">제 3회 전라남도 웹 취약점 경진대회</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-orange]/20 text-[--color-bun-orange] border border-[--color-bun-orange]/30">
                    장려상
                  </span>
                </div>
                <p className="text-[--color-bun-text-muted] text-sm">Team SCP</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">WHY2025 CTF #35</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                    #35
                  </span>
                </div>
                <p className="text-[--color-bun-text-muted] text-sm">Team RubiyaLab</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-pink]/50 transition-all hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">2025 CCE #57</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-pink]/20 text-[--color-bun-pink] border border-[--color-bun-pink]/30">
                    #57
                  </span>
                </div>
                <p className="text-[--color-bun-text-muted] text-sm">Team SCP</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[--color-bun-orange]/50 transition-all hover-lift">
                <h4 className="text-lg font-semibold text-white mb-2">2025 JBU-CTF 문제 출제</h4>
                <p className="text-[--color-bun-text-muted] text-sm">CTF 문제 출제자로 참여</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="space-y-6">
            <div className="group rounded-lg border border-white/10 bg-white/5 p-8 hover:border-[--color-bun-cyan]/50 transition-all hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[--color-bun-cyan] transition-colors">
                      Optimism/OP Stack 기반 L2 롤업 취약점 분석
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-[--color-bun-cyan]/20 text-[--color-bun-cyan] border border-[--color-bun-cyan]/30">
                      진행중
                    </span>
                  </div>
                  <p className="text-[--color-bun-text-muted] mb-4">
                    Layer 2 블록체인 솔루션인 Optimism과 OP Stack의 보안 취약점 연구 및 분석 프로젝트
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
                <span className="text-[--color-bun-text-muted] text-sm ml-4 whitespace-nowrap">2025.09 ~</span>
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
                    Aave 포크 프로토콜인 Yei Finance의 보안 사고 분석 및 취약점 연구
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
                <span className="text-[--color-bun-text-muted] text-sm ml-4 whitespace-nowrap">2025.08</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-lg text-[--color-bun-text-muted] mb-12">
            Have a project in mind? Let&apos;s connect and build something amazing together.
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
          <p>&copy; {new Date().getFullYear()} Yunseo Jeong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}