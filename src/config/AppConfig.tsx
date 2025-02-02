import React, { createContext, useContext, useState } from 'react';
    import { AppConfig } from '../types';

    const AppConfigContext = createContext<{
      config: AppConfig;
      setConfig: (config: AppConfig) => void;
    }>({
      config: {
        registrationWebhook: 'https://n8n.prospectos.pro/webhook/844c226b-f793-4759-abfc-a83ac1f2a884',
        agentConfigWebhook: 'https://n8n.prospectos.pro/webhook/117383b5-998e-4fa3-a959-24e89dcb545b',
        openaiApiKey: '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',
        baserowApiUrl: 'https://api.baserow.io',
        baserowToken: 'f8Fons1isKInSy2hhtmIrVcJT0IuDX70',
        baserowTableId: '430560',
        baserowNameColumn: 'Nombre',
        baserowEmailColumn: 'email',
        baserowWhatsappColumn: 'Whatsapp',
        baserowBusinessColumn: 'negocio',
        baserowDescriptionColumn: 'descripcionnegocio',
        baserowFunctionColumn: 'funcionagente',
      },
      setConfig: () => {},
    });

    export const AppConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [config, setConfig] = useState<AppConfig>({
        registrationWebhook: 'https://n8n.prospectos.pro/webhook/844c226b-f793-4759-abfc-a83ac1f2a884',
        agentConfigWebhook: 'https://n8n.prospectos.pro/webhook/117383b5-998e-4fa3-a959-24e89dcb545b',
        openaiApiKey: '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',
        baserowApiUrl: 'https://api.baserow.io',
        baserowToken: 'f8Fons1isKInSy2hhtmIrVcJT0IuDX70',
        baserowTableId: '430560',
        baserowNameColumn: 'Nombre',
        baserowEmailColumn: 'email',
        baserowWhatsappColumn: 'Whatsapp',
        baserowBusinessColumn: 'negocio',
        baserowDescriptionColumn: 'descripcionnegocio',
        baserowFunctionColumn: 'funcionagente',
      });

      return (
        <AppConfigContext.Provider value={{ config, setConfig }}>
          {children}
        </AppConfigContext.Provider>
      );
    };

    export const useAppConfig = () => useContext(AppConfigContext);
