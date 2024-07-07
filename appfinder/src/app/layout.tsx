export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <header style={
          {
            backgroundColor: "lightblue",
            padding: "1rem"
          }
        } >This is the header</header>
        <main>{children}</main>
        <footer style={
          {
            backgroundColor: "ghostwhite",
            padding: "1rem"
          }
        } >This is the footer</footer>
      </body>
    </html>
  )
}