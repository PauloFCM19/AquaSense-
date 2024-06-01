import { Link } from "next-view-transitions";
import { SignUpForm } from "./_components/sign-up-form";

export const metadata = {
	title: "Cadastro",
};

export default function SignUpPage() {
	return (
		<div className="sm:p-8 sm:border sm:rounded-lg sm:shadow-lg sm:bg-card sm:text-card-foreground space-y-8 w-full max-w-xl">
			<div className="space-y-1.5">
				<h1 className="text-2xl font-semibold tracking-tight text-center sm:text-left">
					Cadastro de conta
				</h1>
				<p className="text-muted-foreground text-center sm:text-left">
					Crie sua conta para acessar a plataforma
				</p>
			</div>

			<SignUpForm />

			<p className="text-muted-foreground text-sm text-center">
				Já possui uma conta?{" "}
				<Link href="/" className="text-primary font-medium hover:underline">
					Faça seu login
				</Link>
			</p>
		</div>
	);
}
