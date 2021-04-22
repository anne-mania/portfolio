import React, { useState } from 'react';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/storyline.png';
import hel from '../assets/hel.png';

function Projects() {
  return (
    <div id='projects' className='container mx-auto pt-64'>
      <h1 className='line h1-copy mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 text-3xl sm:text-4xl lg:text-5xl'>
        Digital 🏠
      </h1>
      <div class='mt-16 md:mt-24'>
        <CardItems
          bg='bg-smartdress'
          text='Smartdress'
          subtitle='Bachelor Thesis'
          description='Your personal outfit advisor with whom you always know what to wear today'
          src={smartdress}
          link='/project/smartdress'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-nazzle'
          text='Nazzle'
          subtitle='Project (Studium)'
          description='Playfully explore nature and solve exciting puzzles with augmented reality'
          src={nazzle}
          link='/project/nazzle'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-storyline'
          text='Storyline'
          subtitle='Foundation project (Studium)'
          description='Companion for students for the playful prevention of fake news and cyber bullying in social networks'
          src={storyline}
          link='/project/storyline'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-hel'
          text='Hygiene Lab'
          subtitle='Client work'
          description='Creating a storytelling experience of visiting public restrooms with contactless products'
          src={hel}
          link='/project/hygienelab'
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-smartdress'
          text='One Line Cycling'
          subtitle='Own project'
          description='Showing how cycling stuff like a bike, jersey or socks can dress you up'
          src={hel}
          link='/project/onelinecycling'
        />
      </div>
    </div>
  );
}

export default Projects;