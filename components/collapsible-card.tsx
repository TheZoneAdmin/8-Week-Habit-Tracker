import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

// Props for CollapsibleCard
export interface CollapsibleCardProps {
    title: string;
    idSuffix: string;
    children: React.ReactNode;
    headerInfo?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    cardClassName?: string;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
    title,
    idSuffix,
    children,
    isOpen: controlledOpen,
    headerInfo,
    cardClassName,
    onToggle,
}) => {
    // Support controlled or uncontrolled usage
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const handleToggle = useCallback(() => {
        if (isControlled) {
            onToggle?.(!controlledOpen);
        } else {
            setInternalOpen((prev) => {
                const newState = !prev;
                onToggle?.(newState);
                return newState;
            });
        }
    }, [isControlled, controlledOpen, onToggle]);

    return (
        <Card className={`bg-gray-800 overflow-hidden rounded-lg border border-gray-700/50 ${cardClassName ?? ''}`}>
            <button
                type="button"
                className="w-full flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-700/50 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCBA78] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                onClick={handleToggle}
                aria-expanded={open}
                aria-controls={`${idSuffix}-content`}
            >
                <div className="flex items-center">
                    <h3 className="text-[#CCBA78] text-lg font-semibold">{title}</h3>
                    {headerInfo && <div className="ml-2 flex items-center">{headerInfo}</div>}
                </div>
                <ChevronDown className={`w-5 h-5 text-[#CCBA78] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <CardContent id={`${idSuffix}-content`} className="p-4 sm:p-6 pt-4 border-t border-gray-700">
                    {children}
                </CardContent>
            )}
        </Card>
    );
};

export default CollapsibleCard;
