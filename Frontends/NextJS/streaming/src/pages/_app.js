import { Provider } from 'react-redux';
import store from '../store/store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setPrevRoute } from '../store/routeSlice';

const TrackPreviousRoute = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteChange = (url) => {
      dispatch(setPrevRoute(router.asPath));
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, dispatch]);

  return null;
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TrackPreviousRoute />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
