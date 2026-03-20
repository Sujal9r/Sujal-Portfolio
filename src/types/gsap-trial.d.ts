declare module 'gsap-trial/SplitText' {
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

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config: Record<string, any>): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(value?: boolean): ScrollSmoother | boolean;
    scrollTop(value?: number): ScrollSmoother | number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
