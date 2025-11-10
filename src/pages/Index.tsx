import { useEffect, useState, useRef } from "react";
import najmPhoto from "@/assets/najm-photo.jpg";
import backgroundMusic from "@/assets/hbd.mpeg";
import { Volume2, VolumeX } from "lucide-react";
import "./flower-styles.css";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <button onClick={toggleMusic} className="fixed top-8 right-8 z-50 p-4 rounded-full bg-rose-deep/30 backdrop-blur-sm border border-gold/30 hover:bg-rose-deep/50 transition-all duration-300 hover:scale-110" aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}>
        {isPlaying ? <Volume2 className="w-6 h-6 text-gold" /> : <VolumeX className="w-6 h-6 text-gold" />}
      </button>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0811] via-[#2d1219] to-[#1a0811] animate-gradient" />
      
      {/* Floating Petals */}
      {[...Array(20)].map((_, i) => <div key={i} className="petal" style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }} />)}

      {/* Storytelling Intro Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`storytelling-container ${isVisible ? 'visible' : ''}`}>
          <div className="story-rose-top">
            <div className="rose medium">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
          </div>

          <div className="story-content">
            <p className="story-text arabic-text">كله بيشتري ورد؟
حبيت اكون مختلف<br />
              أردت أن أكون مختلفاً
            </p>
            
            <div className="story-separator">
              <div className="mini-rose">
                <div className="rose-center small-center" />
                {[...Array(6)].map((_, i) => <div key={i} className="rose-petal mini-petal" style={{
                transform: `rotate(${i * 60}deg)`
              }} />)}
              </div>
            </div>

            <p className="story-text arabic-text">فكل وردة تذبل بعد أيام لكن هذه الوردة... لك إلى الأبد
            <br />
              لكن هذه الوردة... لك إلى الأبد
            </p>

            <div className="scroll-indicator">
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`content-container ${isVisible ? 'visible' : ''}`}>
          
          {/* Decorative Flowers - Top Left */}
          <div className="flower-decoration top-left">
            <div className="rose">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
          </div>

          {/* Decorative Flowers - Top Right */}
          <div className="flower-decoration top-right">
            <div className="rose">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
          </div>

          {/* Photo Frame */}
          <div className="photo-frame">
            <div className="photo-border">
              <img src={najmPhoto} alt="Najm" className="photo-image" />
            </div>
          </div>

          {/* Main Message - Arabic */}
          <h1 className="main-message arabic-text">
            الجميع يشتري الورود
            <br />
            <span className="highlight">أنا برمجتها لك</span>
          </h1>

          {/* Divider with Rose */}
          <div className="divider">
            <div className="divider-line" />
            <div className="rose small">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
            <div className="divider-line" />
          </div>

          {/* Secondary Message - English */}
          <p className="secondary-message">
            You're not just a <span className="star">STAR</span> to me,
            <br />
            <span className="name">Najm</span>
          </p>

          {/* Additional Romantic Text */}
          <div className="romantic-quote">
            <div className="quote-rose left">
              <div className="rose tiny">
                <div className="rose-center" />
                {[...Array(6)].map((_, i) => <div key={i} className="rose-petal" style={{
                transform: `rotate(${i * 60}deg)`
              }} />)}
              </div>
            </div>
            
            <p className="quote-text arabic-text">
              أنتِ الوردة التي تزهر في قلبي كل يوم
              <br />
              <span className="quote-highlight">ولا تذبل أبداً</span>
            </p>

            <div className="quote-rose right">
              <div className="rose tiny">
                <div className="rose-center" />
                {[...Array(6)].map((_, i) => <div key={i} className="rose-petal" style={{
                transform: `rotate(${i * 60}deg)`
              }} />)}
              </div>
            </div>
          </div>

          {/* Decorative Flowers - Bottom Left */}
          <div className="flower-decoration bottom-left">
            <div className="rose">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
          </div>

          {/* Decorative Flowers - Bottom Right */}
          <div className="flower-decoration bottom-right">
            <div className="rose">
              <div className="rose-center" />
              {[...Array(8)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 45}deg)`
            }} />)}
            </div>
          </div>

        </div>
      </main>

      {/* Dedicated Rose Section - From Seif to Najm */}
      <section className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`dedication-container ${isVisible ? 'visible' : ''}`}>
          {/* Large Central Rose */}
          <div className="dedication-rose">
            <div className="rose large">
              <div className="rose-center" />
              {[...Array(12)].map((_, i) => <div key={i} className="rose-petal" style={{
              transform: `rotate(${i * 30}deg)`
            }} />)}
            </div>
          </div>

          {/* Dedication Text */}
          <div className="dedication-text">
            <p className="from-text">From Seif</p>
            <div className="heart-divider">❤</div>
            <p className="to-text">To his Najm</p>
          </div>

          {/* Decorative Mini Roses Around */}
          <div className="mini-roses-circle">
            {[...Array(6)].map((_, i) => <div key={i} className="mini-rose-wrapper" style={{
            transform: `rotate(${i * 60}deg) translateY(-150px)`
          }}>
                <div className="rose tiny" style={{
              transform: `rotate(${-i * 60}deg)`
            }}>
                  <div className="rose-center" />
                  {[...Array(6)].map((_, j) => <div key={j} className="rose-petal" style={{
                transform: `rotate(${j * 60}deg)`
              }} />)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Golden Sparkles */}
      {[...Array(20)].map((_, i) => <div key={`sparkle-${i}`} className="sparkle" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`
    }} />)}
    </div>;
};
export default Index;