"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTASection from "@/components/cta-section"
import {
  Shield,
  MapPin,
  FileText,
  Eye,
  Calendar,
  PenTool,
  BarChart3,
  DollarSign,
  Target,
  Clock,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPinIcon,
} from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Clickbail</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="hover:text-purple-400 transition-colors">
                Features
              </Link>
              <Link href="#results" className="hover:text-purple-400 transition-colors">
                Results
              </Link>
              <Link href="#testimonials" className="hover:text-purple-400 transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="hover:text-purple-400 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/sign-in" className="hover:text-purple-400 transition-colors">
                Sign In
              </Link>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                <Link href="/start-trial">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Shield className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="text-purple-200">Trusted by 500+ Bail Bond Companies Nationwide</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Best Bail Bonds Management Software - Stop Losing{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Money & Time
                </span>
              </h1>

              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                The #1 bail bonds management platform that transforms how bonding companies operate. Track defendants with GPS monitoring, manage court dates, automate compliance paperwork, and grow your business with cutting-edge technology trusted by industry leaders.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Real-time GPS tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>Automated compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <span>Secure e-signatures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                  <span>Streamlined workflows</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  <Link href="/start-trial">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-100 hover:bg-purple-800">
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-purple-200">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-3 w-20 bg-purple-500 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-600 rounded p-4 h-20"></div>
                  <div className="bg-blue-600 rounded p-4 h-20"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-600 rounded w-full"></div>
                  <div className="h-2 bg-slate-600 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-600 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Numbers Don't Lie</h2>
            <p className="text-xl text-gray-600">
              See how Clickbail is revolutionizing the bail bond industry with measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">89%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Faster Case Processing</div>
                <div className="text-gray-600">Reduce administrative time</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Satisfied Companies</div>
                <div className="text-gray-600">Trust our platform daily</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">$2.3M</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Revenue Protected</div>
                <div className="text-gray-600">Through better tracking</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Monitoring System</div>
                <div className="text-gray-600">Never miss a check-in</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" role="main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Bail Bonds Management Software Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From GPS defendant tracking to automated financial management, we've built the complete bail bonds software solution that grows with your bonding business and ensures compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geo-Fence Technology</h3>
                <p className="text-gray-600">
                  Track defendant locations with precision GPS monitoring and automated alerts
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Forms Management</h3>
                <p className="text-gray-600">
                  Generate, customize, and manage all legal documents with intelligent automation
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Defendant Monitoring</h3>
                <p className="text-gray-600">
                  Real-time status tracking with compliance monitoring and risk assessment
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Court Date Management</h3>
                <p className="text-gray-600">Never miss a court date with automated scheduling and reminder systems</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Signature Platform</h3>
                <p className="text-gray-600">Secure digital signatures for all contracts and legal documents</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Reporting</h3>
                <p className="text-gray-600">
                  Comprehensive analytics and insights to optimize your business operations
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Management</h3>
                <p className="text-gray-600">Complete invoicing, payment tracking, and financial reporting system</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Management</h3>
                <p className="text-gray-600">Convert prospects into clients with powerful CRM and follow-up tools</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* GPS Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">GPS TRACKING</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Never Lose Track of a Defendant Again</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our advanced geo-fencing technology provides real-time location monitoring with customizable zones and
                instant violation alerts. Set up inclusion and exclusion zones with precision radius controls.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Real-time GPS Monitoring</h3>
                    <p className="text-gray-600">Track location 24/7 with precision accuracy</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Automated Compliance</h3>
                    <p className="text-gray-600">Automatic violation detection and reporting</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Alerts</h3>
                    <p className="text-gray-600">Get notified immediately of any violations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-900 to-purple-700 text-white p-8 shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Geo Fence Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-800 rounded p-4">
                      <div className="text-2xl font-bold mb-1">45</div>
                      <div className="text-purple-200 text-sm">Total Geofences</div>
                    </div>
                    <div className="bg-purple-800 rounded p-4">
                      <div className="text-2xl font-bold mb-1">38</div>
                      <div className="text-purple-200 text-sm">Active Zones</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-purple-800 rounded p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">John Smith - Home Zone</span>
                      </div>
                      <Badge className="bg-green-600 text-white text-xs">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-purple-800 rounded p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-sm">Sarah Johnson - Work Zone</span>
                      </div>
                      <Badge className="bg-red-600 text-white text-xs">Violation</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4 text-center border-0 shadow-sm">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-blue-600 mb-1">18</div>
                      <div className="text-sm text-gray-600">Form Templates</div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 text-center border-0 shadow-sm">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-green-600 mb-1">247</div>
                      <div className="text-sm text-gray-600">Forms Processed</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
                    <div>
                      <div className="font-medium text-gray-900">Bond Agreement</div>
                      <div className="text-sm text-gray-500">Auto-populated legal document</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
                    <div>
                      <div className="font-medium text-gray-900">Collateral Agreement</div>
                      <div className="text-sm text-gray-500">Secure asset documentation</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Template</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
                    <div>
                      <div className="font-medium text-gray-900">Court Instructions</div>
                      <div className="text-sm text-gray-500">Defendant guidance forms</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Custom</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="bg-blue-100 text-blue-800 mb-4">DIGITAL WORKFLOW</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Paperwork That Actually Works For You</h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your document workflow with intelligent forms that auto-populate, validate data, and integrate
                seamlessly with court systems. From bonds to collateral agreements, everything is digital and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-purple-100">See what bail bond professionals are saying about Clickbail</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-800/50 border-purple-700 text-white p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6">
                  "Clickbail transformed our entire operation. We've reduced paperwork by 80% and never missed a court
                  date since implementing their system."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="text-sm text-purple-200">Liberty Bail Bonds</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700 text-white p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6">
                  "The geo-fencing feature alone has saved us thousands in potential losses. The real-time tracking
                  gives us complete peace of mind."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">SC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-purple-200">Metro Bail Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700 text-white p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6">
                  "Customer service is exceptional and the platform is incredibly intuitive. Our team was up and running
                  in just one day."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">DT</span>
                  </div>
                  <div>
                    <div className="font-semibold">David Thompson</div>
                    <div className="text-sm text-purple-200">Secure Bond Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business size. All plans include a 30-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Starter</h3>
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  $99<span className="text-xl font-normal text-gray-500">/month</span>
                </p>
                <p className="text-gray-600 mb-6">Perfect for small bail bond operations</p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Up to 50 defendants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Basic geo-fencing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Core form templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Mobile app access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Basic reporting
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/start-trial">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-purple-600 shadow-2xl relative">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1">
                Most Popular
              </Badge>
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional</h3>
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  $199<span className="text-xl font-normal text-gray-500">/month</span>
                </p>
                <p className="text-gray-600 mb-6">Most popular for growing businesses</p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Up to 200 defendants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Advanced geo-fencing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    All form templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Priority phone support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    E-signature platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Court calendar sync
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    Financial management
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/start-trial">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-5xl font-bold text-gray-900 mb-2">Custom</p>
                <p className="text-gray-600 mb-6">For large operations and agencies</p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Unlimited defendants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    White-label options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Custom training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    API access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Advanced security
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Custom reporting
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-12">
            All plans include: SSL encryption, 99.9% uptime SLA, regular backups, and 24/7 monitoring
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" role="region" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about bail bonds management software and how Clickbail can help your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does GPS defendant tracking work?</h3>
                <p className="text-gray-600">Our bail bonds software includes real-time GPS monitoring with customizable geo-fencing zones. Set inclusion/exclusion areas and receive instant alerts for violations, ensuring complete defendant compliance monitoring.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I manage court dates and calendar integration?</h3>
                <p className="text-gray-600">Yes, Clickbail includes comprehensive court date management with calendar integration, automated reminders, and scheduling tools to ensure you never miss important court appearances.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the bail bonds software secure and compliant?</h3>
                <p className="text-gray-600">Absolutely. Our platform features bank-grade encryption, secure data storage, automated compliance reporting, and meets all industry standards for bail bond management security.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does setup take for new bonding companies?</h3>
                <p className="text-gray-600">Most bail bond companies are up and running within 24 hours. Our team provides complete onboarding, data migration assistance, and training to ensure a smooth transition to our management platform.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Does BondPro integrate with existing payment systems?</h3>
                <p className="text-gray-600">Yes, our bail bonds software integrates with major payment processors, allowing you to handle premium payments, fee collection, and financial reporting all within one platform.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can multiple agents use the same bonding company account?</h3>
                <p className="text-gray-600">Absolutely. Clickbail supports multi-user access with role-based permissions, allowing different access levels for agents, administrators, and support staff within your bail bond business.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What support options are available for bail bond companies?</h3>
                <p className="text-gray-600">We provide 24/7 phone support, live chat, comprehensive training materials, video tutorials, and dedicated account management for all bail bond companies using our software.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a contract or can I cancel anytime?</h3>
                <p className="text-gray-600">No long-term contracts required. Start with our 30-day free trial and cancel anytime. We believe our bail bonds management software will speak for itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold">Clickbail</span>
              </div>
              <p className="text-gray-400 mb-6">
                The most comprehensive bail bond management platform trusted by professionals nationwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Geo-Fencing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Forms Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Defendant Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    E-Signatures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Financial Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reporting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Training Videos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  1-800-CLICKBAIL
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@clickbail.com
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  Austin, Texas
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Clickbail. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
