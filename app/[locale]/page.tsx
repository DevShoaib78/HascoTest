import { Header, Footer } from '@/src/components/layout'
import { Hero, About, CEO, Sectors, Clients, Projects, Stats, News, CTA, InteractiveMap } from '@/src/components/sections'
import { SectionTransition } from '@/src/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Section 1: Hero Section - No padding needed as header is transparent */}
      <SectionTransition
        transitionType="reveal"
        addGradientOverlay={false}
      >
        <div id="home">
          <Hero />
        </div>
      </SectionTransition>

      {/* Section 2: HASCO Snapshot */}
      <SectionTransition
        transitionType="slide-up"
        delay={200}
        addDivider={false}
      >
        <div id="hasco-snapshot">
          <About />
        </div>
      </SectionTransition>

      {/* Section 2.5: CEO's Note */}
      <SectionTransition
        transitionType="fade-in"
        delay={250}
        addDivider={false}
      >
        <div id="ceo-section">
          <CEO />
        </div>
      </SectionTransition>

      {/* Section 3: Sectors Overview */}
      <SectionTransition
        transitionType="fade-in"
        delay={300}
        addDivider={false}
      >
        <div id="sectors-overview">
          <Sectors />
        </div>
      </SectionTransition>

      {/* Section 4: Clients & Partners Showcase */}
      <SectionTransition
        transitionType="reveal"
        delay={400}
        addDivider={false}
      >
        <div id="clients">
          <Clients />
        </div>
      </SectionTransition>

      {/* Section 4.5: Interactive Map */}
      <SectionTransition
        transitionType="fade-in"
        delay={425}
        addDivider={false}
      >
        <div id="interactive-map">
          <InteractiveMap />
        </div>
      </SectionTransition>

      {/* Section 5: Featured Projects (moved before stats) */}
      <SectionTransition
        transitionType="slide-up"
        delay={450}
        addDivider={false}
      >
        <div id="featured-projects">
          <Projects />
        </div>
      </SectionTransition>

      {/* Section 6: Stats Section */}
      <SectionTransition
        transitionType="fade-in"
        delay={500}
        addDivider={false}
      >
        <div id="stats-section">
          <Stats />
        </div>
      </SectionTransition>

      {/* Section 7: Latest News (after stats) */}
      <SectionTransition
        transitionType="slide-up"
        delay={550}
        addDivider={false}
      >
        <div id="latest-news">
          <News />
        </div>
      </SectionTransition>

      {/* Section 8: Closing CTA */}
      <SectionTransition
        transitionType="fade-in"
        delay={600}
        addDivider={false}
      >
        <div id="closing-cta">
          <CTA />
        </div>
      </SectionTransition>

      {/* Footer */}
      <Footer />
    </main>
  )
}
