import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

type FormValues = z.infer<typeof formSchema>;

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [clicked, setClicked] = useState(false);

  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(data: FormValues) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name: data.name }));
  }

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-background" data-testid="app-container">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Tauri + React</h1>

        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://vitejs.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank" className="transition-transform hover:scale-110">
            <img src="/tauri.svg" className="h-16 w-16" alt="Tauri logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-16 w-16" alt="React logo" />
          </a>
        </div>
        
        <p className="text-center text-muted-foreground">Click on the Tauri, Vite, and React logos to learn more.</p>

        <div className="bg-card rounded-lg shadow-sm p-6 mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" variant="default" className="w-full">
                Greet
              </Button>
            </form>
          </Form>
          
          {greetMsg && (
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="text-center font-medium">{greetMsg}</p>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={handleButtonClick} variant="default">
            Test Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
        </div>
        
        {clicked && (
          <div className="mt-4 p-2 bg-primary/10 rounded-md text-center">
            <p className="font-medium text-primary">Button Clicked!</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
