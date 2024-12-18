import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to the Hackathon</h2>
        <p className="mt-4 text-gray-600">
          Join us for an exciting day of coding, networking, and innovation at the D. Y. Patil Coding Hackathon.
        </p>
        <p className="mt-4 text-gray-600 font-semibold">
          Date: March 25th, 2024 | Venue: D. Y. Patil College of Engineering
        </p>
      </section>
    </Layout>
  );
}
