import { navLinks } from "@/config/nav";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose } from "../ui/sheet";
import { NavLink } from "./nav-link";

export const Sidebar = () => {
	return (
		<aside className="py-8 lg:px-6 gap-6 flex flex-col h-full">
			<div className="space-y-1.5">
				<div className="flex items-center gap-2">
					<svg
						viewBox="0 0 23 15"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						className="text-primary size-8"
					>
						<title>Logo icon</title>
						<path d="M11.28 7.74C11.28 7.99333 10.6933 8.28667 9.52 8.62C9.62667 10.0067 9.68 11.1867 9.68 12.16C9.68 13.84 9.46667 14.68 9.04 14.68C8.81333 14.68 8.63333 14.54 8.5 14.26C8.36667 13.98 8.26 13.4933 8.18 12.8C8.08667 11.52 7.98667 10.2667 7.88 9.04C7.28 9.2 6.73333 9.34667 6.24 9.48C5.74667 9.6 5 9.8 4 10.08C2.82667 13.1467 2.13333 14.68 1.92 14.68C1.70667 14.68 1.47333 14.5533 1.22 14.3C0.98 14.0333 0.86 13.7533 0.86 13.46C0.86 13.3267 1.24 12.38 2 10.62H1.86C1.59333 10.62 1.35333 10.5333 1.14 10.36C0.94 10.1867 0.84 9.97333 0.84 9.72C0.84 9.45333 1.5 9.10667 2.82 8.68C3.03333 8.2 3.20667 7.76667 3.34 7.38C3.64667 6.62 4.07333 5.58 4.62 4.26C5.16667 2.94 5.51333 2.1 5.66 1.74C5.80667 1.36667 6.06 1.05333 6.42 0.799999C6.79333 0.533333 7.15333 0.4 7.5 0.4C7.91333 0.4 8.28 1.06 8.6 2.38C8.93333 3.7 9.2 5.33333 9.4 7.28C9.77333 7.24 10.1 7.22 10.38 7.22C10.98 7.22 11.28 7.39333 11.28 7.74ZM4.74 8.16C5.68667 7.90667 6.68667 7.69333 7.74 7.52C7.5 5.24 7.26667 3.52667 7.04 2.38C6.44 3.75333 5.67333 5.68 4.74 8.16ZM21.528 10.72C21.528 11.8133 21.0346 12.7333 20.048 13.48C19.0613 14.2133 17.928 14.58 16.648 14.58C15.3813 14.58 14.3346 14.2533 13.508 13.6C12.6813 12.9333 12.268 12.3067 12.268 11.72C12.268 11.32 12.388 11.12 12.628 11.12C12.8413 11.12 13.2613 11.44 13.888 12.08C14.128 12.3067 14.448 12.52 14.848 12.72C15.2613 12.92 15.6946 13.02 16.148 13.02C17.0813 13.02 17.908 12.78 18.628 12.3C19.3613 11.82 19.728 11.3 19.728 10.74C19.728 10.38 19.488 9.92 19.008 9.36C18.528 8.8 17.9946 8.27333 17.408 7.78C16.8346 7.27333 16.308 6.73333 15.828 6.16C15.348 5.58667 15.108 5.13333 15.108 4.8C15.108 4.46667 15.1746 4.11333 15.308 3.74C15.4413 3.36667 15.588 3.09333 15.748 2.92C16.268 2.34667 17.0746 1.82 18.168 1.34C19.2746 0.859999 20.2013 0.619999 20.948 0.619999C21.3346 0.619999 21.6613 0.746666 21.928 0.999999C22.1946 1.25333 22.328 1.52 22.328 1.8C22.328 1.93333 22.188 2.04 21.908 2.12C21.628 2.2 21.2013 2.30667 20.628 2.44C20.068 2.56 19.568 2.70667 19.128 2.88C17.5946 3.46667 16.828 4.03333 16.828 4.58C16.828 4.87333 17.608 5.69333 19.168 7.04C19.768 7.56 20.308 8.16667 20.788 8.86C21.2813 9.54 21.528 10.16 21.528 10.72Z" />
					</svg>

					<h1 className="text-xl font-semibold tracking-tight font-aqua">
						Aquasense
					</h1>
				</div>
				<p className="text-muted-foreground text-sm">
					Seja bem-vindo(a) ao painel administrativo.
				</p>
			</div>

			<Separator />

			<nav className="space-y-2">
				{navLinks.map((link) => (
					<Sheet key={link.href}>
						<SheetClose asChild>
							<NavLink href={link.href}>
								<link.icon className="size-5 mr-2" />
								{link.label}
							</NavLink>
						</SheetClose>
					</Sheet>
				))}
			</nav>

			<div className="mt-auto space-y-10">
				<nav className="space-y-2">
					<NavLink href="/profile">
						<User className="mr-2 size-5" />
						Profile
					</NavLink>
					<NavLink href="/settings">
						<Settings className="mr-2 size-5" />
						Settings
					</NavLink>
				</nav>
				<Separator />

				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage
							src="https://github.com/shadcn.png"
							alt="Avatar image"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div className="flex flex-col flex-1 overflow-hidden">
						<h2 className="font-medium text-sm truncate">Paulo Mendonça</h2>
						<p className="text-xs text-muted-foreground truncate">
							
						</p>
					</div>

					<div className="ml-auto">
						<Button size="icon" variant="outline">
							<LogOut className="size-5" />
						</Button>
					</div>
				</div>
			</div>
		</aside>
	);
};
