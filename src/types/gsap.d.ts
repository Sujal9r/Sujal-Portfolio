declare module 'gsap/SplitText' {
  export interface SplitTextOptions {
    type?: string;
    linesClass?: string;
  }

  export class SplitText {
    constructor(
      elements: Element | string | (Element | string)[],
      options?: SplitTextOptions
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config: Record<string, unknown>): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(value?: boolean): ScrollSmoother | boolean;
    scrollTop(value?: number): ScrollSmoother | number;
    scrollTo(target: unknown, smooth?: boolean, position?: string): void;
  }
}
