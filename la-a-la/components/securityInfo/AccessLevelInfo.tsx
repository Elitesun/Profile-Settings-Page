"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { utilisateur } from '@/data/Utilisateur';

const TooltipProvider = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipProvider), { ssr: false });
const Tooltip = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.Tooltip), { ssr: false });
const TooltipContent = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipContent), { ssr: false });
const TooltipTrigger = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipTrigger), { ssr: false });

const AccessLevelInfo = () => {
  return (
    <TooltipProvider>
      <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">Access Levels</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Niveau</h4>
            <div className="grid grid-cols-3 gap-2">
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Observation: {utilisateur.niveau.observation}
                </TooltipTrigger>
                <TooltipContent>Observation Level</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Action: {utilisateur.niveau.action}
                </TooltipTrigger>
                <TooltipContent>Action Level</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Approbation: {utilisateur.niveau.approbation}
                </TooltipTrigger>
                <TooltipContent>Approbation Level</TooltipContent>
              </Tooltip>
            </div>
          </div>
  
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Access Level</h4>
            <div className="grid grid-cols-3 gap-2">
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Observation: {utilisateur.accessLevel.observation}
                </TooltipTrigger>
                <TooltipContent>Observation Access</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Action: {utilisateur.accessLevel.action}
                </TooltipTrigger>
                <TooltipContent>Action Access</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="p-2 bg-gray-50 rounded text-sm">
                  Approbation: {utilisateur.accessLevel.approbation}
                </TooltipTrigger>
                <TooltipContent>Approbation Access</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AccessLevelInfo;