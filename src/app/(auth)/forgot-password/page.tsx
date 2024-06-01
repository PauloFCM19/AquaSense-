import { Link } from "next-view-transitions";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

export const metadata = {
	title: "Recuperar senha",
};

export default function ForgotPasswordPage() {
	return (
		<div className="sm:p-8 sm:border sm:rounded-lg sm:shadow-lg sm:bg-card sm:text-card-foreground space-y-8 w-full max-w-xl">
			<div className="space-y-1.5">
				<h1 className="text-2xl font-semibold tracking-tight text-center sm:text-left">
					Recuperar senha
				</h1>
				<p className="text-muted-foreground text-center sm:text-left">
					Digite seu email para recuperar sua senha
				</p>
			</div>

			<ForgotPasswordForm />

			<p className="text-muted-foreground text-sm text-center">
				Voltar para o{" "}
				<Link href="/" className="text-primary font-medium hover:underline">
					Login
				</Link>
			</p>
		</div>
	);
}
