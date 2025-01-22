import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer className="mt-auto" />
    </div>
  )
}
