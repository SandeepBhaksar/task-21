import React from 'react';
import './App.css';
import Card from './Components/Card';

const App = () => {
  const AppData = [
    {id: 1, imageUrl: 'Dominic_Toretto.jpg', title: 'Dominic Toreto', description: "Dominic Toretto is a fearless street racer, auto mechanic, and ex-convict. The character is the older brother of Jakob and Mia Toretto."},
    {id: 2, imageUrl: `Brian_O'Conner.jpg`, title: `Brian_O'Conner`, description: `Brian is working as an undercover detective with the LAPD, who assigns him the task of solving a series of semi-trailer truck hijackings.`},
    {id: 3, imageUrl: `Letty_Ortiz.webp`, title: `Letty Ortiz`, description: `Leticia "Letty" Ortiz is the wife of Dominic Toretto, sister in-law to Jakob and Mia Toretto, and the stepmother of Brian Marcos. Letty was the childhood sweetheart of Dominic who then became a street racer, criminal, and mechanic.`},
    {id: 4, imageUrl: `Mia_Toretto.webp`, title: `Mia Toretto`, description: `Mia Toretto is the youngest child and only daughter of Jack Toretto, the sister of Dominic and Jakob, the girlfriend of Brian O'Conner, the mother of their two children, the cousin of Fernando and the aunt of Brian Marcos.`},
    {id: 5, imageUrl: `Roman_pearce.webp`, title: `Roman Pearce`, description: `Roman Pearce is the childhood friend of Brian O'Conner and a former convict who harbored stolen cars. He won his freedom after taking down drug lord Carter Verone in an undercover assignment by U.S. Customs with Brian in Miami.`},
    {id: 6, imageUrl: `Tej_Parker.webp`, title: `Tej Parker`, description: `Tej Parker is a technical expert, mechanic and former street racer. Tej befriended Brian O'Conner, who allowed him to participate in races when he lived in Miami. `},
    {id: 7, imageUrl: `Deckard_Shaw.webp`, title: `Deckard Shaw`, description: `Deckard "Deck" Shaw is the eldest child of Magdalene Shaw, the older brother of Owen and Hattie Shaw and a former UKSF military officer, assassin, and MI6 agent turned mercenary.`},
    {id: 7, imageUrl: `Ramsey.webp`, title: `Ramsey`, description: `Ramsey is a computer hacker who created the God's Eye. She first crossed paths with Dominic Toretto's Crew after she was captured by Nigerian terrorist Mose Jakande under the orders of Cipher until Dom's crew saved her.`},
    {id: 7, imageUrl: `Mr_Nobody.webp`, title: `Mr.Nobody`, description: `"Mr. Nobody" was the alias of government agent who led a covert organization known as the Agency and assigned Dominic Toretto's Crew with several missions and aided them on multiple occasions.`},
  ];

  return (
    <>
      <div className="heading">
        <h2>Fast And Furious Cast</h2>
      </div>
      <div className="container">
        {AppData.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default App;
