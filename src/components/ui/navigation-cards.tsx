import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

export interface NavigationCard {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
  gradient?: string;
}

export const NavigationCardGrid = ({
  cards,
  title,
  description,
}: {
  cards: NavigationCard[];
  title?: string;
  description?: string;
}) => {
  return (
    <div 
      className="bg-white dark:bg-black backdrop-blur-sm rounded-b-2xl border-x border-b border-black/[0.2] dark:border-white/[0.2] shadow-xl"
      style={{ width: '100vw', margin: 0, padding: '1.5rem' }}
    >
      <div className="w-full">
        {(title || description) && (
          <div className="mb-6 text-center">
            {title && (
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <NavigationCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const NavigationCard = ({
  title,
  description,
  href,
  icon,
  color = "bg-blue-500",
  gradient,
}: NavigationCard) => {
  const cardStyle = gradient 
    ? { background: gradient }
    : { backgroundColor: color };

  return (
    <a href={href} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-0 overflow-hidden">
        <div 
          className={`h-20 ${color} ${gradient ? '' : 'bg-gradient-to-br'} flex items-center justify-center rounded-t-lg`}
          style={gradient ? cardStyle : {}}
        >
          {icon && (
            <div className="text-white text-2xl">
              {icon}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <CardTitle className="text-base font-semibold text-black dark:text-white mb-1">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

// Special card for featured items (like the "MOVE" card in the image)
export const FeaturedNavigationCard = ({
  title,
  description,
  href,
  icon,
  color = "bg-purple-500",
  gradient,
}: NavigationCard) => {
  const cardStyle = gradient 
    ? { background: gradient }
    : { backgroundColor: color };

  return (
    <a href={href} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-0 overflow-hidden">
        <div 
          className={`h-32 ${color} ${gradient ? '' : 'bg-gradient-to-br'} flex items-center justify-center rounded-t-lg`}
          style={gradient ? cardStyle : {}}
        >
          {icon && (
            <div className="text-white text-4xl font-bold">
              {icon}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold text-black dark:text-white mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

// Component for "What's New" section
export const WhatsNewSection = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  return (
    <div className="w-[250px] p-6 bg-white dark:bg-black backdrop-blur-sm rounded-b-2xl border-r border-b border-black/[0.2] dark:border-white/[0.2] shadow-xl">
      <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
        What's new
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {item.title}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        See what's new →
      </a>
    </div>
  );
}; 