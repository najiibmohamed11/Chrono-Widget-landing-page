import Image from "next/image"
import { Clock, BarChart3, PieChart, Plus, ArrowRight, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#111827] text-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 flex flex-col items-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image alt="src" width={130} height={130} src='/icon128.png' className="h-8 w-8 text-[#6366f1]" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#6366f1]">Chrono Widget</h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold">Take control of your online time</h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Track your social media usage, analyze your browsing habits, and regain focus with detailed insights about
            where your time goes online.
          </p>

          <div className="pt-4">
            <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-6 rounded-lg text-lg">
            <Image src='/chrome.png' alt="chrome" width={30} height={30}className="mr-2" />
              Add to Chrome <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Extension Preview */}
      <section className="w-full py-12 bg-[#0f172a] flex flex-col items-center px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-[#6366f1]" />
                <span className="text-sm font-medium">Detailed Insights</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">See your daily, weekly, or monthly usage trends</h3>
              <p className="text-gray-300">
                Chrono Widget provides comprehensive analytics on your browsing habits, helping you understand where your
                time goes the most.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <Clock className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Track total time spent on each website</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <PieChart className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Visualize your usage with intuitive charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <BarChart3 className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Monitor daily averages and usage patterns</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative max-w-[320px] shadow-2xl rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20133-HABELc96iNYgia47M41wdaFuOFz1qb.png"
                alt="Chrono Widget Insights Dashboard"
                width={320}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Feature Section */}
      <section className="w-full py-12 bg-[#111827] flex flex-col items-center px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative max-w-[320px] shadow-2xl rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20132-9NzGIOzV2urKakFjjmWUQZ3MxVDy4h.png"
                alt="Chrono Widget Tracking Features"
                width={320}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-[#6366f1]" />
                <span className="text-sm font-medium">Smart Tracking</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Filter tracked sites by category</h3>
              <p className="text-gray-300">
                Easily manage which websites you want to track and categorize them for better organization and insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <Plus className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Add any website to your tracking list</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <Clock className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Group sites by category for better analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <BarChart3 className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Get notified when you exceed your time limits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Third Feature Section */}
      <section className="w-full py-12 bg-[#0f172a] flex flex-col items-center px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-[#6366f1]" />
                <span className="text-sm font-medium">Data Visualization</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Analyze where your time goes the most</h3>
              <p className="text-gray-300">
                Powerful charts and visualizations help you understand your online behavior and make informed decisions
                about your digital wellbeing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <PieChart className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>View your usage distribution across websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <BarChart3 className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Compare usage patterns over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-[#6366f1]/20 p-1 mt-1">
                    <Clock className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <span>Set goals and track your progress</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative max-w-[320px] shadow-2xl rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20134-rxFp3YA8L7tg08qmL8lZrbZPB11xLk.png"
                alt="Chrono Widget Analytics Dashboard"
                width={320}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 flex flex-col items-center px-4 bg-gradient-to-b from-[#111827] to-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to take control of your online time?</h2>
          <p className="text-lg text-gray-300">
            Join thousands of users who have improved their productivity and digital wellbeing with Chrono Widget.
          </p>
          <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-6 rounded-lg text-lg">
          <Image src='/chrome.png' alt="chrome" width={30} height={30}className="mr-2" />
            Add Chrono Widget to Chrome
          </Button>
          <p className="text-sm text-gray-400">
            Works with all Chromium-based browsers including Chrome, Edge, and Brave
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#0f172a] border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-[#6366f1]" />
            <span className="text-xl font-bold text-[#6366f1]">Chrono Widget</span>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Chrono Widget. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

