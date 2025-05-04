import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './App.store';
import { AppBg } from './App.style';
import { AppView } from './App.view';
import { ErrorBoundary } from './App.components/ErrorBoundary/ErrorBoundary';

// Лениво загружаемые компоненты
const ChapterDrawer = React.lazy(() => import('./App.components/Drawer/Drawer.controller'));
const ProgressBar = React.lazy(() => import('./App.components/ProgressBar/ProgressBar.controller'));
const Toaster = React.lazy(() => import('./App.components/Toaster/Toaster.controller'));

export const App = () => {
  return (
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AppBg>
            <ChapterDrawer />
            <AppView />
            <Toaster />
            <ProgressBar />
          </AppBg>
        </React.Suspense>
      </ErrorBoundary>
    </ConnectedRouter>
  );
};