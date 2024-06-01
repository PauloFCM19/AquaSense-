import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className="min-h-full flex items-center relative">
			<div className="grid lg:grid-cols-2 min-h-screen w-full">
				<div className="relative border-r border-2 lg:flex hidden items-center justify-center">
					<Image
						src="/img-login.jpg"
						alt="Imagem de login"
						fill
						quality={100}
						priority
						sizes="50vw"
						className="object-cover object-left"
					/>
				</div>

				<div className="relative">
					<div className="absolute top-6 right-6">
						<ModeToggle />
					</div>
					<div className="h-full flex items-center justify-center px-6">
						{children}
					</div>
				</div>
			</div>
		</main>
	);
}
