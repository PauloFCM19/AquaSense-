import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="hidden lg:block fixed left-0 inset-y-0 w-72 border-r">
				<Sidebar />
			</div>

			<div className="lg:ml-72 h-full flex flex-col">
				<Header />
				<main className="flex-1 p-6 space-y-8">{children}</main>
				<Footer />
			</div>
		</>
	);
}
