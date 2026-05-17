'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: '謙山敘事', subtitle: 'QIANSHAN NARRATIVE' },
  { id: 2, name: '謙一築境', subtitle: 'QIANYI ARCHITECTURE' },
  { id: 3, name: '謙光書院', subtitle: 'QIANGUANG ACADEMY' },
  { id: 4, name: '謙境方外', subtitle: 'QIANJING SANCTUARY' },
];

// 方案 A：優雅漸變背景
const SchemeA = () => {
  const gradientConfigs = [
    {
      // 謙山敘事：深灰 → 淺灰 波浪漸變
      gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)',
      animation: {
        background: [
          'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)',
          'linear-gradient(225deg, #636e72 0%, #b2bec3 50%, #2d3436 100%)',
          'linear-gradient(315deg, #b2bec3 0%, #2d3436 50%, #636e72 100%)',
          'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)',
        ],
      },
    },
    {
      // 謙一築境：黑白格柵漸變
      gradient: 'linear-gradient(90deg, #000000 0%, #ffffff 50%, #000000 100%)',
      animation: {
        background: [
          'linear-gradient(90deg, #000000 0%, #ffffff 50%, #000000 100%)',
          'linear-gradient(180deg, #ffffff 0%, #000000 50%, #ffffff 100%)',
          'linear-gradient(270deg, #000000 0%, #ffffff 50%, #000000 100%)',
          'linear-gradient(90deg, #000000 0%, #ffffff 50%, #000000 100%)',
        ],
      },
    },
    {
      // 謙光書院：暖金色漸變
      gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f38181 100%)',
      animation: {
        background: [
          'linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f38181 100%)',
          'linear-gradient(225deg, #fda085 0%, #f38181 50%, #f6d365 100%)',
          'linear-gradient(315deg, #f38181 0%, #f6d365 50%, #fda085 100%)',
          'linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f38181 100%)',
        ],
      },
    },
    {
      // 謙境方外：星空深藍漸變
      gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      animation: {
        background: [
          'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
          'linear-gradient(225deg, #203a43 0%, #2c5364 50%, #0f2027 100%)',
          'linear-gradient(315deg, #2c5364 0%, #0f2027 50%, #203a43 100%)',
          'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        ],
      },
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">方案 A：優雅漸變背景</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ background: gradientConfigs[index].gradient }}
              animate={gradientConfigs[index].animation}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <motion.h3
                className="text-4xl font-bold mb-2 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {brand.name}
              </motion.h3>
              <motion.p
                className="text-sm tracking-widest opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {brand.subtitle}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 方案 B：純文字大標題
const SchemeB = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">方案 B：純文字大標題</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  rotateZ: [-1, 1, -1, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-7xl font-black text-white mb-4"
                  style={{
                    textShadow: '0 0 40px rgba(255,255,255,0.3)',
                    fontFamily: 'serif',
                  }}
                  whileHover={{
                    textShadow: '0 0 80px rgba(255,255,255,0.6)',
                    letterSpacing: '0.1em',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {brand.name.substring(0, 2)}
                </motion.h3>
                <motion.div
                  className="h-1 w-24 mx-auto bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p
                  className="text-xs tracking-widest text-gray-400 mt-4"
                  whileHover={{ color: '#ffffff', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {brand.subtitle}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 方案 C：毛玻璃質感
const SchemeC = () => {
  const backgrounds = [
    'radial-gradient(circle at 30% 50%, #667eea 0%, #764ba2 100%)',
    'radial-gradient(circle at 70% 50%, #f093fb 0%, #f5576c 100%)',
    'radial-gradient(circle at 50% 30%, #4facfe 0%, #00f2fe 100%)',
    'radial-gradient(circle at 50% 70%, #43e97b 0%, #38f9d7 100%)',
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">方案 C：毛玻璃質感</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
            style={{ background: backgrounds[index] }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* 抽象背景圖案 */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 150 + 50,
                    height: Math.random() * 150 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 40 - 20, 0],
                    y: [0, Math.random() * 40 - 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* 毛玻璃卡片 */}
            <motion.div
              className="absolute inset-8 rounded-xl flex flex-col items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(30px)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-4xl font-bold text-white mb-2 drop-shadow-lg"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {brand.name}
              </motion.h3>
              <motion.p
                className="text-sm tracking-widest text-white opacity-90"
                whileHover={{ opacity: 1 }}
              >
                {brand.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 方案 D：統一金色粒子場
const SchemeD = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number }>
  >([]);

  useEffect(() => {
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  const particleDensities = [0.8, 1.0, 0.6, 1.2]; // 不同密度
  const particleDirections = [
    { x: 20, y: -30 }, // 右上
    { x: -20, y: -30 }, // 左上
    { x: 30, y: 20 }, // 右下
    { x: -30, y: 20 }, // 左下
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">方案 D：統一金色粒子場</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* 金色粒子 */}
            <div className="absolute inset-0">
              {particles
                .slice(0, Math.floor(particles.length * particleDensities[index]))
                .map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-yellow-400"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      filter: 'blur(1px)',
                      boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
                    }}
                    animate={{
                      x: [0, particleDirections[index].x, 0],
                      y: [0, particleDirections[index].y, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
            </div>

            {/* 卡片內容 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <motion.h3
                className="text-4xl font-bold mb-2 drop-shadow-lg"
                style={{ color: '#fbbf24' }}
                whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(251, 191, 36, 0.8)' }}
              >
                {brand.name}
              </motion.h3>
              <motion.p
                className="text-sm tracking-widest text-gray-300"
                whileHover={{ color: '#fbbf24' }}
              >
                {brand.subtitle}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 主頁面組件
export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-gray-900 mb-4">卡片動畫方案預覽</h1>
          <p className="text-gray-600 text-lg">四種精美的動畫設計方案</p>
        </motion.div>

        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SchemeA />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SchemeB />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SchemeC />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SchemeD />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
