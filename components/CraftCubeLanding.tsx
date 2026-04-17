"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ShoppingCart,
  Sparkles,
  Zap,
  Package,
  Shield,
  Star,
  ChevronRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Minus,
  Plus,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Gradient Text Component
const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-flex overflow-hidden bg-white dark:bg-black ${className}`}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate] bg-purple-600 mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate] bg-purple-500 mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate] bg-purple-700 mix-blend-overlay blur-[1rem]"></span>
      </span>
    </motion.span>
  )
}

// Shining Text Component
const ShiningText = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="bg-[linear-gradient(110deg,#a855f7,35%,#fff,50%,#a855f7,75%,#a855f7)] bg-[length:200%_100%] bg-clip-text text-base font-regular text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  )
}

interface Product {
  id: number
  name: string
  nameAr: string
  price: number
  description: string
  image: string
  badge?: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  avatar: string
}

interface FAQItem {
  question: string
  answer: string
}

const CraftCubeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const products: Product[] = [
    {
      id: 1,
      name: "AXIS PRO",
      nameAr: "مصباح العمل",
      price: 289,
      description: "مصباح عمل احترافي بذراع قابل للتعديل 360 درجة، تقنية LED دافئة، مثالي لمكتبك",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      badge: "الأكثر مبيعاً"
    },
    {
      id: 2,
      name: "CONE",
      nameAr: "مصباح الطاولة",
      price: 199,
      description: "مصباح طاولة أنيق بتصميم مخروطي كلاسيكي، يضيف لمسة فاخرة لأي غرفة",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
    },
    {
      id: 3,
      name: "ARCH",
      nameAr: "مصباح القراءة",
      price: 159,
      description: "مصباح قراءة بقوس مريح، ضوء ناعم لا يتعب العين، مثالي لوقت الاسترخاء",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80"
    },
    {
      id: 4,
      name: "Custom Order",
      nameAr: "صمّم مصباحك",
      price: 299,
      description: "اختر الشكل واللون والمقاس — نصنعه لك خصيصاً",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      badge: "مخصص"
    }
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد السعيد",
      role: "مصمم داخلي",
      company: "الرياض",
      content: "مصابيح CraftCube غيرت تماماً شكل مكتبي. التصميم رائع والجودة ممتازة. أنصح بها بشدة!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "سارة المطيري",
      role: "طالبة جامعية",
      company: "جدة",
      content: "مصباح ARCH مثالي للدراسة. الضوء مريح للعين والتصميم عصري جداً. يستحق كل ريال!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "محمد العتيبي",
      role: "مبرمج",
      company: "الدمام",
      content: "AXIS PRO أفضل استثمار لمكتبي المنزلي. التعديل 360 درجة يجعله مثالي لكل وضعية عمل.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ]

  const faqs: FAQItem[] = [
    {
      question: "ما هي مدة التوصيل؟",
      answer: "نوصل خلال 48 ساعة داخل السعودية، و3-5 أيام لدول الخليج الأخرى."
    },
    {
      question: "هل يمكنني إرجاع المنتج؟",
      answer: "نعم، لديك 14 يوم لإرجاع المنتج مجاناً إذا لم يعجبك."
    },
    {
      question: "هل المصابيح قابلة للتخصيص؟",
      answer: "نعم! يمكنك طلب تصميم مخصص من خلال خيار Custom Order واختيار الشكل واللون والمقاس."
    },
    {
      question: "ما نوع الضمان المتوفر؟",
      answer: "جميع منتجاتنا تأتي مع ضمان 14 يوم وإرجاع مجاني."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-purple-950/20 to-black text-white">
      {/* Announcement Bar */}
      <div className="w-full bg-purple-900/30 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-2">
          <ShiningText text="🌙 شحن مجاني للطلبات فوق 300 ريال · CraftCube · توصيل لجميع دول الخليج" />
        </div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b border-purple-500/20 bg-black/80 backdrop-blur-md ${scrollY > 50 ? "shadow-lg shadow-purple-500/10" : ""}`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center"
            >
              <Sparkles className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <span className="font-bold text-xl">CraftCube</span>
              <p className="text-xs text-purple-300">الضوء المُشكَّل</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-sm font-medium hover:text-purple-400 transition-colors">المنتجات</a>
            <a href="#features" className="text-sm font-medium hover:text-purple-400 transition-colors">المميزات</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-purple-400 transition-colors">آراء العملاء</a>
            <a href="#contact" className="text-sm font-medium hover:text-purple-400 transition-colors">تواصل معنا</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full border-purple-500/50 hover:bg-purple-500/20">
              تسجيل الدخول
            </Button>
            <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
              <ShoppingCart className="h-4 w-4 mr-2" />
              السلة
            </Button>
          </div>

          <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-md border-b border-purple-500/20 md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 p-6">
              <a href="#products" className="text-lg font-medium hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>المنتجات</a>
              <a href="#features" className="text-lg font-medium hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>المميزات</a>
              <a href="#testimonials" className="text-lg font-medium hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>آراء العملاء</a>
              <a href="#contact" className="text-lg font-medium hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>تواصل معنا</a>
              <Separator className="bg-purple-500/20" />
              <Button variant="outline" className="w-full rounded-full border-purple-500/50">تسجيل الدخول</Button>
              <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-800">
                <ShoppingCart className="h-4 w-4 mr-2" />
                السلة
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-purple-900/30 px-4 py-2 text-sm mb-6 border border-purple-500/30"
              >
                <Sparkles className="mr-2 h-4 w-4 text-purple-400" />
                Premium 3D-Printed Lighting
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                <GradientText>CRAFT Cube</GradientText>
              </h1>

              <p className="text-xl md:text-2xl text-purple-200 mb-4 font-arabic">
                الضوء المُشكَّل — لكل مكان في حياتك
              </p>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                مصابيح ديكور فاخرة مطبوعة بتقنية 3D، مصممة خصيصاً للشباب في السعودية ودول الخليج
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 group">
                  Shop Now
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-purple-500/50 hover:bg-purple-500/20">
                  Custom Order
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 relative"
            >
              <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80"
                  alt="CraftCube Lamps"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-purple-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-900/30 border-purple-500/30">المميزات</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                لماذا <GradientText>CraftCube</GradientText>؟
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                نجمع بين التقنية الحديثة والتصميم الفاخر لنقدم لك تجربة إضاءة فريدة
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Package className="h-8 w-8 text-purple-400" />,
                  title: "3D Printing",
                  titleAr: "طباعة ثلاثية الأبعاد",
                  description: "صُنع بدقة عالية بتقنية الطباعة ثلاثية الأبعاد"
                },
                {
                  icon: <Zap className="h-8 w-8 text-purple-400" />,
                  title: "Fast Shipping",
                  titleAr: "شحن سريع",
                  description: "شحن 48 ساعة داخل السعودية"
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-purple-400" />,
                  title: "Luxury Packaging",
                  titleAr: "تغليف فاخر",
                  description: "تغليف فاخر — تجربة unboxing لا تُنسى"
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-400" />,
                  title: "14-Day Warranty",
                  titleAr: "ضمان 14 يوم",
                  description: "ضمان 14 يوم وإرجاع مجاني"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 hover:border-purple-500/40 transition-all"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/10 group-hover:bg-purple-600/20 transition-all"></div>
                  <div className="relative">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-purple-300 mb-2">{feature.titleAr}</p>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-900/30 border-purple-500/30">المنتجات</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                اكتشف <GradientText>مجموعتنا</GradientText>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                مصابيح مصممة بعناية لتناسب كل مساحة في حياتك
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-purple-500/20 bg-black/40 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 right-4 bg-purple-600 border-0">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                      <p className="text-sm text-purple-300 mb-3">{product.nameAr}</p>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-400">{product.price} SAR</span>
                        <Button size="sm" className="rounded-full bg-purple-600 hover:bg-purple-700">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-purple-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-900/30 border-purple-500/30">آراء العملاء</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ماذا يقول <GradientText>عملاؤنا</GradientText>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                تجارب حقيقية من عملائنا في السعودية ودول الخليج
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {testimonials.map((testimonial, index) =>
                    index === activeTestimonial ? (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Card className="border-purple-500/20 bg-black/40 backdrop-blur-sm p-8">
                          <div className="flex gap-1 mb-6">
                            {Array(testimonial.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <blockquote className="text-xl mb-6 leading-relaxed">
                            "{testimonial.content}"
                          </blockquote>
                          <Separator className="my-6 bg-purple-500/20" />
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border border-purple-500/30">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-gray-400">
                                {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeTestimonial === index ? "w-8 bg-purple-500" : "w-2 bg-purple-500/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-900/30 border-purple-500/30">الأسئلة الشائعة</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                أسئلة <GradientText>متكررة</GradientText>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                إجابات على الأسئلة الأكثر شيوعاً
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-purple-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <Minus className="h-5 w-5 text-purple-400" />
                      ) : (
                        <Plus className="h-5 w-5 text-purple-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-400">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-purple-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-900/30 border-purple-500/30">تواصل معنا</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                نحن هنا <GradientText>لمساعدتك</GradientText>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                تواصل معنا لأي استفسار أو طلب خاص
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-3 border border-purple-500/30">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-400">hello@craftcube.sa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-3 border border-purple-500/30">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">الهاتف</h3>
                    <p className="text-gray-400" dir="ltr">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-3 border border-purple-500/30">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">العنوان</h3>
                    <p className="text-gray-400">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold mb-4">تابعنا</h3>
                  <div className="flex gap-3">
                    {[Instagram, Twitter, Facebook].map((Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="rounded-full bg-purple-900/30 p-3 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-purple-400" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-purple-500/20 bg-black/40 backdrop-blur-sm p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">الاسم</label>
                      <Input
                        placeholder="أدخل اسمك"
                        className="bg-black/40 border-purple-500/30 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">البريد الإلكتروني</label>
                      <Input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="bg-black/40 border-purple-500/30 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">الرسالة</label>
                      <Textarea
                        placeholder="اكتب رسالتك هنا..."
                        className="bg-black/40 border-purple-500/30 focus:border-purple-500 min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                      إرسال الرسالة
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-purple-500/20 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-lg">CraftCube</span>
                  <p className="text-xs text-purple-300">الضوء المُشكَّل</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                مصابيع ديكور فاخرة مطبوعة بتقنية 3D للشباب في السعودية ودول الخليج
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">روابط سريعة</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#products" className="text-gray-400 hover:text-purple-400 transition-colors">المنتجات</a>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">المميزات</a>
                <a href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">آراء العملاء</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">تواصل معنا</a>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">الشحن والتوصيل</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">سياسة الإرجاع</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">الضمان</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">الأسئلة الشائعة</a>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-4">النشرة البريدية</h3>
              <p className="text-sm text-gray-400 mb-4">
                اشترك للحصول على آخر العروض والمنتجات
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="bg-black/40 border-purple-500/30"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-purple-500/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CraftCube. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-purple-400 transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CraftCubeLanding
