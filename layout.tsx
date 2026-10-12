import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Sudanese Professionals Parliament',
  description: 'A virtual government for the Sudanese people.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const lang = 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir}>
      <body>
        {children}
      </body>
    </html>
  );
}
