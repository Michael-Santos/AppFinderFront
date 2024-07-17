import Breadcrumb from '@/components/Breadcrumb';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header style={
          {
            backgroundColor: "lightblue",
            padding: "1rem"
          }
        }>
        <FmdGoodIcon />Japp Finder
        </header>
        <Breadcrumb />

        <main>{children}</main>
        
        <footer style={
          {
            backgroundColor: "lightblue",
            padding: "2rem",
            position: "fixed",
            bottom: 0,
            width: "100%"
          }
        } >
        </footer>
      </body>
    </html>
  )
}