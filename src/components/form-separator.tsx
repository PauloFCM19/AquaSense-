import { Separator } from "./ui/separator";

export const FormSeparator = () => {
	return (
		<div className="flex items-center gap-4">
			<Separator className="w-full flex-1" />
			<span className="block">ou</span>
			<Separator className="w-full flex-1" />
		</div>
	);
};
