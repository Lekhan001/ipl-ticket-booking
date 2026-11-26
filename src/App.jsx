
import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MatchCard from './MatchCard';
import './App.css';

function App() {
  const [selectedMatch, setSelectedMatch] = useState('');

  const matches = [
    {
      id: 1,
      team1: 'RCB',
      team2: 'CSK',
      date: '25 March 2026',
      venue: 'Bangalore'
    },
    {
      id: 2,
      team1: 'MI',
      team2: 'KKR',
      date: '27 March 2026',
      venue: 'Mumbai'
    },
    {
      id: 3,
      team1: 'SRH',
      team2: 'RR',
      date: '29 March 2026',
      venue: 'Hyderabad'
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section id="matches">
        <h2>Upcoming IPL Matches</h2>

        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            date={match.date}
            venue={match.venue}
            onBook={() =>
              setSelectedMatch(`${match.team1} vs ${match.team2}`)
            }
          />
        ))}

        {selectedMatch && (
          <h3>Selected Match: {selectedMatch}</h3>
        )}
      </section>
    </div>
  );
}

export default App;
