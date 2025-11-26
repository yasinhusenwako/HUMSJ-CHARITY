import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-students.jpg";
import educationImage from "@/assets/education-hope.jpg";
import unityImage from "@/assets/unity-hands.jpg";
import successImage from "@/assets/success-student.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Muslim students studying together at Haramaya University - Islamic education and community support"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-secondary font-semibold mb-2">
              HUMSJ CHARITY SECTOR
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Supporting Those Who Need It Most
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Empowering orphans, students, and community members in need. 
              Start with just 50 ETB per month and transform lives through compassion and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button variant="hero" size="lg" className="text-lg">
                  Donate Now
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-medium hover:shadow-strong transition-all">
              <CardContent className="pt-8 pb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">1,200+</h3>
                <p className="text-muted-foreground">
                  Orphans & Community Members Supported
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium hover:shadow-strong transition-all">
              <CardContent className="pt-8 pb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Active Donors</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium hover:shadow-strong transition-all">
              <CardContent className="pt-8 pb-8">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting orphans, students, and community members in need through 
              education, care, and social initiatives for a brighter future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all">
              <img
                src={educationImage}
                alt="Muslim students engaged in Islamic studies and academic learning with Quran and books"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Education Support
                </h3>
                <p className="text-muted-foreground">
                  Providing tuition assistance, books, and educational supplies to 
                  orphans and students in need
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all">
              <img
                src={unityImage}
                alt="Muslim brothers and sisters joining hands in unity - Islamic brotherhood and community solidarity"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Community Building
                </h3>
                <p className="text-muted-foreground">
                  Creating a supportive network caring for orphans 
                  and vulnerable community members
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all">
              <img
                src={successImage}
                alt="Successful Muslim graduate in hijab celebrating academic achievement - empowering Muslim students"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Community Impact
                </h3>
                <p className="text-muted-foreground">
                  Empowering orphans, students, and families to achieve 
                  their goals and thrive
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your monthly donation of 50 ETB or more can transform the lives of orphans, 
            students, and families in need. Join our community of givers today.
          </p>
          <Link to="/causes">
            <Button variant="charity" size="lg" className="text-lg">
              View Our Causes
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
