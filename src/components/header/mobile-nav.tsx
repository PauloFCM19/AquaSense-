import { Menu } from "lucide-react";
import { Sidebar } from "../sidebar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<span className="sr-only">Menu icon</span>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};
