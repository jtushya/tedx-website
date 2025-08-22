import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpeakerCard from '../components/ui/SpeakerCard';
import SpeakerModal from '../components/ui/SpeakerModal';
import { Helmet } from 'react-helmet';

// Mock data for speakers
const speakersData = [
  {
    id: 1,
    name: 'Dr. Aisha Patel',
    title: 'Quantum Physicist & AI Researcher',
    talkTitle: 'The Quantum Frontier of Artificial Intelligence',
    year: 2024,
    photoUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. Aisha Patel is a pioneer in quantum computing applications for artificial intelligence. Her groundbreaking work bridges the gap between quantum mechanics and machine learning, opening new frontiers in computational capabilities.',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Social Entrepreneur',
    talkTitle: 'Rebuilding Communities Through Sustainable Design',
    year: 2024,
    photoUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Marcus Chen has transformed urban planning in developing regions by implementing sustainable, community-focused design principles. His projects have improved living conditions for thousands while reducing environmental impact.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    title: 'Climate Scientist',
    talkTitle: 'Ocean Acidification: The Hidden Climate Crisis',
    year: 2023,
    photoUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Elena Rodriguez has spent the last decade studying the effects of carbon dioxide absorption in our oceans. Her research has been instrumental in highlighting the devastating impacts of ocean acidification on marine ecosystems.',
  },
  {
    id: 4,
    name: 'Dr. James Okonkwo',
    title: 'Neuroscientist',
    talkTitle: 'Rewiring the Brain: Neuroplasticity and Human Potential',
    year: 2023,
    photoUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. James Okonkwo\'s research focuses on brain plasticity and its implications for rehabilitation after trauma. His innovative techniques have helped patients recover functions previously thought lost after severe brain injuries.',
  },
  {
    id: 5,
    name: 'Sarah Kim',
    title: 'Cybersecurity Expert',
    talkTitle: 'Digital Privacy in the Age of Surveillance',
    year: 2022,
    photoUrl: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Sarah Kim is at the forefront of the battle for digital privacy rights. As both a programmer and policy advocate, she works to develop security solutions while educating the public about protecting their digital identities.',
  },
  {
    id: 6,
    name: 'Rajiv Mehta',
    title: 'Space Architect',
    talkTitle: 'Designing Homes Beyond Earth',
    year: 2022,
    photoUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Rajiv Mehta specializes in designing habitats for extreme environments, from deep space to Mars. His innovative approaches combine psychological well-being with structural engineering to create sustainable living spaces for the future of human space exploration.',
  },
];

const SpeakersPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakersData[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const years = Array.from(new Set(speakersData.map(speaker => speaker.year))).sort((a, b) => b - a);
  
  const filteredSpeakers = selectedYear 
    ? speakersData.filter(speaker => speaker.year === selectedYear)
    : speakersData;

  const handleSpeakerClick = (speaker: typeof speakersData[0]) => {
    setSelectedSpeaker(speaker);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Speakers | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Discover the inspiring speakers who have shared their ideas at TEDx BITS Hyderabad events over the years." />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-tedx-red">Speakers</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover the innovative thinkers and doers who have shared their ideas on the TEDx BITS Hyderabad stage, challenging perspectives and inspiring change.
              </p>
            </motion.div>
            
            {/* Year filter */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedYear === null ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                }`}
                onClick={() => setSelectedYear(null)}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedYear === year ? 'bg-tedx-red text-white' : 'bg-tedx-gray/50 text-gray-300 hover:bg-tedx-gray'
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
            
            {/* Speakers grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredSpeakers.map(speaker => (
                <motion.div key={speaker.id} variants={itemVariants}>
                  <SpeakerCard
                    name={speaker.name}
                    title={speaker.title}
                    talkTitle={speaker.talkTitle}
                    year={speaker.year}
                    photoUrl={speaker.photoUrl}
                    bio={speaker.bio}
                    onClick={() => handleSpeakerClick(speaker)}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {filteredSpeakers.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No speakers found for the selected year.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {selectedSpeaker && (
        <SpeakerModal
          isOpen={modalOpen}
          onClose={closeModal}
          name={selectedSpeaker.name}
          title={selectedSpeaker.title}
          talkTitle={selectedSpeaker.talkTitle}
          photoUrl={selectedSpeaker.photoUrl}
          bio={selectedSpeaker.bio}
          year={selectedSpeaker.year}
        />
      )}
    </>
  );
};

export default SpeakersPage;