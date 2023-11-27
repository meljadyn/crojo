import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";

const formSchema = z.object({
    modName: z.string()
        .min(1, "Must be greater than 1 character")
        .max(25, "Must be shorter than 25 characters")
        .trim(),
    modValue: z.number()
})
export function CreateModForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            modName: "",
            modValue: 0
        },
    })

    // const onSubmit = () => {
    //     return "Done"
    //
    // }


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create New Modifier</CardTitle>
                <CardDescription>Create a character modifier for use with rolling macros and calculations.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <FormField
                                control={form.control}
                                name="modName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Modifier Name</FormLabel>
                                        <FormControl>
                                            <Input id="modName" placeholder="DEX" {...field}/>
                                        </FormControl>
                                        <FormDescription>Name of your stat (like DEX, STR, etc)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                             />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <FormField
                                control={form.control}
                                name="modValue"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Modifier Value</FormLabel>
                                        <FormControl>
                                            <Input type="number" id="modValue" placeholder="0" {...field}></Input>
                                        </FormControl>
                                        <FormDescription>The value of the modifier</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Create</Button>
            </CardFooter>
        </Card>
    )
}
