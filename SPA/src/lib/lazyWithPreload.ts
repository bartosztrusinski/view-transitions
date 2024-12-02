import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

type LoadFn = () => Promise<{ default: ComponentType<any> }>;
type ComponentWithPreload = LazyExoticComponent<ComponentType<any>> & {
  /** Preload component programmatically */
  preload: LoadFn;
};

export const lazyWithPreload = (loadFn: LoadFn): ComponentWithPreload => {
  const ComponentWithPreload = lazy(loadFn) as ComponentWithPreload;
  ComponentWithPreload.preload = loadFn;
  return ComponentWithPreload;
};
