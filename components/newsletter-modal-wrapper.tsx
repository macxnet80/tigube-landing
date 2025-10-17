"use client"

import { useState, cloneElement, ReactElement } from "react"
import { NewsletterModal } from "@/components/newsletter-modal"

interface NewsletterModalWrapperProps {
  children: ReactElement
}

export function NewsletterModalWrapper({ children }: NewsletterModalWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      {cloneElement(children, { onClick: handleClick })}
      <NewsletterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
