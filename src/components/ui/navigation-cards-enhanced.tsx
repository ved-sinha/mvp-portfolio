import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { cn } from "../../lib/utils";

// OpenAI Logo component from cards-demo-3.tsx
export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

// Container component from cards-demo-3.tsx
const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export interface NavigationCard {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode | string;
  color?: string;
  gradient?: string;
  variant?: 'default' | 'featured' | 'compact';
}

export interface NavigationCardGridProps {
  cards: NavigationCard[];
  title?: string;
  description?: string;
  columns?: 1 | 2 | 3 | 4;
  layout?: 'horizontal' | 'vertical' | 'grid' | 'default' | 'bento';
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'compact' | 'spacious';
  showBorder?: boolean;
  background?: 'white' | 'transparent' | 'gray';
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

// Helper function to convert Tailwind color classes to hex colors
const getCardColor = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'bg-blue-500': '#3b82f6',
    'bg-green-500': '#10b981',
    'bg-purple-500': '#8b5cf6',
    'bg-red-500': '#ef4444',
    'bg-yellow-500': '#eab308',
    'bg-indigo-500': '#6366f1',
    'bg-pink-500': '#ec4899',
    'bg-gray-100': '#f3f4f6',
    'bg-gray-500': '#6b7280',
    'bg-white': '#ffffff',
  };
  
  return colorMap[color] || '#3b82f6';
};

// Helper function to determine text color based on background
const getTextColor = (color: string) => {
  const lightColors = ['bg-white', 'bg-gray-100', 'bg-yellow-500'];
  return lightColors.includes(color) ? 'text-gray-900' : 'text-white';
};

export const NavigationCardGrid = ({
  cards,
  title,
  description,
  columns = 2,
  layout = 'default',
  className,
  containerClassName,
  variant = 'default',
  showBorder = true,
  background = 'white',
  style,
  fullWidth = false,
}: NavigationCardGridProps) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'white': return 'bg-white dark:bg-black';
      case 'gray': return 'bg-gray-50 dark:bg-gray-900';
      case 'transparent': return 'bg-transparent';
      default: return 'bg-white dark:bg-black';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'compact': return 'p-4';
      case 'spacious': return 'p-8';
      default: return 'p-6';
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-row gap-4 overflow-x-auto';
      case 'vertical':
        return 'flex flex-col gap-4';
      case 'grid':
      case 'bento':
        return 'bento-layout-special'; // Will be handled separately
      case 'default':
      default:
        // Default is now the Jitter-style grid
        return 'jitter-grid-layout';
    }
  };

  return (
    <div 
      className={cn(
        getBackgroundClass(),
        getVariantClasses(),
        showBorder && "border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm",
        fullWidth ? "w-screen" : "w-full",
        containerClassName
      )}
      style={style}
    >
      <div className="w-full max-w-6xl mx-auto">
        {(title || description) && (
          <div className={cn(
            "text-center",
            variant === 'compact' ? 'mb-4' : 'mb-6'
          )}>
            {title && (
              <h3 className={cn(
                "font-semibold text-gray-900 dark:text-white",
                variant === 'compact' ? 'text-base mb-1' : 'text-lg mb-2'
              )}>
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}
        
                {layout === 'grid' || layout === 'bento' ? (
          <BentoGrid className="w-full max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <div
                className={cn(
                  "rounded-xl overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.02]",
                  index === 0 ? "md:col-span-2" : "",
                  index === 1 ? "md:row-span-2" : ""
                )}
                style={{ backgroundColor: getCardColor(card.color || 'bg-blue-500') }}
              >
                <a href={card.href} key={index} className="block h-full">
                  <div className="relative h-full min-h-[8rem] p-4 flex flex-col justify-end">
                                         {/* Icon in center using cards-demo-3 styling */}
                     {card.icon && (
                       <div className="absolute inset-0 flex items-center justify-center">
                         <Container>
                           {card.icon === "openai" ? (
                             <OpenAILogo className="h-8 w-8 text-white" />
                           ) : (
                             card.icon
                           )}
                         </Container>
                       </div>
                     )}
                     
                     {/* Text content at bottom */}
                     <div className="relative z-10">
                       <h3 className={cn(
                         "font-bold text-lg mb-1",
                         getTextColor(card.color || 'bg-blue-500')
                       )}>
                         {card.title}
                       </h3>
                       <p className={cn(
                         "text-sm leading-relaxed",
                         card.color === 'bg-white' ? "text-gray-700" : "text-white/90"
                       )}>
                         {card.description}
                       </p>
                     </div>
                  </div>
                </a>
              </div>
            ))}
          </BentoGrid>
        ) : layout === 'default' ? (
          <div className="flex flex-col lg:flex-row gap-4">
            {/* First 2 cards in a grid - responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {cards.slice(0, 2).map((card, index) => (
                <NavigationCard key={index} {...card} />
              ))}
            </div>
            {/* Remaining cards stacked vertically - responsive */}
            {cards.length > 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2 lg:w-64">
                {cards.slice(2).map((card, index) => (
                  <NavigationCard key={index + 2} {...card} variant="compact" />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className={cn(
            getLayoutClasses(),
            className
          )}>
            {cards.map((card, index) => (
              <NavigationCard 
                key={index} 
                {...card} 
                variant={layout === 'horizontal' ? 'compact' : card.variant || 'default'}
              />
            ))}
          </div>
        )}
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
  variant = 'default',
}: NavigationCard) => {
  const cardStyle = gradient 
    ? { background: gradient }
    : {};
  
  const getColorStyle = () => {
    if (gradient) return cardStyle;
    
    // Convert Tailwind color classes to actual color values
    const colorMap: { [key: string]: string } = {
      'bg-blue-500': '#3b82f6',
      'bg-green-500': '#10b981',
      'bg-purple-500': '#8b5cf6',
      'bg-red-500': '#ef4444',
      'bg-yellow-500': '#eab308',
      'bg-indigo-500': '#6366f1',
      'bg-pink-500': '#ec4899',
      'bg-gray-100': '#f3f4f6',
      'bg-gray-500': '#6b7280',
    };
    
    return { backgroundColor: colorMap[color] || '#3b82f6' };
  };

  const getIconHeight = () => {
    switch (variant) {
      case 'featured': return 'h-32';
      case 'compact': return 'h-16';
      default: return 'h-20';
    }
  };

  const getIconSize = () => {
    switch (variant) {
      case 'featured': return 'text-4xl';
      case 'compact': return 'text-xl';
      default: return 'text-2xl';
    }
  };

  const getPadding = () => {
    switch (variant) {
      case 'featured': return 'p-6';
      case 'compact': return 'p-3';
      default: return 'p-4';
    }
  };

  const getTitleSize = () => {
    switch (variant) {
      case 'featured': return 'text-lg font-bold';
      case 'compact': return 'text-sm font-semibold';
      default: return 'text-base font-semibold';
    }
  };

  return (
    <a href={href} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-0 overflow-hidden bg-white dark:bg-gray-900">
        <div 
          className={cn(
            getIconHeight(),
            "flex items-center justify-center rounded-t-lg"
          )}
          style={getColorStyle()}
        >
          {icon && (
            <div className={cn("text-white", getIconSize())}>
              {icon}
            </div>
          )}
        </div>
        <CardContent className={getPadding()}>
          <CardTitle className={cn(
            getTitleSize(),
            "text-gray-900 dark:text-white mb-1"
          )}>
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

// Legacy components for backward compatibility
export const FeaturedNavigationCard = (props: NavigationCard) => (
  <NavigationCard {...props} variant="featured" />
);

export const WhatsNewSection = ({
  items,
  title = "What's new",
  className,
}: {
  items: { title: string; href: string }[];
  title?: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-sm p-6", className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {item.title}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        See what's new →
      </a>
    </div>
  );
}; 