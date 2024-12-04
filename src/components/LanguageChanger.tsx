'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = (lang: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${lang};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + lang + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${lang}`)
      );
    }

    router.refresh();
  };

  const handleEnglish = () => handleChangeLanguage("en")
  const handlePortuguese = () => handleChangeLanguage("pt")

  return (
    <div className="flex justify-between items-center">
      <Button variant="ghost" className="hover:bg-transparent" onClick={handleEnglish}>EN</Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" className="hover:bg-transparent" onClick={handlePortuguese}>PT</Button>
    </div>
  );
}