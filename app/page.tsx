import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CardContent, Card } from "~/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">Logo</span>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button variant="outline" className="mr-2">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-xl mb-8">
              Discover the power of our API, storage, and free tier.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Good API",
                "Good Storage",
                "Good Free Tier",
                "Great Support",
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Basic", "Pro", "Enterprise"].map((plan, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button className="w-full">
                      {index === 2 ? "Contact Us" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              We're dedicated to providing the best API, storage solutions, and
              free tier options for developers and businesses of all sizes. Our
              mission is to empower your projects with reliable and scalable
              infrastructure.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
