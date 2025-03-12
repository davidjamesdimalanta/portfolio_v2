'use client'

import { ThemeProvider } from 'next-themes'

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">{children}</ThemeProvider>
} 