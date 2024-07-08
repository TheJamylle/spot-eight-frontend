import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

const ExamplePage = lazy(() => import('pages/ExamplePage/ExamplePage'));
const ExampleApiPage = lazy(() => import('pages/ExampleApiPage/ExampleApiPage'));

export function Routes(): JSX.Element {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Switch>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/api" element={<ExampleApiPage />} />
      </Switch>
    </Suspense>
  );
}
