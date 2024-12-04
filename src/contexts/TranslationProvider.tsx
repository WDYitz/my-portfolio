/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { I18nextProvider } from "react-i18next"
import initTranslations from "@/app/i18n"
import { createInstance } from "i18next"
import React from "react"

interface TranslationProviderProps {
  children: React.ReactNode
  locale?: string
  namespace?: string | string[]
  resources?: any
}

const TranslationProvider = ({ children, locale, namespace, resources }: TranslationProviderProps) => {
  const i18n = createInstance();

  initTranslations(locale, namespace, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default TranslationProvider