"use client";

import {
  type MotionValue,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// TYPES
// ============================================================================

type ScrollEffect =
  | "fadeIn"
  | "fadeUp"
  | "fadeDown"
  | "parallax"
  | "scale"
  | "scaleUp"
  | "scaleDown"
  | "rotate"
  | "blur"
  | "slideLeft"
  | "slideRight"
  | "skew"
  | "flip"
  | "reveal";

interface ScrollTextProps {
  children: React.ReactNode;
  effect?: ScrollEffect;
  className?: string;
  offset?: [string, string];
  speed?: number;
  spring?: boolean;
  springConfig?: { stiffness?: number; damping?: number; mass?: number };
  threshold?: [number, number];
}

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  spring?: boolean;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
  threshold?: [number, number];
}

interface ScrollScaleProps {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
  threshold?: [number, number];
}

interface HorizontalScrollTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  repeat?: number;
}

interface ScrollProgressTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  stagger?: number;
}

interface StickyScrollTextProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  effect?: "fade" | "scale" | "blur" | "color";
}

// ============================================================================
// SCROLL TEXT COMPONENT
// ============================================================================

const ScrollText = React.forwardRef<HTMLDivElement, ScrollTextProps>(
  (
    {
      children,
      effect = "fadeIn",
      className,
      offset = ["start end", "end start"],
      speed = 1,
      spring = false,
      springConfig,
      threshold = [0, 1],
    },
    forwardedRef,
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    const ref =
      (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: offset as ["start end", "end start"],
    });

    const [start, end] = threshold;
    const springOpts = {
      stiffness: springConfig?.stiffness ?? 100,
      damping: springConfig?.damping ?? 30,
      mass: springConfig?.mass ?? 1,
    };

    // Create transforms
    const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const rawY = useTransform(scrollYProgress, [start, end], [50 * speed, 0]);
    const rawYDown = useTransform(
      scrollYProgress,
      [start, end],
      [-50 * speed, 0],
    );
    const rawYParallax = useTransform(
      scrollYProgress,
      [0, 1],
      [100 * speed, -100 * speed],
    );
    const rawScale = useTransform(scrollYProgress, [start, end], [0.5, 1]);
    const rawScaleUp = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.8, 1, 1.2],
    );
    const rawScaleDown = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [1.2, 1, 0.8],
    );
    const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed]);
    const rawBlurOpacity = useTransform(
      scrollYProgress,
      [start, end],
      [0.5, 1],
    );
    const rawX = useTransform(scrollYProgress, [start, end], [200 * speed, 0]);
    const rawXRight = useTransform(
      scrollYProgress,
      [start, end],
      [-200 * speed, 0],
    );
    const rawSkew = useTransform(
      scrollYProgress,
      [start, end],
      [20 * speed, 0],
    );
    const rawRotateX = useTransform(scrollYProgress, [start, end], [90, 0]);

    // Apply spring if needed
    const opacitySpring = useSpring(rawOpacity, springOpts);
    const ySpring = useSpring(rawY, springOpts);
    const yDownSpring = useSpring(rawYDown, springOpts);
    const yParallaxSpring = useSpring(rawYParallax, springOpts);
    const scaleSpring = useSpring(rawScale, springOpts);
    const scaleUpSpring = useSpring(rawScaleUp, springOpts);
    const scaleDownSpring = useSpring(rawScaleDown, springOpts);
    const rotateSpring = useSpring(rawRotate, springOpts);
    const blurOpacitySpring = useSpring(rawBlurOpacity, springOpts);
    const rotateXSpring = useSpring(rawRotateX, springOpts);

    const opacity = spring ? opacitySpring : rawOpacity;
    const y = spring ? ySpring : rawY;
    const yDown = spring ? yDownSpring : rawYDown;
    const yParallax = spring ? yParallaxSpring : rawYParallax;
    const scale = spring ? scaleSpring : rawScale;
    const scaleUp = spring ? scaleUpSpring : rawScaleUp;
    const scaleDown = spring ? scaleDownSpring : rawScaleDown;
    const rotate = spring ? rotateSpring : rawRotate;
    const blurOpacity = spring ? blurOpacitySpring : rawBlurOpacity;
    const rotateX = spring ? rotateXSpring : rawRotateX;
    const xSpring = useSpring(rawX, springOpts);
    const xRightSpring = useSpring(rawXRight, springOpts);
    const skewSpring = useSpring(rawSkew, springOpts);

    const x = spring ? xSpring : rawX;
    const xRight = spring ? xRightSpring : rawXRight;
    const skew = spring ? skewSpring : rawSkew;

    // Non-springable transforms
    const blur = useTransform(scrollYProgress, [start, end], [10 * speed, 0]);
    const clipPath = useTransform(scrollYProgress, [start, end], [100, 0]);

    const effectStyles: Record<
      ScrollEffect,
      Record<string, MotionValue<number>>
    > = {
      fadeIn: { opacity },
      fadeUp: { opacity, y },
      fadeDown: { opacity, y: yDown },
      parallax: { y: yParallax },
      scale: { scale, opacity },
      scaleUp: { scale: scaleUp },
      scaleDown: { scale: scaleDown },
      rotate: { rotate },
      blur: { opacity: blurOpacity },
      slideLeft: { x, opacity },
      slideRight: { x: xRight, opacity },
      skew: { skewX: skew, opacity },
      flip: { rotateX, opacity },
      reveal: {},
    };

    const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);
    const clipPathValue = useTransform(clipPath, (v) => `inset(0 ${v}% 0 0)`);

    return (
      <motion.div
        ref={ref}
        className={cn("will-change-transform", className)}
        style={{
          ...effectStyles[effect],
          ...(effect === "blur" && { filter: filterBlur }),
          ...(effect === "reveal" && { clipPath: clipPathValue }),
          ...(effect === "flip" && { perspective: 1000 }),
        }}
      >
        {children}
      </motion.div>
    );
  },
);

ScrollText.displayName = "ScrollText";

// ============================================================================
// PARALLAX TEXT COMPONENT
// ============================================================================

const ParallaxText = React.forwardRef<HTMLDivElement, ParallaxTextProps>(
  (
    { children, className, speed = 1, direction = "up", spring = true },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    const distance = 100 * speed;
    const springOpts = spring
      ? { stiffness: 100, damping: 30 }
      : { stiffness: 1000, damping: 1000 };

    const yUp = useSpring(
      useTransform(scrollYProgress, [0, 1], [distance, -distance]),
      springOpts,
    );
    const yDown = useSpring(
      useTransform(scrollYProgress, [0, 1], [-distance, distance]),
      springOpts,
    );
    const xLeft = useSpring(
      useTransform(scrollYProgress, [0, 1], [distance, -distance]),
      springOpts,
    );
    const xRight = useSpring(
      useTransform(scrollYProgress, [0, 1], [-distance, distance]),
      springOpts,
    );

    const isHorizontal = direction === "left" || direction === "right";
    const transform = {
      up: yUp,
      down: yDown,
      left: xLeft,
      right: xRight,
    }[direction];

    return (
      <div ref={containerRef} className={cn("overflow-hidden", className)}>
        <motion.div
          ref={ref}
          style={{ [isHorizontal ? "x" : "y"]: transform }}
          className="will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    );
  },
);

ParallaxText.displayName = "ParallaxText";

// ============================================================================
// SCROLL REVEAL COMPONENT
// ============================================================================

const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className,
      direction = "up",
      delay = 0,
      duration = 0.6,
      distance = 60,
      once = true,
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setIsInView(true);
            if (once && containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          } else if (!once) {
            setIsInView(false);
          }
        },
        { threshold: 0.1 },
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [once]);

    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { y: distance, x: 0 };
        case "down":
          return { y: -distance, x: 0 };
        case "left":
          return { x: distance, y: 0 };
        case "right":
          return { x: -distance, y: 0 };
      }
    };

    const initial = getInitialPosition();

    return (
      <div ref={containerRef} className={className}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, ...initial }}
          animate={
            isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initial }
          }
          transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </div>
    );
  },
);

ScrollReveal.displayName = "ScrollReveal";

// ============================================================================
// SCROLL FADE COMPONENT
// ============================================================================

const ScrollFade = React.forwardRef<HTMLDivElement, ScrollFadeProps>(
  (
    {
      children,
      className,
      fadeIn = true,
      fadeOut = true,
      threshold = [0.2, 0.8],
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, (value) => {
      if (fadeIn && fadeOut) {
        if (value < threshold[0]) return value / threshold[0];
        if (value > threshold[1])
          return 1 - (value - threshold[1]) / (1 - threshold[1]);
        return 1;
      }
      if (fadeIn) return Math.min(value / threshold[0], 1);
      if (fadeOut)
        return value > threshold[1]
          ? 1 - (value - threshold[1]) / (1 - threshold[1])
          : 1;
      return 1;
    });

    return (
      <motion.div ref={containerRef} className={className} style={{ opacity }}>
        <div ref={ref}>{children}</div>
      </motion.div>
    );
  },
);

ScrollFade.displayName = "ScrollFade";

// ============================================================================
// SCROLL SCALE COMPONENT
// ============================================================================

const ScrollScale = React.forwardRef<HTMLDivElement, ScrollScaleProps>(
  ({ children, className, from = 0.8, to = 1, threshold = [0, 0.5] }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    const scale = useSpring(
      useTransform(scrollYProgress, threshold, [from, to]),
      { stiffness: 100, damping: 30 },
    );
    const opacity = useTransform(scrollYProgress, threshold, [0, 1]);

    return (
      <motion.div
        ref={containerRef}
        className={cn("will-change-transform", className)}
        style={{ scale, opacity }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    );
  },
);

ScrollScale.displayName = "ScrollScale";

// ============================================================================
// HORIZONTAL SCROLL TEXT COMPONENT
// ============================================================================

const HorizontalScrollText = React.forwardRef<
  HTMLDivElement,
  HorizontalScrollTextProps
>(({ children, className, speed = 1, direction = "left", repeat = 3 }, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left"
      ? ["0%", `-${50 * speed}%`]
      : [`-${50 * speed}%`, "0%"],
  );

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className="flex whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="flex-shrink-0 px-4">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
});

HorizontalScrollText.displayName = "HorizontalScrollText";

// ============================================================================
// SCROLL PROGRESS TEXT COMPONENT
// ============================================================================

interface ScrollProgressCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

const ScrollProgressChar: React.FC<ScrollProgressCharProps> = ({
  char,
  progress,
  range,
  className,
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "hsl(var(--muted-foreground))",
    "hsl(var(--foreground))",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className={cn("transition-colors", className)}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const ScrollProgressText = React.forwardRef<
  HTMLDivElement,
  ScrollProgressTextProps
>(({ text, className, charClassName }, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const characters = text.split("");
  const step = 1 / characters.length;

  return (
    <div ref={containerRef} className={className}>
      <span ref={ref} className="flex flex-wrap">
        {characters.map((char, index) => {
          const start = index * step;
          const end = start + step;
          return (
            <ScrollProgressChar
              key={index}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
              className={charClassName}
            />
          );
        })}
      </span>
    </div>
  );
});

ScrollProgressText.displayName = "ScrollProgressText";

// ============================================================================
// STICKY SCROLL TEXT COMPONENT
// ============================================================================

const StickyScrollText = React.forwardRef<
  HTMLDivElement,
  StickyScrollTextProps
>(({ children, className, height = "200vh", effect = "fade" }, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityFade = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );
  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5],
  );
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [10, 0, 0, 10],
  );
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "hsl(var(--muted-foreground))",
      "hsl(var(--primary))",
      "hsl(var(--muted-foreground))",
    ],
  );

  const effectStyles = {
    fade: { opacity: opacityFade },
    scale: { scale: scaleValue, opacity: opacityFade },
    blur: { filter: filterBlur, opacity: opacityFade },
    color: { opacity: opacityFade, color },
  };

  return (
    <div ref={containerRef} className="relative" style={{ height }}>
      <motion.div
        ref={ref}
        className={cn(
          "sticky top-1/2 -translate-y-1/2 will-change-transform",
          className,
        )}
        style={effectStyles[effect]}
      >
        {children}
      </motion.div>
    </div>
  );
});

StickyScrollText.displayName = "StickyScrollText";

// ============================================================================
// GROUPED SCROLL PROGRESS REVEAL
// ============================================================================
//
// `ScrollProgressText` animates a single string. This variant keeps arbitrary
// children (headings, paragraphs, inline markup like <em>) in place and lights
// every character up as the group travels through the viewport, so a whole
// block reads as one scroll-driven reveal while keeping its original
// typography and colors. Whitespace stays as real text so line wrapping is
// untouched.

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

interface ScrollProgressContextValue {
  progress: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  version: number;
}

const ScrollProgressContext =
  React.createContext<ScrollProgressContextValue | null>(null);

interface ScrollProgressGroupProps {
  children: React.ReactNode;
  className?: string;
  /** Viewport fraction where the reveal starts (container top). */
  start?: number;
  /** Viewport fraction where the reveal completes (container bottom). */
  end?: number;
}

function ScrollProgressGroup({
  children,
  className,
  start = 0.85,
  end = 0.35,
}: ScrollProgressGroupProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const [version, setVersion] = React.useState(0);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const viewport = window.innerHeight;
      const distance = (start - end) * viewport + rect.height;
      if (distance <= 0) {
        progress.set(0);
        return;
      }
      const value = (start * viewport - rect.top) / distance;
      progress.set(Math.min(1, Math.max(0, value)));
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const remeasure = () => {
      setVersion((value) => value + 1);
      schedule();
    };

    update();

    const observer = new ResizeObserver(remeasure);
    observer.observe(container);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    // Web fonts finish loading after mount and shift the layout, so re-measure.
    document.fonts?.ready.then(remeasure).catch(() => {});

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
    };
  }, [progress, start, end]);

  const value = React.useMemo<ScrollProgressContextValue>(
    () => ({ progress, containerRef, version }),
    [progress, version],
  );

  return (
    <ScrollProgressContext.Provider value={value}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ScrollProgressContext.Provider>
  );
}

interface ScrollProgressCharsProps {
  children: React.ReactNode;
  className?: string;
  charClassName?: string;
  /** Opacity each character rests at before it lights up. */
  from?: number;
}

function countTextChars(node: React.ReactNode): number {
  if (node === null || node === undefined || typeof node === "boolean") {
    return 0;
  }
  if (typeof node === "string" || typeof node === "number") {
    return Array.from(String(node)).length;
  }
  if (Array.isArray(node)) {
    return node.reduce((total, child) => total + countTextChars(child), 0);
  }
  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return countTextChars(element.props.children);
  }
  return 0;
}

interface RevealCharProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  from: number;
  className?: string;
}

function RevealChar({
  children,
  progress,
  range,
  from,
  className,
}: RevealCharProps) {
  const opacity = useTransform(progress, range, [from, 1]);

  return (
    <motion.span style={{ opacity }} className={className}>
      {children}
    </motion.span>
  );
}

interface RevealCharState {
  progress: MotionValue<number>;
  range: [number, number];
  total: number;
  from: number;
  charClassName?: string;
  index: number;
}

function renderRevealChars(
  node: React.ReactNode,
  state: RevealCharState,
): React.ReactNode {
  if (node === null || node === undefined || typeof node === "boolean") {
    return null;
  }

  if (typeof node === "string" || typeof node === "number") {
    const [start, end] = state.range;
    const step = (end - start) / state.total;

    return Array.from(String(node)).map((char) => {
      const index = state.index++;

      // Keep whitespace as plain text so the browser can still break lines.
      if (/\s/.test(char)) {
        return <React.Fragment key={index}>{char}</React.Fragment>;
      }

      return (
        <RevealChar
          key={index}
          progress={state.progress}
          range={[start + index * step, start + (index + 1) * step]}
          from={state.from}
          className={state.charClassName}
        >
          {char}
        </RevealChar>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, childIndex) => (
      <React.Fragment key={childIndex}>
        {renderRevealChars(child, state)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (element.props.children === undefined) return element;

    return React.cloneElement(element, {
      children: renderRevealChars(element.props.children, state),
    });
  }

  return node;
}

function ScrollProgressCharsInner({
  children,
  className,
  charClassName,
  from = 0.2,
  context,
}: ScrollProgressCharsProps & { context: ScrollProgressContextValue }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [range, setRange] = React.useState<[number, number]>([0, 1]);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const container = context.containerRef.current;
    if (!element || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    if (!containerRect.height) return;

    const start = (elementRect.top - containerRect.top) / containerRect.height;
    const end =
      (elementRect.top + elementRect.height - containerRect.top) /
      containerRect.height;

    setRange([start, Math.max(end, start + 0.01)]);
  }, [context.containerRef, context.version]);

  const total = React.useMemo(() => countTextChars(children), [children]);

  const content = React.useMemo(() => {
    if (!total) return children;

    return renderRevealChars(children, {
      progress: context.progress,
      range,
      total,
      from,
      charClassName,
      index: 0,
    });
  }, [children, total, context.progress, range, from, charClassName]);

  return (
    <span ref={ref} className={className}>
      {content}
    </span>
  );
}

function ScrollProgressChars(props: ScrollProgressCharsProps) {
  const context = React.useContext(ScrollProgressContext);

  // Outside a group there is nothing to track, so render the text untouched.
  if (!context) {
    return <span className={props.className}>{props.children}</span>;
  }

  return <ScrollProgressCharsInner {...props} context={context} />;
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  HorizontalScrollText,
  ParallaxText,
  ScrollFade,
  ScrollProgressChars,
  ScrollProgressGroup,
  ScrollProgressText,
  ScrollReveal,
  ScrollScale,
  ScrollText,
  StickyScrollText,
};

export type {
  HorizontalScrollTextProps,
  ParallaxTextProps,
  ScrollEffect,
  ScrollFadeProps,
  ScrollProgressCharsProps,
  ScrollProgressGroupProps,
  ScrollProgressTextProps,
  ScrollRevealProps,
  ScrollScaleProps,
  ScrollTextProps,
  StickyScrollTextProps,
};
