import React from 'react';
import { Play, PictureInPicture, Moon, BugPlay, Archive } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Archive,
      title: "Import Playlists",
      description: "Easily import your existing YouTube playlists and keep all your favorite content organized in one place.",
      image: "/features/create-playlist.jpg",
      delay: 0
    },
    {
      icon: Play,
      title: "Ad-Free Viewing",
      description: "Enjoy your favorite YouTube videos without any interruptions from ads. Pure, uninterrupted entertainment every time.",
      image: "/features/no-ads.jpg",
      delay: 0.2
    },
    {
      icon: Moon,
      title: "Sleep Mode",
      description: "Set a timer and drift off to your favorite content. The app automatically stops playback after your chosen time.",
      image: "/features/sleep-mode.jpg",
      delay: 0.4
    },
    {
      icon: PictureInPicture,
      title: "Picture-in-Picture",
      description: "Watch videos in a floating window while you browse, work, or multitask. Your video stays with you wherever you go.",
      image: "/features/pip-mode.jpg",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Features That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience YouTube like never before with our powerful features designed for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;