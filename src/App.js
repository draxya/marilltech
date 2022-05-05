import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Hakkimizda from './views/Hakkimizda';
import Iletisim from './views/Iletisim';
import Blog from './views/Blog';

function App() {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    // const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/hakkimizda" component={Hakkimizda} layout={LayoutDefault} />
          <AppRoute exact path="/iletisim" component={Iletisim} layout={LayoutDefault} />
          <AppRoute exact path="/blog" component={Blog} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;