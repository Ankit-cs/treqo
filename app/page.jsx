import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
export default function LandingPage() {
  return (
 <div className="flex flex-col pt-16 bg-stone-100">
      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">

          <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
            The smartest way to split expenses with friends
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track shared expenses, split bills effortlessly, and settle up
            quickly.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className=" bg-white text-black hover:bg-orange-600 transition-colour"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>


      </section>
      {/* ───── Features ───── */}
      <section id="features" className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h4 className="text-xl font-extrabold tracking-tight md:text-4xl text-black">
           Features
          </h4>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            My  platform  handle shared with  with ease and realtime payment reminder.
          </p>

          <div className="mx-auto mt-12 grid bg-stone-100 max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col bg-stone-100 items-center space-y-4 p-6 text-center"
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>

                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20">
        <div className="container bg-stone-100 mx-auto px-4 md:px-6 text-center">
          <h4 className="text-xl font-extrabold tracking-tight md:text-4xl text-black">
           How it Works
          </h4>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these  steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {label}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
         <h4 className="text-xl font-extrabold tracking-tight md:text-4xl text-black">
           Testimonials
          </h4>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between bg-stone-100">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      {/* Placeholder avatar */}
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-20 bg-stone-100  ">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-black">
            Ready to simplify expense sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed">
            Join for  splitting expenses
            stress‑free.
          </p>
          <Button
          variant="outline"
  asChild
  size="lg"
  className="  hover:text-black text-black  group transition-colors duration-300"
>
  <Link href="/dashboard" className="flex items-center">
    Get Started
    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-stone-100 font-bold py-12 text-center text-sm text-muted-foreground">
       Copyright © {new Date().getFullYear()} BTY. Made with ❤️.
      </footer>
    </div>
  );

}

   



