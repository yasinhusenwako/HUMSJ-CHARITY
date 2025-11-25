import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import educationImage from "@/assets/education-hope.jpg";
import unityImage from "@/assets/unity-hands.jpg";
import successImage from "@/assets/success-student.jpg";
import heroImage from "@/assets/hero-students.jpg";
import communityPrayer from "@/assets/community-prayer.jpg";
import groupStudy from "@/assets/group-study.jpg";
import charityGiving from "@/assets/charity-giving.jpg";
import quranStudy from "@/assets/quran-study.jpg";

const Gallery = () => {
  // In a real application, these would be fetched from Firebase Storage
  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      title: "Islamic Education & Unity",
      description:
        "Muslim students studying together - combining Islamic knowledge with academic excellence at HUMSJ",
    },
    {
      id: 2,
      src: educationImage,
      title: "Seeking Knowledge",
      description:
        "Muslim students engaged in Islamic studies and Quranic learning - fulfilling the Islamic duty of seeking knowledge",
    },
    {
      id: 3,
      src: unityImage,
      title: "Islamic Brotherhood",
      description:
        "Muslim brothers and sisters united in faith - building strong bonds through Islamic principles of Takaful",
    },
    {
      id: 4,
      src: successImage,
      title: "Empowered Muslim Graduates",
      description:
        "Celebrating Muslim student success - empowering the Ummah through education and faith",
    },
    {
      id: 5,
      src: communityPrayer,
      title: "Community Prayer & Worship",
      description:
        "Muslim students gathering for congregational prayer - strengthening faith and unity through worship",
    },
    {
      id: 6,
      src: groupStudy,
      title: "Collaborative Learning",
      description:
        "Students working together on projects - fostering teamwork and academic excellence in the Muslim community",
    },
    {
      id: 7,
      src: charityGiving,
      title: "Charity & Giving Back",
      description:
        "HUMSJ members distributing aid and support - practicing Sadaqah and helping those in need",
    },
    {
      id: 8,
      src: quranStudy,
      title: "Quranic Studies",
      description:
        "Students deepening their understanding of the Quran - combining spiritual growth with academic pursuits",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl opacity-90">
              Witness the impact of your donations through moments captured with
              our students and community members
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden shadow-medium hover:shadow-strong transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-muted">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  More Photos Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  We regularly update our gallery with new photos from events,
                  distributions, and success stories. Follow us on social media
                  to see the latest updates from our student and community
                  programs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
