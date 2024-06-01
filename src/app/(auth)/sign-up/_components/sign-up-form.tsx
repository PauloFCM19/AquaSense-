"use client";
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
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z
	.object({
		username: z.string().min(1, "Campo obrigatório").max(24, "Nome invalido"),
		email: z.string().email("Email invalido"),
		password: z
			.string()
			.min(1, "Campo obrigatório")
			.max(24, "Máximo de caracteres atingido"),
		confirmPassword: z.string(),
	})
	.refine(
		(values) => {
			return values.password === values.confirmPassword;
		},
		{
			message: "As senhas não coincidem",
			path: ["confirmPassword"],
		},
	);

export const SignUpForm = () => {
	const { showPassword, handleShowPassword } = useShowPassword();

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: FormSchema) => {
		console.log(values);

		await delay(2000);

		form.reset();

		toast.success("Conta criada com sucesso!");
	};

	const isSubmitting = form.formState.isSubmitting;
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="username">Nome</FormLabel>
							<FormControl>
								<Input id="username" placeholder="Digite seu nome" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

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

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="confirmPassword">
								Confirmação de senha
							</FormLabel>
							<FormControl>
								<div className="relative flex items-center">
									<Input
										id="confirmPassword"
										placeholder="Digite sua senha novamente"
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

				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting && <Loader2 className="size-5 animate-spin mr-2" />}
					Criar conta
				</Button>
			</form>
		</Form>
	);
};
