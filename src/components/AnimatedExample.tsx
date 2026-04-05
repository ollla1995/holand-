import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'motion/react';

interface AnimatedExampleProps {
  stateA: { id: string; color: string; text: string }[];
  stateB: { id: string; color: string; text: string }[];
  interval?: number;
  ruleText?: string;
}

const getWatercolorStyle = (colorClass: string) => {
  const map: Record<string, { bg: string, text: string, stroke: string }> = {
    'bg-blue-600': { bg: '#a2c0eb', text: '#1e3a8a', stroke: '#60a5fa' },
    'bg-red-600': { bg: '#f0b4b4', text: '#7f1d1d', stroke: '#f87171' },
    'bg-slate-500': { bg: '#c2cdd6', text: '#334155', stroke: '#94a3b8' },
    'bg-orange-500': { bg: '#f7d0b0', text: '#7c2d12', stroke: '#fb923c' },
    'bg-emerald-500': { bg: '#bce0c9', text: '#14532d', stroke: '#34d399' },
    'bg-slate-800': { bg: '#7a8b99', text: '#ffffff', stroke: '#475569' },
    'bg-slate-400': { bg: '#e0e7ee', text: '#334155', stroke: '#cbd5e1' },
    'bg-orange-400': { bg: '#fcebda', text: '#7c2d12', stroke: '#fdba74' },
  };
  return map[colorClass] || { bg: '#e2e8f0', text: '#0f172a', stroke: '#94a3b8' };
};

export default function AnimatedExample({ stateA, stateB, interval = 5000, ruleText }: AnimatedExampleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Refs = useRef<Record<string, HTMLDivElement | null>>({});
  const row2Refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [lines, setLines] = useState<any[]>([]);
  const [animKey, setAnimKey] = useState(0);

  const updateLines = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines: any[] = [];

    stateA.forEach((item, indexA) => {
      const el1 = row1Refs.current[item.id];
      const el2 = row2Refs.current[item.id];
      if (el1 && el2) {
        const rect1 = el1.getBoundingClientRect();
        const rect2 = el2.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2 - containerRect.left;
        const y1 = rect1.bottom - containerRect.top + 4;
        const x2 = rect2.left + rect2.width / 2 - containerRect.left;
        const y2 = rect2.top - containerRect.top - 8; // gap for arrowhead

        const indexB = stateB.findIndex(i => i.id === item.id);
        const isMoving = indexA !== indexB;

        newLines.push({
          id: item.id,
          x1, y1, x2, y2,
          isMoving,
          color: item.color
        });
      }
    });
    setLines(newLines);
  };

  useLayoutEffect(() => {
    // Small delay to ensure fonts/layout are fully rendered before measuring
    const timeout = setTimeout(updateLines, 100);
    window.addEventListener('resize', updateLines);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateLines);
    };
  }, [stateA, stateB]);

  useEffect(() => {
    const timer = setInterval(() => setAnimKey(k => k + 1), interval);
    return () => clearInterval(timer);
  }, [interval]);

  const renderBlock = (item: any, refMap: React.MutableRefObject<Record<string, HTMLDivElement | null>>) => {
    const style = getWatercolorStyle(item.color);
    return (
      <div
        key={item.id}
        ref={el => refMap.current[item.id] = el}
        className="px-5 py-2.5 font-bold shadow-sm relative z-10 text-center flex items-center justify-center min-w-[60px] transition-transform hover:scale-105"
        style={{
          backgroundColor: style.bg,
          color: style.text,
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          border: `2px solid ${style.stroke}40`
        }}
      >
        {item.text}
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="relative p-8 bg-[#fcfaf5] rounded-xl border-2 border-[#e8e4d9] my-6 shadow-inner overflow-hidden"
      style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E")' 
      }}
    >
      {/* SVG Overlay for Arrows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          {lines.map(line => {
            const style = getWatercolorStyle(line.color);
            return (
              <marker 
                key={`arrow-${line.id}`} 
                id={`arrow-${line.id}`} 
                viewBox="0 0 10 10" 
                refX="8" 
                refY="5" 
                markerWidth="6" 
                markerHeight="6" 
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={style.stroke} opacity={line.isMoving ? 0.9 : 0.3} />
              </marker>
            );
          })}
        </defs>
        {lines.map(line => {
          const style = getWatercolorStyle(line.color);
          const yMid = (line.y1 + line.y2) / 2;
          // S-curve path
          const pathD = `M ${line.x1} ${line.y1} C ${line.x1} ${yMid}, ${line.x2} ${yMid}, ${line.x2} ${line.y2}`;
          
          return (
            <motion.path
              key={`${animKey}-${line.id}`}
              d={pathD}
              fill="transparent"
              stroke={style.stroke}
              strokeWidth={line.isMoving ? 3 : 1.5}
              strokeDasharray={line.isMoving ? "none" : "4 4"}
              opacity={line.isMoving ? 0.9 : 0.3}
              markerEnd={`url(#arrow-${line.id})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: line.isMoving ? 0.9 : 0.3 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          );
        })}
      </svg>

      {/* Row 1: Original State */}
      <div className="flex flex-wrap justify-center gap-3 mb-32 relative z-10">
        {stateA.map(item => renderBlock(item, row1Refs))}
      </div>

      {/* Rule Text Overlay */}
      {ruleText && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-center z-20 pointer-events-none flex justify-center">
          <motion.div
            key={`rule-${animKey}`}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="bg-[#fffdf8] px-6 py-3 rounded-2xl border-2 border-[#e8e4d9] text-[#5c544b] font-medium text-sm shadow-sm max-w-md"
            style={{ 
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              boxShadow: '2px 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            {ruleText}
          </motion.div>
        </div>
      )}

      {/* Row 2: Transformed State */}
      <div className="flex flex-wrap justify-center gap-3 relative z-10">
        {stateB.map(item => renderBlock(item, row2Refs))}
      </div>
    </div>
  );
}
