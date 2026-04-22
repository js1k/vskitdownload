import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#0d0f14',
                'bg-2': '#131720',
                surface: '#1a1f2e',
                'surface-strong': '#212840',
                line: '#2c3348',
                'text-body': '#eef0f6',
                'text-muted': '#8892a4',
                brand: '#6c63ff',
                'brand-deep': '#4e46d6',
                'brand-light': '#8a7dff',
                'brand-soft': '#b8b1ff'
            },
            fontFamily: {
                sans: ['Manrope', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
                display: ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Bebas Neue', 'sans-serif'],
                arabic: ['Noto Sans Arabic', 'Bebas Neue', 'sans-serif']
            },
            boxShadow: {
                soft: '0 8px 24px rgba(0, 0, 0, 0.24)',
                strong: '0 12px 32px rgba(0, 0, 0, 0.32)',
                'brand-glow': '0 12px 28px rgba(108, 99, 255, 0.28)',
                'brand-glow-strong': '0 16px 32px rgba(108, 99, 255, 0.36)',
                'phone-center': '0 40px 80px rgba(108, 99, 255, 0.35), 0 0 0 1px rgba(108, 99, 255, 0.5)',
                'phone-side': '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(108, 99, 255, 0.2)'
            },
            keyframes: {
                'float-center': {
                    '0%, 100%': { transform: 'translateY(-12px) scale(1.06)' },
                    '50%': { transform: 'translateY(-22px) scale(1.06)' }
                },
                'float-left': {
                    '0%, 100%': { transform: 'perspective(1400px) rotateY(28deg) translateX(80px) translateY(0) scale(0.88)' },
                    '50%': { transform: 'perspective(1400px) rotateY(28deg) translateX(80px) translateY(-14px) scale(0.88)' }
                },
                'float-right': {
                    '0%, 100%': { transform: 'perspective(1400px) rotateY(-28deg) translateX(-80px) translateY(0) scale(0.88)' },
                    '50%': { transform: 'perspective(1400px) rotateY(-28deg) translateX(-80px) translateY(-14px) scale(0.88)' }
                }
            },
            animation: {
                float: 'float-center 4s ease-in-out infinite',
                'float-slow': 'float-left 5s ease-in-out infinite',
                'float-slow-delay': 'float-right 5s ease-in-out 1s infinite'
            }
        }
    },
    plugins: []
};

export default config;
