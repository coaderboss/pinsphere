// app/layout.js
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import ThemeWrapper from '@/components/ThemeWrapper';

export const metadata = {
  title: 'Pinterest Clone',
  description: 'Fully functional Pinterest-like website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-gray-900 transition-colors">
        <AppProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </AppProvider>
      </body>
    </html>
  );
}