import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {EyeOpenIcon, EyeNoneIcon} from "@radix-ui/react-icons";
import supabase from "@/supabase.ts";

function Register() {
  // Determines whether password is obscured (****) or in plain text ("abcd")
  const [visiblePass, setVisiblePass] = useState(false)
  const [passType, setPassType] = useState("password")
  const [passIcon, setPassIcon] = useState(<EyeOpenIcon />)

  useEffect(() => {
    if (visiblePass) {
      setPassType("text")
      setPassIcon(<EyeNoneIcon />)
    } else {
      setPassType("password")
      setPassIcon(<EyeOpenIcon />)
    }
  }, [visiblePass])

  // Build form and frontend validation
  const schema = z.object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, "Must contain at least 8 characters")
        .max(50, "Must contain less than 51 characters")
        .refine(
          (val) => (/[0-9]/.test(val) && /[a-z]/.test(val) && /[A-Z]/.test(val)),
          {message: "Must include at least 1 uppercase letter, 1 lowercase letter, and 1 digit"}
        )
    }
  )

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Submit form
  async function onSubmit(d: z.infer<typeof schema>) {
    const { data, error } = await supabase.auth.signUp({
      email: d.email,
      password: d.password
    })

    if (error) {
      throw new Error(error.message)
    }

    console.log(data)
  }

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input id="email" placeholder="bob@email.com" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex flex-row">
                          <Input type={passType} id="password" placeholder="*******" {...field} className="rounded-r-none" />
                          <Button onClick={() => setVisiblePass(!visiblePass)} className="rounded-l-none">{passIcon}</Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Sign Up</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

export default Register;