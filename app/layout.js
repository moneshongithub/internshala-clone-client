// import "bootstrap/dist/css/bootstrap.min.css"
import Wrapper from '@/components/wrapper/Wrapper'
import './style/globals.css';

export const metadata = {
  title: 'Job | Internship Finder & Creater',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper> 
      </body>
    </html>
  )
}
