import { MobileView } from 'react-device-detect';
import { useQuery } from 'react-query';
import { Text, useEffect } from 'react';

const Home = () => {
  const fetchMovies = async () => {
    const response = await fetch(
      'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json' +
        '?key=' +
        process.env.REACT_APP_API_KEY
    );
    const data = await response.json();

    return data;
  };
  const { data, isLoading, error } = useQuery('movies', fetchMovies);

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <MobileView>
      <div className="home">
        <h3>this is mobile</h3>
      </div>
    </MobileView>
  );
};
export default Home;
