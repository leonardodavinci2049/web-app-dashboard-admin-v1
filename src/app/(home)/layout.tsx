import Header02 from "@/components/header/Header02";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header02 />
      {children}
    </div>
  );
};

export default RootLayout;
