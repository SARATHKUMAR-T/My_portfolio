import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen  max-w-full bg-slate-900 font-inter text-white">
      {/* <Navbar/> */}
      <QueryClientProvider client={queryClient}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#bfdbfe",
              color: "#374151",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
