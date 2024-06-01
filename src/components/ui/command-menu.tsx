"use client";

import { Settings, User } from "lucide-react";
import * as React from "react";

import {
	CommandDialog as CommandDialogPrimitive,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import { navLinks } from "@/config/nav";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export function CommandDialog() {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className={cn(
					"relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
				)}
				onClick={() => setOpen(true)}
			>
				<span className="hidden lg:inline-flex">Search documentation...</span>
				<span className="inline-flex lg:hidden">Search...</span>
				<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
			<CommandDialogPrimitive open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Navigation">
						{navLinks.map((link) => (
							<CommandItem
								key={link.href}
								value={link.label}
								onSelect={() => runCommand(() => router.push(link.href))}
							>
								<link.icon className="mr-2 size-4" />
								<span>{link.label}</span>
							</CommandItem>
						))}
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem
							value="Profile"
							onSelect={() => runCommand(() => router.push("/profile"))}
						>
							<User className="mr-2 size-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem
							value="Settings"
							onSelect={() => runCommand(() => router.push("/settings"))}
						>
							<Settings className="mr-2 size-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialogPrimitive>
		</>
	);
}
