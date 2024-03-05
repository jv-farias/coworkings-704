import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";





const formSchema = z.object({
    search: z
        .string({
            required_error: "Campo obrigatório.",
        })
        .trim()
        .min(1, "Campo obrigatório."),
});

interface SearchProps {
    defaultValues?: z.infer<typeof formSchema>;
}

const Search = ({ defaultValues }: SearchProps) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });



    return (
        <div className="flex items-center gap-2">
            <Form {...form}>
                <form className="flex w-full gap-4" >
                    <FormField
                        control={form.control}
                        name="search"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Busque por uma sala..." {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button variant="default" type="submit">
                        <SearchIcon size={20} />
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default Search;