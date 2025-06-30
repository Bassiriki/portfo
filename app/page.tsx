"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Code,
  Smartphone,
  Server,
  Mail,
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    web: ["React.js", "Angular", "Vue.js", "HTML", "CSS", "Express.js", "Laravel", "Spring Boot", "ASP.NET", "Django"],
    mobile: ["React Native", "Flutter"],
    devops: ["Docker", "Jenkins", "Kubernetes", "GitHub", "GitLab", "CI/CD", "AWS EC2"],
    backend: ["C#", "PHP", "MySQL", "SQL Server", "Oracle", "MongoDB"],
    tools: ["IntelliJ", "VS Code", "Eclipse IDE", "PyCharm", "Sublime Text"],
    ai: ["Google Colab", "R"],
    erp: ["Odoo"],
  }

  const projects = [
    {
      title: "Application Bancaire Mobile",
      description: "Application Flutter développée lors de ma formation à Orange Digital Center",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Flutter", "Firebase", "REST API"],
      category: "mobile",
    },
    {
      title: "Système de Gestion BNDA",
      description: "Contribution au système de gestion lors de mon stage à la BNDA",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Spring Boot", "MySQL", "Angular"],
      category: "web",
    },
    {
      title: "Infrastructure DevOps",
      description: "Déploiement automatisé avec Docker et CI/CD",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Docker", "Jenkins", "AWS EC2", "GitLab"],
      category: "devops",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Bassiriki <span className="text-purple-400">Mangane</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-purple-400" : "text-white hover:text-purple-300"
                  }`}
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                      ? "À propos"
                      : item === "skills"
                        ? "Compétences"
                        : item === "projects"
                          ? "Projets"
                          : "Contact"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-200">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-white hover:text-purple-300 capitalize"
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                      ? "À propos"
                      : item === "skills"
                        ? "Compétences"
                        : item === "projects"
                          ? "Projets"
                          : "Contact"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-in fade-in duration-1000">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-purple-400/50 animate-pulse">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Bassiriki Mangane" />
              <AvatarFallback className="text-2xl bg-purple-600">BM</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in slide-in-from-bottom duration-1000 delay-200">
            Bassiriki <span className="text-purple-400">Mangane</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-in slide-in-from-bottom duration-1000 delay-400">
            Développeur Web et Mobile
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in slide-in-from-bottom duration-1000 delay-600">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-400/30">
              <Code className="w-4 h-4 mr-2" />
              Web Development
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Apps
            </Badge>
            <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-400/30">
              <Server className="w-4 h-4 mr-2" />
              DevOps
            </Badge>
          </div>

          <div className="flex justify-center space-x-4 mb-8 animate-in slide-in-from-bottom duration-1000 delay-600">
            <Badge variant="secondary" className="bg-orange-600/20 text-orange-300 border-orange-400/30">
              <Code className="w-4 h-4 mr-2" />
              Backend Development
            </Badge>
          </div>

          <div className="flex justify-center space-x-4 animate-in slide-in-from-bottom duration-1000 delay-800">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-purple-400 text-purple-300 hover:bg-purple-600/10"
            >
              Me contacter
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown
              className="w-8 h-8 text-purple-400 mx-auto cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">À propos de moi</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Développeur passionné de nationalité malienne, spécialisé dans le développement web et mobile. Fort
                d'une solide formation en génie logiciel et d'expériences pratiques dans des institutions reconnues au
                Mali et au Sénégal.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span>Master en Génie Logiciel - ISI Dakar (2023-2024)</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span>Licence en Informatique Appliquée - ESGIC (2020-2022)</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Bamako, Mali</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Expériences récentes :</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Stage CGETECH Mali (2025)</li>
                  <li>• Formation Express.js - Orange Digital Center Bamako</li>
                  <li>• Formation Flutter - Orange Digital Center Bamako</li>
                  <li>• Stage BNDA - Agence Baco Djicoroni (2022)</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Workspace"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Mes Compétences</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/20 border-purple-400/30 hover:bg-purple-900/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Développement Web</CardTitle>
                <CardDescription className="text-gray-300">Applications web modernes et performantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-400/30 hover:bg-blue-900/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Développement Mobile</CardTitle>
                <CardDescription className="text-gray-300">
                  Applications mobiles natives et cross-platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-600/20 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-400/30 hover:bg-green-900/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <Server className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">DevOps & Cloud</CardTitle>
                <CardDescription className="text-gray-300">Infrastructure et déploiement automatisé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-600/20 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section Compétences Détaillées */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/20 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="w-5 h-5 mr-2 text-purple-400" />
                  Bases de Données & Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "SQL Server", "Oracle", "MongoDB", "Spring Boot", "Laravel", "Django", "ASP.NET"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary" className="bg-orange-600/20 text-orange-300">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/20 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Server className="w-5 h-5 mr-2 text-green-400" />
                  Outils & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["IntelliJ", "VS Code", "Eclipse IDE", "PyCharm", "Google Colab", "R", "Odoo"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-600/20 text-cyan-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Mes Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-400 text-purple-300 hover:bg-purple-600/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contactez-moi</h2>

          <p className="text-gray-300 text-lg mb-12">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Papisco4226@gmail.com
            </Button>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-300"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-300"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-white font-semibold mb-4">Langues</h3>
            <div className="flex justify-center space-x-6">
              <div className="text-gray-300">
                <span className="font-medium">Français</span>
                <div className="text-sm text-purple-400">Bon niveau</div>
              </div>
              <div className="text-gray-300">
                <span className="font-medium">Anglais</span>
                <div className="text-sm text-blue-400">Niveau moyen</div>
              </div>
              <div className="text-gray-300">
                <span className="font-medium">Bambara</span>
                <div className="text-sm text-green-400">Bien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Bassiriki Mangane. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
