import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
// --- CollapsibleCard Component ---

// Props for CollapsibleCard
export interface CollapsibleCardProps {
    title: string;
    idSuffix: string; // For unique IDs like 'week-1-content', 'achievements-content'
    children: React.ReactNode;
    defaultOpen?: boolean;
    headerInfo?: React.ReactNode; // For things like "Start here!" badge or other indicators
    cardClassName?: string; // Optional additional classes for the Card itself
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({ title, idSuffix, children, defaultOpen = false, headerInfo, cardClassName }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
        <Card className={`bg-gray-800 overflow-hidden rounded-lg border border-gray-700/50 ${cardClassName || ''}`}>
            <div 
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)} 
                role="button" 
                aria-expanded={isOpen} 
                aria-controls={`${idSuffix}-content`}
            >
                <div className="flex items-center">
                    <h3 className="text-[#CCBA78] text-lg font-semibold">{title}</h3>
                    {headerInfo && <div className="ml-2 flex items-center">{headerInfo}</div>}
                </div>
                <ChevronDown className={`w-5 h-5 text-[#CCBA78] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
               <CardContent id={`${idSuffix}-content`} className="p-4 sm:p-6 pt-4 border-t border-gray-700">
                   {children}
               </CardContent>
             )}
        </Card>
    );
};

export default CollapsibleCard;
