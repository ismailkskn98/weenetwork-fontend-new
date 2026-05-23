"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function wrapWords(node, indexPrefix = "w") {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, index) => {
      if (part.trim() === "") return part;

      return (
        <span key={`${indexPrefix}-${index}`} className="word-reveal inline-block opacity-20">
          {part}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => wrapWords(child, `${indexPrefix}-${index}`));
  }

  if (node?.props?.["aria-hidden"]) {
    return node;
  }

  if (node?.props?.children) {
    return {
      ...node,
      props: {
        ...node.props,
        children: wrapWords(node.props.children, indexPrefix),
      },
    };
  }

  return node;
}

export default function WordOpacityReveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const words = ref.current.querySelectorAll(".word-reveal");

    gsap.to(words, {
      opacity: 1,
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 45%",
        scrub: true,
      },
    });
  }, []);

  return <span ref={ref}>{wrapWords(children)}</span>;
}
