"use client";
import { FormSeparator } from "@/components/form-separator";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { delay } from "@/helpers/delay";
import { useShowPassword } from "@/hooks/use-show-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Github, Loader2 } from "lucide-react";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string().email("Email invalido"),
	password: z
		.string()
		.min(1, "Campo obrigatório")
		.max(24, "Máximo de caracteres atingido"),
});

export const SignInForm = () => {
	const router = useRouter();
	const { showPassword, handleShowPassword } = useShowPassword();

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: FormSchema) => {
		console.log(values);

		await delay(2000);

		router.push("/home");
	};

	const isSubmitting = form.formState.isSubmitting;
	return (
		<div className="space-y-6">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="email">E-mail</FormLabel>
								<FormControl>
									<Input
										id="email"
										placeholder="example@dominio.com"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="password">Senha</FormLabel>
								<FormControl>
									<div className="relative flex items-center">
										<Input
											id="password"
											placeholder="Digite sua senha"
											type={showPassword ? "text" : "password"}
											{...field}
										/>

										<button
											type="button"
											className="absolute right-4"
											onClick={handleShowPassword}
										>
											{showPassword ? (
												<EyeOff className="size-5" />
											) : (
												<Eye className="size-5" />
											)}
										</button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex items-center justify-end">
						<Link
							href="forgot-password"
							className="text-sm font-medium hover:underline"
						>
							Esqueceu sua senha?
						</Link>
					</div>

					<Button type="submit" className="w-full" disabled={isSubmitting}>
						{isSubmitting && <Loader2 className="size-5 animate-spin mr-2" />}
						Entrar
					</Button>
				</form>
			</Form>

			<FormSeparator />

			<Button className="w-full" variant="outline">
				<Github className="size-5 mr-2" />
				Entrar com o google
			</Button>
		</div>
	);
};
