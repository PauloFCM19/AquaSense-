import { ModeToggle } from "../mode-toggle";
import { CommandDialog } from "../ui/command-menu";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
	return (
		<header className="z-50 px-6 h-20 flex items-center justify-between">
			<div className="hidden lg:block">
				<CommandDialog />
			</div>

			<div className="flex items-center gap-4">
				<div className="lg:hidden">
					<MobileNav />
				</div>

				<div className="hidden lg:block">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};
