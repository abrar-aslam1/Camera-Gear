import { ReactNode } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

declare module 'next/link'
declare module 'next/image'
declare module 'lucide-react'
declare module '@radix-ui/react-slot'
declare module 'class-variance-authority'
declare module 'clsx'
declare module 'tailwind-merge'

export type ChildrenProps = {
  children: ReactNode
}
