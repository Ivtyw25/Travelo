
import React, { useState } from 'react';
import './Event.css';

const events = [
  {
    id: 1,
    title: 'MALAYSIAN GAMES FESTIVAL@KUALA LUMPUR',
    date: '13 Sep 2024',
    details: `Start Date: 2024-09-13
Event Coordinator: JKKN WP Kuala Lumpur
End Date: 2024-09-16
Event Location: Dataran Merdeka, Kuala Lumpur
The Malaysian Games Festival (FPM) is a program that re-establishes traditional games that are increasingly 
marginalized to continue to be played by all Malaysians. A tourism program based on arts, culture and heritage 
in Kuala Lumpur that promotes the art of Traditional Games.
Among the contents:
- Traditional and Modern Games Competition
- Traditional and Modern Games League
- Stage Performances
- Talent Scavenging
- Workshops
- Exhibitions, Demonstrations and Sales of Craft/Art Products
- Food Sales (Food Truck)
The festival showcases Malaysian traditional games, some of which may not be familiar to modern Malaysians 
and serves to pique interest to ensure the games can continue to be enjoyed by all Malaysians in the future.
Activities include: 
- Traditional and Modern Games Competition 
- Traditional and Modern Games League Competition 
- Cultural performances 
- New talents competition 
- Workshops 
- Exhibitions, demonstrations, and craft sales 
- Food sale (food truck)`,
    imageUrl: '../Event/MALAYSIAN GAMES FESTIVAL.jpeg',
  },
  {
    id: 2,
    title: 'MELAKA STRAIT ARTS FESTIVAL',
    date: '25 Oct 2024',
    details: `Start Date: 2024-10-25
Event Coordinator: JKKN Melaka
End Date: 2024-10-27
Event Location: Dataran Pahlawan, Bandar Hilir, Melaka
The implementation of a festival / game that highlights the uniqueness of art and culture that covers the 
Straits States / states that are in the waters of the Malacca Strait region. Implemented as a platform for 
promoting art, culture and heritage activities in line with the recognition of Melaka as a World Heritage City 
by UNESCO.
Among the fillings:
- Gala Performance Night
- Melaka Strait Art Convention
- Cultural Art Demonstration
- Unearthing Young Talents
- Malacca Strait Bazaar
The internationally known Straits of Malacca is the inspiration for the festival which will be participated 
by regions fronting the Straits. Contents of the festival is reflective of Malacca as a world heritage city 
recognized and ratified by UNESCO.`,
    imageUrl: '../Event/MELAKA STRAIT ARTS FESTIVAL.jpg',
  },
  {
    id: 3,
    title: 'RHYTHMS OF KINABALU (ROK)',
    date: '25 Oct 2024',
    details: `Start Date: 2024-10-25 Event Coordinator: JKKN Sabah 
End Date: 2024-10-27 
Event Location: Padang Merdeka, Kota Kinabalu, Sabah 
Rhythms of Kinabalu (R.O.K) is a program for the promotion and maintenance of traditional arts, especially 
in Sabah. Bringing people closer, especially in Sabah, to arts and culture activities as well as providing 
space and opportunities for arts activists in Sabah. Exhibiting local songs and ethnic songs with a 
World Music concept.
Includes: 
- Gala Evening Concert 
- Sabah Arts Presentation 
- Exhibition, Demonstration and Sales of Local Arts/Craft Products 
- Agency Exhibition 
- Talent Pry Competition and Music Competition Sound of Sabah 
Rythms of Kinabalu serves to promote whilst at the same time preserve the traditional arts of Sabah. It aims to 
make the arts come into contact with the community and provide opportunities for arts practitioners to be in their 
element. Local ethnic beats with the concept of World Music will permeate the festival site.
Amongst the activities lined up include: 
- Gala Concert 
- Fringe performances celebrating the culture of Sabah 
- Exhibition, demonstration and sale of local crafts 
- Exhibition by Agancies 
- Local Talent Competition including Sounds of Sabah Music competition`,
    imageUrl: '../Event/RHYTHMS OF KINABALU.png',
  },
  {
    id: 4,
    title: 'FESTIVAL SELANGOR@BATU LAUT',
    date: '06 Sep 2024',
    details: `Start Date: 2024-09-06
Event Coordinator: JKKN Selangor
End Date: 2024-09-08
Event Location: Batu Laut Beach Square, Tanjung Sepat, Kuala Langat, Selangor
The Selangor Festival @Batu Laut is a program that will showcase the uniqueness of the art and culture of the 
Selangor community through the organization of various activities such as fashion, folk sports competitions 
on land and beach such as beach soccer, beach volleyball, beach netball, beach tug-of-war, food traditions, 
family activities, talent hunts, interactive exhibitions and sales stalls. Keroncong music is the main element 
in the organization of the festival this time.
Among the fillings:
- Cooperation activities
- Talent Search Competition
- Performance Arts
- People's Sports Competition
- Traditional Cooking Competition
- Exhibitions and Sales
A program to celebrate the rich cultural tapestry of the communities in Selangor that will highlight various 
activities that include costumes, community sports competitions on land and by the sea, traditional foods, 
family activities, competitions to find new talents, an interactive exhibition and stalls selling a myriad of 
things.
- Group activities
- New Talents competition
- Cultural performances
- Community Sports and games
- Cooking competitions
- Exhibitions and sales`,
    imageUrl: '../Event/FESTIVAL SELANGOR.jpg',
  },
];

const Event = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMonth, setSearchMonth] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(event => {
    const month = new Date(event.date).toLocaleString('default', { month: 'short' });
    return event.title.toLowerCase().includes(searchTerm.toLowerCase()) && (searchMonth ? month.toLowerCase() === searchMonth.toLowerCase() : true);
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSearchMonth(e.target.value);
  };

  const handleSeeMoreClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="Event">
      <h1 className="heading"><b>Event</b></h1>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
      <input type="text" placeholder="Month" value={searchMonth} onChange={handleMonthChange} />

      <div className="event-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.imageUrl} alt={event.title} />
            <div><b>{event.date}</b></div>
            <div>{event.title}</div>
            <button onClick={() => handleSeeMoreClick(event)}>See more</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h1><b>{selectedEvent.title}</b></h1>
            <pre>{selectedEvent.details}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;