declare module 'typewriter-effect/dist/core' {
  interface TypewriterOptions {
    loop?: boolean;
    delay?: number;
    deleteSpeed?: number;
  }

  export default class Typewriter {
    constructor(element: HTMLElement | null, options?: TypewriterOptions);
    typeString(text: string): this;
    pauseFor(duration: number): this;
    deleteAll(speed?: number): this;
    deleteChars(count: number): this;
    start(): this;
    stop(): this;
  }
}
