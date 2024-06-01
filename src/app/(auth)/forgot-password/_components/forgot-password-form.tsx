"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { delay } from "@/helpers/delay";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string().email("Email invalido"),
});

export const ForgotPasswordForm = () => {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (values: FormSchema) => {
		console.log(values);

		await delay(2000);

		form.reset();

		toast.success("Email enviado, confira sua caixa de entrada.");
	};

	const isSubmitting = form.formState.isSubmitting;
	return (
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

							<FormDescription>
								Você receberá um email de confirmação
							</FormDescription>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting && <Loader2 className="size-5 animate-spin mr-2" />}
					Enviar
				</Button>
			</form>
		</Form>
	);
};
