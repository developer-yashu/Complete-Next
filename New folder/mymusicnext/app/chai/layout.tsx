 
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
        <h1 className="text-3xl">Inner Layout  Item</h1>
        {children}
    </>
      
  );
}