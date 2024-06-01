import { Home } from "lucide-react";
import { ElementType } from "react";

type NavLink = {
	label: string;
	href: string;
	icon: ElementType;
};

export const navLinks: NavLink[] = [
	{
		label: "Home",
		href: "/home",
		icon: Home,
	},
];
