import { Link } from "next-view-transitions";
import { SignInForm } from "./_components/sign-in-form";

export default function SignInPage() {
	return (
		<div className="sm:p-8 sm:border sm:rounded-lg sm:shadow-lg sm:bg-card sm:text-card-foreground space-y-8 w-full max-w-xl">
			<div className="space-y-1.5">
				<h1 className="text-2xl font-semibold tracking-tight text-center sm:text-left">
					Seja bem-vindo(a)
				</h1>
				<p className="text-muted-foreground text-center sm:text-left">
					Faça seu login para continuar
				</p>
			</div>

			<SignInForm />

			<p className="text-muted-foreground text-sm text-center">
				Não tem uma conta?{" "}
				<Link
					href="/sign-up"
					className="text-primary font-medium hover:underline"
				>
					Cadastre-se
				</Link>
			</p>
		</div>
	);
}
