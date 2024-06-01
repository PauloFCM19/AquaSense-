"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { buttonVariants } from "../ui/button";

export const NavLink = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname();

	return (
		<Link
			{...props}
			data-active={pathname === props.href}
			className={cn(
				buttonVariants({ variant: "ghost" }),
				"data-[active=true]:bg-accent w-full justify-start",
			)}
		/>
	);
};
